import type { MapMarker } from '@/types/mapMarker';

export const mapMarkers: MapMarker[] = [
  { id: 'marker-1', storeId: 'store-vegetable', x: 18, y: 28, label: '화서야채', directionHint: '입구 좌측', isActive: true },
  { id: 'marker-2', storeId: 'store-fish', x: 48, y: 52, label: '화서횟집', directionHint: '중앙 수산 라인', isActive: true },
  { id: 'marker-3', storeId: 'store-oil', x: 76, y: 34, label: '화서기름집', directionHint: '안쪽 곡물 라인', isActive: true },
];
