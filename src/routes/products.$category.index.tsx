import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import apparelImg from "@/assets/cat-apparel.png";
import drinkwareImg from "@/assets/cat-drinkware.png";
import bagsImg from "@/assets/Tote-Bags.png";
import promoItemsImg from "@/assets/Small-Giveaway-Items.png";
import patchesImg from "@/assets/Embroidery-Patches.png";
import workwearImg from "@/assets/Branded-Work-Shirts.png";
import towelsImg from "@/assets/custom-Towels.png";
import garmentLabelsImg from "@/assets/Garment-Labels.png";
import customProjectsImg from "@/assets/hero-merch.png";
import { Action, CTABlock, PageHeader, Tag } from "@/components/site/ui";
import {
  categories,
  decorationLabel,
  findCategory,
  productsByCategory,
} from "@/data/catalog";

const categoryImages: Record<string, string> = {
  apparel: apparelImg,
  drinkware: drinkwareImg,
  bags: bagsImg,
  "promotional-items": promoItemsImg,
  "patches-badges": patchesImg,
  workwear: workwearImg,
  towels: towelsImg,
  "garment-labels": garmentLabelsImg,
  "custom-projects": customProjectsImg,
};

const categoryCopy: Record<
  string,
  {
    title: string;
    intro: string;
    points: { title: string; body: string }[];
  }
> = {
  apparel: {
    title: "Shirts, Polos & Hoodies, Built Around Your Budget and Branding",
    intro:
      "We keep our margins tight and include shipping in the quote, so the pricing is easy to compare without extra surprises later.",
    points: [
      {
        title: "Fabric & Printing",
        body:
          "We work with a wide range of fabrics and can decorate with screen printing, embroidery, DTG, heat transfer or sublimation. We can help choose the right method based on the garment, artwork and quantity.",
      },
      {
        title: "Patches",
        body:
          "Leather, chenille and PVC patch options are available when you want a different finish or a more premium look.",
      },
      {
        title: "Sampling",
        body:
          "We provide mock-ups and usually prefer sending a sample before full production when practical, so issues can be caught before the full run.",
      },
    ],
  },
  drinkware: {
    title: "Bottles and Tumblers People Actually Keep Using",
    intro:
      "Drinkware works well for onboarding kits, client gifts, events and team programs because it stays useful long after the order is delivered.",
    points: [
      {
        title: "Choose the Right Format",
        body:
          "Bottle capacity, tumbler shape, lid style and insulation level all affect how the item feels in daily use.",
      },
      {
        title: "Match the Decoration",
        body:
          "Laser engraving, pad printing and other methods suit different coatings and finishes. We help compare the tradeoffs before production.",
      },
      {
        title: "Build Around the Use Case",
        body:
          "Tell us whether the order is for gifting, onboarding, events or everyday staff use and we can narrow down practical options.",
      },
    ],
  },
  bags: {
    title: "Reusable Bags Built for Events, Kits and Everyday Branding",
    intro:
      "Bags are useful when you need the product itself to carry the rest of the order. Material, structure and print area make a noticeable difference.",
    points: [
      {
        title: "Material Choice",
        body:
          "Canvas, woven and non-woven options give you different levels of structure, durability and cost.",
      },
      {
        title: "Size & Handles",
        body:
          "Bag dimensions, gussets and handle length should match what people will actually carry.",
      },
      {
        title: "Branding Area",
        body:
          "We help review artwork placement so the logo stays readable and balanced on the selected bag.",
      },
    ],
  },
  "promotional-items": {
    title: "Useful Branded Giveaways for Events and Campaigns",
    intro:
      "Small promotional products work best when they are useful, easy to distribute and appropriate for the audience rather than chosen only for the lowest unit cost.",
    points: [
      {
        title: "High-Volume Options",
        body:
          "Pens, lanyards, stress balls, keychains and other compact items can work well for large event or campaign quantities.",
      },
      {
        title: "Kits & Combinations",
        body:
          "Notebooks, pens, lanyards and other items can be combined into employee, conference or welcome kits.",
      },
      {
        title: "Clear Branding",
        body:
          "Small imprint areas need simple artwork. We help flag when a logo or detail needs adjustment before production.",
      },
    ],
  },
  "patches-badges": {
    title: "Custom Patches and Badges in Multiple Finishes",
    intro:
      "Patches and badges let you add durable branding to apparel, caps, bags and uniforms without printing directly on every garment.",
    points: [
      {
        title: "Pick the Finish",
        body:
          "Embroidery, PVC, chenille and leather each create a different look, texture and price point.",
      },
      {
        title: "Shape & Edge",
        body:
          "Round, rectangular and custom-cut shapes can be matched to the artwork and intended application.",
      },
      {
        title: "Application",
        body:
          "Tell us where the patch or badge will be used and we can help review size, backing and attachment options.",
      },
    ],
  },
  workwear: {
    title: "Durable Branded Workwear for Field and Shop Crews",
    intro:
      "Workwear has to hold up to repeat wear while keeping branding clear and professional in the working environment.",
    points: [
      {
        title: "Fabric & Durability",
        body:
          "We help compare practical work shirts, FR options and other garments based on the conditions they will be worn in.",
      },
      {
        title: "Logo Placement",
        body:
          "Left chest, sleeve and other placements can be selected around pockets, reflective areas and garment construction.",
      },
      {
        title: "Repeat Orders",
        body:
          "For ongoing uniform programs, keeping the product and decoration details consistent makes future reorders easier.",
      },
    ],
  },
  towels: {
    title: "Custom Towels for Golf, Events, Gyms and Hospitality",
    intro:
      "Towels are practical branded items where fabric weight, weave, size and hanging hardware matter more than they first appear.",
    points: [
      {
        title: "Choose the Size",
        body:
          "Golf, utility and larger towel formats serve different use cases and branding areas.",
      },
      {
        title: "Decoration",
        body:
          "Embroidery and other suitable methods can be selected based on the towel construction and artwork.",
      },
      {
        title: "Use Case",
        body:
          "Tell us whether the order is for a tournament, gym, hospitality program or giveaway and we can narrow down the right format.",
      },
    ],
  },
  "garment-labels": {
    title: "Labels That Make the Branding Part of the Garment",
    intro:
      "Garment labels are useful when the identity needs to feel built into the finished apparel rather than added only to the outside.",
    points: [
      {
        title: "Label Type",
        body:
          "Neck labels, care labels and other garment labels serve different branding and information needs.",
      },
      {
        title: "Artwork & Wording",
        body:
          "Send the size, wording, logo and garment details so the label can be reviewed before production.",
      },
      {
        title: "Consistent Finishing",
        body:
          "Labels can help create a more complete and repeatable finish across apparel programs and resale products.",
      },
    ],
  },
  "custom-projects": {
    title: "Have a Product Idea That Does Not Fit a Standard Category?",
    intro:
      "Send the requirement, reference image or spec sheet. We review custom requests case by case and tell you directly what is practical to source.",
    points: [
      {
        title: "Start With a Reference",
        body:
          "A photo, sketch, existing sample or product link gives us a useful starting point.",
      },
      {
        title: "Share the Quantity",
        body:
          "Volume often determines what can be customized, sourced or manufactured efficiently.",
      },
      {
        title: "Confirm the Timeline",
        body:
          "Custom work can involve sampling or setup, so the required delivery date matters early in the conversation.",
      },
    ],
  },
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
  const img = categoryImages[category.slug] ?? customProjectsImg;
  const copy = categoryCopy[category.slug];

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
              className="aspect-[4/3] h-full w-full bg-background object-contain p-3 sm:p-5"
            />
          </div>

          <div className="min-w-0">
            {copy ? (
              <>
                <h2 className="text-2xl sm:text-3xl">{copy.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {copy.intro}
                </p>

                <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
                  {copy.points.map((point) => (
                    <div key={point.title}>
                      <h3 className="font-display text-sm font-bold text-foreground">
                        {point.title}
                      </h3>
                      <p className="mt-2">{point.body}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl">{category.tagline}</h2>
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
