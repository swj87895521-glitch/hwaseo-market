import type { Notice } from '@/types/notice';

export const noticeItems: Notice[] = [
  {
    id: 'notice-1',
    slug: 'seollal-delivery-guide',
    title: '[중요] 설 연휴 배송 안내',
    summary: '설 연휴 전후 배송 일정과 마감 일정을 안내드립니다.',
    content: [
      '설 연휴 기간 동안 일부 택배사의 집하 일정이 조정됩니다.',
      '연휴 이전 수령이 필요한 주문은 마감일 이전까지 접수해 주세요.',
      '자세한 일정은 추후 추가 공지를 통해 다시 안내드리겠습니다.',
    ],
    createdAt: '2026-03-23',
    views: 1245,
    isPinned: true,
    isActive: true,
  },
  {
    id: 'notice-2',
    slug: 'renewal-open',
    title: '화서시장 온라인몰 리뉴얼 오픈!',
    summary: '화서시장 온라인몰이 새롭게 단장해 오픈했습니다.',
    content: [
      '화서시장 온라인몰이 더 깔끔한 화면과 쉬운 탐색 구조로 새롭게 오픈했습니다.',
      '시장 소식, 점포 소개, 대표 상품을 더 편하게 확인하실 수 있습니다.',
      '앞으로도 다양한 소식과 혜택을 순차적으로 업데이트할 예정입니다.',
    ],
    createdAt: '2026-03-23',
    views: 3456,
    isPinned: true,
    isActive: true,
  },
  {
    id: 'notice-3',
    slug: 'new-member-benefit',
    title: '신규 회원 가입 혜택 안내',
    summary: '신규 회원을 위한 기본 혜택을 안내드립니다.',
    content: [
      '신규 회원 가입 시 사용 가능한 기본 혜택과 이벤트 정보를 안내드립니다.',
      '자세한 지급 조건은 이벤트 운영 정책에 따라 달라질 수 있습니다.',
    ],
    createdAt: '2026-03-23',
    views: 892,
    isPinned: false,
    isActive: true,
  },
  {
    id: 'notice-4',
    slug: 'january-best-products',
    title: '1월 베스트 상품 발표',
    summary: '고객 반응이 좋았던 1월 인기 상품을 소개합니다.',
    content: [
      '1월 동안 고객 반응이 좋았던 대표 상품들을 정리해 소개합니다.',
      '시즌성과 재구매율을 기준으로 주요 상품을 선정했습니다.',
    ],
    createdAt: '2026-03-23',
    views: 567,
    isPinned: false,
    isActive: true,
  },
  {
    id: 'notice-5',
    slug: 'delivery-delay-notice',
    title: '택배 파업 관련 배송 지연 안내',
    summary: '일부 지역 배송 지연 가능성을 안내드립니다.',
    content: [
      '택배사 운영 상황에 따라 일부 지역은 배송이 평소보다 지연될 수 있습니다.',
      '주문 후 출고 및 이동 상황은 순차적으로 안내드리겠습니다.',
    ],
    createdAt: '2026-03-23',
    views: 234,
    isPinned: false,
    isActive: true,
  },
];

export function formatNoticeDate(date: string) {
  const [year, month, day] = date.split('-');
  return `${year}. ${Number(month)}. ${Number(day)}.`;
}

export const sortedNoticeItems = [...noticeItems]
  .filter((item) => item.isActive)
  .sort((a, b) => {
    if (a.isPinned !== b.isPinned) {
      return a.isPinned ? -1 : 1;
    }

    return b.createdAt.localeCompare(a.createdAt) || b.id.localeCompare(a.id);
  });

export function getNoticeBySlug(slug: string) {
  return noticeItems.find((item) => item.slug === slug && item.isActive);
}
