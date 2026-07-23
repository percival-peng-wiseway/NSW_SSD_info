import { execFileSync } from 'node:child_process'
import { closeSync, existsSync, openSync, readSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT_URL = new URL('../', import.meta.url)
const ROOT = fileURLToPath(ROOT_URL)
const SNAPSHOT_FILE = new URL('all_assessments_scraped.json', ROOT_URL)
const PROCESSED_FILE = new URL('processed_all_map.json', ROOT_URL)
const SOURCE_FILE = new URL('src/data/majorProjectsData.ts', ROOT_URL)

const explicitIssuerRules = [
  [/\b(TfNSW|Transport for NSW|Transport NSW)\b/i, 'Transport for NSW'],
  [/\b(NSW EPA|EPA response|EPA advice|EPA comment|Environment Protection Authority)\b/i, 'NSW EPA'],
  [/\b(FRNSW|Fire\s*(?:&|and)\s*Rescue NSW)\b/i, 'Fire and Rescue NSW'],
  [/\b(NSW RFS|RFS advice|Rural Fire Service)\b/i, 'NSW Rural Fire Service'],
  [/\b(Heritage NSW|HNSW[_ ]?ACH|HNSW[_ ]?EH)\b/i, 'Heritage NSW'],
  [/\b(Sydney Water|SWC[_ -]|SW_DA_)\b/i, 'Sydney Water'],
  [/\b(DCCEEW[_ ]?Water|Water Group)\b/i, 'NSW Water (DCCEEW)'],
  [/\b(DCCEEW[_ ]?Energy|DCCEEW Energy)\b/i, 'DCCEEW Energy'],
  [/\b(Ausgrid)\b/i, 'Ausgrid'],
  [/\b(Transgrid)\b/i, 'Transgrid'],
  [/\b(Jemena)\b/i, 'Jemena'],
  [/\b(NPWS|National Parks and Wildlife Service)\b/i, 'NSW National Parks and Wildlife Service'],
  [/\b(BCS advice|Biodiversity,? Conservation and Science)\b/i, 'NSW Biodiversity, Conservation and Science'],
  [/\b(CPHR)\b/i, 'NSW Conservation Programs, Heritage and Regulation'],
  [/\b(CASA|Civil Aviation Safety Authority)\b/i, 'Civil Aviation Safety Authority'],
  [/\b(Western Sydney International Airport)\b/i, 'Western Sydney International Airport'],
  [/\b(Blacktown(?: City)? Council)\b/i, 'Blacktown City Council'],
  [/\b(City of Ryde|Ryde Council|CoR[_ -])\b/i, 'City of Ryde Council'],
  [/\b(Willoughby(?: City)? Council)\b/i, 'Willoughby City Council'],
  [/\b(Lane Cove Council|LC Council)\b/i, 'Lane Cove Council'],
  [/\b(Cumberland Council)\b/i, 'Cumberland Council'],
  [/\b(Fairfield(?: City)? Council)\b/i, 'Fairfield City Council'],
  [/\b(Penrith(?: City)? Council|PCC Response)\b/i, 'Penrith City Council'],
  [/\b(Camden Council)\b/i, 'Camden Council'],
  [/\b(City of Parramatta|Parramatta Council)\b/i, 'City of Parramatta Council'],
  [/\b(Bayside Council)\b/i, 'Bayside Council'],
  [/\b(City of Sydney Council)\b/i, 'City of Sydney Council'],
  [/\b(Independent Planning Commission|IPC[_ -])\b/i, 'Independent Planning Commission NSW'],
]

const exactIssuerByUrl = new Map([
  ['https://majorprojects.planningportal.nsw.gov.au/prweb/PRRestService/mp/01/getContent?AttachRef=PDA-23007319%2120210715T085345.109+GMT', 'Willowtree Planning'],
  ['https://majorprojects.planningportal.nsw.gov.au/prweb/PRRestService/mp/01/getContent?AttachRef=SSD-24299707%2120210715T232035.746+GMT', 'HDR'],
  ['https://majorprojects.planningportal.nsw.gov.au/prweb/PRRestService/mp/01/getContent?AttachRef=SSD-24299707%2120210715T232035.515+GMT', 'Linesight'],
])

const exactIssuerByLocalPath = new Map([
  ['/documents/SSD-108864209/Appendix_D_-_Recycled_Water_Memo.pdf', 'NEXTDC'],
])

function entryKey(entry) {
  return `${entry.category}\u0000${entry.title}`
}

function isPdfFile(filePath) {
  if (!filePath || !existsSync(filePath)) return false
  let descriptor
  try {
    descriptor = openSync(filePath, 'r')
    const header = Buffer.alloc(5)
    const bytesRead = readSync(descriptor, header, 0, header.length, 0)
    return bytesRead === header.length && header.toString('ascii') === '%PDF-'
  } catch {
    return false
  } finally {
    if (descriptor !== undefined) closeSync(descriptor)
  }
}

function inferCode(title, index) {
  const appendix = title.match(/^(Appendix\s+[A-Z0-9]+(?:[._ -][A-Z0-9]+)?)/i)
  if (appendix) return appendix[1].replace(/[_-]+$/g, '').trim()
  const attachment = title.match(/^(Attachment\s+[A-Z0-9]+)/i)
  if (attachment) return attachment[1]
  return `Doc ${String(index + 1).padStart(2, '0')}`
}

function inferIssuer(entry, historicalIssuer, downloadUrl) {
  const exact = exactIssuerByUrl.get(entry.url)
  if (exact) return exact
  const localExact = exactIssuerByLocalPath.get(downloadUrl)
  if (localExact) return localExact
  for (const [pattern, issuer] of explicitIssuerRules) {
    if (pattern.test(entry.title)) return issuer
  }
  if (/^(Notice of Exhibition|SEARs|Assessment|Recommendation|Determination|Consolidated Consent)$/i.test(entry.category)) {
    return 'NSW Department of Planning, Housing and Infrastructure'
  }
  if (/\b(issued SEARs|SEARs cover letter|assessment report|development consent|instrument of consent|notice of decision|request (?:for )?RTS|request for submissions report|amendment acceptance letter)\b/i.test(entry.title)) {
    return 'NSW Department of Planning, Housing and Infrastructure'
  }
  return historicalIssuer && historicalIssuer !== 'NSW Gov'
    ? historicalIssuer
    : 'Applicant project team'
}

function getGitJson(reference, file) {
  try {
    const content = execFileSync('git', ['show', `${reference}:${file}`], {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024,
    })
    return JSON.parse(content)
  } catch {
    return {}
  }
}

function mapProcessedEntriesByOfficialUrl(snapshot, processed) {
  const result = new Map()
  for (const [applicationNo, officialEntries] of Object.entries(snapshot)) {
    const processedEntries = processed[applicationNo] ?? []
    for (const [index, officialEntry] of officialEntries.entries()) {
      if (processedEntries[index]) result.set(officialEntry.url, processedEntries[index])
    }
  }
  return result
}

function buildQueues(entries) {
  const queues = new Map()
  for (const entry of entries ?? []) {
    const key = entryKey(entry)
    if (!queues.has(key)) queues.set(key, [])
    queues.get(key).push(entry)
  }
  return queues
}

function take(queueMap, entry) {
  return queueMap.get(entryKey(entry))?.shift()
}

function findClosingBracket(source, openingIndex) {
  let depth = 0
  let quote = null
  let escaped = false
  for (let index = openingIndex; index < source.length; index += 1) {
    const char = source[index]
    if (quote) {
      if (escaped) escaped = false
      else if (char === '\\') escaped = true
      else if (char === quote) quote = null
      continue
    }
    if (char === '"' || char === "'" || char === '`') {
      quote = char
    } else if (char === '[') {
      depth += 1
    } else if (char === ']') {
      depth -= 1
      if (depth === 0) return index
    }
  }
  throw new Error(`Unclosed array at character ${openingIndex}`)
}

function indentJson(value, spaces) {
  const indentation = ' '.repeat(spaces)
  return JSON.stringify(value, null, 2).split('\n').map((line, index) => (
    index === 0 ? line : `${indentation}${line}`
  )).join('\n')
}

function replaceProjectAttachments(source, processed) {
  const replacements = []
  const projectPattern = /applicationNo:\s*'([^']+)'/g
  const matches = [...source.matchAll(projectPattern)]
  for (const [projectIndex, match] of matches.entries()) {
    const applicationNo = match[1]
    const attachments = processed[applicationNo]
    if (!attachments) continue
    const nextProjectIndex = matches[projectIndex + 1]?.index ?? source.length
    const propertyIndex = source.indexOf('appendices:', match.index)
    if (propertyIndex === -1 || propertyIndex > nextProjectIndex) continue
    const openingIndex = source.indexOf('[', propertyIndex)
    const closingIndex = findClosingBracket(source, openingIndex)
    replacements.push({
      start: openingIndex,
      end: closingIndex + 1,
      value: indentJson(attachments, 4),
    })
  }
  for (const replacement of replacements.reverse()) {
    source = source.slice(0, replacement.start) + replacement.value + source.slice(replacement.end)
  }
  return source
}

async function main() {
  const [snapshotText, currentText, source] = await Promise.all([
    readFile(SNAPSHOT_FILE, 'utf8'),
    readFile(PROCESSED_FILE, 'utf8'),
    readFile(SOURCE_FILE, 'utf8'),
  ])
  const snapshot = JSON.parse(snapshotText)
  const current = JSON.parse(currentText)
  const baselineSnapshot = getGitJson('HEAD', 'all_assessments_scraped.json')
  const baselineProcessed = getGitJson('HEAD', 'processed_all_map.json')
  const historicalSnapshot = getGitJson('b0bfafb', 'all_assessments_scraped.json')
  const historical = getGitJson('b0bfafb', 'processed_all_map.json')
  const baselineByUrl = mapProcessedEntriesByOfficialUrl(baselineSnapshot, baselineProcessed)
  const historicalByUrl = mapProcessedEntriesByOfficialUrl(historicalSnapshot, historical)
  const processed = {}

  for (const [applicationNo, officialEntries] of Object.entries(snapshot)) {
    const currentQueues = buildQueues(current[applicationNo])
    const historicalQueues = buildQueues(historical[applicationNo])
    processed[applicationNo] = officialEntries.map((entry, index) => {
      const existing = baselineByUrl.get(entry.url) ?? take(currentQueues, entry)
      const historicalEntry = historicalByUrl.get(entry.url) ?? take(historicalQueues, entry)
      const localPath = existing?.downloadUrl?.startsWith('/')
        ? path.join(ROOT, 'public', existing.downloadUrl)
        : null
      return {
        code: existing?.code ?? historicalEntry?.code ?? inferCode(entry.title, index),
        category: entry.category,
        title: entry.title,
        author: inferIssuer(entry, historicalEntry?.author ?? existing?.author, localPath ? existing.downloadUrl : undefined),
        summary: `Official ${entry.category} assessment document for ${applicationNo}.`,
        downloadUrl: localPath && isPdfFile(localPath) ? existing.downloadUrl : entry.url,
      }
    })
  }

  await writeFile(PROCESSED_FILE, `${JSON.stringify(processed, null, 2)}\n`)
  await writeFile(SOURCE_FILE, replaceProjectAttachments(source, processed))
  const issuerCounts = Object.values(processed).flat().reduce((counts, entry) => {
    counts[entry.author] = (counts[entry.author] ?? 0) + 1
    return counts
  }, {})
  console.log(JSON.stringify({
    projects: Object.keys(processed).length,
    attachments: Object.values(processed).flat().length,
    issuers: Object.keys(issuerCounts).length,
    genericApplicantTeam: issuerCounts['Applicant project team'] ?? 0,
  }, null, 2))
}

await main()
