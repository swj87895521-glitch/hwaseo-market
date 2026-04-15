import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export function Button({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <Link href={href} className={cn('button', className)}>{children}</Link>;
}
