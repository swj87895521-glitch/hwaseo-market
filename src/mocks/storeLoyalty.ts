export type LoyaltyTierTone = 'starter' | 'regular' | 'silver' | 'gold' | 'legend' | 'muted';

export type LoyaltyTier = {
  threshold: number;
  badge: string;
  tone: LoyaltyTierTone;
};

export type StoreLoyaltyStatus = {
  storeSlug: string;
  storeName: string;
  purchaseCount: number;
  currentBadge: string | null;
  nextBadge: string | null;
  nextBadgeThreshold: number | null;
  achievedAt?: string;
  isUnlocked: boolean;
};

export type LoyaltyBadgeState = LoyaltyTier & {
  unlocked: boolean;
};

export const loyaltyTiers: LoyaltyTier[] = [
  { threshold: 1, badge: '첫 방문 손님', tone: 'starter' },
  { threshold: 3, badge: '단골 예비', tone: 'regular' },
  { threshold: 5, badge: '단골손님', tone: 'silver' },
  { threshold: 10, badge: '진짜 단골', tone: 'gold' },
  { threshold: 20, badge: '전설의 단골', tone: 'legend' },
];

export const mockLoyalties: StoreLoyaltyStatus[] = [
  { storeSlug: 'hwaseo-vegetable', storeName: '김씨네 반찬가게', purchaseCount: 5, currentBadge: '단골손님', nextBadge: '진짜 단골', nextBadgeThreshold: 10, achievedAt: '2026-04-02', isUnlocked: true },
  { storeSlug: 'hwaseo-fish', storeName: '박씨 과일가게', purchaseCount: 1, currentBadge: '첫 방문 손님', nextBadge: '단골 예비', nextBadgeThreshold: 3, achievedAt: '2026-03-28', isUnlocked: true },
  { storeSlug: 'hwaseo-oil', storeName: '이씨 수산물', purchaseCount: 0, currentBadge: null, nextBadge: '첫 방문 손님', nextBadgeThreshold: 1, isUnlocked: false },
  { storeSlug: 'hwaseo-meat', storeName: '최씨 정육점', purchaseCount: 11, currentBadge: '진짜 단골', nextBadge: '전설의 단골', nextBadgeThreshold: 20, achievedAt: '2026-04-09', isUnlocked: true },
  { storeSlug: 'hwaseo-shop', storeName: '정씨 생활가게', purchaseCount: 0, currentBadge: null, nextBadge: '첫 방문 손님', nextBadgeThreshold: 1, isUnlocked: false },
  { storeSlug: 'hwaseo-vegetable-1', storeName: '화서야채-1', purchaseCount: 20, currentBadge: '전설의 단골', nextBadge: null, nextBadgeThreshold: null, achievedAt: '2026-04-11', isUnlocked: true }
];

export function getStoreLoyaltyBySlug(slug: string) {
  return mockLoyalties.find((item) => item.storeSlug === slug) ?? null;
}

export function getBadgeStates(purchaseCount: number): LoyaltyBadgeState[] {
  return loyaltyTiers.map((tier) => ({
    ...tier,
    unlocked: purchaseCount >= tier.threshold,
  }));
}

export function getCurrentTone(purchaseCount: number): LoyaltyTierTone {
  const unlocked = loyaltyTiers.filter((tier) => purchaseCount >= tier.threshold);
  return unlocked.at(-1)?.tone ?? 'muted';
}

export function getMaxLoyaltyThreshold() {
  return loyaltyTiers[loyaltyTiers.length - 1]?.threshold ?? 0;
}