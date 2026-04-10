import Link from 'next/link';
import { SearchForm } from '@/components/common/SearchForm';
import { IconButton } from '@/components/common/IconButton';
import { Container } from '@/components/ui/Container';

export function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="header-main">
          <Link href="/" className="logo">
            <div className="logo-icon">🏪</div>
            <div className="logo-text">
              <span className="logo-name">화서시장</span>
              <span className="logo-sub">공식 온라인몰</span>
            </div>
          </Link>
          <SearchForm />
          <div className="header-actions">
            <IconButton label="내 계정">👤</IconButton>
            <IconButton label="장바구니">🛒</IconButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
