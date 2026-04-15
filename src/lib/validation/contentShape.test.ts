import { describe, expect, it } from 'vitest';

import { eventBanners } from '../../content/banners/eventBanners';
import {
  marketMapCategorySummaries,
  marketMapFilters,
  marketMapMarkers,
} from '../../content/map/mapMarkers';
import { noticeItems } from '../../content/notices/noticeItems';
import { products } from '../../content/products/products';
import { storeProductGroups } from '../../content/stores/storeProductGroups';
import { storeCategories, stores } from '../../content/stores/stores';
import { validateContentShape } from './contentShape';

describe('validateContentShape', () => {
  it('passes for the current repository content model', () => {
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

    expect(errors).toEqual([]);
  });

  it('reports broken store-product references', () => {
    const errors = validateContentShape({
      eventBanners,
      marketMapCategorySummaries,
      marketMapFilters,
      marketMapMarkers,
      noticeItems,
      products: products.map((product, index) =>
        index === 0 ? { ...product, storeId: 'missing-store' } : product,
      ),
      storeCategories,
      storeProductGroups,
      stores,
    });

    expect(errors).toContain(
      '- product product-tomato references missing active store id: missing-store',
    );
  });
});
