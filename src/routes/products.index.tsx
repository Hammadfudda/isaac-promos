import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Action, CTABlock, PageHeader, Tag } from "@/components/site/ui";
import { categories, decorationLabel, products } from "@/data/catalog";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Custom Products & Bulk Merchandise | Izaac Promos" },
      {
        name: "description",
        content:
          "Browse custom apparel, drinkware, bags, patches, workwear, towels and promotional items available for bulk orders through Izaac Promos.",
      },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const filters = [
  { label: "All", slug: "all" },
  { label: "Apparel", slug: "apparel" },
  { label: "Drinkware", slug: "drinkware" },
  { label: "Bags", slug: "bags" },
  { label: "Promo", slug: "promotional-items" },
  { label: "Patches", slug: "patches-badges" },
  { label: "Workwear", slug: "workwear" },
  { label: "Towels", slug: "towels" },
  { label: "Labels", slug: "garment-labels" },
];

function ProductsPage() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    return products.filter((p) => {
      const matchesCat = active === "all" || p.category === active;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.blurb.toLowerCase().includes(q) ||
        p.idealFor.join(" ").toLowerCase().includes(q);

      return matchesCat && matchesQuery;
    });
  }, [active, query]);

  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Find the right product for your project."
        lead="Browse by product type or tell us what you need and we will help narrow it down. Pricing is quoted per project because quantity and customization change the number."
        crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />

      <section className="border-b border-border bg-background">
        <div className="container-x flex flex-col gap-4 py-5 sm:py-6 lg:flex-row lg:flex-wrap lg:items-center">
          <div className="relative w-full min-w-0 flex-1 lg:min-w-[16rem]">
            <label htmlFor="product-search" className="sr-only">
              Search products or ideas
            </label>

            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />

            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products or ideas..."
              className="h-11 w-full min-w-0 border border-input bg-background pl-10 pr-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>

          <div
            className="flex w-full gap-2 overflow-x-auto pb-1 lg:w-auto lg:flex-wrap lg:overflow-visible"
            role="group"
            aria-label="Product category filter"
          >
            {filters.map((f) => (
              <button
                key={f.slug}
                type="button"
                aria-pressed={active === f.slug}
                onClick={() => setActive(f.slug)}
                className={`shrink-0 border px-3 py-2 font-display text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
                  active === f.slug
                    ? "border-ink bg-ink text-ink-foreground"
                    : "border-border bg-background hover:border-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {visible.length} product {visible.length === 1 ? "type" : "types"}
            </p>

            <Action to="/quote" variant="outline">
              Download Product Catalog
            </Action>
          </div>

          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Full product catalog available on request. Tell us what you are sourcing and we will send relevant options.
          </p>

          <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <article key={p.slug} className="flex min-w-0 flex-col bg-background p-5 sm:p-7">
                <h2 className="font-display text-lg font-bold">
                  <Link
                    to="/products/$category/$product"
                    params={{ category: p.category, product: p.slug }}
                    className="transition-colors hover:text-primary"
                  >
                    {p.name}
                  </Link>
                </h2>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.blurb}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.comingSoon ? <Tag>Coming Soon</Tag> : null}
                  {p.decoration.slice(0, 3).map((d) => (
                    <Tag key={d}>{decorationLabel(d)}</Tag>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <Action
                    to="/products/$category/$product"
                    params={{ category: p.category, product: p.slug }}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    View Details
                  </Action>
                  <Action to="/quote" className="w-full sm:w-auto">
                    Request Pricing
                  </Action>
                </div>
              </article>
            ))}
          </div>

          {visible.length === 0 ? (
            <div className="mt-8 border border-border bg-surface p-7 text-center sm:p-10">
              <h2 className="font-display text-xl font-bold">Nothing matched that search.</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                We can source products beyond what is listed here. Describe what you are looking for and we will tell you whether it is something we can do.
              </p>
              <div className="mt-6 flex justify-center">
                <Action to="/quote">Ask About a Product</Action>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-t border-border bg-surface py-12 lg:py-20">
        <div className="container-x">
          <h2 className="text-2xl sm:text-3xl">Browse by category</h2>

          <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/products/$category"
                params={{ category: c.slug }}
                className="min-w-0 bg-background p-5 transition-colors hover:bg-surface sm:p-6"
              >
                <h3 className="font-display text-base font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Still comparing options?"
        body="Send your quantity range and what the items are for. We will come back with a short list instead of making you sort through hundreds of products."
        primaryLabel="Get Product Recommendations"
        secondary={{ label: "Talk to a Product Specialist", to: "/contact" }}
      />
    </>
  );
}
