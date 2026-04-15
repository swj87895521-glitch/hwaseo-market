import type { EventBanner } from '@/types/eventBanner';
import type {
  MarketMapCategorySummary,
  MarketMapFilterOption,
  MarketMapMarker,
} from '@/types/mapMarker';
import type { Notice } from '@/types/notice';
import type { Product } from '@/types/product';
import type { Store, StoreCategoryItem } from '@/types/store';
import type { StoreProductGroup } from '@/types/storeProductGroup';

export type ContentShapeInput = {
  eventBanners: EventBanner[];
  marketMapCategorySummaries: Record<string, MarketMapCategorySummary>;
  marketMapFilters: MarketMapFilterOption[];
  marketMapMarkers: MarketMapMarker[];
  noticeItems: Notice[];
  products: Product[];
  storeCategories: StoreCategoryItem[];
  storeProductGroups: StoreProductGroup[];
  stores: Store[];
};

const publicRoutes = new Set([
  '/',
  '/about',
  '/coupon',
  '/events',
  '/notices',
  '/products',
  '/stores',
  '/visit-guide',
]);

function pushError(errors: string[], message: string) {
  errors.push(`- ${message}`);
}

function assertUnique(values: string[], label: string, errors: string[]) {
  const seen = new Set<string>();

  for (const value of values) {
    if (seen.has(value)) {
      pushError(errors, `${label} contains a duplicate value: ${value}`);
      continue;
    }

    seen.add(value);
  }
}

export function validateContentShape(input: ContentShapeInput) {
  const errors: string[] = [];
  const activeStores = input.stores.filter((store) => store.isActive);
  const activeStoreIds = new Set(activeStores.map((store) => store.id));
  const activeStoreSlugs = new Set(activeStores.map((store) => store.slug));
  const activeStoreNames = new Set(activeStores.map((store) => store.name));
  const activeStoreCategorySlugs = new Set(
    input.storeCategories.map((category) => category.slug),
  );
  const featuredStoreProductIds = new Set(
    input.stores.flatMap((store) =>
      store.featuredProducts.map((product) => product.id),
    ),
  );

  assertUnique(
    input.stores.map((store) => store.id),
    'stores.id',
    errors,
  );
  assertUnique(
    input.stores.map((store) => store.slug),
    'stores.slug',
    errors,
  );
  assertUnique(
    input.products.map((product) => product.id),
    'products.id',
    errors,
  );
  assertUnique(
    input.products.map((product) => product.slug),
    'products.slug',
    errors,
  );
  assertUnique(
    input.eventBanners.map((banner) => banner.id),
    'eventBanners.id',
    errors,
  );
  assertUnique(
    input.eventBanners.map((banner) => String(banner.displayOrder)),
    'eventBanners.displayOrder',
    errors,
  );
  assertUnique(
    input.storeProductGroups.map((group) => group.id),
    'storeProductGroups.id',
    errors,
  );
  assertUnique(
    input.storeProductGroups.map((group) => String(group.displayOrder)),
    'storeProductGroups.displayOrder',
    errors,
  );
  assertUnique(
    input.marketMapMarkers.map((marker) => marker.id),
    'marketMapMarkers.id',
    errors,
  );
  assertUnique(
    input.noticeItems.map((notice) => notice.id),
    'noticeItems.id',
    errors,
  );
  assertUnique(
    input.noticeItems.map((notice) => notice.slug),
    'noticeItems.slug',
    errors,
  );

  for (const store of activeStores) {
    if (!activeStoreCategorySlugs.has(store.categorySlug)) {
      pushError(
        errors,
        `store ${store.id} uses unknown category slug: ${store.categorySlug}`,
      );
    }

    if (!store.featuredProducts.length) {
      pushError(
        errors,
        `store ${store.id} must expose at least one featured product`,
      );
    }
  }

  for (const product of input.products.filter((item) => item.isActive)) {
    if (!activeStoreIds.has(product.storeId)) {
      pushError(
        errors,
        `product ${product.id} references missing active store id: ${product.storeId}`,
      );
    }
  }

  for (const banner of input.eventBanners.filter((item) => item.isActive)) {
    if (!banner.ctaLink.startsWith('/')) {
      pushError(
        errors,
        `event banner ${banner.id} has a non-local CTA link: ${banner.ctaLink}`,
      );
      continue;
    }

    if (!publicRoutes.has(banner.ctaLink)) {
      pushError(
        errors,
        `event banner ${banner.id} points to unsupported CTA route: ${banner.ctaLink}`,
      );
    }
  }

  for (const group of input.storeProductGroups.filter((item) => item.isActive)) {
    if (!activeStoreSlugs.has(group.storeSlug)) {
      pushError(
        errors,
        `storeProductGroup ${group.id} references unknown store slug: ${group.storeSlug}`,
      );
    }

    for (const productId of group.featuredProductIds) {
      if (!featuredStoreProductIds.has(productId)) {
        pushError(
          errors,
          `storeProductGroup ${group.id} references unknown featured product id: ${productId}`,
        );
      }
    }
  }

  for (const marker of input.marketMapMarkers) {
    if (!activeStoreNames.has(marker.name)) {
      pushError(
        errors,
        `marketMapMarker ${marker.id} references unknown store name: ${marker.name}`,
      );
    }

    if (!(marker.category in input.marketMapCategorySummaries)) {
      pushError(
        errors,
        `marketMapMarker ${marker.id} uses unknown category summary key: ${marker.category}`,
      );
    }
  }

  const missingMarkerFilters = Object.keys(
    input.marketMapCategorySummaries,
  ).filter(
    (category) =>
      !input.marketMapFilters.some((filterOption) => filterOption.value === category),
  );

  if (!input.marketMapFilters.some((filterOption) => filterOption.value === 'All')) {
    pushError(errors, 'marketMapFilters must include the All option');
  }

  if (missingMarkerFilters.length) {
    pushError(
      errors,
      `marketMapFilters missing categories: ${missingMarkerFilters.join(', ')}`,
    );
  }

  for (const notice of input.noticeItems.filter((item) => item.isActive)) {
    if (!notice.content.length) {
      pushError(
        errors,
        `notice ${notice.id} must include at least one content paragraph`,
      );
    }
  }

  return errors;
}
