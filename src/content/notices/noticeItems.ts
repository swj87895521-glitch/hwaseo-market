import type { Notice } from '@/types/notice';

export const noticeItems: Notice[] = [
  { id: 'notice-1', title: '설 연휴 배송 안내', dateText: '2026.01.15', isImportant: true, link: '/notices', isActive: true },
  { id: 'notice-2', title: '화서시장 온라인몰 리뉴얼 오픈!', dateText: '2026.01.10', isImportant: true, link: '/notices', isActive: true },
  { id: 'notice-3', title: '신규 회원 가입 혜택 안내', dateText: '2026.01.05', isImportant: false, link: '/notices', isActive: true },
  { id: 'notice-4', title: '1월 베스트 상품 발표', dateText: '2026.01.02', isImportant: false, link: '/notices', isActive: true },
];
