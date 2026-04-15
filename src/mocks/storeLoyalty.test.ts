import { describe, expect, it } from 'vitest';

import {
  getBadgeStates,
  getCurrentTone,
  getMaxLoyaltyThreshold,
  getStoreLoyaltyBySlug,
} from './storeLoyalty';

describe('store loyalty helpers', () => {
  it('finds store loyalty by slug', () => {
    expect(getStoreLoyaltyBySlug('hwaseo-meat')?.purchaseCount).toBe(11);
    expect(getStoreLoyaltyBySlug('missing-store')).toBeNull();
  });

  it('builds unlocked badge states from purchase count', () => {
    const badges = getBadgeStates(5);

    expect(badges.filter((badge) => badge.unlocked)).toHaveLength(3);
    expect(badges[2]).toMatchObject({
      badge: '단골손님',
      unlocked: true,
    });
    expect(badges[3]).toMatchObject({
      badge: '진짜 단골',
      unlocked: false,
    });
  });

  it('returns the current tier tone and max threshold', () => {
    expect(getCurrentTone(0)).toBe('muted');
    expect(getCurrentTone(11)).toBe('gold');
    expect(getMaxLoyaltyThreshold()).toBe(20);
  });
});