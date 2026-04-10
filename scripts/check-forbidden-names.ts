import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const forbidden = ['final', 'copy', 'temp', 'backup', 'new'];
const root = process.cwd();
const hits: string[] = [];

function walk(dir: string) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const stat = statSync(full);
    if (forbidden.some((word) => name.toLowerCase().includes(word))) hits.push(full.replace(root + '/', ''));
    if (stat.isDirectory() && !full.includes('node_modules') && !full.includes('.git')) walk(full);
  }
}
walk(root);
if (hits.length) {
  console.error('Forbidden file names found:
' + hits.join('
'));
  process.exit(1);
}
console.log('No forbidden names found.');
