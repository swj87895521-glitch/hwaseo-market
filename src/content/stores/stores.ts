import type {
  Store,
  StoreCategoryItem,
  StoreCategorySlug,
} from '@/types/store';

export const storeCategories: StoreCategoryItem[] = [
  {
    slug: 'all',
    label: '전체상품',
    description: '화서시장 안의 다양한 점포를 둘러보세요.',
    helperText:
      '카테고리를 선택하면 관심 있는 점포만 빠르게 확인할 수 있습니다.',
  },
  {
    slug: 'fish',
    label: '수산',
    description: '수산 관련 점포를 확인해보세요.',
    helperText:
      '신선한 수산물과 계절 해산물을 소개하는 대표 점포를 모아두었습니다.',
  },
  {
    slug: 'vegetable',
    label: '야채',
    description: '야채 관련 점포를 확인해보세요.',
    helperText:
      '제철 채소와 과일을 중심으로 한 점포를 한눈에 둘러볼 수 있습니다.',
  },
  {
    slug: 'oil',
    label: '기름',
    description: '기름 관련 점포를 확인해보세요.',
    helperText:
      '참기름과 들기름 같은 전통 식품을 소개하는 점포를 정리했습니다.',
  },
  {
    slug: 'meat',
    label: '육류',
    description: '육류 관련 점포를 확인해보세요.',
    helperText:
      '정육과 일상용 육류 상품을 소개하는 점포를 빠르게 살펴볼 수 있습니다.',
  },
  {
    slug: 'general',
    label: '가게',
    description: '가게 관련 점포를 확인해보세요.',
    helperText:
      '생활형 품목과 시장 편의 상품을 다루는 일반 점포를 모아두었습니다.',
  },
];

const storeCategoryMap = new Map(
  storeCategories.map((category) => [category.slug, category]),
);

export const stores: Store[] = [
  {
    id: 'store-vegetable-main',
    slug: 'hwaseo-vegetable',
    name: '화서야채',
    category: '야채',
    categorySlug: 'vegetable',
    intro:
      '제철 채소와 나물을 중심으로 매일 신선한 상품을 들여오는 야채 점포입니다. 비빔밥, 찌개, 반찬용 채소를 용도별로 추천해드립니다.',
    location: '시장 입구 기준 신선 식재료 라인',
    locationLabel: '채소 구역 B-1',
    tags: ['채소', '과일', '제철식재료'],
    badges: ['제철 채소', '생활 장보기'],
    ownerStory:
      '오늘 가장 상태 좋은 채소를 먼저 권해드리고, 요리 용도에 맞는 재료를 쉽게 고를 수 있도록 도와드립니다.',
    storeStory: [
      '제철 채소와 나물을 중심으로 매일 신선한 상품을 들여오는 야채 점포입니다.',
      '화서시장 안에서 찾기 쉬운 위치 정보와 함께, 오프라인 방문이 자연스럽게 이어지도록 구성했습니다.',
      '처음 방문하는 사람도 대표 상품과 점포 특징을 한 번에 이해할 수 있도록 정보 우선순위를 정리했습니다.',
    ],
    featuredProducts: [
      {
        id: 'veg-bomnamul',
        name: '봄나물 모둠',
        summary: '제철 향이 가득한 나물 구성',
        badge: '제철',
        image: '/images/stores/hwaseo-vegetable.svg',
      },
      {
        id: 'veg-jjigae-pack',
        name: '찌개용 채소팩',
        summary: '된장찌개·김치찌개용 실속 구성',
        badge: '실속',
        image: '/images/stores/hwaseo-vegetable.svg',
      },
      {
        id: 'veg-bibimbap-pack',
        name: '비빔밥 채소팩',
        summary: '한 끼 식사 준비가 쉬운 채소 세트',
        badge: '인기',
        image: '/images/stores/hwaseo-vegetable.svg',
      },
    ],
    image: '/images/stores/hwaseo-vegetable.svg',
    shortDescription: '제철 채소와 과일을 중심으로 신선 식재료를 소개하는 점포',
    locationText: '시장 입구 기준 신선 식재료 라인',
    isActive: true,
  },
  {
    id: 'store-vegetable-sub',
    slug: 'hwaseo-vegetable-1',
    name: '화서야채-1',
    category: '야채',
    categorySlug: 'vegetable',
    intro:
      '일상 식탁에 자주 쓰이는 기본 채소를 부담 없이 고를 수 있는 보조 야채 점포입니다. 자주 찾는 재료를 빠르게 담기 좋게 구성했습니다.',
    location: '야채 라인 안쪽 두 번째 위치',
    locationLabel: '채소 구역 B-2',
    tags: ['감자', '양파', '일상채소'],
    badges: ['기본 채소', '실속 장보기'],
    ownerStory:
      '매일 쓰는 채소는 가격과 신선도가 중요해서, 많이 찾는 품목 위주로 보기 쉽게 정리해두고 있습니다.',
    storeStory: [
      '감자, 양파, 애호박처럼 자주 찾는 채소를 중심으로 구성한 실속형 점포입니다.',
      '장보기 동선이 짧아지도록 기본 식재료 위주로 빠르게 고를 수 있게 구성했습니다.',
      '소량 구매부터 일상 반찬 준비용까지 가볍게 들르기 좋은 점포입니다.',
    ],
    featuredProducts: [
      {
        id: 'veg-basic-bundle',
        name: '기본 채소 꾸러미',
        summary: '감자·양파·대파 구성',
        badge: '기본',
        image: '/images/stores/hwaseo-vegetable-1.svg',
      },
      {
        id: 'veg-stirfry-pack',
        name: '볶음용 채소팩',
        summary: '집반찬용 실속 채소 묶음',
        badge: '실속',
        image: '/images/stores/hwaseo-vegetable-1.svg',
      },
      {
        id: 'veg-zucchini-set',
        name: '애호박·버섯 세트',
        summary: '찌개와 반찬에 두루 쓰이는 구성',
        badge: '일상',
        image: '/images/stores/hwaseo-vegetable-1.svg',
      },
    ],
    image: '/images/stores/hwaseo-vegetable-1.svg',
    shortDescription:
      '일상 식탁용 채소를 부담 없이 고를 수 있는 보조 야채 점포',
    locationText: '야채 라인 안쪽 두 번째 위치',
    isActive: true,
  },
  {
    id: 'store-meat-main',
    slug: 'hwaseo-meat',
    name: '화서육류',
    category: '육류',
    categorySlug: 'meat',
    intro:
      '신선한 정육과 일상 요리에 맞는 육류 상품을 소개하는 점포입니다. 구이용, 찜용, 국거리용으로 쉽게 고를 수 있게 안내합니다.',
    location: '중앙 통로 쪽 육류 라인',
    locationLabel: '육류 구역 C-1',
    tags: ['정육', '양념육', '실속구성'],
    badges: ['실속 정육', '가정식 준비'],
    ownerStory:
      '손님이 어떤 요리를 하실지 먼저 여쭤보고, 가장 알맞은 부위를 쉽게 고르실 수 있게 설명해드립니다.',
    storeStory: [
      '구이용, 찜용, 국거리용 등 조리 목적에 맞춘 육류 구성이 강점인 점포입니다.',
      '장보는 시간이 길지 않아도 빠르게 선택할 수 있도록 상품 구분을 단순하게 정리했습니다.',
      '가족 식사부터 간단한 한 끼 준비까지 폭넓게 대응하는 실속형 육류 점포입니다.',
    ],
    featuredProducts: [
      {
        id: 'meat-soup-cut',
        name: '한우 국거리',
        summary: '맑은 국과 탕용으로 적합한 구성',
        badge: '대표',
        image: '/images/stores/hwaseo-meat.svg',
      },
      {
        id: 'meat-bulgogi',
        name: '돼지불고기용',
        summary: '양념과 잘 어울리는 실속 부위',
        badge: '실속',
        image: '/images/stores/hwaseo-meat.svg',
      },
      {
        id: 'meat-grill-set',
        name: '구이용 모둠',
        summary: '가족 식사용 기본 구성',
        badge: '인기',
        image: '/images/stores/hwaseo-meat.svg',
      },
    ],
    image: '/images/stores/hwaseo-meat.svg',
    shortDescription: '신선한 정육과 육가공 상품을 소개하는 육류 점포',
    locationText: '중앙 통로 쪽 육류 라인',
    isActive: true,
  },
  {
    id: 'store-oil-main',
    slug: 'hwaseo-oil',
    name: '화서기름',
    category: '기름',
    categorySlug: 'oil',
    intro:
      '참기름과 들기름 중심의 전통 식품을 소개하는 점포입니다. 향과 용도를 기준으로 쉽게 고를 수 있게 안내합니다.',
    location: '메인 통로 옆 가공식품 라인',
    locationLabel: '가공식품 구역 D-1',
    tags: ['참기름', '들기름', '전통식품'],
    badges: ['전통 식재료', '향 중심 추천'],
    ownerStory:
      '기름은 향과 쓰임이 달라서, 반찬용인지 무침용인지 먼저 듣고 어울리는 제품을 추천해드립니다.',
    storeStory: [
      '참기름, 들기름, 볶음깨 등 기본 조미 식재료를 중심으로 구성한 점포입니다.',
      '요리 초보도 어렵지 않게 선택할 수 있도록 용도별 설명이 쉬운 점포를 목표로 합니다.',
      '소포장부터 선물용 느낌의 구성까지 자연스럽게 둘러볼 수 있도록 정리했습니다.',
    ],
    featuredProducts: [
      {
        id: 'oil-sesame',
        name: '참기름',
        summary: '고소한 향이 살아 있는 기본 구성',
        badge: '기본',
        image: '/images/stores/hwaseo-oil.svg',
      },
      {
        id: 'oil-perilla',
        name: '들기름',
        summary: '나물무침과 비빔용 추천 구성',
        badge: '추천',
        image: '/images/stores/hwaseo-oil.svg',
      },
      {
        id: 'oil-seed-set',
        name: '볶음깨 세트',
        summary: '반찬 마무리에 쓰기 좋은 기본 품목',
        badge: '실속',
        image: '/images/stores/hwaseo-oil.svg',
      },
    ],
    image: '/images/stores/hwaseo-oil.svg',
    shortDescription: '참기름과 들기름 중심의 전통 식품을 소개하는 점포',
    locationText: '메인 통로 옆 가공식품 라인',
    isActive: true,
  },
  {
    id: 'store-general-main',
    slug: 'hwaseo-shop',
    name: '화서가게',
    category: '가게',
    categorySlug: 'general',
    intro:
      '생활형 상품과 시장 편의 품목을 함께 둘러볼 수 있는 일반 점포입니다. 장보기 중 필요한 소소한 상품을 함께 챙기기 좋습니다.',
    location: '보조 통로 근처 일반 점포 라인',
    locationLabel: '일반 점포 구역 E-1',
    tags: ['생활잡화', '편의상품', '시장소품'],
    badges: ['생활 편의', '보조 장보기'],
    ownerStory:
      '시장에 오시면 식재료만 사는 게 아니라 필요한 생활용품도 함께 찾으셔서, 자주 찾는 품목 위주로 정리해두고 있습니다.',
    storeStory: [
      '장보기 중 함께 필요한 생활형 품목을 한 번에 볼 수 있도록 구성한 점포입니다.',
      '시장 동선 안에서 가볍게 둘러볼 수 있는 보조형 점포 역할을 합니다.',
      '자주 쓰는 소품과 편의 상품 중심으로 구성해 부담 없이 들르기 좋습니다.',
    ],
    featuredProducts: [
      {
        id: 'shop-living-kit',
        name: '생활잡화 묶음',
        summary: '자주 쓰는 기본 생활 소품',
        badge: '기본',
        image: '/images/stores/hwaseo-shop.svg',
      },
      {
        id: 'shop-pack',
        name: '간편 포장 상품',
        summary: '보관과 이동이 쉬운 품목',
        badge: '편의',
        image: '/images/stores/hwaseo-shop.svg',
      },
      {
        id: 'shop-market-item',
        name: '시장 소품',
        summary: '장보기 편의를 높이는 보조 상품',
        badge: '인기',
        image: '/images/stores/hwaseo-shop.svg',
      },
    ],
    image: '/images/stores/hwaseo-shop.svg',
    shortDescription: '생활형 상품과 시장 편의 품목을 다루는 일반 점포',
    locationText: '보조 통로 근처 일반 점포 라인',
    isActive: true,
  },
  {
    id: 'store-fish-main',
    slug: 'hwaseo-fish',
    name: '화서수산',
    category: '수산',
    categorySlug: 'fish',
    intro:
      '신선한 수산물과 계절 해산물을 중심으로 소개하는 대표 수산 점포입니다. 가정식과 탕거리 위주로 쉽게 고를 수 있도록 구성했습니다.',
    location: '시장 안쪽 수산 라인',
    locationLabel: '수산 구역 A-1',
    tags: ['제철생선', '해산물', '실속구성'],
    badges: ['계절 해산물', '탕거리 추천'],
    ownerStory:
      '생선과 해산물은 손질과 보관이 중요해서, 집에서 바로 쓰기 좋은 품목 위주로 먼저 추천해드립니다.',
    storeStory: [
      '제철 생선과 해산물을 부담 없이 고를 수 있는 실속형 수산 점포입니다.',
      '탕거리, 구이용, 반찬용 등 일상 식탁 기준으로 쉽게 고를 수 있도록 안내합니다.',
      '시장 특유의 신선함을 온라인에서도 이해할 수 있도록 대표 품목 중심으로 정리했습니다.',
    ],
    featuredProducts: [
      {
        id: 'fish-seasonal-set',
        name: '제철 생선 모둠',
        summary: '계절 생선 위주 추천 구성',
        badge: '제철',
        image: '/images/stores/hwaseo-fish.svg',
      },
      {
        id: 'fish-tang-pack',
        name: '해물탕 재료팩',
        summary: '집에서 바로 쓰기 좋은 실속 구성',
        badge: '실속',
        image: '/images/stores/hwaseo-fish.svg',
      },
      {
        id: 'fish-semi-dried',
        name: '반건조 생선',
        summary: '보관이 편한 일상 반찬용 구성',
        badge: '인기',
        image: '/images/stores/hwaseo-fish.svg',
      },
    ],
    image: '/images/stores/hwaseo-fish.svg',
    shortDescription:
      '신선한 수산물과 계절 해산물을 중심으로 소개하는 대표 수산 점포',
    locationText: '시장 안쪽 수산 라인',
    isActive: true,
  },
];

export function isStoreCategorySlug(
  value: string | undefined,
): value is StoreCategorySlug {
  if (!value) return false;

  return storeCategoryMap.has(value as StoreCategorySlug);
}

export function getStoreCategoryBySlug(
  slug: StoreCategorySlug = 'all',
): StoreCategoryItem {
  return storeCategoryMap.get(slug) ?? storeCategoryMap.get('all')!;
}

export function getStoreCategoryHref(slug: StoreCategorySlug): string {
  return slug === 'all' ? '/stores' : `/stores?category=${slug}`;
}

export function getStoreDetailHref(slug: string): string {
  return `/stores/${slug}`;
}

export function getStoresByCategory(slug: StoreCategorySlug = 'all'): Store[] {
  const activeStores = stores.filter((store) => store.isActive);

  if (slug === 'all') {
    return activeStores;
  }

  return activeStores.filter((store) => store.categorySlug === slug);
}

export function getStoreBySlug(slug: string) {
  return stores.find((store) => store.slug === slug && store.isActive);
}

export function getStorePageCopy(slug: StoreCategorySlug = 'all') {
  const category = getStoreCategoryBySlug(slug);
  const visibleStores = getStoresByCategory(slug);

  return {
    breadcrumbLabel: category.label,
    title: category.label,
    description: category.description,
    helperText: category.helperText,
    countText:
      slug === 'all'
        ? `총 ${visibleStores.length}개의 점포`
        : `${category.label} 카테고리의 점포 ${visibleStores.length}곳`,
  };
}
