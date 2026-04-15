import type { CSSProperties } from 'react';
import type { MarketMapMarker } from '@/types/mapMarker';

export function MapMarker({
  marker,
  markerColor,
  markerGlow,
  isActive,
  onClick,
}: {
  marker: MarketMapMarker;
  markerColor: string;
  markerGlow: string;
  isActive: boolean;
  onClick: (id: string) => void;
}) {
  return (
    <button
      type="button"
      className={`map-marker ${isActive ? 'is-active' : ''}`}
      style={
        {
          left: `${marker.x}%`,
          top: `${marker.y}%`,
          '--marker-color': markerColor,
          '--marker-glow': markerGlow,
        } as CSSProperties
      }
      onClick={() => onClick(marker.id)}
      aria-label={`${marker.category} ${marker.name}`}
    >
      <span className="map-marker__dot" aria-hidden="true" />
      <span className="map-marker__label">{marker.name}</span>
    </button>
  );
}
