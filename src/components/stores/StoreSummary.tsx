export function StoreSummary({
  countText,
  helperText,
  activeLabel,
}: {
  countText: string;
  helperText: string;
  activeLabel: string;
}) {
  return (
    <div className="store-summary">
      <div>
        <p className="store-summary__count">{countText}</p>
        <p className="store-summary__helper">{helperText}</p>
      </div>
      <div className="store-summary__chip">{activeLabel}</div>
    </div>
  );
}
