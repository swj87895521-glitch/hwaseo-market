import { stores } from '@/content/stores/stores';
import { products } from '@/content/products/products';

export function StoreMapPopup({ markerId }: { markerId: string }) {
  const store = stores.find((item) => item.markerId === markerId);
  const featured = products.find((item) => item.storeId === store?.id);
  if (!store) return null;
  return (
    <div className="store-map-popup">
      <div className="store-map-popup__label">점포 요약</div>
      <h3>{store.name}</h3>
      <p>{store.shortDescription}</p>
      <p>위치: {store.locationText}</p>
      {featured ? <p>대표 상품: {featured.name}</p> : null}
    </div>
  );
}
