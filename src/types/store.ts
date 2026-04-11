export type StoreCategorySlug =
  | 'all'
  | 'fish'
  | 'vegetable'
  | 'oil'
  | 'meat'
  | 'general';

export type StoreCategory = Exclude<StoreCategorySlug, 'all'>;

export type StoreCategoryLabel =
  | '전체상품'
  | '수산'
  | '야채'
  | '기름'
  | '육류'
  | '가게';

export type StoreCategoryName = Exclude<StoreCategoryLabel, '전체상품'>;

export type StoreCategoryItem = {
  slug: StoreCategorySlug;
  label: StoreCategoryLabel;
  description: string;
  helperText: string;
};

export type StoreFeaturedProduct = {
  id: string;
  name: string;
  summary: string;
  badge: string;
  image: string;
};

export type Store = {
  id: string;
  slug: string;
  name: string;
  category: StoreCategoryName;
  categorySlug: StoreCategory;
  intro: string;
  location: string;
  locationLabel: string;
  tags: string[];
  badges: string[];
  ownerStory: string;
  storeStory: string[];
  featuredProducts: StoreFeaturedProduct[];
  image: string;
  isActive: boolean;
  shortDescription?: string;
  addressText?: string;
  locationText?: string;
  thumbnail?: string;
  markerId?: string;
  featuredProductIds?: string[];
};
