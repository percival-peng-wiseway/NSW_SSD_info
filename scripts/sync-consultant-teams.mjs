import { execFileSync } from 'node:child_process'
import { readFile, writeFile } from 'node:fs/promises'

const sourceFile = 'src/data/majorProjectsData.ts'
const historicalRef = '575fcec:src/data/majorProjectsData.ts'

function findArrayEnd(source, openingIndex) {
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
    if (char === '"' || char === "'") quote = char
    else if (char === '[') depth += 1
    else if (char === ']' && --depth === 0) return index + 1
  }
  throw new Error(`Unclosed array at ${openingIndex}`)
}

function readConsultantArrays(source) {
  const result = new Map()
  const projects = [...source.matchAll(/applicationNo:\s*'([^']+)'/g)]
  for (const [projectIndex, project] of projects.entries()) {
    const applicationNo = project[1]
    const projectEnd = projects[projectIndex + 1]?.index ?? source.length
    const consultantsIndex = source.indexOf('consultants:', project.index)
    if (consultantsIndex === -1 || consultantsIndex > projectEnd) continue
    const openingIndex = source.indexOf('[', consultantsIndex)
    const closingIndex = findArrayEnd(source, openingIndex)
    result.set(applicationNo, {
      openingIndex,
      closingIndex,
      consultants: JSON.parse(source.slice(openingIndex, closingIndex)),
    })
  }
  return result
}

function splitCompanyNames(companyName) {
  return companyName.split(/\s+\/\s+/).map(name => name.trim()).filter(Boolean)
}

function normalizeTeam(applicationNo, historicalTeam, planningConsultant) {
  const team = []
  const add = (consultant) => {
    for (const companyName of splitCompanyNames(consultant.companyName)) {
      if (team.some(item => item.companyName === companyName && item.category === consultant.category)) continue
      team.push({ ...consultant, companyName })
    }
  }

  // The project-level planning consultant was separately cross-checked against
  // each project's assessment record; use it instead of the old shared value.
  const planner = historicalTeam.find(item => item.category === 'Planning')
  if (planner) {
    for (const companyName of splitCompanyNames(planningConsultant)) {
      add({ ...planner, companyName, description: `Project-specific planning and assessment lead for ${applicationNo}.` })
    }
  }
  for (const consultant of historicalTeam) {
    if (consultant === planner) continue
    add(consultant)
  }
  return team
}

async function main() {
  const currentSource = await readFile(sourceFile, 'utf8')
  const historicalSource = execFileSync('git', ['show', historicalRef], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 })
  const current = readConsultantArrays(currentSource)
  const historical = readConsultantArrays(historicalSource)
  const projectMatches = [...currentSource.matchAll(/applicationNo:\s*'([^']+)'/g)]
  const replacements = []

  for (const match of projectMatches) {
    const applicationNo = match[1]
    const currentProject = current.get(applicationNo)
    const historicalProject = historical.get(applicationNo)
    if (!currentProject || !historicalProject) continue
    const projectStart = match.index
    const planningMatch = currentSource.slice(projectStart, currentProject.openingIndex).match(/planningConsultant:\s*'([^']+)'/)
    const planningConsultant = planningMatch?.[1] ?? historicalProject.consultants[0]?.companyName ?? 'Not stated in official record'
    const normalizedTeam = normalizeTeam(applicationNo, historicalProject.consultants, planningConsultant)
    replacements.push({
      start: currentProject.openingIndex,
      end: currentProject.closingIndex,
      value: JSON.stringify(normalizedTeam, null, 2).split('\n').map((line, index) => index === 0 ? line : `    ${line}`).join('\n'),
    })
  }

  let output = currentSource
  for (const replacement of replacements.sort((a, b) => b.start - a.start)) {
    output = output.slice(0, replacement.start) + replacement.value + output.slice(replacement.end)
  }
  await writeFile(sourceFile, output)
  console.log(JSON.stringify({ projects: replacements.length, consultantEntries: [...readConsultantArrays(output).values()].reduce((total, item) => total + item.consultants.length, 0) }, null, 2))
}

await main()
