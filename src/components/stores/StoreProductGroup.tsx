import { Button } from '@/components/ui/Button';
import { getStoreBySlug, getStoreDetailHref } from '@/content/stores/stores';
import type { StoreProductGroup as StoreProductGroupType } from '@/types/storeProductGroup';

export function StoreProductGroup({ group }: { group: StoreProductGroupType }) {
  const store = getStoreBySlug(group.storeSlug);

  if (!store) return null;

  const linkedProducts = store.featuredProducts.filter((product) =>
    group.featuredProductIds.includes(product.id),
  );

  return (
    <section className="store-product-group">
      <div className="store-product-group__intro">
        <div className="store-product-group__category">
          {group.categoryLabel}
        </div>
        <h3 className="store-product-group__title">{group.heroCopy}</h3>
        <p className="store-product-group__summary">{group.description}</p>
        <p className="store-product-group__store">{group.locationText}</p>
        <Button href={getStoreDetailHref(store.slug)}>
          {group.buttonText}
        </Button>
      </div>

      <div className="store-product-group__products">
        {linkedProducts.map((product) => (
          <article key={product.id} className="home-product-card">
            <div className="home-product-card__image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} />
            </div>
            <div className="home-product-card__body">
              <div className="home-product-card__meta">
                <span className="home-product-card__badge">
                  {product.badge}
                </span>
                <span className="home-product-card__store">{store.name}</span>
              </div>
              <h4 className="home-product-card__title">{product.name}</h4>
              <p className="home-product-card__summary">{product.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
