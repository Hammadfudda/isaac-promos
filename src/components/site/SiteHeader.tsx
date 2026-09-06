import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Action } from "./ui";
import { cn } from "@/lib/utils";

const megaMenu: {
  category: string;
  slug: string;
  items: { name: string; slug: string; comingSoon?: boolean }[];
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
      { name: "FR Shirts", slug: "fr-shirts" },
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
      { name: "Custom Stress Balls with Logo", slug: "custom-stress-balls" },
      { name: "Custom Notebook", slug: "custom-notebook" },
      { name: "Small Giveaway Items", slug: "small-giveaway-items", comingSoon: true },
    ],
  },
  {
    category: "Bags",
    slug: "bags",
    items: [
      { name: "Tote Bags", slug: "tote-bags" },
      { name: "Woven Bags", slug: "woven-bags" },
      { name: "Non-Woven Bags", slug: "non-woven-bags" },
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
    category: "Garment Labels",
    slug: "garment-labels",
    items: [
      { name: "Garment Labels", slug: "garment-labels" },
      { name: "Neck Labels", slug: "neck-labels" },
      { name: "Care Labels", slug: "care-labels" },
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
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setExpanded(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setExpanded(null);
  };

  return (
    <>
      <header className="sticky top-0 z-[80] w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
        <div className="container-x">
          <div className="flex min-h-[68px] items-center justify-between gap-3 sm:min-h-[72px]">
            <Link
              to="/"
              className="flex min-w-0 items-center gap-2.5"
              aria-label="Isaac Promos home"
              onClick={() => {
                closeMobile();
                setDesktopProductsOpen(false);
              }}
            >
              <img
                src="/isaac-promos-logo.png"
                alt="Isaac Promos"
                width={52}
                height={52}
                className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
              />
              <span className="hidden truncate font-display text-base font-bold leading-none tracking-tight sm:block sm:text-lg">
                ISAAC<span className="text-primary"> PROMOS</span>
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-0.5 xl:flex"
              onMouseLeave={() => setDesktopProductsOpen(false)}
            >
              <button
                type="button"
                aria-expanded={desktopProductsOpen}
                onMouseEnter={() => setDesktopProductsOpen(true)}
                onClick={() => setDesktopProductsOpen((current) => !current)}
                className={cn(
                  "flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-sm font-medium transition-colors hover:text-primary",
                  desktopProductsOpen && "text-primary",
                )}
              >
                Products
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    desktopProductsOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>

              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onMouseEnter={() => setDesktopProductsOpen(false)}
                  className="whitespace-nowrap px-2.5 py-2 text-sm font-medium transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {link.label}
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
                aria-controls="isaac-mobile-menu"
                onClick={() => setMobileOpen((current) => !current)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-foreground/30 bg-background text-foreground"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <span className="hamburger-lines" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {desktopProductsOpen ? (
          <div
            className="absolute inset-x-0 top-full hidden max-h-[calc(100vh-72px)] overflow-y-auto border-b border-border bg-background shadow-[0_24px_48px_-32px_rgba(0,0,0,0.35)] xl:block"
            onMouseEnter={() => setDesktopProductsOpen(true)}
            onMouseLeave={() => setDesktopProductsOpen(false)}
          >
            <div className="container-x grid grid-cols-4 gap-x-8 gap-y-10 py-10">
              {megaMenu.map((group) => (
                <div key={group.slug} className="min-w-0">
                  <Link
                    to="/products/$category"
                    params={{ category: group.slug }}
                    onClick={() => setDesktopProductsOpen(false)}
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
                          onClick={() => setDesktopProductsOpen(false)}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {item.name}
                          {item.comingSoon ? (
                            <span className="ml-2 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-primary">
                              Coming Soon
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="col-span-4 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">
                  Not sure what to order? Tell us what you are trying to accomplish and we will help narrow it down.
                </p>
                <Action to="/contact" variant="dark">
                  Get Product Recommendations
                </Action>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {mobileOpen ? (
        <div
          id="isaac-mobile-menu"
          className="fixed inset-0 z-[100] overflow-y-auto bg-background xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="sticky top-0 z-10 border-b border-border bg-background">
            <div className="container-x flex min-h-[68px] items-center justify-between gap-3">
              <Link
                to="/"
                onClick={closeMobile}
                className="flex min-w-0 items-center gap-2.5"
                aria-label="Isaac Promos home"
              >
                <img
                  src="/isaac-promos-logo.png"
                  alt="Isaac Promos"
                  width={48}
                  height={48}
                  className="h-10 w-10 shrink-0 object-contain"
                />
                <span className="font-display text-base font-bold tracking-tight">
                  ISAAC<span className="text-primary"> PROMOS</span>
                </span>
              </Link>

              <button
                type="button"
                onClick={closeMobile}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-foreground/30 bg-background"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="container-x py-5 pb-28">
            <div className="flex items-center justify-between gap-3">
              <p className="eyebrow">Products</p>
              <Link
                to="/quote"
                onClick={closeMobile}
                className="inline-flex min-h-10 items-center justify-center rounded-sm bg-primary px-4 py-2 font-display text-sm font-semibold text-primary-foreground"
              >
                Get a Quote
              </Link>
            </div>

            <ul className="mt-4 divide-y divide-border border-y border-border">
              {megaMenu.map((group) => (
                <li key={group.slug}>
                  <div className="flex items-center gap-2">
                    <Link
                      to="/products/$category"
                      params={{ category: group.slug }}
                      onClick={closeMobile}
                      className="min-w-0 flex-1 py-4 font-display text-sm font-semibold"
                    >
                      {group.category}
                    </Link>

                    {group.items.length ? (
                      <button
                        type="button"
                        aria-label={`${expanded === group.slug ? "Collapse" : "Expand"} ${group.category}`}
                        aria-expanded={expanded === group.slug}
                        onClick={() =>
                          setExpanded((current) =>
                            current === group.slug ? null : group.slug,
                          )
                        }
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            expanded === group.slug && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    ) : null}
                  </div>

                  {expanded === group.slug ? (
                    <ul className="grid gap-1 pb-4 pl-3 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to="/products/$category/$product"
                            params={{ category: group.slug, product: item.slug }}
                            onClick={closeMobile}
                            className="block rounded-sm px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                          >
                            {item.name}
                            {item.comingSoon ? (
                              <span className="ml-2 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-primary">
                                Coming Soon
                              </span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>

            <ul className="mt-6 divide-y divide-border border-y border-border">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={closeMobile}
                    className="block py-4 font-display text-base font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/faq"
                  onClick={closeMobile}
                  className="block py-4 font-display text-base font-semibold"
                >
                  FAQ
                </Link>
              </li>
            </ul>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <Link
                to="/quote"
                onClick={closeMobile}
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground"
              >
                Get a Quote
              </Link>
              <Link
                to="/products"
                onClick={closeMobile}
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-input bg-background px-5 py-3 font-display text-sm font-semibold"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
