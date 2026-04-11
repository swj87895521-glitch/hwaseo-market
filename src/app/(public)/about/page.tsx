import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { NavBar } from '@/components/layout/NavBar';
import { TopBar } from '@/components/layout/TopBar';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { aboutPageContent } from '@/content/about/aboutPage';

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Header />
      <NavBar />
      <main className="about-page">
        <section className="about-page__hero">
          <Container className="about-page__hero-inner">
            <nav className="about-breadcrumb" aria-label="breadcrumb">
              <span>홈</span>
              <span aria-hidden="true">/</span>
              <strong>시장소개</strong>
            </nav>

            <div className="about-page__hero-grid">
              <div className="about-page__hero-copy">
                <h1 className="about-page__title">
                  {aboutPageContent.heroTitle}
                </h1>
                <p className="about-page__description">
                  {aboutPageContent.heroDescription}
                </p>
              </div>

              <div className="about-page__intro-card">
                {aboutPageContent.introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="about-page__section">
          <Container className="about-value">
            <div className="about-section-heading">
              <p className="about-section-heading__eyebrow">MARKET STORY</p>
              <h2 className="about-section-heading__title">
                {aboutPageContent.marketValue.title}
              </h2>
            </div>
            <div className="about-value__content">
              {aboutPageContent.marketValue.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </section>

        <section className="about-page__section">
          <Container>
            <div className="about-section-heading">
              <p className="about-section-heading__eyebrow">WHAT TO FIND</p>
              <h2 className="about-section-heading__title">
                화서시장에서 만날 수 있는 것
              </h2>
            </div>

            <div className="about-card-grid">
              {aboutPageContent.valueCards.map((item) => (
                <article key={item.title} className="about-card">
                  <h3 className="about-card__title">{item.title}</h3>
                  <p className="about-card__description">{item.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="about-page__section">
          <Container>
            <div className="about-section-heading">
              <p className="about-section-heading__eyebrow">GUIDE</p>
              <h2 className="about-section-heading__title">시장 이용 안내</h2>
            </div>

            <div className="about-guide-grid">
              {aboutPageContent.guideItems.map((item) => (
                <article key={item.title} className="about-guide-card">
                  <h3 className="about-guide-card__title">{item.title}</h3>
                  <p className="about-guide-card__description">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="about-page__section about-page__section--cta">
          <Container className="about-cta-grid">
            <article className="about-cta-card">
              <p className="about-section-heading__eyebrow">STORES</p>
              <h2 className="about-cta-card__title">
                {aboutPageContent.ctaSections.stores.title}
              </h2>
              <p className="about-cta-card__description">
                {aboutPageContent.ctaSections.stores.description}
              </p>
              <Button href={aboutPageContent.ctaSections.stores.href}>
                {aboutPageContent.ctaSections.stores.label}
              </Button>
            </article>

            <article className="about-cta-card is-soft">
              <p className="about-section-heading__eyebrow">MARKET MAP</p>
              <h2 className="about-cta-card__title">
                {aboutPageContent.ctaSections.map.title}
              </h2>
              <p className="about-cta-card__description">
                {aboutPageContent.ctaSections.map.description}
              </p>
              <Button
                href={aboutPageContent.ctaSections.map.href}
                className="about-cta-card__button-secondary"
              >
                {aboutPageContent.ctaSections.map.label}
              </Button>
            </article>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
