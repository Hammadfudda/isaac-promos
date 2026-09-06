import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
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
    ],
  },
  {
    category: "Drinkware",
    slug: "drinkware",
    items: [
      { name: "Custom Bottles", slug: "custom-bottles" },
      { name: "Tumblers", slug: "tumblers" },
    ],
  },
  {
    category: "Bags",
    slug: "bags",
    items: [{ name: "Tote Bags", slug: "tote-bags" }],
  },
  {
    category: "Promotional Items",
    slug: "promotional-items",
    items: [
      { name: "Pens", slug: "pens" },
      { name: "Keychains", slug: "keychains" },
      { name: "Custom Keychains", slug: "custom-keychains" },
      { name: "Custom Notebook", slug: "custom-notebook" },
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
    category: "Workwear",
    slug: "workwear",
    items: [
      { name: "FR Shirts", slug: "fr-shirts" },
      { name: "Branded Work Shirts", slug: "branded-work-shirts" },
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
    category: "Custom Projects",
    slug: "custom-projects",
    items: [],
  },
];

const navLinks = [
  { label: "Solutions", to: "/solutions" },
  { label: "Decoration Methods", to: "/decoration-methods" },
  { label: "How It Works", to: "/how-it-works" },
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container-x">
        <div className="flex min-h-[68px] items-center justify-between gap-3 sm:min-h-[72px]">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2.5"
            aria-label="Isaac Promos home"
            onClick={() => {
              setMobileOpen(false);
              setOpenMega(false);
            }}
          >
            <img
              src="/isaac-promos-logo.png"
              alt="Isaac Promos"
              width={52}
              height={52}
              className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
            />
            <span className="hidden truncate font-display text-base font-bold leading-none tracking-tight sm:block sm:text-lg">
              ISAAC<span className="text-primary"> PROMOS</span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 xl:flex"
            onMouseLeave={() => setOpenMega(false)}
          >
            <button
              type="button"
              aria-expanded={openMega}
              onMouseEnter={() => setOpenMega(true)}
              onClick={() => setOpenMega((v) => !v)}
              className={cn(
                "flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-sm font-medium transition-colors hover:text-primary",
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
                className="whitespace-nowrap px-2.5 py-2 text-sm font-medium transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:block">
            <Action to="/quote">Get a Quote</Action>
          </div>

          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <Action to="/quote" size="md" className="hidden md:inline-flex">
              Get a Quote
            </Action>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {openMega ? (
        <div
          className="absolute inset-x-0 top-full hidden max-h-[calc(100vh-72px)] overflow-y-auto border-b border-border bg-background shadow-[0_24px_48px_-32px_rgba(0,0,0,0.35)] xl:block"
          onMouseEnter={() => setOpenMega(true)}
          onMouseLeave={() => setOpenMega(false)}
        >
          <div className="container-x grid grid-cols-4 gap-x-8 gap-y-10 py-10">
            {megaMenu.map((group) => (
              <div key={group.slug} className="min-w-0">
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
        <div className="fixed inset-x-0 bottom-0 top-[68px] z-50 overflow-y-auto bg-background sm:top-[72px] xl:hidden">
          <div className="container-x py-5 pb-24">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow">Products</p>
              <Action to="/quote" size="md" className="md:hidden">
                Get a Quote
              </Action>
            </div>

            <ul className="mt-4 divide-y divide-border border-y border-border">
              {megaMenu.map((group) => (
                <li key={group.slug}>
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      to="/products/$category"
                      params={{ category: group.slug }}
                      onClick={() => setMobileOpen(false)}
                      className="min-w-0 flex-1 py-3.5 font-display text-sm font-semibold"
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
                        className="flex h-11 w-11 shrink-0 items-center justify-center"
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
                    <ul className="grid gap-1 pb-3 pl-3 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to="/products/$category/$product"
                            params={{ category: group.slug, product: item.slug }}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2.5 pr-2 text-sm text-muted-foreground"
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

            <ul className="mt-6 grid gap-1 sm:grid-cols-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 font-display text-base font-semibold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
