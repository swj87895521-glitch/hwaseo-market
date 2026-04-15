import Link from 'next/link';
import { NoticeList } from '@/components/notices/NoticeList';
import { Container } from '@/components/ui/Container';

export function NoticeSection() {
  return (
    <section className="section">
      <Container>
        <div className="notice-card">
          <div className="notice-card-header">
            <div className="notice-card-title">화서시장 소식</div>
            <Link href="/notices" className="notice-more">
              더보기
            </Link>
          </div>
          <NoticeList variant="compact" />
        </div>
      </Container>
    </section>
  );
}
