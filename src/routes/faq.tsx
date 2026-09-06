import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTABlock, PageHeader, Section } from "@/components/site/ui";
import { faqGroups } from "@/data/catalog";

const allItems = faqGroups.flatMap((g) => g.items);

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Isaac Promos" },
      {
        name: "description",
        content:
          "Answers on bulk ordering, product selection, artwork requirements, pricing variables, production timelines and outsourced distributor projects.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Isaac Promos" },
      {
        property: "og:description",
        content: "Ordering, artwork, pricing, timelines and distributor questions answered directly.",
      },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allItems.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
        eyebrow="Answers"
        title="Questions buyers ask before the first order."
        lead="If something is not covered here, ask directly — we would rather answer before you order than after."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav aria-label="FAQ topics" className="h-fit lg:sticky lg:top-28">
            <p className="eyebrow">Topics</p>
            <ul className="mt-4 space-y-2 text-sm">
              {faqGroups.map((g) => (
                <li key={g.group}>
                  <a
                    href={`#${slug(g.group)}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {g.group}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-14">
            {faqGroups.map((g) => (
              <section key={g.group} id={slug(g.group)} className="scroll-mt-28">
                <h2 className="text-2xl">{g.group}</h2>
                <Accordion type="single" collapsible className="mt-4 border-t border-border">
                  {g.items.map((item) => (
                    <AccordionItem key={item.q} value={item.q} className="border-b border-border">
                      <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
        </div>
      </Section>

      <CTABlock
        title="Still have a question?"
        body="Ask it directly and we will answer plainly, including when the answer is that we are not the right fit."
        secondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
