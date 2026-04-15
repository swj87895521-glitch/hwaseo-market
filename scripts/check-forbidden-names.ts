import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { isForbiddenFileName } from '../src/lib/validation/forbiddenNames';

const ignoredDirectories = new Set(['.git', '.next', 'archive', 'node_modules']);
const root = process.cwd();
const hits: string[] = [];

function walk(dir: string) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const stat = statSync(full);

    if (isForbiddenFileName(name)) {
      hits.push(relative(root, full).replace(/\\/g, '/'));
    }

    if (stat.isDirectory() && !ignoredDirectories.has(name)) {
      walk(full);
    }
  }
}

walk(root);

if (hits.length) {
  console.error(`Forbidden file names found:\n${hits.join('\n')}`);
  process.exit(1);
}

console.log('No forbidden names found.');
