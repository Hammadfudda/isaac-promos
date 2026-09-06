import { createFileRoute } from "@tanstack/react-router";
import { CTABlock, PageHeader, Section, SectionHead } from "@/components/site/ui";
import { decorationMethods } from "@/data/catalog";

export const Route = createFileRoute("/decoration-methods")({
  head: () => ({
    meta: [
      { title: "Decoration Methods for Custom Merchandise | Izaac Promos" },
      {
        name: "description",
        content:
          "Compare embroidery, DTF printing, screen printing, PVC, chenille, leather patches, laser engraving and pad printing for custom merchandise.",
      },
    ],
  }),
  component: DecorationMethodsPage,
});

function DecorationMethodsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Decoration Methods" }]}
        eyebrow="Decoration methods"
        title="How your branding gets onto the product."
        lead="You do not need to know the printing terminology before contacting us. We can help you compare the method against the product, artwork, quantity and intended use."
      />

      <Section>
        <SectionHead
          eyebrow="Compare options"
          title="Different methods create different results."
          lead="The best choice depends on the product and the look you want. We keep the explanation practical so you can make the decision without learning production jargon first."
        />

        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
          {decorationMethods.map((method) => (
            <article key={method.key} className="bg-background p-6 sm:p-8">
              <h2 className="text-xl">{method.name}</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-display text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                    Look and feel
                  </dt>
                  <dd className="mt-1 text-foreground">{method.look}</dd>
                </div>
                <div>
                  <dt className="font-display text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                    Best for
                  </dt>
                  <dd className="mt-1 text-foreground">{method.bestFor}</dd>
                </div>
                <div>
                  <dt className="font-display text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                    Common products
                  </dt>
                  <dd className="mt-1 text-foreground">{method.products}</dd>
                </div>
              </dl>
            </article>
          ))}

          <article className="flex flex-col justify-between bg-surface p-6 sm:p-8">
            <div>
              <p className="eyebrow">Need help choosing?</p>
              <h2 className="mt-3 text-xl">We can match the method to the product.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Send us the product, logo, quantity and the look you want. We can help compare the practical options before you commit to production.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li>Artwork detail and number of colors</li>
                <li>Fabric or product material</li>
                <li>Order quantity and intended use</li>
                <li>Finish, durability and budget</li>
              </ul>
            </div>

            <a
              href="/contact"
              className="mt-7 inline-flex w-fit items-center justify-center rounded-sm bg-ink px-4 py-2.5 font-display text-sm font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5"
            >
              Ask About Your Project
            </a>
          </article>
        </div>
      </Section>

      <CTABlock
        title="Not sure which method fits your project?"
        body="Send the product, logo and quantity. We will help you compare the options and explain what makes sense for the order."
        primaryLabel="Ask Us"
        secondary={{ label: "Get a Quote", to: "/quote" }}
      />
    </>
  );
}
