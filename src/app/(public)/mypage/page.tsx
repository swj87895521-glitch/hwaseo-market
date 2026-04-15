'use client';

import { useMemo, useState } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { NavBar } from '@/components/layout/NavBar';
import { TopBar } from '@/components/layout/TopBar';
import { CouponWallet } from '@/components/coupon/CouponWallet';
import { BadgeCard } from '@/components/loyalty/BadgeCard';
import { BadgeProgressBar } from '@/components/loyalty/BadgeProgressBar';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { mockCoupons } from '@/mocks/coupon';
import {
  getBadgeStates,
  getCurrentTone,
  getMaxLoyaltyThreshold,
  mockLoyalties,
} from '@/mocks/storeLoyalty';
import { mockViewer } from '@/mocks/viewer';

export default function MyPage() {
  const [activeTab, setActiveTab] = useState<'stores' | 'coupon'>('stores');
  const [storeMenu, setStoreMenu] = useState<'list' | 'cabinet'>('list');
  const [selectedStoreSlug, setSelectedStoreSlug] = useState(
    mockLoyalties[0]?.storeSlug ?? '',
  );

  const selectedLoyalty = useMemo(
    () =>
      mockLoyalties.find((loyalty) => loyalty.storeSlug === selectedStoreSlug) ??
      mockLoyalties[0],
    [selectedStoreSlug],
  );

  const badgeStates = selectedLoyalty
    ? getBadgeStates(selectedLoyalty.purchaseCount)
    : [];
  const remainingCount = selectedLoyalty?.nextBadgeThreshold
    ? Math.max(selectedLoyalty.nextBadgeThreshold - selectedLoyalty.purchaseCount, 0)
    : 0;
  const currentTone = selectedLoyalty
    ? getCurrentTone(selectedLoyalty.purchaseCount)
    : 'muted';
  const progressMax = selectedLoyalty?.nextBadgeThreshold ?? getMaxLoyaltyThreshold();

  return (
    <>
      <TopBar />
      <Header />
      <NavBar />
      <main className="mypage-page">
        <Container className="mypage-page__container">
          <section className="mypage-title-block">
            <h1 className="mypage-title-block__title">마이페이지</h1>
          </section>

          {mockViewer.isLoggedIn ? (
            <section className="mypage-shell">
              <div className="mypage-tabs" role="tablist" aria-label="마이페이지 탭">
                <button
                  type="button"
                  className={activeTab === 'stores' ? 'is-active' : ''}
                  onClick={() => setActiveTab('stores')}
                >
                  단골 가게
                </button>
                <button
                  type="button"
                  className={activeTab === 'coupon' ? 'is-active' : ''}
                  onClick={() => setActiveTab('coupon')}
                >
                  내 쿠폰
                </button>
              </div>

              {activeTab === 'stores' ? (
                <>
                  <div className="badge-subtabs" role="tablist" aria-label="단골 가게 메뉴">
                    <button
                      type="button"
                      className={storeMenu === 'list' ? 'is-active' : ''}
                      onClick={() => setStoreMenu('list')}
                    >
                      단골 가게 리스트
                    </button>
                    <button
                      type="button"
                      className={storeMenu === 'cabinet' ? 'is-active' : ''}
                      onClick={() => setStoreMenu('cabinet')}
                    >
                      단골 배지함
                    </button>
                  </div>

                  {storeMenu === 'list' && selectedLoyalty ? (
                    <div className="loyalty-workspace">
                      <div className="loyalty-store-list">
                        {mockLoyalties.map((loyalty) => {
                          const tone = getCurrentTone(loyalty.purchaseCount);
                          return (
                            <button
                              key={loyalty.storeSlug}
                              type="button"
                              className={`loyalty-store-list__item${selectedStoreSlug === loyalty.storeSlug ? ' is-active' : ''}${loyalty.currentBadge ? '' : ' is-dimmed'}`}
                              onClick={() => setSelectedStoreSlug(loyalty.storeSlug)}
                            >
                              <span className={`loyalty-store-list__icon loyalty-store-list__icon--${tone}`} aria-hidden="true">
                                {loyalty.currentBadge ? '★' : '?'}
                              </span>
                              <span className="loyalty-store-list__body">
                                <strong>{loyalty.storeName}</strong>
                                <span>{loyalty.currentBadge ?? '아직 첫 방문 전'}</span>
                              </span>
                              <span className="loyalty-store-list__score">{loyalty.purchaseCount}점</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="loyalty-store-detail card">
                        <div className="loyalty-store-detail__header">
                          <div className={`loyalty-store-detail__symbol loyalty-store-detail__symbol--${currentTone}`} aria-hidden="true">
                            {selectedLoyalty.currentBadge ? '★' : '?'}
                          </div>
                          <div>
                            <h3 className="loyalty-store-detail__title">
                              {selectedLoyalty.storeName}
                            </h3>
                            <p className="loyalty-store-detail__meta">현재 단골 배지</p>
                          </div>
                        </div>

                        <div className="loyalty-store-detail__badge-box">
                          <strong className="loyalty-store-detail__badge">
                            {selectedLoyalty.currentBadge ?? '아직 첫 방문 전'}
                          </strong>
                          <span className={`loyalty-store-detail__score loyalty-store-detail__score--${currentTone}`}>
                            {selectedLoyalty.purchaseCount}점
                          </span>
                        </div>

                        <p className="loyalty-store-detail__next">
                          {selectedLoyalty.nextBadge
                            ? `다음 배지까지 ${remainingCount}점 남음`
                            : '전설의 단골에 도달했습니다'}
                        </p>
                        <BadgeProgressBar
                          value={selectedLoyalty.purchaseCount}
                          max={progressMax}
                          label={
                            selectedLoyalty.nextBadge
                              ? `다음 배지: ${selectedLoyalty.nextBadge}`
                              : '전설의 단골'
                          }
                        />
                        <div className="loyalty-store-detail__cabinet">
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
                    </div>
                  ) : null}

                  {storeMenu === 'cabinet' ? (
                    <div className="badge-cabinet-grid">
                      {mockLoyalties.map((loyalty) => (
                        <BadgeCard key={loyalty.storeSlug} loyalty={loyalty} />
                      ))}
                    </div>
                  ) : null}
                </>
              ) : (
                <CouponWallet coupons={mockCoupons} />
              )}
            </section>
          ) : (
            <section className="login-gate">
              <div className="login-gate__panel">
                <p className="login-gate__eyebrow">로그인 필요</p>
                <h2 className="login-gate__title">마이페이지는 로그인 후 이용할 수 있습니다</h2>
                <Button href="/coupon">쿠폰 페이지 먼저 보기</Button>
              </div>
            </section>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}