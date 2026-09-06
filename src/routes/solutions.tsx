import { createFileRoute } from "@tanstack/react-router";
import { Action, CTABlock, PageHeader, Section, SectionHead, Tag } from "@/components/site/ui";
import { industries, solutions } from "@/data/catalog";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Bulk Merchandise Solutions by Use Case | Isaac Promos" },
      {
        name: "description",
        content:
          "Uniform programs, school apparel, event merchandise, workwear, client gifts and distributor orders — solutions organized around what your order needs to accomplish.",
      },
      { property: "og:title", content: "Bulk Merchandise Solutions by Use Case | Isaac Promos" },
      {
        property: "og:description",
        content:
          "Solutions for uniforms, schools, events, workwear, giveaways, fundraisers and outsourced distributor orders.",
      },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Solutions" }]}
        eyebrow="Solutions"
        title="Start from the outcome, not the product list."
        lead="Most buyers do not begin with a product code. They begin with a team to outfit, an event to prepare for or a budget to hit. Find the situation that matches yours."
      />

      <Section>
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-2">
          {solutions.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="flex flex-col bg-background p-7 transition-colors hover:bg-surface lg:p-9"
            >
              <h2 className="text-xl leading-snug lg:text-2xl">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.outcome}</p>

              <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                <div className="flex gap-3">
                  <dt className="w-28 shrink-0 font-display text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Common needs
                  </dt>
                  <dd className="text-foreground">{s.needs.join(" · ")}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-28 shrink-0 font-display text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Categories
                  </dt>
                  <dd className="text-foreground">{s.categories.join(", ")}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-28 shrink-0 font-display text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Methods
                  </dt>
                  <dd className="text-foreground">{s.methods.join(", ")}</dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-wrap gap-3 pt-1">
                <Action to="/quote">{s.cta}</Action>
                <Action to="/products" variant="outline">
                  Browse Products
                </Action>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          eyebrow="Industries"
          title="Who we work with most"
          lead="The buying process changes depending on who is ordering. Here is how we typically approach each group."
        />
        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div key={ind.name} className="flex flex-col bg-background p-7">
              <h3 className="text-lg">{ind.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{ind.need}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {ind.cats.map((c) => (
                  <Tag key={c}>{c}</Tag>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Typical methods: {ind.methods.join(", ")}
              </p>
              <div className="mt-6">
                <Action to="/quote" variant="outline">
                  {ind.cta}
                </Action>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock
        title="Not sure which of these fits your project?"
        body="Describe the situation in a sentence or two. We will tell you which approach makes sense and what information we need to quote it."
        secondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
