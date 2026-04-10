import type { Store } from '@/types/store';

export function StoreInfoPanel({ store }: { store: Store }) {
  return (
    <div className="store-info-panel">
      <div className="store-info-panel__eyebrow">점포 정보</div>
      <h3>{store.name}</h3>
      <p>{store.shortDescription}</p>
      <ul>
        <li>위치: {store.locationText}</li>
        <li>주소: {store.addressText}</li>
      </ul>
    </div>
  );
}
