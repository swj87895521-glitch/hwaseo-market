import type { TrustItem } from '@/types/trustItem';

export const trustItems: TrustItem[] = [
  { id: 'trust-1', icon: '🚚', title: '수원 전지역 당일배송', description: '오후 2시 이전 주문 시', tone: 'primary', link: '/visit-guide', isActive: true },
  { id: 'trust-2', icon: '🥬', title: '산지 직송 신선함', description: '믿을 수 있는 품질', tone: 'secondary', link: '/about', isActive: true },
  { id: 'trust-3', icon: '🛡️', title: '안전 결제 보장', description: 'SSL 암호화 보안', tone: 'primary', link: '/about', isActive: true },
  { id: 'trust-4', icon: '♻️', title: '친환경 포장재', description: '지구를 생각합니다', tone: 'secondary', link: '/about', isActive: true },
];
