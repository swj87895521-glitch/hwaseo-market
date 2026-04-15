import { describe, expect, it } from 'vitest';

import {
  normalizeCouponCode,
  validateCouponRegistration,
} from './coupon';

describe('coupon registration helpers', () => {
  it('normalizes user input before validation', () => {
    expect(normalizeCouponCode('  market-2026-04  ')).toBe('MARKET-2026-04');
  });

  it('accepts known success codes', () => {
    expect(validateCouponRegistration('market-2026-04')).toEqual({
      ok: true,
      normalizedCode: 'MARKET-2026-04',
      error: '',
    });
  });

  it('returns the documented duplicate and fallback errors', () => {
    expect(validateCouponRegistration('duplicated-april')).toEqual({
      ok: false,
      normalizedCode: 'DUPLICATED-APRIL',
      error: '이미 등록한 쿠폰입니다.',
    });

    expect(validateCouponRegistration('not-a-real-code')).toEqual({
      ok: false,
      normalizedCode: 'NOT-A-REAL-CODE',
      error: '존재하지 않는 쿠폰 코드입니다.',
    });
  });
});