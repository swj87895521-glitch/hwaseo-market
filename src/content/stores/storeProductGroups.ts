import type { StoreProductGroup } from '@/types/storeProductGroup';

export const storeProductGroups: StoreProductGroup[] = [
  {
    id: 'group-1',
    storeId: 'store-vegetable',
    title: '오늘 사야 하는 제철 채소',
    summary: '점포 소개와 대표 상품을 한 번에 보여주는 홈 핵심 섹션입니다.',
    productIds: ['product-tomato', 'product-tangerine'],
    ctaLabel: '점포 보러가기',
    ctaLink: '/stores/hwaseo-vegetable',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: 'group-2',
    storeId: 'store-fish',
    title: '지금 가장 신선한 수산물',
    summary: '온라인 주문과 오프라인 방문을 동시에 유도합니다.',
    productIds: ['product-oyster', 'product-shrimp'],
    ctaLabel: '수산 점포 보기',
    ctaLink: '/stores/hwaseo-fish',
    displayOrder: 2,
    isActive: true,
  },
  {
    id: 'group-3',
    storeId: 'store-oil',
    title: '시장 신뢰를 담은 가공식품',
    summary: '스토리형 소개와 구매 CTA를 함께 묶었습니다.',
    productIds: ['product-sesameoil', 'product-doenjang'],
    ctaLabel: '기름집 보기',
    ctaLink: '/stores/hwaseo-oil',
    displayOrder: 3,
    isActive: true,
  },
];
