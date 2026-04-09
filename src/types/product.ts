export type Product = {
  id: string;
  slug: string;
  storeId: string;
  category: string;
  name: string;
  price: number;
  originalPrice?: number;
  unitText?: string;
  thumbnail: string;
  badgeLabels: string[];
  tagLabels: string[];
  isFeatured: boolean;
  isNew: boolean;
  isActive: boolean;
};
