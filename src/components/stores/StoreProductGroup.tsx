import { stores } from '@/content/stores/stores';
import { products } from '@/content/products/products';
import type { StoreProductGroup as StoreProductGroupType } from '@/types/storeProductGroup';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/Button';

export function StoreProductGroup({ group }: { group: StoreProductGroupType }) {
  const store = stores.find((item) => item.id === group.storeId);
  const linkedProducts = products.filter((product) => group.productIds.includes(product.id));

  if (!store) return null;

  return (
    <section className="store-product-group">
      <div className="store-product-group__intro">
        <div className="section-label">{store.category}</div>
        <h3 className="store-product-group__title">{group.title}</h3>
        <p className="store-product-group__summary">{group.summary}</p>
        <p className="store-product-group__store">{store.name} · {store.locationText}</p>
        <Button href={group.ctaLink}>{group.ctaLabel}</Button>
      </div>
      <div className="store-product-group__products">
        {linkedProducts.map((product) => <ProductCard key={product.id} product={product} storeName={store.name} />)}
      </div>
    </section>
  );
}
