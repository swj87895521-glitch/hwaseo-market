import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { NavBar } from '@/components/layout/NavBar';
import { TopBar } from '@/components/layout/TopBar';
import { StoreCard } from '@/components/stores/StoreCard';
import { StoreSummary } from '@/components/stores/StoreSummary';
import { Container } from '@/components/ui/Container';
import {
  getStoreCategoryBySlug,
  getStoreCategoryHref,
  getStorePageCopy,
  getStoresByCategory,
  storeCategories,
} from '@/content/stores/stores';
import { cn } from '@/lib/utils/cn';
import type { StoreCategorySlug } from '@/types/store';

export function StoreCatalogPage({
  activeCategory,
}: {
  activeCategory: StoreCategorySlug;
}) {
  const pageCopy = getStorePageCopy(activeCategory);
  const visibleStores = getStoresByCategory(activeCategory);
  const activeCategoryItem = getStoreCategoryBySlug(activeCategory);

  return (
    <>
      <TopBar />
      <Header />
      <NavBar />
      <main className="stores-page">
        <section className="stores-page__hero">
          <Container>
            <nav className="stores-breadcrumb" aria-label="breadcrumb">
              <Link href="/">홈</Link>
              <span aria-hidden="true">/</span>
              <strong>{pageCopy.breadcrumbLabel}</strong>
            </nav>
            <h1 className="stores-page__title">{pageCopy.title}</h1>
            <p className="stores-page__description">{pageCopy.description}</p>
          </Container>
        </section>

        <section className="stores-page__content">
          <Container className="stores-page__layout">
            <aside className="stores-sidebar">
              <div className="stores-sidebar__card">
                <h2 className="stores-sidebar__title">카테고리</h2>
                <nav className="stores-sidebar__nav" aria-label="점포 카테고리">
                  {storeCategories.map((category) => (
                    <Link
                      key={category.slug}
                      href={getStoreCategoryHref(category.slug)}
                      className={cn(
                        'stores-sidebar__link',
                        category.slug === activeCategory && 'is-active',
                      )}
                      aria-current={
                        category.slug === activeCategory ? 'page' : undefined
                      }
                    >
                      {category.label}
                    </Link>
                  ))}
                </nav>
                <p className="stores-sidebar__note">
                  화서시장의 대표 점포를 카테고리별로 나누어, 원하는 점포만
                  가볍게 둘러볼 수 있도록 정리했습니다.
                </p>
              </div>
            </aside>

            <div className="stores-page__main">
              <StoreSummary
                countText={pageCopy.countText}
                helperText={pageCopy.helperText}
                activeLabel={activeCategoryItem.label}
              />

              <div className="stores-grid">
                {visibleStores.map((store) => (
                  <StoreCard key={store.id} store={store} />
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
