import { createFileRoute } from "@tanstack/react-router";
import { Action, CTABlock, PageHeader, Section, SectionHead } from "@/components/site/ui";
import { decorationMethods } from "@/data/catalog";

export const Route = createFileRoute("/decoration-methods")({
  head: () => ({
    meta: [
      { title: "Decoration & Customization Methods | Isaac Promos" },
      {
        name: "description",
        content:
          "Embroidery, DTF, screen printing, PVC, chenille, leather patches, laser engraving and pad printing — what each method looks like, what it costs you in trade-offs and when to use it.",
      },
      { property: "og:title", content: "Decoration & Customization Methods | Isaac Promos" },
      {
        property: "og:description",
        content:
          "A plain-language comparison of the branding methods we use and when each one is the right call.",
      },
    ],
    links: [{ rel: "canonical", href: "/decoration-methods" }],
  }),
  component: MethodsPage,
});

const guidance = [
  {
    q: "Apparel that gets washed constantly",
    a: "Embroidery for logos, screen printing for large simple graphics. Both survive industrial laundering better than most alternatives.",
  },
  {
    q: "Detailed, full-color artwork",
    a: "DTF printing. It reproduces gradients and fine detail that thread and screens cannot handle economically.",
  },
  {
    q: "Hard surfaces like tumblers and bottles",
    a: "Laser engraving for permanence, pad printing when you need color on a small curved area.",
  },
  {
    q: "Outdoor gear and weather exposure",
    a: "PVC patches. Molded rubber holds color and shape where thread and print break down.",
  },
];

function MethodsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Decoration Methods" }]}
        eyebrow="Customization"
        title="The branding method matters as much as the product."
        lead="The same logo can look premium or cheap depending on how it is applied. Here is what each method does well, and where it is the wrong choice."
      />

      <Section>
        <div className="overflow-x-auto border border-border">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-surface">
                {["Method", "Best for", "Finish", "Common products"].map((h) => (
                  <th
                    key={h}
                    className="border-b border-border px-5 py-4 font-display text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {decorationMethods.map((m) => (
                <tr key={m.key} className="border-b border-border last:border-0 hover:bg-surface">
                  <th scope="row" className="px-5 py-5 align-top font-display text-base font-semibold">
                    {m.name}
                  </th>
                  <td className="px-5 py-5 align-top text-muted-foreground">{m.bestFor}</td>
                  <td className="px-5 py-5 align-top text-muted-foreground">{m.look}</td>
                  <td className="px-5 py-5 align-top text-muted-foreground">{m.products}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          eyebrow="Choosing"
          title="A quick way to narrow it down"
          lead="If you are deciding between two methods, this is usually how the conversation goes."
        />
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {guidance.map((g) => (
            <div key={g.q} className="bg-background p-7">
              <h3 className="text-base">{g.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Action to="/quote">Send Your Logo for a Recommendation</Action>
          <Action to="/products" variant="outline">
            Browse Products
          </Action>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Artwork"
          title="What to send us"
          lead="You do not need print-ready files to get started, but better files mean fewer revisions."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              t: "Preferred",
              b: "Vector files — AI, EPS, PDF or SVG. These scale to any size and separate cleanly for embroidery and screen printing.",
            },
            {
              t: "Usually workable",
              b: "High-resolution PNG or JPG at 300 DPI or larger, ideally with a transparent or plain background.",
            },
            {
              t: "Needs rework",
              b: "Screenshots, small web images and social-media exports. We will tell you upfront if artwork needs to be recreated.",
            },
          ].map((x) => (
            <div key={x.t} className="border-t-2 border-ink pt-5">
              <h3 className="text-base">{x.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{x.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock
        title="Send your artwork and we will tell you the best method."
        body="Attach a logo or reference image with your request. We will come back with a recommendation and the reasoning behind it."
        secondary={{ label: "Read the FAQ", to: "/faq" }}
      />
    </>
  );
}
