import type { MapMarker as MapMarkerType } from '@/types/mapMarker';

export function MapMarker({ marker, isActive, onClick }: { marker: MapMarkerType; isActive: boolean; onClick: (id: string) => void }) {
  return (
    <button
      type="button"
      className={`map-marker ${isActive ? 'is-active' : ''}`}
      style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
      onClick={() => onClick(marker.id)}
      aria-label={marker.label}
    >
      <span>{marker.label}</span>
    </button>
  );
}
