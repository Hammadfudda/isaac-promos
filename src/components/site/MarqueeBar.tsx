import { Link } from "@tanstack/react-router";

const items = [
  ["CUSTOM T-SHIRTS", "apparel"],
  ["PREMIUM POLOS", "apparel"],
  ["HOODIES", "apparel"],
  ["CUSTOM BOTTLES", "drinkware"],
  ["TUMBLERS WITH CUSTOM LOGO", "drinkware"],
  ["WOVEN BAGS", "bags"],
  ["NON-WOVEN BAGS", "bags"],
  ["CUSTOM LANYARDS", "promotional-items"],
  ["STRESS BALLS", "promotional-items"],
  ["CUSTOM NOTEBOOKS", "promotional-items"],
  ["CUSTOM PATCHES", "patches-badges"],
  ["WORKWEAR", "workwear"],
  ["GARMENT LABELS", "garment-labels"],
] as const;

export function MarqueeBar({ dark = false }: { dark?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div
      className={dark ? "marquee-shell marquee-shell-dark" : "marquee-shell"}
      aria-label="Popular Izaac Promos product categories"
    >
      <div className="marquee-track">
        {doubled.map(([label, category], index) => (
          <Link
            key={`${label}-${index}`}
            to="/products/$category"
            params={{ category }}
            className="marquee-item"
            tabIndex={index >= items.length ? -1 : 0}
            aria-hidden={index >= items.length ? true : undefined}
          >
            <span className="marquee-dot" aria-hidden="true" />
            <span className="marquee-label">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
