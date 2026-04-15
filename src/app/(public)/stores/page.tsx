import { StoreCatalogPage } from '@/components/stores/StoreCatalogPage';
import { isStoreCategorySlug } from '@/content/stores/stores';
import type { StoreCategorySlug } from '@/types/store';

export default function StoresPage({
  searchParams,
}: {
  searchParams?: { category?: string | string[] };
}) {
  const requestedCategory = Array.isArray(searchParams?.category)
    ? searchParams?.category[0]
    : searchParams?.category;
  const activeCategory: StoreCategorySlug = isStoreCategorySlug(
    requestedCategory,
  )
    ? requestedCategory
    : 'all';

  return <StoreCatalogPage activeCategory={activeCategory} />;
}
