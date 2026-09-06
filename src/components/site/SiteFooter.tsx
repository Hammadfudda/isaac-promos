import { Link } from "@tanstack/react-router";
import { Facebook } from "lucide-react";
import { Action } from "./ui";

const columns: {
  title: string;
  links: { label: string; to: string; params?: Record<string, string> }[];
}[] = [
  {
    title: "Products",
    links: [
      { label: "Apparel", to: "/products/$category", params: { category: "apparel" } },
      { label: "Drinkware", to: "/products/$category", params: { category: "drinkware" } },
      { label: "Bags", to: "/products/$category", params: { category: "bags" } },
      {
        label: "Patches & Badges",
        to: "/products/$category",
        params: { category: "patches-badges" },
      },
      { label: "Workwear", to: "/products/$category", params: { category: "workwear" } },
      { label: "Garment Labels", to: "/products/$category", params: { category: "garment-labels" } },
      { label: "All Products", to: "/products" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Employee Uniforms", to: "/solutions" },
      { label: "School & Team Apparel", to: "/solutions" },
      { label: "Event Merchandise", to: "/solutions" },
      { label: "Branded Workwear", to: "/solutions" },
      { label: "Distributor Orders", to: "/solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Decoration Methods", to: "/decoration-methods" },
      { label: "FAQ", to: "/faq" },
      { label: "Get a Quote", to: "/quote" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="container-x py-12 sm:py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div className="min-w-0">
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Izaac Promos home">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-background">
                <img
                  src="/isaac-promos-logo.png"
                  alt="Izaac Promos"
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-12 w-12 object-contain"
                />
              </span>

              <span className="font-display text-lg font-bold tracking-tight">
                IZAAC<span className="text-primary"> PROMOS</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              Custom merchandise for businesses, organizations, teams and projects of all sizes.
            </p>

            <p className="mt-4 text-sm text-ink-foreground/70">
              Serving business buyers across the United States.
            </p>

            <div className="mt-6">
              <Action to="/quote">Get a Quote</Action>
            </div>

            <a
              href="https://www.facebook.com/izaacpromos/"
              target="_blank"
              rel="noreferrer"
              aria-label="Izaac Promos on Facebook"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-ink-foreground/20 text-ink-foreground/75 transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>

          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title} className="min-w-0">
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-ink-foreground">
                  {col.title}
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        params={l.params as never}
                        className="break-words text-sm text-ink-foreground/70 transition-colors hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-foreground/15 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Izaac Promos. All rights reserved.</p>
          <p>Pricing, availability and lead times vary by product and quantity.</p>
        </div>
      </div>
    </footer>
  );
}
