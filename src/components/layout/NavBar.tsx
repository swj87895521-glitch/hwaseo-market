import Link from 'next/link';
import { primaryNavigation } from '@/content/navigation/categories';
import { Container } from '@/components/ui/Container';

export function NavBar() {
  return (
    <div className="nav-bar">
      <Container className="nav-bar__inner">
        <nav className="category-nav" aria-label="주요 메뉴">
          {primaryNavigation.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={index === 0 ? 'category-nav__all' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  );
}
