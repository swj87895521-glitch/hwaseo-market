import type { Product } from '@/types/product';
import { Card } from '@/components/ui/Card';
import { PriceBlock } from './PriceBlock';
import { ProductBadge } from './ProductBadge';

export function ProductCard({ product, storeName }: { product: Product; storeName?: string }) {
  return (
    <Card className="product-card">
      <div className="product-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.thumbnail} alt={product.name} />
        {product.badgeLabels.length ? (
          <div className="product-badges">
            {product.badgeLabels.map((label) => <ProductBadge key={label} label={label} />)}
          </div>
        ) : null}
      </div>
      <div className="product-info">
        <div className="product-cat">{product.category}{storeName ? ` · ${storeName}` : ''}</div>
        <div className="product-name">{product.name}</div>
        <PriceBlock price={product.price} originalPrice={product.originalPrice} unitText={product.unitText} />
        {product.tagLabels.length ? <div className="product-tags">{product.tagLabels.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div> : null}
      </div>
    </Card>
  );
}
