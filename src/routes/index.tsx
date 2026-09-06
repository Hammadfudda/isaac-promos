import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-merch.jpg";
import apparelImg from "@/assets/cat-apparel.jpg";
import drinkwareImg from "@/assets/cat-drinkware.jpg";
import patchesImg from "@/assets/cat-patches.jpg";
import workwearImg from "@/assets/cat-workwear.jpg";
import promoImg from "@/assets/cat-promo.jpg";
import {
  Action,
  ButtonAction,
  CTABlock,
  ImageSlot,
  Section,
  SectionHead,
  Tag,
} from "@/components/site/ui";
import {
  decorationMethods,
  faqGroups,
  industries,
  processSteps,
  projectPlaceholders,
  solutions,
} from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isaac Promos | Custom Bulk Merchandise & Promotional Products" },
      {
        name: "description",
        content:
          "Custom apparel, drinkware, patches, workwear and promotional products in bulk. Tell Isaac Promos your goal, quantity and timeline and we help build the order.",
      },
      { property: "og:title", content: "Custom Products Without the Bulk-Order Headache" },
      {
        property: "og:description",
        content:
          "Isaac Promos helps US businesses source, customize and order custom merchandise at scale.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const trustStrip = [
  { title: "Bulk Order Support", body: "Built around volume orders, not one-off purchases." },
  { title: "Custom Branding", body: "Embroidery, printing, patches and engraving options." },
  { title: "Multiple Categories", body: "Apparel, drinkware, bags, patches, workwear and more." },
  { title: "US-Focused Service", body: "Working with business buyers across the United States." },
];

const featuredCategories = [
  { name: "Custom Apparel", slug: "apparel", line: "Tees, polos and fleece for teams and events.", img: apparelImg, span: "lg:col-span-2 lg:row-span-2" },
  { name: "Drinkware", slug: "drinkware", line: "Bottles and tumblers that stay in daily use.", img: drinkwareImg, span: "" },
  { name: "Patches & Badges", slug: "patches-badges", line: "Leather, PVC, chenille and embroidered.", img: patchesImg, span: "" },
  { name: "Workwear", slug: "workwear", line: "Field-ready shirts branded for job sites.", img: workwearImg, span: "" },
  { name: "Bags & Promo", slug: "promotional-items", line: "Totes, pens, keychains and giveaways.", img: promoImg, span: "" },
];

const problems = [
  "Finding a product that matches the use case",
  "Knowing which decoration method to use",
  "Comparing quality levels between blanks",
  "Coordinating several merchandise types at once",
  "Ordering in large quantities without surprises",
  "Getting branding placement and artwork correct",
  "Managing a fixed deadline",
  "Finding a supplier open to unusual requests",
];

const answers = [
  "One conversation instead of five vendors",
  "Product recommendations based on your use case",
  "Customization guidance in plain English",
  "Bulk pricing quoted against real specifications",
  "Production coordination handled on our side",
  "Quality-focused execution and clear communication",
];

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SolveSection />
      <FeaturedCategories />
      <ProblemSolution />
      <ProductFinder />
      <Spotlight />
      <DecorationPreview />
      <ProcessPreview />
      <IndustriesPreview />
      <Distributor />
      <WorkPreview />
      <FaqPreview />
      <CTABlock
        title="Tell us what you are trying to accomplish."
        body="Send the goal, a rough quantity and your timeline. We will come back with product options and a quote built around your actual requirements."
        primaryLabel="Get a Quote"
        secondary={{ label: "Talk to a Product Specialist", to: "/contact" }}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="container-x grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div className="reveal">
          <p className="eyebrow">Custom Merchandise • Bulk Orders • USA</p>
          <h1 className="mt-4 text-4xl leading-[1.02] sm:text-5xl lg:text-[4.1rem]">
            Custom Products Without the Bulk-Order Headache.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            From branded apparel and drinkware to patches, workwear and promotional
            merchandise, Isaac Promos helps businesses turn an idea into a clear,
            customized bulk order.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Tell us what you need, your quantity, timeline and branding requirements. We
            will help you figure out the right product and customization approach.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Action to="/quote" size="lg">
              Get a Quote
            </Action>
            <Action to="/products" size="lg" variant="outline">
              Explore Products
            </Action>
          </div>
          <p className="mt-5 border-l-2 border-primary pl-4 text-sm text-muted-foreground">
            Not sure what product you need? Tell us what you're trying to accomplish.
          </p>
        </div>

        <div className="relative">
          <div className="hover-media border border-border">
            <img
              src={heroImg}
              alt="Assorted blank custom merchandise including folded shirts, a polo, tumbler, bottle, tote bag, patch, pen and golf towel arranged on a studio surface"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 hidden max-w-[15rem] border border-border bg-background p-5 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.5)] lg:block">
            <p className="font-display text-3xl font-bold leading-none text-primary">20+</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Product types across apparel, drinkware, patches and promotional items.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="border-b border-border bg-surface">
      <div className="container-x grid gap-px sm:grid-cols-2 lg:grid-cols-4">
        {trustStrip.map((t) => (
          <div key={t.title} className="py-7 lg:pr-8">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.1em]">
              {t.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolveSection() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="Start with the goal"
          title="What are you trying to create?"
          lead="Most buyers come to us with a situation, not a product number. Pick the closest match and we will handle the rest of the decisions with you."
        />
        <Action to="/solutions" variant="outline">
          Explore Solutions
        </Action>
      </div>

      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <Link
            key={s.slug}
            to="/solutions"
            className="group bg-background p-7 transition-colors hover:bg-surface"
          >
            <h3 className="font-display text-lg font-bold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {s.outcome}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              {s.cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function FeaturedCategories() {
  return (
    <Section tone="surface">
      <SectionHead
        eyebrow="Product categories"
        title="Browse the categories we work in most."
        lead="Each category page explains what the products are typically used for and which decoration methods apply."
      />
      <div className="mt-12 grid auto-rows-[220px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredCategories.map((c) => (
          <Link
            key={c.slug}
            to="/products/$category"
            params={{ category: c.slug }}
            className={`group hover-media relative border border-border bg-background ${c.span}`}
          >
            <img
              src={c.img}
              alt={`${c.name} product examples`}
              loading="lazy"
              width={1200}
              height={900}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-display text-xl font-bold text-ink-foreground">
                {c.name}
              </h3>
              <p className="mt-1.5 max-w-sm text-sm text-ink-foreground/75">{c.line}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                Explore Category
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Action to="/products" variant="dark">
          View All Products
        </Action>
      </div>
    </Section>
  );
}

function ProblemSolution() {
  return (
    <Section tone="ink">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHead
            eyebrow="The usual problem"
            title="Bulk ordering shouldn't require five different vendors."
            lead="Buyers usually spend more time coordinating suppliers than deciding what they actually want. These are the friction points we hear about most."
            invert
          />
          <ul className="mt-8 space-y-3">
            {problems.map((p) => (
              <li
                key={p}
                className="flex gap-3 border-b border-ink-foreground/10 pb-3 text-sm text-ink-foreground/75"
              >
                <span aria-hidden="true" className="text-primary">
                  —
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-ink-foreground/15 p-8 lg:p-10">
          <p className="eyebrow">How we work</p>
          <h3 className="mt-3 text-2xl text-ink-foreground">
            We help simplify the process from product selection to production.
          </h3>
          <ul className="mt-8 space-y-4">
            {answers.map((a, i) => (
              <li key={a} className="flex gap-4">
                <span className="font-display text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-ink-foreground/80">{a}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Action to="/how-it-works" variant="primary">
              See How It Works
            </Action>
          </div>
        </div>
      </div>
    </Section>
  );
}

const finderFields = {
  audience: ["Company", "School", "Team", "Event", "Construction / Field Staff", "Giveaway", "Retail / Resale", "Other"],
  item: ["Apparel", "Drinkware", "Bags", "Patches", "Promo Items", "Not Sure"],
  qty: ["25–50", "50–100", "100–250", "250–500", "500+", "Not Sure"],
};

function ProductFinder() {
  const [audience, setAudience] = useState("");
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const navigateTo = `/quote`;

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHead
          eyebrow="Product finder"
          title="Not sure where to start?"
          lead="Answer three quick questions and we will point you toward products that make sense for the order. You can change any of it later."
        />
        <div className="border border-border bg-surface p-7 lg:p-9">
          <FinderGroup
            label="What are you ordering for?"
            options={finderFields.audience}
            value={audience}
            onChange={setAudience}
            name="finder-audience"
          />
          <FinderGroup
            label="What type of item?"
            options={finderFields.item}
            value={item}
            onChange={setItem}
            name="finder-item"
          />
          <FinderGroup
            label="Approximate quantity"
            options={finderFields.qty}
            value={qty}
            onChange={setQty}
            name="finder-qty"
          />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to={navigateTo}
              search={{ audience, item, qty } as never}
              className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 font-display text-[0.95rem] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Show Me Good Options
            </Link>
            <p className="text-sm text-muted-foreground">
              No selection is final. We confirm everything before production.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FinderGroup({
  label,
  options,
  value,
  onChange,
  name,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  name: string;
}) {
  return (
    <fieldset className="mb-7 last:mb-0">
      <legend className="font-display text-sm font-bold uppercase tracking-[0.1em]">
        {label}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o}
            className={`cursor-pointer border px-3 py-2 text-sm transition-colors ${
              value === o
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background hover:border-foreground"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={o}
              checked={value === o}
              onChange={() => onChange(o)}
              className="sr-only"
            />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Spotlight() {
  return (
    <Section tone="surface">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="hover-media border border-border">
          <img
            src={apparelImg}
            alt="Stack of folded blank polos and t-shirts in charcoal, white and red"
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Product spotlight</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Apparel is where most bulk orders start.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Shirts and polos carry your branding further than almost anything else, but
            the difference between a good order and a disappointing one usually comes
            down to the blank and the decoration method. We help you compare both before
            you commit to a quantity.
          </p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              ["Gildan 2000 Shirts", "A familiar heavyweight cotton tee for high-quantity runs."],
              ["Premium Polos", "Higher-end construction for client-facing and management teams."],
              ["Embroidered Polos", "Stitched branding that holds up to repeated washing."],
              ["DTF Branded Polos", "Full-color transfers for detailed or multi-color logos."],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="font-display text-sm font-bold">{t}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{d}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <Action to="/products/$category" params={{ category: "apparel" }} variant="dark">
              Explore Apparel
            </Action>
            <Action to="/quote" variant="outline">
              Request Pricing
            </Action>
          </div>
        </div>
      </div>
    </Section>
  );
}

function DecorationPreview() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="Decoration methods"
          title="How your logo gets onto the product."
          lead="Each method has a look, a cost profile and a set of products it suits. Here is the short version."
        />
        <Action to="/decoration-methods" variant="outline">
          Compare Methods
        </Action>
      </div>
      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {decorationMethods.slice(0, 8).map((m) => (
          <div key={m.key} className="bg-background p-6">
            <h3 className="font-display text-base font-bold">{m.name}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{m.look}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.1em] text-muted-foreground">
              Best for
            </p>
            <p className="mt-1 text-sm">{m.bestFor}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        Not sure which method fits your project?{" "}
        <Link to="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
          Ask us.
        </Link>
      </p>
    </Section>
  );
}

function ProcessPreview() {
  return (
    <Section tone="surface">
      <SectionHead
        eyebrow="How it works"
        title="A process built for buyers who are still deciding."
        lead="You do not need final specifications to start. Most projects get shaped during the first two steps."
      />
      <ol className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-5">
        {processSteps.map((s) => (
          <li key={s.n} className="bg-background p-6">
            <span className="font-display text-2xl font-bold text-primary">{s.n}</span>
            <h3 className="mt-3 font-display text-base font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <Action to="/how-it-works" variant="dark">
          Read the Full Process
        </Action>
      </div>
    </Section>
  );
}

function IndustriesPreview() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="Industries we help"
          title="Buyers we work with."
          lead="Different buyers have different pressure points. These are the ones we plan around."
        />
        <Action to="/solutions" variant="outline">
          See All Solutions
        </Action>
      </div>
      <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {industries.slice(0, 6).map((i) => (
          <div key={i.name} className="border-t-2 border-ink pt-5">
            <h3 className="font-display text-lg font-bold">{i.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.need}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {i.cats.map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Distributor() {
  return (
    <Section tone="ink">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">Distributor & outsourced work</p>
          <h2 className="mt-3 text-3xl text-ink-foreground sm:text-4xl">
            Need a dependable partner behind the scenes?
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-foreground/70">
            If you have the customer but need help sourcing or producing the merchandise,
            talk to us about your project. Isaac Promos can evaluate custom and bulk-order
            opportunities based on your requirements.
          </p>
        </div>
        <div className="lg:justify-self-end">
          <Action to="/contact" size="lg">
            Discuss an Outsourced Project
          </Action>
        </div>
      </div>
    </Section>
  );
}

function WorkPreview() {
  return (
    <Section tone="surface">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="Our work"
          title="Project examples."
          lead="Project photography is being built out. The gallery below shows the types of projects we set up, with placeholders in place of client images."
        />
        <Action to="/our-work" variant="outline">
          View Gallery
        </Action>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projectPlaceholders.slice(0, 4).map((p) => (
          <article key={p.title}>
            <ImageSlot label={`${p.tag} project image`} />
            <h3 className="mt-4 font-display text-base font-bold">{p.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {p.scope} · {p.method}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FaqPreview() {
  const preview = faqGroups.flatMap((g) => g.items).slice(0, 5);
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHead
            eyebrow="Questions"
            title="Common questions before a first order."
            lead="If something is not covered here, ask directly. We would rather answer than have you guess."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Action to="/faq" variant="dark">
              Read Full FAQ
            </Action>
            <Action to="/contact" variant="outline">
              Ask a Product Question
            </Action>
          </div>
        </div>
        <dl className="divide-y divide-border border-y border-border">
          {preview.map((f) => (
            <div key={f.q} className="py-6">
              <dt className="font-display text-base font-bold">{f.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
