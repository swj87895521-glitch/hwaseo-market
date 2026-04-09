export type StoreProductGroup = {
  id: string;
  storeId: string;
  title: string;
  summary: string;
  productIds: string[];
  ctaLabel: string;
  ctaLink: string;
  displayOrder: number;
  isActive: boolean;
};
