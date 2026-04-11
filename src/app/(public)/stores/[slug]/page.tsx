import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { NavBar } from '@/components/layout/NavBar';
import { TopBar } from '@/components/layout/TopBar';
import { StoreInfoPanel } from '@/components/stores/StoreInfoPanel';
import { Container } from '@/components/ui/Container';
import { getStoreBySlug, stores } from '@/content/stores/stores';

export function generateStaticParams() {
  return stores
    .filter((store) => store.isActive)
    .map((store) => ({ slug: store.slug }));
}

export default function StoreDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const store = getStoreBySlug(params.slug);

  if (!store) {
    notFound();
  }

  return (
    <>
      <TopBar />
      <Header />
      <NavBar />
      <main className="store-detail-page">
        <Container className="store-detail-page__container">
          <nav className="stores-breadcrumb" aria-label="breadcrumb">
            <Link href="/">홈</Link>
            <span aria-hidden="true">/</span>
            <strong>{store.name}</strong>
          </nav>

          <section className="store-detail-layout">
            <article className="store-detail-hero">
              <div className="store-detail-hero__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={store.image} alt={store.name} />
              </div>
              <div className="store-detail-hero__body">
                <div className="store-detail-hero__badges">
                  {store.badges.map((badge) => (
                    <span key={badge} className="store-detail-hero__badge">
                      {badge}
                    </span>
                  ))}
                </div>

                <h1 className="store-detail-hero__title">{store.name}</h1>

                <div className="store-detail-hero__meta">
                  <span className="store-detail-hero__location">
                    {store.locationLabel}
                  </span>
                  <span className="store-detail-hero__meta-chip">
                    {store.category} 대표 점포
                  </span>
                </div>

                <p className="store-detail-hero__intro">{store.intro}</p>
              </div>
            </article>

            <div className="store-detail-side">
              <StoreInfoPanel title="사장님 스토리">
                <p>{store.ownerStory}</p>
              </StoreInfoPanel>

              <StoreInfoPanel title="점포 스토리">
                <ul className="store-detail-story-list">
                  {store.storeStory.map((storyItem) => (
                    <li key={storyItem}>{storyItem}</li>
                  ))}
                </ul>
              </StoreInfoPanel>

              <StoreInfoPanel title="시장 이용 안내" className="is-guide">
                <div className="store-detail-guide">
                  <div className="store-detail-guide__label">점포 위치</div>
                  <p className="store-detail-guide__location">
                    {store.locationLabel}
                  </p>

                  <div className="store-detail-guide__actions">
                    <Link href="/" className="store-detail-guide__button">
                      시장 지도에서 위치 보기
                    </Link>
                    <Link
                      href="/stores"
                      className="store-detail-guide__button is-secondary"
                    >
                      메인으로 돌아가기
                    </Link>
                  </div>
                </div>
              </StoreInfoPanel>
            </div>
          </section>

          <section className="store-featured-section">
            <div className="store-featured-section__header">
              <h2 className="store-featured-section__title">대표 상품</h2>
              <p className="store-featured-section__description">
                점포를 대표하는 품목을 간단한 카드로 정리해 한눈에 비교할 수
                있도록 구성했습니다.
              </p>
            </div>

            <div className="store-featured-grid">
              {store.featuredProducts.map((product) => (
                <article key={product.id} className="store-featured-card">
                  <div className="store-featured-card__image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="store-featured-card__body">
                    <span className="store-featured-card__badge">
                      {product.badge}
                    </span>
                    <h3 className="store-featured-card__title">
                      {product.name}
                    </h3>
                    <p className="store-featured-card__summary">
                      {product.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
