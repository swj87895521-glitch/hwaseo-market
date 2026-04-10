import { storeProductGroups } from '@/content/stores/storeProductGroups';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { StoreProductGroup } from '@/components/stores/StoreProductGroup';

export function StoreAndProductSection() {
  const groups = storeProductGroups.filter((item) => item.isActive).sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section className="section">
      <Container>
        <SectionHeader eyebrow="🔥 STORE + PRODUCT" title="점포와 대표 상품을 함께 소개합니다" actionLabel="상품 보러가기" href="/products" />
        <div className="store-product-feed">
          {groups.map((group) => <StoreProductGroup key={group.id} group={group} />)}
        </div>
      </Container>
    </section>
  );
}
