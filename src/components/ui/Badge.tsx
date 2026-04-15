import { cn } from '@/lib/utils/cn';

export function Badge({ children, tone = 'primary' }: { children: React.ReactNode; tone?: 'primary' | 'secondary' | 'neutral' }) {
  return <span className={cn('badge', `badge--${tone}`)}>{children}</span>;
}
