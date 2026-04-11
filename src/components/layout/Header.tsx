import Link from 'next/link';
import { IconButton } from '@/components/common/IconButton';
import { SearchForm } from '@/components/common/SearchForm';
import { Container } from '@/components/ui/Container';

export function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="header-main">
          <Link href="/" className="logo" aria-label="화서시장 홈">
            <img
              className="logo-mark logo-mark--text"
              src="/images/logos/hwaseo-market-logo-text.png"
              alt="화서시장 로고"
            />
          </Link>
          <SearchForm />
          <div className="header-actions">
            <IconButton label="마이페이지">
              <img
                src="/images/icons/icon-mypage.png"
                alt=""
                aria-hidden="true"
              />
            </IconButton>
            <IconButton label="장바구니">
              <img
                src="/images/icons/icon-cart.png"
                alt=""
                aria-hidden="true"
              />
            </IconButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
