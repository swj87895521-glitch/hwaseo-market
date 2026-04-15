'use client';

import { useMemo, useState } from 'react';
import { CouponCard } from '@/components/coupon/CouponCard';
import type { Coupon } from '@/mocks/coupon';

export function CouponWallet({ coupons }: { coupons: Coupon[] }) {
  const [activeTab, setActiveTab] = useState<'online' | 'offline'>('online');
  const filteredCoupons = useMemo(() => coupons.filter((coupon) => coupon.type === activeTab), [activeTab, coupons]);

  return (
    <div className="coupon-wallet">
      <div className="wallet-tabs" role="tablist" aria-label="쿠폰 구분">
        <button type="button" className={activeTab === 'online' ? 'is-active' : ''} onClick={() => setActiveTab('online')}>온라인</button>
        <button type="button" className={activeTab === 'offline' ? 'is-active' : ''} onClick={() => setActiveTab('offline')}>오프라인</button>
      </div>
      {filteredCoupons.length ? <div className="coupon-wallet__grid">{filteredCoupons.map((coupon) => <CouponCard key={coupon.id} coupon={coupon} />)}</div> : <div className="wallet-empty"><h3>아직 쿠폰이 없어요</h3><p>오프라인 영수증 코드를 등록하거나 이벤트 참여 후 다시 확인해보세요.</p></div>}
    </div>
  );
}