import { cn } from '@/lib/utils/cn';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <article className={cn('card', className)}>{children}</article>;
}
