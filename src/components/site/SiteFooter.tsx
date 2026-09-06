import { Link } from "@tanstack/react-router";
import logo from "@/assets/isaac-promos-logo.png.asset.json";
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
      { label: "Our Work", to: "/our-work" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Decoration Methods", to: "/decoration-methods" },
      { label: "FAQ", to: "/faq" },
      { label: "Download Product Catalog", to: "/quote" },
      { label: "Get a Quote", to: "/quote" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="container-x py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center bg-background">
                <img
                  src={logo.url}
                  alt="Isaac Promos"
                  width={44}
                  height={44}
                  loading="lazy"
                  className="h-10 w-10 object-contain"
                />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                ISAAC<span className="text-primary">PROMOS</span>
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              Custom merchandise for businesses, organizations, teams and projects of all
              sizes. Tell us the goal and we help build the order around it.
            </p>

            <div className="mt-6 space-y-1 text-sm text-ink-foreground/70">
              <p>Email: [email placeholder]</p>
              <p>Phone: [phone placeholder]</p>
              <p>Serving business buyers across the United States</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Action to="/quote">Get a Quote</Action>
              <Action to="/quote" variant="outline">
                Download Product Catalog
              </Action>
            </div>

            <p className="mt-3 max-w-sm text-xs leading-relaxed text-ink-foreground/55">
              Full product catalog available on request. Tell us what you are sourcing and
              we will send relevant options.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-ink-foreground">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        params={l.params as never}
                        className="text-sm text-ink-foreground/70 transition-colors hover:text-primary"
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

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-foreground/15 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Isaac Promos. All rights reserved.</p>
          <p>Pricing, availability and lead times vary by product and quantity.</p>
        </div>
      </div>
    </footer>
  );
}
