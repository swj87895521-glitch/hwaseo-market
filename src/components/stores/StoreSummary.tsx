import type { Store } from '@/types/store';

export function StoreSummary({ store }: { store: Store }) {
  return <div className="store-summary"><strong>{store.name}</strong><p>{store.shortDescription}</p></div>;
}
