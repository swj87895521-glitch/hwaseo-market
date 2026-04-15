import { cn } from '@/lib/utils/cn';

export function StoreInfoPanel({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('store-info-panel', className)}>
      <h2 className="store-info-panel__title">{title}</h2>
      <div className="store-info-panel__content">{children}</div>
    </section>
  );
}
