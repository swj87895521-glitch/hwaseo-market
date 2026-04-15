import Link from 'next/link';

type IconButtonProps = {
  label: string;
  children: React.ReactNode;
  href?: string;
};

export function IconButton({ label, children, href }: IconButtonProps) {
  if (href) {
    return (
      <Link href={href} className="icon-btn" aria-label={label}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className="icon-btn" aria-label={label}>
      {children}
    </button>
  );
}