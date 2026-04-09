import { formatPrice } from '@/lib/formatters/price';

export function PriceBlock({ price, originalPrice, unitText }: { price: number; originalPrice?: number; unitText?: string }) {
  return (
    <div className="product-pricing">
      {originalPrice ? (
        <div className="discount-row">
          <span className="discount-pct">{Math.round((1 - price / originalPrice) * 100)}%</span>
          <span className="original-price">{formatPrice(originalPrice)}원</span>
        </div>
      ) : null}
      <div className="price-row">
        <span className="price">{formatPrice(price)}</span>
        <span className="price-unit">원</span>
        {unitText ? <span className="price-per">{unitText}</span> : null}
      </div>
    </div>
  );
}
