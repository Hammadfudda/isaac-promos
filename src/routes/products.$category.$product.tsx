import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
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
        .filter((item) => item.slug !== product.slug)
        .slice(0, 3),
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product, category, related } = Route.useLoaderData();
  const hero = images[category.image];

  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="container-x py-5">
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

      <section className="py-10 lg:py-16">
        <div className="container-x grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="min-w-0">
            <div className="hover-media flex aspect-[4/3] w-full items-center justify-center overflow-hidden border border-border bg-surface p-3 sm:p-5">
              <img
                src={hero}
                alt={`${product.name} product example`}
                width={1200}
                height={900}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="mt-5 border border-border bg-surface p-5 sm:p-6">
              <p className="eyebrow">Before you request a quote</p>
              <h2 className="mt-3 text-xl">A few details help us price it correctly.</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You do not need every specification figured out. Send what you know and we will help with the rest.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="border-t border-border pt-3">
                  <p className="font-display text-sm font-bold">Quantity</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    An estimate is enough to get started.
                  </p>
                </div>

                <div className="border-t border-border pt-3">
                  <p className="font-display text-sm font-bold">Deadline</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us when you need the order in hand.
                  </p>
                </div>

                <div className="border-t border-border pt-3">
                  <p className="font-display text-sm font-bold">Artwork</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Upload your logo or send a reference image.
                  </p>
                </div>

                <div className="border-t border-border pt-3">
                  <p className="font-display text-sm font-bold">Branding</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    If you are not sure which method fits, we can recommend one.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Action to="/contact" variant="outline">
                  Ask a Product Question
                </Action>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <p className="eyebrow">{category.name}</p>
            <h1 className="mt-3 text-3xl leading-tight sm:text-4xl">{product.name}</h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">{product.blurb}</p>

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                  Ideal for
                </h2>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {product.idealFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                  Customization options
                </h2>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.decoration.map((method) => (
                    <Tag key={method}>{decorationLabel(method)}</Tag>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                Available colors
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Color range depends on the selected product and quantity. Tell us which colors you need and we will confirm the available options.
              </p>
            </div>

            <QuickQuoteForm productName={product.name} />

            <p className="mt-4 text-xs text-muted-foreground">
              Availability, colors and pricing may vary based on quantity and project requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-12 lg:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-xl sm:text-2xl">Why this product</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.why}</p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl">Decoration possibilities</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {product.decoration.map((method) => (
                <li key={method} className="border-b border-border pb-2">
                  {decorationLabel(method)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl">Common use cases</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {product.useCases.map((useCase) => (
                <li key={useCase} className="border-b border-border pb-2">
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="py-12 lg:py-20">
          <div className="container-x">
            <h2 className="text-2xl sm:text-3xl">Related products</h2>
            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to="/products/$category/$product"
                  params={{ category: item.category, product: item.slug }}
                  className="min-w-0 bg-background p-5 transition-colors hover:bg-surface sm:p-6"
                >
                  <h3 className="text-base">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTABlock
        title={`Ready to price a ${product.name.toLowerCase()} order?`}
        body="Send the quantity, artwork and deadline. We will confirm the specifications and help you move the project forward."
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
      className="mt-8 border border-border bg-surface p-5 sm:p-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h2 className="text-lg">Ask about this product</h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">
            Order quantity
          </span>
          <input className="field" name="quantity" placeholder="Example: 150" />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">
            Desired deadline
          </span>
          <input className="field" name="deadline" type="date" />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">
            Logo / artwork
          </span>
          <input className="field" name="artwork" type="file" />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">
            Notes
          </span>
          <textarea
            className="field min-h-24"
            name="notes"
            placeholder={`Anything specific about your ${productName.toLowerCase()} order`}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ButtonAction type="submit" size="lg" className="w-full sm:w-auto">
          Request Quote
        </ButtonAction>
        <Action to="/quote" variant="outline" size="lg" className="w-full sm:w-auto">
          Use the Full Quote Form
        </Action>
      </div>

      {submitted ? (
        <p className="mt-4 text-sm text-primary">
          Request details captured. Use the full quote form so we also have your contact information.
        </p>
      ) : null}
    </form>
  );
}
