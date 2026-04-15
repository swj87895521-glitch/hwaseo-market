import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { NavBar } from '@/components/layout/NavBar';
import { TopBar } from '@/components/layout/TopBar';
import { CouponRegisterForm } from '@/components/coupon/CouponRegisterForm';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { mockViewer } from '@/mocks/viewer';

export default function CouponPage() {
  return (
    <>
      <TopBar />
      <Header />
      <NavBar />
      <main className="coupon-page">
        <Container className="coupon-page__container">
          <section className="coupon-hero card">
            <div className="coupon-hero__content">
              <p className="coupon-hero__eyebrow">오프라인 영수증 연동</p>
              <h1 className="coupon-hero__title">영수증 코드로 온라인 쿠폰을 등록하세요</h1>
              <p className="coupon-hero__description">시장 오프라인 구매 경험을 온라인 혜택으로 이어주는 쿠폰 등록 페이지입니다. 영수증 하단 코드를 직접 입력해 쿠폰을 받아보세요.</p>
            </div>
          </section>

          {mockViewer.isLoggedIn ? (
            <section className="coupon-section">
              <CouponRegisterForm />
            </section>
          ) : (
            <section className="login-gate">
              <div className="login-gate__panel">
                <p className="login-gate__eyebrow">로그인 필요</p>
                <h2 className="login-gate__title">로그인 후 쿠폰을 등록할 수 있습니다</h2>
                <p className="login-gate__desc">로그인 후 현재 페이지로 복귀해 영수증 코드를 등록하는 흐름을 전제로 UI를 준비했습니다.</p>
                <Button href="/mypage">마이페이지 보기</Button>
              </div>
            </section>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}