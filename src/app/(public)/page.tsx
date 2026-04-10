import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { NavBar } from '@/components/layout/NavBar';
import { TopBar } from '@/components/layout/TopBar';
import { HeroEventBanner } from '@/components/home/HeroEventBanner';
import { MarketMapSection } from '@/components/home/MarketMapSection';
import { NoticeSection } from '@/components/home/NoticeSection';
import { StoreAndProductSection } from '@/components/home/StoreAndProductSection';
import { TrustSection } from '@/components/home/TrustSection';

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <NavBar />
      <main>
        <HeroEventBanner />
        <MarketMapSection />
        <StoreAndProductSection />
        <NoticeSection />
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}
