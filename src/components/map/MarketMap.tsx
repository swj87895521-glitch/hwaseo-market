'use client';

import { useMemo, useState } from 'react';
import { mapMarkers } from '@/content/map/mapMarkers';
import { MapMarker } from './MapMarker';
import { StoreMapPopup } from './StoreMapPopup';
import { StoreMapBottomSheet } from './StoreMapBottomSheet';

export function MarketMap() {
  const [activeMarkerId, setActiveMarkerId] = useState(mapMarkers[0]?.id ?? '');
  const activeMarker = useMemo(() => mapMarkers.find((item) => item.id === activeMarkerId), [activeMarkerId]);

  return (
    <div className="market-map-shell">
      <div className="market-map">
        <div className="market-map__image">화서시장 지도 영역</div>
        {mapMarkers.map((marker) => (
          <MapMarker key={marker.id} marker={marker} isActive={marker.id === activeMarkerId} onClick={setActiveMarkerId} />
        ))}
      </div>
      {activeMarker ? <StoreMapPopup markerId={activeMarker.id} /> : null}
      {activeMarker ? <StoreMapBottomSheet markerId={activeMarker.id} /> : null}
    </div>
  );
}
