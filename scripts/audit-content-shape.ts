import { eventBanners } from '../src/content/banners/eventBanners';
import {
  marketMapCategorySummaries,
  marketMapFilters,
  marketMapMarkers,
} from '../src/content/map/mapMarkers';
import { noticeItems } from '../src/content/notices/noticeItems';
import { products } from '../src/content/products/products';
import { storeProductGroups } from '../src/content/stores/storeProductGroups';
import { storeCategories, stores } from '../src/content/stores/stores';
import { validateContentShape } from '../src/lib/validation/contentShape';

const errors = validateContentShape({
  eventBanners,
  marketMapCategorySummaries,
  marketMapFilters,
  marketMapMarkers,
  noticeItems,
  products,
  storeCategories,
  storeProductGroups,
  stores,
});

if (errors.length) {
  console.error('Content shape audit failed.');
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(
  `Content shape audit passed for ${stores.filter((store) => store.isActive).length} active stores, ${products.filter((item) => item.isActive).length} active products, and ${eventBanners.filter((item) => item.isActive).length} active banners.`,
);
