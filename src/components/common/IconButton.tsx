export function IconButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button type="button" className="icon-btn" aria-label={label}>
      {children}
    </button>
  );
}
