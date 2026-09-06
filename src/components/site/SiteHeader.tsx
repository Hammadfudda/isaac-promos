import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/isaac-promos-logo.png.asset.json";
import { Action } from "./ui";
import { cn } from "@/lib/utils";

const megaMenu: {
  category: string;
  slug: string;
  items: { name: string; slug: string }[];
}[] = [
  {
    category: "Apparel",
    slug: "apparel",
    items: [
      { name: "Custom T-Shirts", slug: "custom-t-shirts" },
      { name: "Gildan 2000", slug: "gildan-2000" },
      { name: "Premium Polos", slug: "premium-polos" },
      { name: "Custom Polos", slug: "custom-polos" },
      { name: "Embroidered Polos", slug: "embroidered-polos" },
      { name: "DTF Polos", slug: "dtf-branded-polos" },
      { name: "Hoodies", slug: "custom-hoodies" },
      { name: "Garment Labels", slug: "garment-labels" },
    ],
  },
  {
    category: "Drinkware",
    slug: "drinkware",
    items: [
      { name: "Custom Bottles", slug: "custom-bottles" },
      { name: "Tumblers with Custom Logo", slug: "tumblers" },
    ],
  },
  {
    category: "Promotional Items",
    slug: "promotional-items",
    items: [
      { name: "Pens", slug: "pens" },
      { name: "Keychains", slug: "keychains" },
      { name: "Custom Keychains", slug: "custom-keychains" },
      { name: "Custom Lanyards", slug: "custom-lanyards" },
      { name: "Custom Stress Balls", slug: "custom-stress-balls" },
    ],
  },
  {
    category: "Bags",
    slug: "bags",
    items: [
      { name: "Tote Bags", slug: "tote-bags" },
      { name: "Woven & Non-Woven Bags", slug: "woven-non-woven-bags" },
    ],
  },
  {
    category: "Patches & Badges",
    slug: "patches-badges",
    items: [
      { name: "Leather Patches", slug: "leather-patches" },
      { name: "PVC Patches", slug: "pvc-patches" },
      { name: "Chenille Patches", slug: "chenille-patches" },
      { name: "Embroidery Patches", slug: "embroidery-patches" },
      { name: "PVC Plastic Badges", slug: "pvc-plastic-badges" },
    ],
  },
  {
    category: "Towels",
    slug: "towels",
    items: [
      { name: "Golf Towels", slug: "golf-towels" },
      { name: "Custom Towels", slug: "custom-towels" },
    ],
  },
  {
    category: "Workwear",
    slug: "workwear",
    items: [
      { name: "FR Shirts", slug: "fr-shirts" },
      { name: "Branded Work Shirts", slug: "branded-work-shirts" },
    ],
  },
  {
    category: "Custom Projects",
    slug: "custom-projects",
    items: [],
  },
];

const navLinks = [
  { label: "Solutions", to: "/solutions" },
  { label: "Decoration Methods", to: "/decoration-methods" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Our Work", to: "/our-work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [openMega, setOpenMega] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container-x">
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3" aria-label="Isaac Promos home">
            <img
              src={logo.url}
              alt="Isaac Promos"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="hidden font-display text-lg font-bold leading-none tracking-tight sm:block">
              ISAAC<span className="text-primary">PROMOS</span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 xl:flex"
            onMouseLeave={() => setOpenMega(false)}
          >
            <button
              type="button"
              aria-expanded={openMega}
              onMouseEnter={() => setOpenMega(true)}
              onClick={() => setOpenMega((v) => !v)}
              className={cn(
                "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                openMega && "text-primary",
              )}
            >
              Products
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", openMega && "rotate-180")}
                aria-hidden="true"
              />
            </button>

            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onMouseEnter={() => setOpenMega(false)}
                className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Action to="/quote">Get a Quote</Action>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <Action to="/quote" size="md" className="hidden sm:inline-flex">
              Get a Quote
            </Action>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center border border-border"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {openMega ? (
        <div
          className="absolute inset-x-0 top-full hidden border-b border-border bg-background shadow-[0_24px_48px_-32px_rgba(0,0,0,0.35)] xl:block"
          onMouseEnter={() => setOpenMega(true)}
          onMouseLeave={() => setOpenMega(false)}
        >
          <div className="container-x grid grid-cols-4 gap-8 py-10 animate-in fade-in slide-in-from-top-2 duration-200">
            {megaMenu.map((group) => (
              <div key={group.slug}>
                <Link
                  to="/products/$category"
                  params={{ category: group.slug }}
                  onClick={() => setOpenMega(false)}
                  className="font-display text-sm font-bold uppercase tracking-[0.1em] transition-colors hover:text-primary"
                >
                  {group.category}
                </Link>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to="/products/$category/$product"
                        params={{ category: group.slug, product: item.slug }}
                        onClick={() => setOpenMega(false)}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-4 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Not sure which product fits? Describe the goal and we will recommend options.
              </p>
              <Action to="/quote" variant="dark">
                Get Product Recommendations
              </Action>
            </div>
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <div className="fixed inset-0 top-[72px] z-50 overflow-y-auto bg-background xl:hidden">
          <div className="container-x py-6">
            <p className="eyebrow">Products</p>

            <ul className="mt-3 divide-y divide-border border-y border-border">
              {megaMenu.map((group) => (
                <li key={group.slug}>
                  <div className="flex items-center justify-between">
                    <Link
                      to="/products/$category"
                      params={{ category: group.slug }}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 py-3 font-display text-sm font-semibold"
                    >
                      {group.category}
                    </Link>
                    {group.items.length ? (
                      <button
                        type="button"
                        aria-label={`Expand ${group.category}`}
                        aria-expanded={expanded === group.slug}
                        onClick={() =>
                          setExpanded(expanded === group.slug ? null : group.slug)
                        }
                        className="p-3"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            expanded === group.slug && "rotate-180",
                          )}
                        />
                      </button>
                    ) : null}
                  </div>

                  {expanded === group.slug ? (
                    <ul className="pb-3 pl-3">
                      {group.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to="/products/$category/$product"
                            params={{ category: group.slug, product: item.slug }}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-muted-foreground"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>

            <ul className="mt-6 space-y-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 font-display text-base font-semibold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 pb-16">
              <Action to="/quote" size="lg" className="w-full">
                Get a Quote
              </Action>
              <Action to="/products" size="lg" variant="outline" className="w-full">
                Explore Products
              </Action>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
