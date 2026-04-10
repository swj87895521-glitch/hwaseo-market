import { Badge } from '@/components/ui/Badge';

export function ProductBadge({ label }: { label: string }) {
  const tone = label === 'NEW' ? 'secondary' : 'primary';
  return <Badge tone={tone}>{label}</Badge>;
}
