import { stores } from '@/content/stores/stores';

export function StoreMapBottomSheet({ markerId }: { markerId: string }) {
  const store = stores.find((item) => item.markerId === markerId);
  if (!store) return null;
  return (
    <div className="store-map-bottom-sheet">
      <strong>{store.name}</strong>
      <p>{store.locationText}</p>
      <p>{store.shortDescription}</p>
    </div>
  );
}
