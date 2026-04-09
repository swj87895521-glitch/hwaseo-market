import Link from 'next/link';
import { trustItems } from '@/content/trust/trustItems';
import { Container } from '@/components/ui/Container';

export function TrustSection() {
  return (
    <section className="section">
      <Container>
        <div className="trust-grid">
          {trustItems.filter((item) => item.isActive).map((item) => (
            <Link key={item.id} href={item.link ?? '#'} className={`trust-card ${item.tone === 'secondary' ? 'trust-card--secondary' : ''}`}>
              <div className="trust-card__icon">{item.icon}</div>
              <div className="trust-card__title">{item.title}</div>
              <div className="trust-card__desc">{item.description}</div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
