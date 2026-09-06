import { createFileRoute } from "@tanstack/react-router";
import { CTABlock, PageHeader, Section, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Isaac Promos | Custom Merchandise Partner" },
      {
        name: "description",
        content:
          "Isaac Promos is a US-facing custom merchandise and bulk order partner focused on clear specifications, honest timelines and consistent communication.",
      },
      { property: "og:title", content: "About Isaac Promos | Custom Merchandise Partner" },
      {
        property: "og:description",
        content:
          "Who we are, how we work and why buyers choose a partner over a print vendor.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const principles = [
  {
    t: "Clarity before commitment",
    b: "Specifications, quantities, methods and timelines are confirmed in writing before production starts. No surprises at invoicing.",
  },
  {
    t: "Honest recommendations",
    b: "If a cheaper product serves you better, we say so. If a deadline is not realistic, we say that too — before you order.",
  },
  {
    t: "One point of contact",
    b: "You are not handed off. The person who quotes your project is the person who follows it through and handles the reorder.",
  },
  {
    t: "Built for repeat orders",
    b: "We keep your confirmed specifications on file so a reorder takes one message instead of restarting the conversation.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        eyebrow="About"
        title="A merchandise partner, not another printing vendor."
        lead="Isaac Promos helps US businesses, schools, contractors, event organizers and distributors source and customize merchandise in bulk — with the product guidance that most order forms leave out."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Most bulk merchandise problems are not printing problems. They are decision problems:
              the wrong blank for the environment, a decoration method that will not survive the
              wash, a quantity that missed a price break, or a deadline nobody flagged until it was
              too late.
            </p>
            <p>
              We built Isaac Promos around the part that actually goes wrong. Before we quote, we ask
              how the items will be used, who receives them and when they are needed. Then we
              recommend a product and a decoration method that fit those answers — including when
              that means spending less than you planned.
            </p>
            <p>
              We are a newer company in the US market, and we are direct about that. What we offer
              instead of a long client list is a process you can inspect: written specifications,
              explained pricing variables, realistic timelines and a contact who stays reachable
              after the order ships.
            </p>
          </div>

          <aside className="h-fit border border-border bg-surface p-7">
            <p className="eyebrow">At a glance</p>
            <dl className="mt-5 space-y-4 text-sm">
              {[
                ["Focus", "Custom merchandise & bulk order solutions"],
                ["Market", "United States"],
                ["Buyers", "Businesses, schools, contractors, events, distributors"],
                ["Categories", "Apparel, drinkware, bags, patches, workwear, promo"],
                ["Methods", "Embroidery, DTF, screen print, PVC, chenille, laser"],
                ["Order type", "Bulk, repeat and outsourced projects"],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <dt className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-1 text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          eyebrow="How we operate"
          title="Four principles we hold to"
          lead="These are the standards a purchasing manager should be able to hold us to on every order."
        />
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.t} className="bg-background p-8">
              <h3 className="text-lg">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock
        title="Want to test how we work before committing?"
        body="Send one project. Judge the questions we ask, the options we present and how fast we come back to you."
        secondary={{ label: "How It Works", to: "/how-it-works" }}
      />
    </>
  );
}
