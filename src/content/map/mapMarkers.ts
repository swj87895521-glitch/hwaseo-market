import type {
  MarketMapCategory,
  MarketMapCategorySummary,
  MarketMapFilterOption,
  MarketMapMarker,
} from '@/types/mapMarker';

export const marketMapBaseImageSrc = '/images/maps/hwaseo-market-map-base.png';
export const marketMapLayoutReferenceSrc =
  '/images/maps/hwaseo-market-map-layout-reference.png';

export const marketMapFilters: MarketMapFilterOption[] = [
  { value: 'All', label: 'All' },
  { value: '화서수산', label: '수산' },
  { value: '화서야채', label: '야채' },
  { value: '화서기름', label: '기름' },
  { value: '화서육류', label: '육류' },
  { value: '화서가게', label: '가게' },
];

export const marketMapCategorySummaries: Record<
  MarketMapCategory,
  MarketMapCategorySummary
> = {
  화서수산: {
    id: '화서수산',
    label: '화서수산',
    shortLabel: '수산',
    markerColor: '#2f6cf5',
    markerGlow: 'rgba(47, 108, 245, 0.28)',
    markerCountLabel: '점포 1곳',
    overviewDescription: '신선한 수산물과 계절 해산물을 소개하는 점포 구역',
    categorySummary: '신선한 수산물과 계절 해산물을 소개하는 점포 구역',
  },
  화서야채: {
    id: '화서야채',
    label: '화서야채',
    shortLabel: '야채',
    markerColor: '#2f8f58',
    markerGlow: 'rgba(47, 143, 88, 0.24)',
    markerCountLabel: '점포 2곳',
    overviewDescription: '제철 채소와 과일 중심의 신선 식재료 구역',
    categorySummary: '제철 채소와 과일 중심의 신선 식재료 구역',
  },
  화서기름: {
    id: '화서기름',
    label: '화서기름',
    shortLabel: '기름',
    markerColor: '#c4b01c',
    markerGlow: 'rgba(196, 176, 28, 0.26)',
    markerCountLabel: '점포 1곳',
    overviewDescription: '참기름, 들기름 등 전통 가공 식품 중심 구역',
    categorySummary: '참기름, 들기름 등 전통 가공 식품 중심 구역',
  },
  화서육류: {
    id: '화서육류',
    label: '화서육류',
    shortLabel: '육류',
    markerColor: '#b21818',
    markerGlow: 'rgba(178, 24, 24, 0.24)',
    markerCountLabel: '점포 1곳',
    overviewDescription: '정육과 육가공 상품을 다루는 점포 구역',
    categorySummary: '정육과 육가공 상품을 다루는 점포 구역',
  },
  화서가게: {
    id: '화서가게',
    label: '화서가게',
    shortLabel: '가게',
    markerColor: '#111111',
    markerGlow: 'rgba(17, 17, 17, 0.24)',
    markerCountLabel: '점포 1곳',
    overviewDescription: '생활형 점포 및 기타 시장 편의 점포 구역',
    categorySummary: '생활형 점포 및 기타 시장 편의 점포 구역',
  },
};

// Marker coordinates are aligned to the user-provided layout reference image.
export const marketMapMarkers: MarketMapMarker[] = [
  {
    id: 'hwaseo-seafood',
    category: '화서수산',
    name: '화서수산',
    x: 77.1,
    y: 70.6,
    shortDescription: '신선한 수산물을 중심으로 소개하는 대표 수산 점포',
    locationDescription: '시장 길 안쪽 수산 라인',
    featuredItems: ['제철 생선', '해산물 모둠'],
  },
  {
    id: 'hwaseo-vegetable',
    category: '화서야채',
    name: '화서야채',
    x: 63.0,
    y: 15.5,
    shortDescription: '제철 채소와 과일을 소개하는 신선 야채 점포',
    locationDescription: '시장 입구 기준 신선 식재료 라인',
    featuredItems: ['상추', '토마토', '제철 채소'],
  },
  {
    id: 'hwaseo-vegetable-1',
    category: '화서야채',
    name: '화서야채-1',
    x: 60.5,
    y: 31.2,
    shortDescription:
      '일상 식탁용 채소를 부담 없이 고를 수 있는 보조 야채 점포',
    locationDescription: '야채 라인 안쪽 두 번째 위치',
    featuredItems: ['감자', '양파', '애호박'],
  },
  {
    id: 'hwaseo-oil',
    category: '화서기름',
    name: '화서기름',
    x: 79.0,
    y: 46.8,
    shortDescription: '참기름과 들기름 중심의 전통 식품 점포',
    locationDescription: '메인 통로 옆 가공식품 라인',
    featuredItems: ['참기름', '들기름'],
  },
  {
    id: 'hwaseo-meat',
    category: '화서육류',
    name: '화서육류',
    x: 38.2,
    y: 30.9,
    shortDescription: '신선한 정육 상품을 소개하는 육류 점포',
    locationDescription: '중앙 통로 쪽 육류 라인',
    featuredItems: ['국거리', '불고기용 육류'],
  },
  {
    id: 'hwaseo-store',
    category: '화서가게',
    name: '화서가게',
    x: 48.2,
    y: 69.6,
    shortDescription: '생활형 상품과 시장 편의 품목을 다루는 점포',
    locationDescription: '보조 통로 근처 일반 점포 라인',
    featuredItems: ['생활잡화', '간편 상품'],
  },
];
