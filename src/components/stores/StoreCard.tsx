import type { Store } from '@/types/store';

export function StoreCard({ store }: { store: Store }) {
  return (
    <article className="store-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={store.thumbnail} alt={store.name} className="store-card__image" />
      <div className="store-card__body">
        <div className="store-card__category">{store.category}</div>
        <h3 className="store-card__title">{store.name}</h3>
        <p className="store-card__desc">{store.shortDescription}</p>
        <div className="store-card__meta">{store.locationText}</div>
      </div>
    </article>
  );
}
