export type EventBanner = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  ctaLabel: string;
  ctaLink: string;
  eventType: 'coupon' | 'event' | 'special' | 'benefit' | 'season';
  isActive: boolean;
  displayOrder: number;
};
