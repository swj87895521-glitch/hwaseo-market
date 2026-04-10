'use client';

import { useEffect, useState } from 'react';
import { eventBanners } from '@/content/banners/eventBanners';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function HeroEventBanner() {
  const activeBanners = eventBanners.filter((item) => item.isActive).sort((a, b) => a.displayOrder - b.displayOrder);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeBanners.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [activeBanners.length]);

  return (
    <section className="hero-banner">
      <div className="hero-banner__track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {activeBanners.map((banner) => (
          <article key={banner.id} className="hero-banner__slide" style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,.65), rgba(0,0,0,.25)), url(${banner.image})` }}>
            <Container>
              <div className="hero-banner__content">
                <p className="hero-banner__tag">{banner.tag}</p>
                <h2 className="hero-banner__title">{banner.title}</h2>
                <p className="hero-banner__subtitle">{banner.subtitle}</p>
                <Button href={banner.ctaLink}>{banner.ctaLabel}</Button>
              </div>
            </Container>
          </article>
        ))}
      </div>
      <div className="hero-banner__dots">
        {activeBanners.map((banner, index) => (
          <button key={banner.id} className={`hero-banner__dot ${index === currentIndex ? 'is-active' : ''}`} onClick={() => setCurrentIndex(index)} aria-label={`${index + 1}번 배너`} />
        ))}
      </div>
    </section>
  );
}
