export type CouponType = 'online' | 'offline';
export type CouponStatus = 'available' | 'used' | 'expired';

export type Coupon = {
  id: string;
  code: string;
  title: string;
  type: CouponType;
  status: CouponStatus;
  discountLabel?: string;
  minOrderLabel?: string;
  issuedAt: string;
  expiresAt: string;
  description: string;
  sourceLabel: string;
};

export const mockCoupons: Coupon[] = [
  { id: 'coupon-online-1', code: 'MARKET-2026-04', title: '오프라인 영수증 등록 3천원 할인', type: 'online', status: 'available', discountLabel: '3,000원 할인', minOrderLabel: '3만원 이상 주문', issuedAt: '2026-04-15', expiresAt: '2026-04-30', description: '오프라인 구매 고객이 온라인 첫 주문에 바로 사용할 수 있는 쿠폰입니다.', sourceLabel: '영수증 등록' },
  { id: 'coupon-online-2', code: 'SPRING-READY-26', title: '봄 장보기 온라인 특가 쿠폰', type: 'online', status: 'used', discountLabel: '10% 할인', minOrderLabel: '2만원 이상 주문', issuedAt: '2026-04-01', expiresAt: '2026-04-20', description: '이벤트 배너를 통해 발급된 온라인 전용 할인 쿠폰입니다.', sourceLabel: '이벤트 참여' },
  { id: 'coupon-offline-1', code: 'OFFLINE-2026-APR-17', title: '상인회 사무실 교환용 상품권 쿠폰', type: 'offline', status: 'available', issuedAt: '2026-04-10', expiresAt: '2026-05-10', description: '온라인 구매 고객이 오프라인 방문 시 상품권으로 교환할 수 있는 쿠폰입니다.', sourceLabel: '온라인 구매 보상' },
  { id: 'coupon-offline-2', code: 'OFFLINE-2026-MAR-03', title: '지난달 오프라인 교환 쿠폰', type: 'offline', status: 'expired', issuedAt: '2026-03-01', expiresAt: '2026-03-31', description: '사용 기한이 지난 오프라인 교환 쿠폰 예시입니다.', sourceLabel: '온라인 구매 보상' }
];

export const mockCouponRegisterErrors: Record<string, string> = {
  'USED-COUPON': '이미 사용된 쿠폰 코드입니다.',
  'EXPIRED-2026': '만료된 쿠폰 코드입니다.',
  'UNKNOWN-CODE': '존재하지 않는 쿠폰 코드입니다.',
  'DUPLICATED-APRIL': '이미 등록한 쿠폰입니다.',
};

const successCodes = new Set(['MARKET-2026-04', 'OFFLINE-APRIL']);

export function normalizeCouponCode(code: string) {
  return code.trim().toUpperCase();
}

export function validateCouponRegistration(code: string) {
  const normalizedCode = normalizeCouponCode(code);

  if (!normalizedCode) {
    return {
      ok: false as const,
      normalizedCode,
      error: '쿠폰 코드를 먼저 입력해주세요.',
    };
  }

  if (successCodes.has(normalizedCode)) {
    return {
      ok: true as const,
      normalizedCode,
      error: '',
    };
  }

  return {
    ok: false as const,
    normalizedCode,
    error:
      mockCouponRegisterErrors[normalizedCode] ?? '존재하지 않는 쿠폰 코드입니다.',
  };
}