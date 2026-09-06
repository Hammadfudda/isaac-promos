import { createFileRoute } from "@tanstack/react-router";
import { CTABlock, PageHeader, Section, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Izaac Promos | Custom Merchandise Partner" },
      {
        name: "description",
        content:
          "Izaac Promos helps businesses, schools, contractors, events, distributors and organizations source and customize bulk merchandise with practical product guidance.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Practical Recommendations",
    body:
      "We start with what the order needs to accomplish, then help narrow down the product, material, branding method and quantity.",
  },
  {
    title: "Clear Communication",
    body:
      "Specifications, quantity, artwork expectations and project details should be clear before production begins.",
  },
  {
    title: "Flexible Product Sourcing",
    body:
      "You can come to us with a product name, a rough idea, a reference image or a business need. We help structure the order from there.",
  },
  {
    title: "Attention to Branding Details",
    body:
      "Logo placement, decoration method, garment choice and presentation all affect the final result. We help you think through those details.",
  },
  {
    title: "Business-to-Business Service",
    body:
      "Our process is built for organizations that need bulk orders, repeat orders, team programs, event merchandise or outsourced production support.",
  },
  {
    title: "Reliable Follow-Through",
    body:
      "We keep confirmed product, artwork and order details organized so communication stays clear and future reorders are easier to manage.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        eyebrow="About Izaac Promos"
        title="A custom merchandise partner that helps you figure out the order."
        lead="Izaac Promos exists to make custom merchandise ordering easier for organizations that need more than a product listing."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Many buyers know what they want to accomplish, but they do not always know which product, material, branding technique or quantity makes the most sense.
            </p>
            <p>
              That is the gap Izaac Promos is built to help close. You can come to us with a logo, a deadline, a rough budget, a reference image, a product name or simply an idea. We help turn that into a clearer bulk order.
            </p>
            <p>
              We work with businesses, schools, contractors, event organizers, teams, organizations, agencies and distributors across the United States. The goal is not to make you solve the merchandise problem before contacting us. The goal is to help you solve it with us.
            </p>
          </div>

          <aside className="border border-border bg-surface p-6 sm:p-7">
            <p className="eyebrow">What we help with</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>Product selection and sourcing</li>
              <li>Bulk order planning</li>
              <li>Decoration and branding choices</li>
              <li>Artwork and placement discussions</li>
              <li>Custom and unusual product requests</li>
              <li>Repeat and outsourced projects</li>
            </ul>
          </aside>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          eyebrow="How we work"
          title="Six values behind the process."
          lead="The website is not built around fake numbers or invented reviews. Trust should come from a clear process and useful guidance."
        />

        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="bg-background p-6 sm:p-8">
              <h3 className="text-lg">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {value.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CTABlock
        title="Tell us what you are trying to create."
        body="You do not need final specifications before you contact us. Start with the goal, quantity and timeline and we will help organize the next steps."
        primaryLabel="Tell Us About Your Project"
        secondary={{ label: "See How It Works", to: "/how-it-works" }}
      />
    </>
  );
}
