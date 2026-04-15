import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { NavBar } from '@/components/layout/NavBar';
import { TopBar } from '@/components/layout/TopBar';
import { NoticeList } from '@/components/notices/NoticeList';
import { Container } from '@/components/ui/Container';

export default function NoticesPage() {
  return (
    <>
      <TopBar />
      <Header />
      <NavBar />
      <main className="notices-page">
        <section className="notices-page__hero">
          <Container>
            <nav className="notices-breadcrumb" aria-label="breadcrumb">
              <span>홈</span>
              <span aria-hidden="true">›</span>
              <span>고객센터</span>
              <span aria-hidden="true">›</span>
              <strong>공지사항</strong>
            </nav>
            <h1 className="notices-page__title">공지사항</h1>
            <p className="notices-page__description">
              화서시장의 새로운 소식과 유용한 정보를 확인하세요.
            </p>
          </Container>
        </section>

        <section className="notices-page__content">
          <Container className="notices-page__content-inner">
            <NoticeList variant="page" />
            <div className="notice-pagination" aria-label="pagination">
              <button
                type="button"
                className="notice-pagination__btn"
                aria-label="이전 페이지"
              >
                {'<'}
              </button>
              <button
                type="button"
                className="notice-pagination__btn is-active"
                aria-current="page"
              >
                1
              </button>
              <button type="button" className="notice-pagination__btn">
                2
              </button>
              <button type="button" className="notice-pagination__btn">
                3
              </button>
              <button
                type="button"
                className="notice-pagination__btn"
                aria-label="다음 페이지"
              >
                {'>'}
              </button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
