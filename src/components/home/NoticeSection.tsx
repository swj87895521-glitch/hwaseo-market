import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { NoticeList } from '@/components/notices/NoticeList';

export function NoticeSection() {
  return (
    <section className="section">
      <Container>
        <div className="notice-card">
          <div className="notice-card-header">
            <div className="notice-card-title">화서시장 소식</div>
            <Link href="/notices" className="notice-more">더보기</Link>
          </div>
          <NoticeList />
        </div>
      </Container>
    </section>
  );
}
