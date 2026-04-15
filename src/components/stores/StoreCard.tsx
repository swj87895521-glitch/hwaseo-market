import Link from 'next/link';
import { getStoreDetailHref } from '@/content/stores/stores';
import type { Store } from '@/types/store';

export function StoreCard({ store }: { store: Store }) {
  return (
    <article className="store-card">
      <div className="store-card__body">
        <div className="store-card__eyebrow">
          <span className="store-card__category">{store.category}</span>
          <span className="store-card__location">{store.location}</span>
        </div>

        <h3 className="store-card__title">{store.name}</h3>
        <p className="store-card__desc">{store.intro}</p>

        <div
          className="store-card__tags"
          aria-label={`${store.name} 대표 품목 태그`}
        >
          {store.tags.map((tag) => (
            <span key={tag} className="store-card__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="store-card__footer">
          <p className="store-card__meta">위치: {store.locationLabel}</p>
          <Link
            href={getStoreDetailHref(store.slug)}
            className="store-card__action"
          >
            점포보기
          </Link>
        </div>
      </div>
    </article>
  );
}
