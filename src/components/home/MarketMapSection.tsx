import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { MarketMap } from '@/components/map/MarketMap';

export function MarketMapSection() {
  return (
    <section className="section">
      <Container>
        <SectionHeader eyebrow="🗺️ MARKET MAP" title="시장 지도 기반 점포 탐색" actionLabel="점포 전체보기" href="/stores" />
        <MarketMap />
      </Container>
    </section>
  );
}
