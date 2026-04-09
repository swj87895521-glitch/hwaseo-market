import Link from 'next/link';
import { categories } from '@/content/navigation/categories';
import { Container } from '@/components/ui/Container';

export function NavBar() {
  return (
    <div className="nav-bar">
      <Container className="nav-bar__inner">
        <button className="all-cat-btn">전체 카테고리</button>
        <nav className="category-nav">
          {categories.map((category) => (
            <Link key={category} href="/products">{category}</Link>
          ))}
        </nav>
      </Container>
    </div>
  );
}
