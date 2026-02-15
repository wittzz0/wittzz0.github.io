import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { linksData } from '../src/data/links'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDir, '..')
const outputPath = resolve(projectRoot, 'public/links.json')

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, `${JSON.stringify(linksData, null, 2)}\n`, 'utf8')

console.log(`Synced ${outputPath}`)
