import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { NavBar } from '@/components/layout/NavBar';
import { TopBar } from '@/components/layout/TopBar';
import {
  formatNoticeDate,
  getNoticeBySlug,
  noticeItems,
} from '@/content/notices/noticeItems';
import { Container } from '@/components/ui/Container';

export function generateStaticParams() {
  return noticeItems
    .filter((item) => item.isActive)
    .map((item) => ({ slug: item.slug }));
}

export default function NoticeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const notice = getNoticeBySlug(params.slug);

  if (!notice) {
    notFound();
  }

  return (
    <>
      <TopBar />
      <Header />
      <NavBar />
      <main className="notice-detail-page">
        <Container className="notice-detail-page__container">
          <nav className="notices-breadcrumb" aria-label="breadcrumb">
            <span>홈</span>
            <span aria-hidden="true">›</span>
            <span>고객센터</span>
            <span aria-hidden="true">›</span>
            <Link href="/notices">공지사항</Link>
          </nav>

          <article className="notice-detail-card">
            <header className="notice-detail-card__header">
              <div className="notice-detail-card__meta">
                {notice.isPinned ? (
                  <span className="notice-chip">필독</span>
                ) : null}
                <span>{formatNoticeDate(notice.createdAt)}</span>
                <span>조회 {notice.views}</span>
              </div>
              <h1 className="notice-detail-card__title">{notice.title}</h1>
              <p className="notice-detail-card__summary">{notice.summary}</p>
            </header>

            <div className="notice-detail-card__body">
              {notice.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="notice-detail-card__actions">
              <Link href="/notices" className="notice-back-link">
                목록으로 돌아가기
              </Link>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
