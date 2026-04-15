import type { MarketMapPanelContent } from '@/types/mapMarker';

export function StoreMapBottomSheet({
  content,
}: {
  content: MarketMapPanelContent;
}) {
  return (
    <section className="store-map-bottom-sheet" aria-live="polite">
      <div className="store-map-bottom-sheet__eyebrow">{content.eyebrow}</div>
      <h3>{content.title}</h3>
      <p>{content.description}</p>

      {content.mode === 'overview' ? (
        <ul className="store-map-bottom-sheet__overview-list">
          {content.items.map((item) => (
            <li key={item.title}>
              <span
                className="store-map-bottom-sheet__dot"
                style={{ backgroundColor: item.markerColor }}
                aria-hidden="true"
              />
              <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {content.mode === 'category' ? (
        <div className="store-map-bottom-sheet__meta">
          <span style={{ color: content.markerColor }}>
            {content.markerCountLabel}
          </span>
          {content.helperDescription ? (
            <p>{content.helperDescription}</p>
          ) : null}
        </div>
      ) : null}

      {content.mode === 'store' ? (
        <div className="store-map-bottom-sheet__detail">
          <div>
            <span>카테고리</span>
            <strong style={{ color: content.markerColor }}>
              {content.category}
            </strong>
          </div>
          <div>
            <span>위치 설명</span>
            <strong>{content.locationDescription}</strong>
          </div>
          <div>
            <span>대표 상품</span>
            <p>{content.featuredItems.join(' · ')}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
