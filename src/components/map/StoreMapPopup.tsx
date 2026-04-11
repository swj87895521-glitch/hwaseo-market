import type { MarketMapPanelContent } from '@/types/mapMarker';

export function StoreMapPopup({ content }: { content: MarketMapPanelContent }) {
  return (
    <aside className="store-map-popup" aria-live="polite">
      <div className="store-map-popup__label">{content.eyebrow}</div>
      <h3 className="store-map-popup__title">{content.title}</h3>
      <p className="store-map-popup__description">{content.description}</p>

      {content.mode === 'overview' ? (
        <ul className="store-map-popup__overview-list">
          {content.items.map((item) => (
            <li key={item.title} className="store-map-popup__overview-item">
              <span
                className="store-map-popup__overview-dot"
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
        <div className="store-map-popup__category-card">
          <span
            className="store-map-popup__category-chip"
            style={{ color: content.markerColor }}
          >
            {content.markerCountLabel}
          </span>
          {content.helperDescription ? (
            <p>{content.helperDescription}</p>
          ) : null}
        </div>
      ) : null}

      {content.mode === 'store' ? (
        <div className="store-map-popup__detail-grid">
          <div className="store-map-popup__detail-row">
            <span>카테고리</span>
            <strong style={{ color: content.markerColor }}>
              {content.category}
            </strong>
          </div>
          <div className="store-map-popup__detail-row">
            <span>위치 설명</span>
            <strong>{content.locationDescription}</strong>
          </div>
          <div className="store-map-popup__detail-items">
            <span>대표 상품</span>
            <ul>
              {content.featuredItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
