import Link from 'next/link';

export function SectionHeader({ eyebrow, title, href, actionLabel }: { eyebrow?: string; title: string; href?: string; actionLabel?: string }) {
  return (
    <div className="section-header">
      <div>
        {eyebrow ? <div className="section-label">{eyebrow}</div> : null}
        <h2 className="section-title">{title}</h2>
      </div>
      {href && actionLabel ? <Link href={href} className="view-all">{actionLabel}</Link> : null}
    </div>
  );
}
