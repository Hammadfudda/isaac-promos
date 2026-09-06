import { createFileRoute } from "@tanstack/react-router";
import { CTABlock, PageHeader, Section, SectionHead } from "@/components/site/ui";
import { processSteps } from "@/data/catalog";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Custom Bulk Orders Work | Isaac Promos" },
      {
        name: "description",
        content:
          "See how Isaac Promos helps move a custom merchandise project from an idea to product selection, quote review, production and completion.",
      },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "How It Works" }]}
        eyebrow="How it works"
        title="You do not need every detail figured out before you start."
        lead="A product idea, reference image, logo, quantity, deadline or business goal is enough to begin the conversation."
      />

      <Section>
        <SectionHead
          eyebrow="The process"
          title="Five clear steps from idea to completion."
          lead="We help shape the order before production so the product, branding method and project details make sense together."
        />

        <ol className="mt-10 grid gap-px border border-border bg-border lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.n} className="bg-background p-6">
              <span className="font-display text-2xl font-bold text-primary">{step.n}</span>
              <h2 className="mt-4 text-lg">{step.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">What you can send us</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">Start with whatever you already have.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "A product name",
              "A reference image",
              "Your logo or artwork",
              "A rough quantity",
              "A budget range",
              "A need-by date",
              "An event or campaign",
              "A simple explanation of the problem",
            ].map((item) => (
              <div key={item} className="border-t border-border pt-3 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABlock
        title="Ready to start a bulk order?"
        body="Tell us what you know so far. We will help narrow down the product and customization details before you commit."
        primaryLabel="Start Your Bulk Order"
        secondary={{ label: "Explore Products", to: "/products" }}
      />
    </>
  );
}
