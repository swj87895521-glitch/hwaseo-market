import { describe, expect, it } from 'vitest';

import {
  parseBulletList,
  validateDocumentedRoutes,
  validateDocsTopology,
} from './docSync';

describe('docSync validation', () => {
  it('accepts valid docs topology', () => {
    const errors = validateDocsTopology(
      [
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
      ],
      '00_PROJECT_RULES\n01_INFORMATION_ARCHITECTURE\n02_HOME_SECTION_SPEC\n03_CONTENT_MODEL\n04_ENGINEERING_RULES\n05_AGENT_HANDOFF\n06_UI_TOKENS\n07_API_TYPES\n08_DESIGN_RULES\n99_GARBAGE_POLICY',
    );

    expect(errors).toEqual([]);
  });

  it('reports missing public-route section', () => {
    const documentedRoutes = parseBulletList('# IA', 'Public Routes');
    const errors = validateDocumentedRoutes(documentedRoutes, ['/']);

    expect(errors).toContain(
      '- docs/01_INFORMATION_ARCHITECTURE.md missing section: Public Routes',
    );
  });
});
