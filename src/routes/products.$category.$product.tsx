import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import apparelImg from "@/assets/cat-apparel.jpg";
import drinkwareImg from "@/assets/cat-drinkware.jpg";
import patchesImg from "@/assets/cat-patches.jpg";
import workwearImg from "@/assets/cat-workwear.jpg";
import promoImg from "@/assets/cat-promo.jpg";
import {
  Action,
  Breadcrumbs,
  ButtonAction,
  CTABlock,
  ImageSlot,
  Tag,
} from "@/components/site/ui";
import {
  decorationLabel,
  findCategory,
  findProduct,
  productsByCategory,
} from "@/data/catalog";

const images = {
  apparel: apparelImg,
  drinkware: drinkwareImg,
  patches: patchesImg,
  workwear: workwearImg,
  promo: promoImg,
};

export const Route = createFileRoute("/products/$category/$product")({
  loader: ({ params }) => {
    const product = findProduct(params.product);
    const category = findCategory(params.category);
    if (!product || !category || product.category !== category.slug) throw notFound();
    return {
      product,
      category,
      related: productsByCategory(category.slug)
        .filter((p) => p.slug !== product.slug)
        .slice(0, 3),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found | Isaac Promos" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product, category } = loaderData;
    const title = `${product.name} | Bulk Custom Orders | Isaac Promos`;
    return {
      meta: [
        { title },
        { name: "description", content: product.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: product.blurb },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${category.slug}/${product.slug}` },
      ],
      links: [
        { rel: "canonical", href: `/products/${category.slug}/${product.slug}` },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="text-3xl">Product not found</h1>
      <div className="mt-6 flex justify-center">
        <Action to="/products">View All Products</Action>
      </div>
    </div>
  ),
});

function ProductPage() {
  const { product, category, related } = Route.useLoaderData();
  const hero = images[category.image];

  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="container-x py-6">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              {
                label: category.name,
                to: "/products/$category",
                params: { category: category.slug },
              },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      <section className="py-12 lg:py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="hover-media border border-border">
              <img
                src={hero}
                alt={`${product.name} example`}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <ImageSlot label="Detail shot" ratio="1 / 1" />
              <ImageSlot label="Branding closeup" ratio="1 / 1" />
              <ImageSlot label="In-use photo" ratio="1 / 1" />
            </div>
          </div>

          <div>
            <p className="eyebrow">{category.name}</p>
            <h1 className="mt-3 text-3xl leading-tight sm:text-4xl">{product.name}</h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">{product.blurb}</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-xs font-bold uppercase tracking-[0.14em]">
                  Ideal for
                </h2>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {product.idealFor.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-xs font-bold uppercase tracking-[0.14em]">
                  Customization options
                </h2>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.decoration.map((d) => (
                    <Tag key={d}>{decorationLabel(d)}</Tag>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <h2 className="font-display text-xs font-bold uppercase tracking-[0.14em]">
                  Available colors
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Color range depends on the selected blank and quantity. Tell us the
                  colors you need and we will confirm what is available.
                </p>
              </div>
            </div>

            <QuickQuoteForm productName={product.name} />

            <p className="mt-4 text-xs text-muted-foreground">
              Availability, colors and pricing may vary based on quantity and project
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-14 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-xl sm:text-2xl">Why this product</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {product.why}
            </p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl">Decoration possibilities</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {product.decoration.map((d) => (
                <li key={d} className="border-b border-border pb-2">
                  {decorationLabel(d)}
                </li>
              ))}
            </ul>
            <Link
              to="/decoration-methods"
              className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Compare methods
            </Link>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl">Common use cases</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {product.useCases.map((u) => (
                <li key={u} className="border-b border-border pb-2">
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="py-14 lg:py-20">
          <div className="container-x">
            <h2 className="text-2xl sm:text-3xl">Related products</h2>
            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/products/$category/$product"
                  params={{ category: r.category, product: r.slug }}
                  className="bg-background p-6 transition-colors hover:bg-surface"
                >
                  <h3 className="font-display text-base font-bold">{r.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-border py-14 lg:py-20">
        <div className="container-x max-w-3xl">
          <h2 className="text-2xl sm:text-3xl">Questions about this product</h2>
          <dl className="mt-8 divide-y divide-border border-y border-border">
            {[
              [
                "Is there a minimum quantity?",
                "Minimums depend on the product and decoration method. Send your approximate quantity and we will confirm what is workable.",
              ],
              [
                "Can you match a specific color?",
                "Color matching depends on the blank and the decoration method. Share your brand colors with the request and we will tell you how close we can get.",
              ],
              [
                "What artwork do you need?",
                "Vector files work best. High-resolution PNG files are usually workable. We will let you know if the file needs cleanup.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="py-5">
                <dt className="font-display text-base font-bold">{q}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTABlock
        title={`Ready to price a ${product.name.toLowerCase()} order?`}
        body="Send your quantity, artwork and deadline. We will confirm the specifications and come back with a quote."
        primaryLabel="Request a Quote"
        secondary={{ label: "Ask a Product Question", to: "/contact" }}
      />
    </>
  );
}

function QuickQuoteForm({ productName }: { productName: string }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="mt-9 border border-border bg-surface p-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        toast.success("Request noted", {
          description:
            "Submit the full quote form so we can reach you with pricing and options.",
        });
      }}
    >
      <h2 className="font-display text-lg font-bold">Ask about this product</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Order quantity" htmlFor="qty">
          <input
            id="qty"
            name="qty"
            type="text"
            inputMode="numeric"
            placeholder="e.g. 150"
            className="field"
          />
        </Field>
        <Field label="Desired deadline" htmlFor="deadline">
          <input id="deadline" name="deadline" type="date" className="field" />
        </Field>
        <Field label="Logo / artwork" htmlFor="artwork" className="sm:col-span-2">
          <input
            id="artwork"
            name="artwork"
            type="file"
            className="field file:mr-3 file:border-0 file:bg-transparent file:text-sm"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            Optional at this stage. You can also email artwork later.
          </p>
        </Field>
        <Field label="Notes" htmlFor="notes" className="sm:col-span-2">
          <textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder={`Anything specific about your ${productName.toLowerCase()} order`}
            className="field"
          />
        </Field>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <ButtonAction type="submit" size="lg">
          Request Quote
        </ButtonAction>
        <Action to="/quote" variant="outline" size="lg">
          Use the Full Quote Form
        </Action>
      </div>
      {submitted ? (
        <p className="mt-4 text-sm text-primary" role="status">
          Thanks. Complete the full quote form so we have your contact details.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="font-display text-xs font-bold uppercase tracking-[0.1em]"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
