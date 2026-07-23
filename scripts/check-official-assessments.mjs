import { readFile, writeFile } from 'node:fs/promises'

const ROOT = new URL('../', import.meta.url)
const SOURCE_FILE = new URL('src/data/majorProjectsData.ts', ROOT)
const SNAPSHOT_FILE = new URL('all_assessments_scraped.json', ROOT)
const PORTAL_ORIGIN = 'https://www.planningportal.nsw.gov.au'

const decodeHtml = (value) => value
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#039;|&#39;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ')
  .trim()

const normalizeUrl = (value) => new URL(value, PORTAL_ORIGIN).href

function getProjects(source) {
  const projects = []
  const pattern = /applicationNo:\s*'([^']+)'[\s\S]*?officialUrl:\s*'([^']+)'/g
  for (const match of source.matchAll(pattern)) {
    projects.push({ applicationNo: match[1], officialUrl: match[2] })
  }
  return projects
}

function getAssessmentGroups(html) {
  const start = html.indexOf('field-major-project-attachments')
  const end = html.indexOf('field-major-projects-post-approval-attachments', start)
  const section = html.slice(start, end === -1 ? undefined : end)
  const pattern = /<summary[^>]*id="accordion-single-(\d+)"[^>]*data-nid="(\d+)"[^>]*>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g
  const groups = []

  for (const match of section.matchAll(pattern)) {
    const label = decodeHtml(match[3].replace(/<[^>]+>/g, ''))
    const category = label.replace(/\s*\(\d+\)\s*$/, '')
    groups.push({ category, folder: `folder_${match[1]}`, nid: match[2] })
  }
  return groups
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { accept: 'application/json' } })
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`)
  return response.json()
}

async function scrapeProject(project) {
  const pageResponse = await fetch(project.officialUrl)
  if (!pageResponse.ok) {
    throw new Error(`${pageResponse.status} ${pageResponse.statusText}: ${project.officialUrl}`)
  }
  const groups = getAssessmentGroups(await pageResponse.text())
  const results = []

  for (const group of groups) {
    const endpoint = `${PORTAL_ORIGIN}/major-projects-attachments-data/${group.nid}/${group.folder}/attachment`
    const payload = await fetchJson(endpoint)
    for (const attachment of payload.attachments ?? []) {
      results.push({
        category: group.category,
        title: decodeHtml(attachment.title),
        url: normalizeUrl(attachment.url),
        folder: group.folder,
      })
    }
  }
  return results
}

function signature(attachments) {
  return attachments.map(({ category, title, url }) => `${category}\u0000${title}\u0000${url}`)
}

async function main() {
  const [source, snapshotText] = await Promise.all([
    readFile(SOURCE_FILE, 'utf8'),
    readFile(SNAPSHOT_FILE, 'utf8'),
  ])
  const projects = getProjects(source)
  const snapshot = JSON.parse(snapshotText)
  const officialData = {}
  const differences = []
  let attachmentCount = 0

  for (const [index, project] of projects.entries()) {
    const current = await scrapeProject(project)
    officialData[project.applicationNo] = current
    const expected = snapshot[project.applicationNo] ?? []
    attachmentCount += current.length
    if (JSON.stringify(signature(current)) !== JSON.stringify(signature(expected))) {
      differences.push({
        applicationNo: project.applicationNo,
        snapshot: expected.length,
        official: current.length,
      })
    }
    process.stdout.write(`\rChecked ${index + 1}/${projects.length}: ${project.applicationNo} (${current.length})`)
  }

  process.stdout.write('\n')
  console.log(JSON.stringify({
    projects: projects.length,
    attachments: attachmentCount,
    differences,
  }, null, 2))
  const shouldWrite = process.argv.includes('--write')
  if (shouldWrite) {
    await writeFile(SNAPSHOT_FILE, `${JSON.stringify(officialData, null, 2)}\n`)
    console.log(`Updated ${SNAPSHOT_FILE.pathname}`)
  }
  if (differences.length && !shouldWrite) process.exitCode = 1
}

await main()
