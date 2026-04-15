import { Card } from '@/components/ui/Card';
import { getBadgeStates, getCurrentTone, type StoreLoyaltyStatus } from '@/mocks/storeLoyalty';

export function BadgeCard({ loyalty }: { loyalty: StoreLoyaltyStatus }) {
  const badgeStates = getBadgeStates(loyalty.purchaseCount);
  const tone = getCurrentTone(loyalty.purchaseCount);

  return (
    <Card className={`badge-card${loyalty.currentBadge ? '' : ' is-locked'}`}>
      <div className={`badge-card__symbol badge-card__symbol--${tone}`} aria-hidden="true">
        {loyalty.currentBadge ? '★' : '?'}
      </div>
      <div className="badge-card__content">
        <h3 className="badge-card__title">{loyalty.storeName}</h3>
        <p className="badge-card__badge-name">{loyalty.currentBadge ?? '아직 첫 방문 전'}</p>
        <div className="badge-card__chips">
          {badgeStates.map((badge) => (
            <span
              key={badge.badge}
              className={`badge-card__chip badge-card__chip--${badge.tone}${badge.unlocked ? '' : ' is-muted'}`}
            >
              {badge.badge}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}