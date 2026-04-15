import { Card } from '@/components/ui/Card';
import type { Coupon } from '@/mocks/coupon';

export function CouponCard({ coupon }: { coupon: Coupon }) {
  const isInactive = coupon.status !== 'available';

  return (
    <Card className={`coupon-card${isInactive ? ' is-inactive' : ''}`}>
      <div className="coupon-card__top">
        <span className={`coupon-card__type coupon-card__type--${coupon.type}`}>{coupon.type === 'online' ? '온라인' : '오프라인'}</span>
        <span className={`coupon-card__status coupon-card__status--${coupon.status}`}>{coupon.status === 'available' ? '사용 가능' : coupon.status === 'used' ? '사용 완료' : '만료됨'}</span>
      </div>
      <h3 className="coupon-card__title">{coupon.title}</h3>
      <p className="coupon-card__description">{coupon.description}</p>
      <div className="coupon-card__meta-list">
        {coupon.discountLabel ? <span>{coupon.discountLabel}</span> : null}
        {coupon.minOrderLabel ? <span>{coupon.minOrderLabel}</span> : null}
        <span>만료일 {coupon.expiresAt}</span>
      </div>
      <div className="coupon-card__code-box">
        <span className="coupon-card__code-label">쿠폰 코드</span>
        <strong className="coupon-card__code">{coupon.code}</strong>
      </div>
      <p className="coupon-card__source">발급 경로: {coupon.sourceLabel}</p>
    </Card>
  );
}