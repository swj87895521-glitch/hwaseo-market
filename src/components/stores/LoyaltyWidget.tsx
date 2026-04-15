import { BadgeProgressBar } from '@/components/loyalty/BadgeProgressBar';
import { Card } from '@/components/ui/Card';
import type { StoreLoyaltyStatus } from '@/mocks/storeLoyalty';

export function LoyaltyWidget({ loyalty }: { loyalty: StoreLoyaltyStatus | null }) {
  if (!loyalty) {
    return (
      <Card className="loyalty-widget loyalty-widget--guest">
        <p className="loyalty-widget__eyebrow">단골 배지</p>
        <h2 className="loyalty-widget__title">로그인 후 내 단골 현황을 확인해보세요</h2>
        <p className="loyalty-widget__desc">이 점포에서 몇 번 구매했는지, 다음 배지까지 얼마나 남았는지 마이페이지와 점포 상세에서 바로 볼 수 있습니다.</p>
      </Card>
    );
  }

  const remainingCount = loyalty.nextBadgeThreshold ? Math.max(loyalty.nextBadgeThreshold - loyalty.purchaseCount, 0) : 0;

  return (
    <Card className="loyalty-widget">
      <div className="loyalty-widget__header">
        <div>
          <p className="loyalty-widget__eyebrow">내 단골 현황</p>
          <h2 className="loyalty-widget__title">{loyalty.currentBadge ?? '아직 첫 구매 전이에요'}</h2>
        </div>
        <span className="loyalty-widget__count">누적 {loyalty.purchaseCount}회</span>
      </div>
      <p className="loyalty-widget__desc">{loyalty.nextBadge && loyalty.nextBadgeThreshold ? `${loyalty.nextBadge}까지 ${remainingCount}회 남았어요.` : '전설의 단골입니다. 이 점포의 최고 등급을 달성했어요.'}</p>
      {loyalty.nextBadge && loyalty.nextBadgeThreshold ? <BadgeProgressBar value={loyalty.purchaseCount} max={loyalty.nextBadgeThreshold} label={`다음 배지: ${loyalty.nextBadge}`} /> : <div className="loyalty-widget__legend">최고 등급 달성 완료</div>}
    </Card>
  );
}