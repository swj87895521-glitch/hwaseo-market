import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, posix, relative } from 'node:path';
import {
  parseBulletList,
  validateDocumentedRoutes,
  validateDocsTopology,
} from '../src/lib/validation/docSync';

const root = process.cwd();
const docsDir = join(root, 'docs');
const publicAppDir = join(root, 'src', 'app', '(public)');
const errors: string[] = [];

function readUtf8(filePath: string) {
  return readFileSync(filePath, 'utf8');
}

function collectRoutes(dir: string): string[] {
  const routes: string[] = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      routes.push(...collectRoutes(fullPath));
      continue;
    }

    if (entry !== 'page.tsx') {
      continue;
    }

    const relativeDir = relative(publicAppDir, dir).replace(/\\/g, '/');
    const route = relativeDir === '' ? '/' : `/${relativeDir}`;
    routes.push(route);
  }

  return routes.sort((left, right) => left.localeCompare(right));
}

function pushErrors(nextErrors: string[]) {
  for (const error of nextErrors) {
    errors.push(error);
  }
}

function auditDocsTopology() {
  const markdownFiles = readdirSync(docsDir)
    .filter((name) => name.endsWith('.md'))
    .sort((left, right) => left.localeCompare(right));
  const docsIndex = readUtf8(join(docsDir, 'index.md'));

  pushErrors(validateDocsTopology(markdownFiles, docsIndex));
}

function auditPublicRoutes() {
  const informationArchitecture = readUtf8(
    join(docsDir, '01_INFORMATION_ARCHITECTURE.md'),
  );
  const documentedRoutes = parseBulletList(
    informationArchitecture,
    'Public Routes',
  );
  const actualRoutes = collectRoutes(publicAppDir);

  pushErrors(validateDocumentedRoutes(documentedRoutes, actualRoutes));
}

auditDocsTopology();
auditPublicRoutes();

if (errors.length) {
  console.error('Documentation audit failed.');
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(
  `Documentation audit passed for ${posix.join('docs', 'index.md')} and src/app/(public).`,
);
