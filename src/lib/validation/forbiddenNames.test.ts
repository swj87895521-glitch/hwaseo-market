import { describe, expect, it } from 'vitest';

import { isForbiddenFileName } from './forbiddenNames';

describe('isForbiddenFileName', () => {
  it('matches forbidden naming variants', () => {
    expect(isForbiddenFileName('page.final.tsx')).toBe(true);
    expect(isForbiddenFileName('backup-file.ts')).toBe(true);
    expect(isForbiddenFileName('new_component.ts')).toBe(true);
  });

  it('allows normal file names', () => {
    expect(isForbiddenFileName('MarketMapSection.tsx')).toBe(false);
    expect(isForbiddenFileName('storeProductGroups.ts')).toBe(false);
  });
});
