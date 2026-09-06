import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import apparelImg from "@/assets/cat-apparel.png";
import drinkwareImg from "@/assets/cat-drinkware.png";
import patchesImg from "@/assets/cat-patches.jpg";
import workwearImg from "@/assets/cat-workwear.jpg";
import promoImg from "@/assets/cat-promo.jpg";
import { Action, CTABlock, PageHeader, Tag } from "@/components/site/ui";
import {
  categories,
  decorationLabel,
  findCategory,
  productsByCategory,
} from "@/data/catalog";

const images = {
  apparel: apparelImg,
  drinkware: drinkwareImg,
  patches: patchesImg,
  workwear: workwearImg,
  promo: promoImg,
};

export const Route = createFileRoute("/products/$category/")({
  loader: ({ params }) => {
    const category = findCategory(params.category);
    if (!category) throw notFound();
    return { category, items: productsByCategory(category.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Category not found | Izaac Promos" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const { category } = loaderData;
    const title = `Custom ${category.name} in Bulk | Izaac Promos`;

    return {
      meta: [
        { title },
        { name: "description", content: category.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: category.tagline },
        { property: "og:url", content: `/products/${category.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${category.slug}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData();
  const img = images[category.image];

  return (
    <>
      <PageHeader
        eyebrow="Product category"
        title={category.name}
        lead={category.tagline}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: category.name },
        ]}
      />

      <section className="py-12 lg:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="hover-media min-w-0 overflow-hidden border border-border">
            <img
              src={img}
              alt={`${category.name} product examples`}
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            {category.slug === "apparel" ? (
              <>
                <h2 className="text-2xl sm:text-3xl">
                  Shirts, Polos &amp; Hoodies, Built Around Your Budget and Branding
                </h2>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We keep our margins tight and include shipping in the quote, so the pricing is easy to compare without extra surprises later.
                </p>

                <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground">
                      Fabric &amp; Printing
                    </h3>
                    <p className="mt-2">
                      We work with a wide range of fabrics and can decorate with screen printing, embroidery, DTG, heat transfer or sublimation. These options work well for school giveaways, campaigns, staff apparel and lighter office branding. We can help choose the right method based on the garment, artwork and quantity.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground">
                      Patches
                    </h3>
                    <p className="mt-2">
                      Leather, chenille and PVC patch options are available if you want a different finish or a more premium look.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground">
                      Sampling
                    </h3>
                    <p className="mt-2">
                      We provide mock-ups and usually prefer sending a sample before full production. Once the sample is approved, we move into the full run. This helps catch issues early and saves both fabric and production time.
                    </p>
                  </div>
                </div>
              </>            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl">What this category covers</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {category.intro}
                </p>
              </>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Action to="/quote" className="w-full sm:w-auto">
                Request Pricing
              </Action>
              <Action to="/decoration-methods" variant="outline" className="w-full sm:w-auto">
                Compare Decoration Methods
              </Action>
            </div>
          </div>
        </div>
      </section>

      {items.length ? (
        <section className="border-t border-border bg-surface py-12 lg:py-20">
          <div className="container-x">
            <h2 className="text-2xl sm:text-3xl">Products in {category.name}</h2>

            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <article key={p.slug} className="flex min-w-0 flex-col bg-background p-5 sm:p-7">
                  <h3 className="font-display text-lg font-bold">
                    <Link
                      to="/products/$category/$product"
                      params={{ category: p.category, product: p.slug }}
                      className="transition-colors hover:text-primary"
                    >
                      {p.name}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.decoration.slice(0, 3).map((d) => (
                      <Tag key={d}>{decorationLabel(d)}</Tag>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Action
                      to="/products/$category/$product"
                      params={{ category: p.category, product: p.slug }}
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Ask About This Product
                    </Action>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="border-t border-border bg-surface py-12 lg:py-20">
          <div className="container-x max-w-2xl">
            <h2 className="text-2xl sm:text-3xl">Send us the requirement</h2>
            <p className="mt-4 text-muted-foreground">
              Custom projects are handled case by case. Share a description, reference image or spec sheet and we will tell you directly whether we can source it.
            </p>
            <div className="mt-6">
              <Action to="/quote">Discuss a Custom Project</Action>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 lg:py-20">
        <div className="container-x">
          <h2 className="text-2xl sm:text-3xl">Other categories</h2>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="border border-border px-4 py-2 text-sm transition-colors hover:border-foreground hover:bg-surface"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABlock
        title={`Planning a ${category.name.toLowerCase()} order?`}
        body="Tell us the quantity, timeline and how the items will be used. We will recommend options and quote against your actual requirements."
        primaryLabel="Get a Quote"
        secondary={{ label: "Ask a Product Question", to: "/contact" }}
      />
    </>
  );
}
