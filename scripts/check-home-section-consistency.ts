import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { validateHomeSectionConsistency } from '../src/lib/validation/homeSectionConsistency';

const root = process.cwd();
const informationArchitecturePath = join(
  root,
  'docs',
  '01_INFORMATION_ARCHITECTURE.md',
);
const homePagePath = join(root, 'src', 'app', '(public)', 'page.tsx');

const informationArchitecture = readFileSync(informationArchitecturePath, 'utf8');
const homePage = readFileSync(homePagePath, 'utf8');
const errors = validateHomeSectionConsistency(informationArchitecture, homePage);

if (errors.length) {
  console.error('Home section consistency check failed.');
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Home section consistency passed.');
