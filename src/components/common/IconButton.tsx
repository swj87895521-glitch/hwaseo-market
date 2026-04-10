export function IconButton({ label, children }: { label: string; children: React.ReactNode }) {
  return <button className="icon-btn" aria-label={label}>{children}</button>;
}
