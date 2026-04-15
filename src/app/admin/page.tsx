import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { loyaltyTiers, mockLoyalties } from '@/mocks/storeLoyalty';
import { mockCoupons } from '@/mocks/coupon';

export default function AdminPage() {
  const couponBatches = mockCoupons.filter((coupon) => coupon.type === 'online');
  const offlineCoupons = mockCoupons.filter((coupon) => coupon.type === 'offline');

  return (
    <main className="admin-page">
      <Container className="admin-page__container">
        <section className="admin-hero">
          <p className="admin-hero__eyebrow">Mock Admin Console</p>
          <h1 className="admin-hero__title">배지와 쿠폰 관리 섹션</h1>
          <p className="admin-hero__description">백엔드 연동 전 프론트 껍데기 기준으로 배지 기준, 쿠폰 배치, 오프라인 교환 검증 UI를 먼저 구성했습니다.</p>
        </section>

        <section className="admin-grid">
          <Card className="admin-card">
            <h2 className="admin-card__title">배지 기준 설정</h2>
            <div className="admin-list">{loyaltyTiers.map((tier) => <div key={tier.threshold} className="admin-list__row"><strong>{tier.badge}</strong><span>{tier.threshold}회 달성</span></div>)}</div>
          </Card>
          <Card className="admin-card">
            <h2 className="admin-card__title">점포별 단골 현황</h2>
            <div className="admin-list">{mockLoyalties.map((loyalty) => <div key={loyalty.storeSlug} className="admin-list__row"><strong>{loyalty.storeName}</strong><span>{loyalty.currentBadge ?? '배지 없음'} / 누적 {loyalty.purchaseCount}회</span></div>)}</div>
          </Card>
          <Card className="admin-card">
            <h2 className="admin-card__title">온라인 쿠폰 배치</h2>
            <div className="admin-list">{couponBatches.map((coupon) => <div key={coupon.id} className="admin-list__row"><strong>{coupon.code}</strong><span>{coupon.discountLabel ?? '온라인 혜택'} / {coupon.expiresAt}</span></div>)}</div>
          </Card>
          <Card className="admin-card">
            <h2 className="admin-card__title">오프라인 교환 검증</h2>
            <div className="admin-list">{offlineCoupons.map((coupon) => <div key={coupon.id} className="admin-list__row"><strong>{coupon.code}</strong><span>{coupon.status === 'available' ? '교환 가능' : coupon.status === 'used' ? '교환 완료' : '만료됨'}</span></div>)}</div>
          </Card>
        </section>
      </Container>
    </main>
  );
}