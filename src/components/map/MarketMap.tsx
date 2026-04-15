'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import { useMemo, useState } from 'react';
import {
  marketMapBaseImageSrc,
  marketMapCategorySummaries,
  marketMapFilters,
  marketMapMarkers,
} from '@/content/map/mapMarkers';
import type { MarketMapFilter, MarketMapPanelContent } from '@/types/mapMarker';
import { MapMarker } from './MapMarker';
import { StoreMapBottomSheet } from './StoreMapBottomSheet';
import { StoreMapPopup } from './StoreMapPopup';

function getPanelContent(
  activeCategory: MarketMapFilter,
  activeMarkerId: string,
): MarketMapPanelContent {
  const activeMarker = marketMapMarkers.find(
    (marker) => marker.id === activeMarkerId,
  );

  if (activeMarker) {
    const summary = marketMapCategorySummaries[activeMarker.category];

    return {
      mode: 'store',
      eyebrow: '선택한 점포',
      title: activeMarker.name,
      description: activeMarker.shortDescription,
      category: summary.shortLabel,
      markerColor: summary.markerColor,
      locationDescription: activeMarker.locationDescription,
      featuredItems: activeMarker.featuredItems,
    };
  }

  if (activeCategory !== 'All') {
    const summary = marketMapCategorySummaries[activeCategory];

    return {
      mode: 'category',
      eyebrow: '카테고리 안내',
      title: summary.shortLabel,
      description: summary.categorySummary,
      markerColor: summary.markerColor,
      markerCountLabel: summary.markerCountLabel,
    };
  }

  return {
    mode: 'overview',
    eyebrow: '화서시장 점포 안내',
    title: '화서시장 점포 안내',
    description:
      '카테고리를 선택하거나 지도 위 점포를 눌러 시장 구성을 둘러보세요.',
    items: Object.values(marketMapCategorySummaries).map((summary) => ({
      title: summary.shortLabel,
      description: summary.overviewDescription,
      markerColor: summary.markerColor,
    })),
  };
}

export function MarketMap() {
  const [activeCategory, setActiveCategory] = useState<MarketMapFilter>('All');
  const [activeMarkerId, setActiveMarkerId] = useState('');

  const filteredMarkers = useMemo(() => {
    if (activeCategory === 'All') {
      return marketMapMarkers;
    }

    return marketMapMarkers.filter(
      (marker) => marker.category === activeCategory,
    );
  }, [activeCategory]);

  const panelContent = useMemo(
    () => getPanelContent(activeCategory, activeMarkerId),
    [activeCategory, activeMarkerId],
  );

  return (
    <div className="market-map-shell">
      <div className="market-map-layout">
        <div className="market-map-panel">
          <div className="market-map-panel__header">
            <div>
              <p className="market-map-panel__eyebrow">CATEGORY FILTER</p>
              <h3 className="market-map-panel__title">시장 구성 한눈에 보기</h3>
            </div>
            <p className="market-map-panel__caption">
              대표 구역과 점포를 가볍게 살펴보고, 관심 있는 카테고리만 골라볼 수
              있습니다.
            </p>
          </div>

          <div
            className="market-map-filters"
            role="group"
            aria-label="시장 카테고리 필터"
          >
            {marketMapFilters.map((filter) => {
              const isActive = filter.value === activeCategory;
              const summary =
                filter.value === 'All'
                  ? null
                  : marketMapCategorySummaries[filter.value];

              return (
                <button
                  key={filter.value}
                  type="button"
                  className={`market-map-filter ${isActive ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveCategory(filter.value);
                    setActiveMarkerId('');
                  }}
                  style={
                    summary
                      ? ({
                          '--filter-accent': summary.markerColor,
                          '--filter-glow': summary.markerGlow,
                        } as CSSProperties)
                      : undefined
                  }
                  aria-pressed={isActive}
                >
                  {summary ? (
                    <span
                      className="market-map-filter__dot"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>

          <div className="market-map">
            <div className="market-map__frame">
              <div className="market-map__beige" aria-hidden="true" />
              <Image
                src={marketMapBaseImageSrc}
                alt="화서시장 지도"
                fill
                className="market-map__image"
                sizes="(max-width: 960px) 100vw, 70vw"
                priority
              />

              {filteredMarkers.map((marker) => {
                const summary = marketMapCategorySummaries[marker.category];

                return (
                  <MapMarker
                    key={marker.id}
                    marker={marker}
                    markerColor={summary.markerColor}
                    markerGlow={summary.markerGlow}
                    isActive={marker.id === activeMarkerId}
                    onClick={setActiveMarkerId}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <StoreMapPopup content={panelContent} />
      </div>

      <StoreMapBottomSheet content={panelContent} />
    </div>
  );
}
