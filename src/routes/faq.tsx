import { createFileRoute } from "@tanstack/react-router";
import { CTABlock, PageHeader, Section } from "@/components/site/ui";
import { faqGroups } from "@/data/catalog";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Custom Merchandise FAQ | Izaac Promos" },
      {
        name: "description",
        content:
          "Answers about bulk orders, artwork, customization, product selection, quotes, shipping, production and outsourced merchandise projects.",
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
        eyebrow="FAQ"
        title="Questions buyers usually ask before a bulk order."
        lead="If you do not know the exact product or decoration method yet, that is fine. The purpose of the process is to help you narrow it down."
      />

      <Section>
        <div className="mx-auto max-w-4xl space-y-12">
          {faqGroups.map((group) => (
            <section key={group.group}>
              <h2 className="text-2xl">{group.group}</h2>
              <dl className="mt-5 divide-y divide-border border-y border-border">
                {group.items.map((item) => (
                  <div key={item.q} className="py-5 sm:py-6">
                    <dt className="font-display text-base font-bold">{item.q}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </Section>

      <CTABlock
        title="Still have a product question?"
        body="Ask directly. We would rather help you understand the options than make you guess."
        primaryLabel="Ask a Product Question"
        secondary={{ label: "Get a Quote", to: "/quote" }}
      />
    </>
  );
}
