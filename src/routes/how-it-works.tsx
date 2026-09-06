import { createFileRoute } from "@tanstack/react-router";
import { CTABlock, PageHeader, Section, SectionHead } from "@/components/site/ui";
import { processSteps } from "@/data/catalog";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Ordering Works | Isaac Promos" },
      {
        name: "description",
        content:
          "A five-step bulk ordering process: share your requirement, review product options, approve the quote and specifications, move into production, and receive your order.",
      },
      { property: "og:title", content: "How Ordering Works | Isaac Promos" },
      {
        property: "og:description",
        content:
          "Know exactly what happens after you submit a request — from first message to delivered order.",
      },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

const expectations = [
  {
    t: "You will not be pushed into a decision",
    b: "Quantities, products and methods can change during the quoting stage. Nothing is locked until you approve specifications.",
  },
  {
    t: "You will get straight answers on timelines",
    b: "If a deadline is not realistic for a given method or quantity, we say so before you commit rather than after.",
  },
  {
    t: "You will know what affects the price",
    b: "Quantity, product, decoration method, imprint locations and timeline. We show you where the cost is coming from.",
  },
  {
    t: "You will talk to the same point of contact",
    b: "Your project is not passed between departments. Reorders reference the same confirmed specifications.",
  },
];

function HowItWorksPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "How It Works" }]}
        eyebrow="Process"
        title="Five steps, no guesswork."
        lead="Bulk ordering goes wrong when expectations are unclear. This is exactly what happens between your first message and a completed order."
      />

      <Section>
        <ol className="grid gap-px overflow-hidden border border-border bg-border">
          {processSteps.map((step) => (
            <li key={step.n} className="grid gap-4 bg-background p-7 md:grid-cols-[auto_1fr] md:gap-10 lg:p-10">
              <span className="font-display text-4xl font-extrabold leading-none text-primary md:w-24 lg:text-5xl">
                {step.n}
              </span>
              <div className="max-w-3xl">
                <h2 className="text-xl lg:text-2xl">{step.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="surface">
        <SectionHead
          eyebrow="What to expect"
          title="How we work with buyers"
          lead="We are a newer company, so the way we work has to speak for itself. These are commitments, not marketing lines."
        />
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {expectations.map((e) => (
            <div key={e.t} className="bg-background p-7">
              <h3 className="text-base">{e.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Before you request"
          title="Helpful, but not required"
          lead="Send whatever you have. These details simply speed up the first reply."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Approximate quantity or a range",
            "Who the items are for",
            "Your need-by date",
            "Logo or reference image",
          ].map((x) => (
            <li key={x} className="border-l-2 border-primary bg-surface p-5 text-sm text-foreground">
              {x}
            </li>
          ))}
        </ul>
      </Section>

      <CTABlock
        title="Ready to start step one?"
        body="Send your requirement. If you are still comparing options, tell us the goal instead and we will help you shape it."
        secondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
