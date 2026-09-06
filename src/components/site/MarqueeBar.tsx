import { Link } from "@tanstack/react-router";

type MarqueeItem = {
  label: string;
  to?: string;
  category?: string;
};

const defaultItems: MarqueeItem[] = [
  { label: "CUSTOM T-SHIRTS", to: "/products/$category", category: "apparel" },
  { label: "PREMIUM POLOS", to: "/products/$category", category: "apparel" },
  { label: "HOODIES", to: "/products/$category", category: "apparel" },
  { label: "CUSTOM BOTTLES", to: "/products/$category", category: "drinkware" },
  { label: "TUMBLERS WITH CUSTOM LOGO", to: "/products/$category", category: "drinkware" },
  { label: "WOVEN BAGS", to: "/products/$category", category: "bags" },
  { label: "NON-WOVEN BAGS", to: "/products/$category", category: "bags" },
  { label: "CUSTOM LANYARDS", to: "/products/$category", category: "promotional-items" },
  { label: "STRESS BALLS", to: "/products/$category", category: "promotional-items" },
  { label: "CUSTOM NOTEBOOKS", to: "/products/$category", category: "promotional-items" },
  { label: "CUSTOM PATCHES", to: "/products/$category", category: "patches-badges" },
  { label: "WORKWEAR", to: "/products/$category", category: "workwear" },
  { label: "GARMENT LABELS", to: "/products/$category", category: "garment-labels" },
];

export function MarqueeBar({
  items = defaultItems,
  dark = false,
}: {
  items?: MarqueeItem[];
  dark?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className={dark ? "marquee-shell marquee-shell-dark" : "marquee-shell"}
      aria-label="Popular product categories"
    >
      <div className="marquee-track">
        {doubled.map((item, index) => {
          const content = (
            <>
              <span className="marquee-dot" aria-hidden="true" />
              <span className="marquee-label">{item.label}</span>
            </>
          );

          return item.to && item.category ? (
            <Link
              key={`${item.label}-${index}`}
              to={item.to}
              params={{ category: item.category }}
              className="marquee-item"
              tabIndex={index >= items.length ? -1 : 0}
              aria-hidden={index >= items.length ? true : undefined}
            >
              {content}
            </Link>
          ) : (
            <span
              key={`${item.label}-${index}`}
              className="marquee-item"
              aria-hidden={index >= items.length ? true : undefined}
            >
              {content}
            </span>
          );
        })}
      </div>
    </div>
  );
}
