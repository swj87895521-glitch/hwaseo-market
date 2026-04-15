import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'product-tomato', slug: 'tomato', storeId: 'store-vegetable-main', category: '채소·과일',
    name: '유기농 완숙 토마토', price: 12000, originalPrice: 15000, unitText: '/ 1kg',
    thumbnail: 'https://picsum.photos/seed/tomato/400/400', badgeLabels: ['BEST'], tagLabels: ['#유기농', '#산지직송'], isFeatured: true, isNew: false, isActive: true,
  },
  {
    id: 'product-tangerine', slug: 'tangerine', storeId: 'store-vegetable-main', category: '채소·과일',
    name: '제주 감귤 직송 달콤한 제철 귤', price: 18000, originalPrice: 22000, unitText: '/ 3kg',
    thumbnail: 'https://picsum.photos/seed/tangerine/400/400', badgeLabels: ['NEW'], tagLabels: ['#제주산', '#직송'], isFeatured: true, isNew: true, isActive: true,
  },
  {
    id: 'product-oyster', slug: 'oyster', storeId: 'store-fish-main', category: '수산물',
    name: '생굴 (제철) 통영 청정해역 직송', price: 25000, originalPrice: 30000, unitText: '/ 1kg',
    thumbnail: 'https://picsum.photos/seed/oyster/400/400', badgeLabels: ['BEST'], tagLabels: ['#통영산', '#제철'], isFeatured: true, isNew: false, isActive: true,
  },
  {
    id: 'product-shrimp', slug: 'shrimp', storeId: 'store-fish-main', category: '수산물',
    name: '생새우 서해 직송', price: 32000, unitText: '',
    thumbnail: 'https://picsum.photos/seed/shrimp/400/400', badgeLabels: ['NEW'], tagLabels: ['#서해직송'], isFeatured: true, isNew: true, isActive: true,
  },
  {
    id: 'product-sesameoil', slug: 'sesame-oil', storeId: 'store-oil-main', category: '가공식품',
    name: '국산 참깨 100% 압착 참기름', price: 22000, originalPrice: 25000, unitText: '',
    thumbnail: 'https://picsum.photos/seed/sesameoil/400/400', badgeLabels: ['NEW'], tagLabels: ['#국산참깨'], isFeatured: true, isNew: true, isActive: true,
  },
  {
    id: 'product-doenjang', slug: 'doenjang', storeId: 'store-oil-main', category: '특산품',
    name: '화서시장 2년 숙성 재래식 된장', price: 20000, unitText: '/ 1kg',
    thumbnail: 'https://picsum.photos/seed/doenjang/400/400', badgeLabels: ['BEST'], tagLabels: ['#재래식'], isFeatured: true, isNew: false, isActive: true,
  },
];
