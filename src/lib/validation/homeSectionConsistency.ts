const aliasMap: Record<string, string> = {
  HeaderMain: 'Header',
  CategoryNav: 'NavBar',
};

function pushError(errors: string[], message: string) {
  errors.push(`- ${message}`);
}

export function parseNumberedList(content: string, heading: string) {
  const sectionMatch = content.match(
    new RegExp(`## ${heading}\\r?\\n([\\s\\S]*?)(?:\\r?\\n## |$)`),
  );

  if (!sectionMatch) {
    return null;
  }

  return sectionMatch[1]
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^\d+\.\s+/.test(line))
    .map((line) => line.replace(/^\d+\.\s+/, ''));
}

function normalizeSectionName(name: string) {
  return aliasMap[name] ?? name;
}

export function validateHomeSectionConsistency(
  informationArchitecture: string,
  homePage: string,
) {
  const errors: string[] = [];
  const documentedSections = parseNumberedList(
    informationArchitecture,
    'Home Sections',
  );

  if (!documentedSections) {
    pushError(
      errors,
      'missing section in docs/01_INFORMATION_ARCHITECTURE.md: Home Sections',
    );
    return errors;
  }

  const expectedPositions = documentedSections.map(normalizeSectionName).map(
    (sectionName) => ({
      sectionName,
      index: homePage.indexOf(`<${sectionName}`),
    }),
  );

  for (const entry of expectedPositions) {
    if (entry.index === -1) {
      pushError(errors, `Home page is missing section/component: ${entry.sectionName}`);
    }
  }

  for (let index = 1; index < expectedPositions.length; index += 1) {
    const previous = expectedPositions[index - 1];
    const current = expectedPositions[index];

    if (previous.index === -1 || current.index === -1) {
      continue;
    }

    if (previous.index > current.index) {
      pushError(
        errors,
        `Home section order mismatch: ${previous.sectionName} should appear before ${current.sectionName}`,
      );
    }
  }

  return errors;
}
