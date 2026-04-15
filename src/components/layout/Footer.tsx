import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>화서시장 공식몰</h2>
            <p>신선함과 정이 넘치는 수원 화서시장의 우수한 상품들을 온라인에서 편하게 만나보세요.</p>
          </div>
          <div className="footer-col">
            <h3>고객센터</h3>
            <div className="footer-phone">1588-0000</div>
            <div className="footer-hours">평일 09:00 - 18:00<br />주말 및 공휴일 휴무</div>
          </div>
          <div className="footer-col">
            <h3>바로가기</h3>
            <div className="footer-links">
              <Link href="/notices">공지사항</Link>
              <Link href="#">이용약관</Link>
              <Link href="#">개인정보처리방침</Link>
              <Link href="#">입점안내</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
