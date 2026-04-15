export function BadgeProgressBar({ value, max, label }: { value: number; max: number; label: string }) {
  const safeMax = Math.max(max, 1);
  const width = Math.min((value / safeMax) * 100, 100);

  return (
    <div className="badge-progress" aria-label={label}>
      <div className="badge-progress__track">
        <div className="badge-progress__fill" style={{ width: `${width}%` }} />
      </div>
      <div className="badge-progress__meta">
        <span>{label}</span>
        <strong>{value} / {max}</strong>
      </div>
    </div>
  );
}