export const expectedDocs = [
  '00_PROJECT_RULES.md',
  '01_INFORMATION_ARCHITECTURE.md',
  '02_HOME_SECTION_SPEC.md',
  '03_CONTENT_MODEL.md',
  '04_ENGINEERING_RULES.md',
  '05_AGENT_HANDOFF.md',
  '06_UI_TOKENS.md',
  '07_API_TYPES.md',
  '08_DESIGN_RULES.md',
  '99_GARBAGE_POLICY.md',
  'index.md',
];

function pushError(errors: string[], message: string) {
  errors.push(`- ${message}`);
}

export function parseBulletList(content: string, heading: string) {
  const sectionMatch = content.match(
    new RegExp(`## ${heading}\\r?\\n([\\s\\S]*?)(?:\\r?\\n## |$)`),
  );

  if (!sectionMatch) {
    return null;
  }

  return sectionMatch[1]
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line) => line.slice(2).trim());
}

export function validateDocsTopology(markdownFiles: string[], docsIndex: string) {
  const errors: string[] = [];
  const sortedMarkdownFiles = [...markdownFiles].sort((left, right) =>
    left.localeCompare(right),
  );
  const missing = expectedDocs.filter(
    (name) => !sortedMarkdownFiles.includes(name),
  );
  const extra = sortedMarkdownFiles.filter(
    (name) => !expectedDocs.includes(name),
  );

  if (missing.length) {
    pushError(errors, `missing required docs files: ${missing.join(', ')}`);
  }

  if (extra.length) {
    pushError(
      errors,
      `unexpected top-level docs files found: ${extra.join(', ')}. Update an existing doc before adding new top-level docs.`,
    );
  }

  for (const docName of expectedDocs.filter((name) => name !== 'index.md')) {
    const basename = docName.replace('.md', '');

    if (!docsIndex.includes(basename)) {
      pushError(errors, `docs/index.md does not reference ${basename}`);
    }
  }

  return errors;
}

export function validateDocumentedRoutes(
  documentedRoutes: string[] | null,
  actualRoutes: string[],
) {
  const errors: string[] = [];

  if (!documentedRoutes) {
    pushError(
      errors,
      'docs/01_INFORMATION_ARCHITECTURE.md missing section: Public Routes',
    );
    return errors;
  }

  const sortedDocumentedRoutes = [...documentedRoutes].sort((left, right) =>
    left.localeCompare(right),
  );
  const sortedActualRoutes = [...actualRoutes].sort((left, right) =>
    left.localeCompare(right),
  );
  const missingFromDocs = sortedActualRoutes.filter(
    (route) => !sortedDocumentedRoutes.includes(route),
  );
  const missingFromCode = sortedDocumentedRoutes.filter(
    (route) => !sortedActualRoutes.includes(route),
  );

  if (missingFromDocs.length) {
    pushError(
      errors,
      `public routes missing from docs/01_INFORMATION_ARCHITECTURE.md: ${missingFromDocs.join(', ')}`,
    );
  }

  if (missingFromCode.length) {
    pushError(
      errors,
      `documented public routes missing in src/app/(public): ${missingFromCode.join(', ')}`,
    );
  }

  return errors;
}
