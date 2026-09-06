import { createFileRoute } from "@tanstack/react-router";
import { CTABlock, ImageSlot, PageHeader, Section, SectionHead, Tag } from "@/components/site/ui";
import { projectPlaceholders } from "@/data/catalog";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Our Work & Project Types | Isaac Promos" },
      {
        name: "description",
        content:
          "Examples of the bulk merchandise projects we take on — uniform programs, event kits, spirit wear, workwear, patch programs and client gift drinkware.",
      },
      { property: "og:title", content: "Our Work & Project Types | Isaac Promos" },
      {
        property: "og:description",
        content: "The kinds of custom merchandise projects Isaac Promos handles for US buyers.",
      },
    ],
    links: [{ rel: "canonical", href: "/our-work" }],
  }),
  component: OurWorkPage,
});

function OurWorkPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Our Work" }]}
        eyebrow="Project types"
        title="The kind of work we take on."
        lead="We are a newer company and we would rather show you the shape of the projects we handle than overstate a portfolio. Each card below is a representative project type, not a client claim."
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectPlaceholders.map((p) => (
            <article key={p.title} className="group flex flex-col border border-border bg-background">
              <ImageSlot label={p.title} ratio="4 / 3" className="border-0 border-b border-border" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <Tag>{p.tag}</Tag>
                  <span className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-primary">
                    {p.method}
                  </span>
                </div>
                <h2 className="mt-4 text-lg leading-snug">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          eyebrow="Transparency"
          title="Why we are not showing logos yet"
          lead="Isaac Promos is new. Rather than borrow credibility with stock imagery and invented case studies, we would rather be clear about where we stand and let the process and communication earn the order."
        />
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {[
            {
              t: "Real project galleries as we deliver",
              b: "This page will fill with actual production photography from completed orders, with client permission.",
            },
            {
              t: "Specifications you can verify",
              b: "Every quote states the product, decoration method, quantity and timeline in writing before anything moves.",
            },
            {
              t: "Reachable after the sale",
              b: "Reorders and follow-up questions go to the same contact who handled the original order.",
            },
          ].map((x) => (
            <div key={x.t} className="bg-background p-7">
              <h3 className="text-base">{x.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{x.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock
        title="Have a project like one of these?"
        body="Tell us the product type, quantity and deadline. We will confirm what is realistic before you commit to anything."
        secondary={{ label: "See Solutions", to: "/solutions" }}
      />
    </>
  );
}
