import { createFileRoute } from "@tanstack/react-router";
import { Action, CTABlock, PageHeader, Section, SectionHead, Tag } from "@/components/site/ui";
import { industries, solutions } from "@/data/catalog";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Bulk Merchandise Solutions by Use Case | Izaac Promos" },
      {
        name: "description",
        content:
          "Explore bulk merchandise solutions for uniforms, schools, events, workwear, giveaways, fundraising and outsourced distributor projects.",
      },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Solutions" }]}
        eyebrow="Solutions"
        title="Start with the outcome, not the product list."
        lead="Tell us what the merchandise needs to accomplish and we can help identify the right product categories and branding approach."
      />

      <Section>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {solutions.map((solution) => (
            <article
              key={solution.slug}
              id={solution.slug}
              className="flex flex-col bg-background p-6 sm:p-8"
            >
              <h2 className="text-xl sm:text-2xl">{solution.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {solution.outcome}
              </p>

              <div className="mt-6 grid gap-5 text-sm">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                    Common needs
                  </p>
                  <p className="mt-2">{solution.needs.join(", ")}</p>
                </div>
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                    Product categories
                  </p>
                  <p className="mt-2">{solution.categories.join(", ")}</p>
                </div>
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                    Possible methods
                  </p>
                  <p className="mt-2">{solution.methods.join(", ")}</p>
                </div>
              </div>

              <div className="mt-7">
                <Action to="/quote">{solution.cta}</Action>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          eyebrow="Industries we help"
          title="Different buyers have different pressure points."
          lead="A school order, a construction uniform program and an event giveaway order should not be handled the same way."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.name} className="border-t-2 border-ink pt-5">
              <h3 className="text-lg">{industry.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {industry.need}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {industry.cats.map((cat) => (
                  <Tag key={cat}>{cat}</Tag>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Possible methods: {industry.methods.join(", ")}
              </p>
              <div className="mt-5">
                <Action to="/quote" variant="outline">
                  {industry.cta}
                </Action>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTABlock
        title="Do not see your exact use case?"
        body="Describe the project in plain language. We can help decide which product direction makes sense."
        primaryLabel="Discuss Your Project"
        secondary={{ label: "Browse Products", to: "/products" }}
      />
    </>
  );
}
