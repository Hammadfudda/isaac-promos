import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { MarqueeBar } from "@/components/site/MarqueeBar";
import heroImg from "@/assets/hero-merch.jpg";
import apparelImg from "@/assets/cat-apparel.jpg";
import drinkwareImg from "@/assets/cat-drinkware.jpg";
import patchesImg from "@/assets/cat-patches.jpg";
import workwearImg from "@/assets/cat-workwear.jpg";
import promoImg from "@/assets/cat-promo.jpg";
import {
  Action,
  CTABlock,
  Section,
  SectionHead,
  Tag,
} from "@/components/site/ui";
import {
  decorationMethods,
  faqGroups,
  industries,
  processSteps,
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
  {
    name: "Custom Apparel",
    slug: "apparel",
    line: "Tees, polos and fleece for teams and events.",
    img: apparelImg,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    name: "Drinkware",
    slug: "drinkware",
    line: "Bottles and tumblers with custom branding.",
    img: drinkwareImg,
    span: "",
  },
  {
    name: "Patches & Badges",
    slug: "patches-badges",
    line: "Leather, PVC, chenille and embroidered.",
    img: patchesImg,
    span: "",
  },
  {
    name: "Workwear",
    slug: "workwear",
    line: "Field-ready shirts branded for job sites.",
    img: workwearImg,
    span: "",
  },
  {
    name: "Bags & Promo",
    slug: "promotional-items",
    line: "Totes, pens, keychains and notebooks.",
    img: promoImg,
    span: "",
  },
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
      <MarqueeBar />
      <WhyWeDoIt />
      <TrustStrip />
      <SolveSection />
      <FeaturedCategories />
      <MarqueeBar dark />
      <ProblemSolution />
      <ProductFinder />
      <Spotlight />
      <DecorationPreview />
      <ProcessPreview />
      <IndustriesPreview />
      <Distributor />
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
      <div className="container-x grid items-center gap-8 py-10 sm:gap-12 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div className="reveal min-w-0">
          <p className="eyebrow">Custom Merchandise • Bulk Orders • USA</p>

          <h1 className="mt-4 text-3xl leading-[1.03] sm:text-5xl lg:text-[4.1rem]">
            Custom Products Without the Bulk-Order Headache.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            From branded apparel and drinkware to patches, workwear and promotional merchandise, Isaac Promos helps businesses turn an idea into a clear, customized bulk order.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell us what you need, the quantity, your timeline and how you want it branded. We will help you land on the right product and the right customization approach.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Action to="/quote" size="lg" className="w-full sm:w-auto">
              Get a Quote
            </Action>
            <Action to="/products" size="lg" variant="outline" className="w-full sm:w-auto">
              Explore Products
            </Action>
          </div>

          <p className="mt-5 border-l-2 border-primary pl-4 text-sm text-muted-foreground">
            Not sure what product you need? Tell us what you are trying to accomplish.
          </p>
        </div>

        <div className="min-w-0">
          <div className="hover-media overflow-hidden border border-border">
            <img
              src={heroImg}
              alt="Assorted custom merchandise arranged on a studio surface"
              width={1600}
              height={1200}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyWeDoIt() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
        <div className="min-w-0">
          <p className="eyebrow">Why we do it this way</p>
          <h2 className="mt-3 text-2xl sm:text-4xl">
            We are building for long-term relationships.
          </h2>
        </div>

        <div className="min-w-0 max-w-2xl">
          <p className="leading-relaxed text-muted-foreground">
            We are building this company around long-term relationships, not one-off orders. Our goal is a wall of loyal customers, not a pile of profit.
          </p>

          <p className="mt-6 font-display text-sm font-bold uppercase tracking-[0.1em]">
            How we do it
          </p>

          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>Delivering quality work, on time, every time</li>
            <li>Keeping our profit margins as low as we reasonably can</li>
            <li>Prioritizing long-term trust over short-term gain</li>
          </ul>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            At the end of the day, we are here to build a wall with customers, not with money.
          </p>
        </div>
      </div>
    </Section>
  );
}

function TrustStrip() {
  return (
    <div className="border-y border-border bg-surface">
      <div className="container-x grid gap-px sm:grid-cols-2 lg:grid-cols-4">
        {trustStrip.map((t) => (
          <div key={t.title} className="py-6 sm:py-7 lg:pr-8">
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
      <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <SectionHead
          eyebrow="Start with the goal"
          title="What are you trying to create?"
          lead="Most buyers come to us with a situation, not a product number. Pick the closest match and we will handle the rest of the decisions with you."
        />
        <Action to="/solutions" variant="outline">
          Explore Solutions
        </Action>
      </div>

      <div className="mt-10 grid gap-px border border-border bg-border sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <Link
            key={s.slug}
            to="/solutions"
            hash={s.slug}
            className="group min-w-0 bg-background p-5 transition-colors hover:bg-surface sm:p-7"
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

      <div className="mt-10 grid auto-rows-[200px] gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[220px]">
        {featuredCategories.map((c) => (
          <Link
            key={c.slug}
            to="/products/$category"
            params={{ category: c.slug }}
            className={`group hover-media relative min-w-0 overflow-hidden border border-border bg-background ${c.span}`}
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

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3 className="font-display text-lg font-bold text-ink-foreground sm:text-xl">
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
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <SectionHead
            eyebrow="The usual problem"
            title="Bulk ordering should not require five different vendors."
            lead="Buyers usually spend more time coordinating suppliers than deciding what they actually want. These are the friction points we hear about most."
            invert
          />

          <ul className="mt-8 space-y-3">
            {problems.map((p) => (
              <li
                key={p}
                className="flex gap-3 border-b border-ink-foreground/10 pb-3 text-sm text-ink-foreground/75"
              >
                <span aria-hidden="true" className="text-primary">•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 border border-ink-foreground/15 p-6 sm:p-8 lg:p-10">
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
            <Action to="/how-it-works">See How It Works</Action>
          </div>
        </div>
      </div>
    </Section>
  );
}

const finderFields = {
  audience: [
    "Company",
    "School",
    "Team",
    "Event",
    "Construction / Field Staff",
    "Giveaway",
    "Retail / Resale",
    "Other",
  ],
  item: ["Apparel", "Drinkware", "Bags", "Patches", "Promo Items", "Not Sure"],
  qty: ["25 to 50", "50 to 100", "100 to 250", "250 to 500", "500+", "Not Sure"],
};

function ProductFinder() {
  const [audience, setAudience] = useState("");
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");

  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
        <SectionHead
          eyebrow="Product finder"
          title="Not sure where to start?"
          lead="Answer three quick questions and we will point you toward products that make sense for the order. You can change any of it later."
        />

        <div className="min-w-0 border border-border bg-surface p-5 sm:p-7 lg:p-9">
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

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              to="/quote"
              search={{ audience, item, qty } as never}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-primary px-5 py-3 font-display text-[0.95rem] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto sm:px-6"
            >
              Show Me Good Options
            </Link>

            <p className="text-sm text-muted-foreground">
              Each question allows one choice only. You can change the selection anytime.
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
                ? "border-primary bg-primary font-semibold text-primary-foreground"
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
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="hover-media min-w-0 overflow-hidden border border-border">
          <img
            src={apparelImg}
            alt="Stack of folded blank polos and t-shirts"
            loading="lazy"
            width={1200}
            height={900}
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="eyebrow">Product spotlight</p>
          <h2 className="mt-3 text-2xl sm:text-4xl">
            Shirts, polos and hoodies built around your budget and branding.
          </h2>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            We keep our margins tight and shipping is included, so the pricing you get is genuinely competitive. We work with a wide range of fabrics and can decorate with screen printing, embroidery, DTG, heat transfer or sublimation.
          </p>

          <div className="mt-6 space-y-4 text-sm text-muted-foreground">
            <p>Leather, chenille and PVC patch options are available if you want a more premium look.</p>
            <p>We usually send a sample before full production starts. Once you approve it, we move to mass production, which saves fabric and time on both ends.</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Action
              to="/products/$category"
              params={{ category: "apparel" }}
              variant="dark"
              className="w-full sm:w-auto"
            >
              Explore Apparel
            </Action>

            <Action to="/quote" variant="outline" className="w-full sm:w-auto">
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
      <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <SectionHead
          eyebrow="Decoration methods"
          title="How your logo gets onto the product."
          lead="Each method has a look, a cost profile and a set of products it suits. Here is the short version."
        />
        <Action to="/decoration-methods" variant="outline">
          Compare Methods
        </Action>
      </div>

      <div className="mt-10 grid gap-px border border-border bg-border sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {decorationMethods.map((m) => (
          <div key={m.key} className="min-w-0 bg-background p-5 sm:p-6">
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
        <Link
          to="/contact"
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
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

      <ol className="mt-10 grid gap-px border border-border bg-border sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((s) => (
          <li key={s.n} className="min-w-0 bg-background p-5 sm:p-6">
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
      <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <SectionHead
          eyebrow="Industries we help"
          title="Buyers we work with."
          lead="Different buyers have different pressure points. These are the ones we plan around."
        />

        <Action to="/solutions" variant="outline">
          See All Solutions
        </Action>
      </div>

      <div className="mt-10 grid gap-x-10 gap-y-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((i) => (
          <div key={i.name} className="min-w-0 border-t-2 border-ink pt-5">
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
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-10">
        <div className="min-w-0">
          <p className="eyebrow">Distributor & outsourced work</p>
          <h2 className="mt-3 text-2xl text-ink-foreground sm:text-4xl">
            Need a dependable partner behind the scenes?
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-foreground/70">
            If you have the customer but need help sourcing or producing the merchandise, talk to us about your project. Isaac Promos can evaluate custom and bulk-order opportunities based on your requirements.
          </p>
        </div>

        <div className="lg:justify-self-end">
          <Action to="/contact" size="lg" className="w-full sm:w-auto">
            Discuss an Outsourced Project
          </Action>
        </div>
      </div>
    </Section>
  );
}

function FaqPreview() {
  const preview = faqGroups.flatMap((g) => g.items).slice(0, 5);

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div className="min-w-0">
          <SectionHead
            eyebrow="Questions"
            title="Common questions before a first order."
            lead="If something is not covered here, ask directly. We would rather answer than have you guess."
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Action to="/faq" variant="dark" className="w-full sm:w-auto">
              Read Full FAQ
            </Action>
            <Action to="/contact" variant="outline" className="w-full sm:w-auto">
              Ask a Product Question
            </Action>
          </div>
        </div>

        <dl className="min-w-0 divide-y divide-border border-y border-border">
          {preview.map((f) => (
            <div key={f.q} className="py-5 sm:py-6">
              <dt className="font-display text-base font-bold">{f.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
