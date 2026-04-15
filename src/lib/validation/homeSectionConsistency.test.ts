import { describe, expect, it } from 'vitest';

import { validateHomeSectionConsistency } from './homeSectionConsistency';

describe('validateHomeSectionConsistency', () => {
  it('accepts the documented section order', () => {
    const informationArchitecture = `## Home Sections
1. HeaderMain
2. CategoryNav
3. HeroEventBanner
4. MarketMapSection
`;
    const homePage = `
      <Header />
      <NavBar />
      <HeroEventBanner />
      <MarketMapSection />
    `;

    expect(
      validateHomeSectionConsistency(informationArchitecture, homePage),
    ).toEqual([]);
  });

  it('reports order mismatches', () => {
    const informationArchitecture = `## Home Sections
1. HeroEventBanner
2. MarketMapSection
`;
    const homePage = `
      <MarketMapSection />
      <HeroEventBanner />
    `;

    expect(
      validateHomeSectionConsistency(informationArchitecture, homePage),
    ).toContain(
      '- Home section order mismatch: HeroEventBanner should appear before MarketMapSection',
    );
  });
});
