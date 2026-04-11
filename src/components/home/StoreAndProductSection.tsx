import { SectionHeader } from '@/components/common/SectionHeader';
import { StoreProductGroup } from '@/components/stores/StoreProductGroup';
import { Container } from '@/components/ui/Container';
import { storeProductGroups } from '@/content/stores/storeProductGroups';

export function StoreAndProductSection() {
  const groups = storeProductGroups
    .filter((item) => item.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="STORE + PRODUCT"
          title="점포와 대표 상품을 함께 소개합니다"
          actionLabel="점포 전체 보기"
          href="/stores"
        />
        <div className="store-product-feed">
          {groups.map((group) => (
            <StoreProductGroup key={group.id} group={group} />
          ))}
        </div>
      </Container>
    </section>
  );
}
