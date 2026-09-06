import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Info } from "lucide-react";
import { categories, decorationMethods } from "@/data/catalog";
import { ButtonAction, PageHeader, Section } from "@/components/site/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Isaac Promos" },
      {
        name: "description",
        content:
          "Request a quote for custom bulk merchandise. Tell us the product, quantity, decoration method and timeline — we respond with accurate pricing within one business day.",
      },
      { property: "og:title", content: "Request a Quote | Isaac Promos" },
      {
        property: "og:description",
        content:
          "Tell us the product, quantity, decoration method and timeline — we respond with accurate pricing within one business day.",
      },
    ],
  }),
  component: QuotePage,
});

type FormState = {
  category: string;
  productDetails: string;
  quantity: string;
  decoration: string;
  deadline: string;
  name: string;
  email: string;
  company: string;
  notes: string;
};

const initialState: FormState = {
  category: "",
  productDetails: "",
  quantity: "",
  decoration: "",
  deadline: "",
  name: "",
  email: "",
  company: "",
  notes: "",
};

const steps = ["Project", "Details", "Contact"] as const;

function QuotePage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);

  const set = (key: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canContinue = useMemo(() => {
    if (step === 0) return form.category !== "";
    if (step === 1) return form.quantity !== "";
    return form.name.trim() !== "" && form.email.trim() !== "";
  }, [step, form]);

  if (submitted) {
    return (
      <div>
        <PageHeader
          eyebrow="Quote request"
          title="Request received"
          lead="Thanks — your quote request is in our inbox."
        />
        <Section>
          <div className="mx-auto max-w-xl rounded-sm border border-border bg-surface p-8 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-5 text-2xl">What happens next</h2>
            <ol className="mt-6 space-y-4 text-left">
              {[
                "We review your request and check blank availability and decoration fit.",
                "You receive pricing, a suggested product and a realistic timeline within one business day.",
                "Once you approve, we prepare a digital proof before anything goes into production.",
              ].map((text, i) => (
                <li key={text} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-primary font-display text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        eyebrow="Request a quote"
        title="Get accurate pricing for your order"
        lead="Three short steps. The more detail you share, the more accurate your pricing — no ballpark ranges that change later."
        crumbs={[{ label: "Home", to: "/" }, { label: "Get a Quote" }]}
      />

      <Section>
        <div className="mx-auto max-w-2xl">
          <ol className="flex items-center gap-2" aria-label="Progress">
            {steps.map((label, i) => (
              <li key={label} className="flex flex-1 items-center gap-2">
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border font-display text-xs font-bold",
                    i <= step
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface text-muted-foreground",
                  )}
                >
                  {i + 1}
                </span>
                <span
                  className={cn(
                    "text-xs font-semibold uppercase tracking-wide",
                    i <= step ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {label}
                </span>
                {i < steps.length - 1 ? (
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>

          <form
            className="mt-8 rounded-sm border border-border bg-surface p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              if (step < steps.length - 1) setStep(step + 1);
              else setSubmitted(true);
            }}
          >
            {step === 0 ? (
              <div className="space-y-5">
                <div>
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Product category
                  </span>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.slug}
                        type="button"
                        onClick={() => set("category", cat.slug)}
                        className={cn(
                          "rounded-sm border p-3 text-left transition-colors",
                          form.category === cat.slug
                            ? "border-primary bg-background"
                            : "border-border bg-background hover:border-foreground/40",
                        )}
                        aria-pressed={form.category === cat.slug}
                      >
                        <span className="font-display text-sm font-semibold">
                          {cat.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {cat.tagline}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Product details (optional)
                  </span>
                  <input
                    className="field"
                    value={form.productDetails}
                    onChange={(e) => set("productDetails", e.target.value)}
                    placeholder="e.g. heavyweight tees, 20oz tumblers, leather patches"
                  />
                </label>
              </div>
            ) : null}

            {step === 1 ? (
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Approximate quantity
                    </span>
                    <input
                      required
                      type="number"
                      min={1}
                      className="field"
                      value={form.quantity}
                      onChange={(e) => set("quantity", e.target.value)}
                      placeholder="e.g. 150"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Decoration method
                    </span>
                    <select
                      className="field"
                      value={form.decoration}
                      onChange={(e) => set("decoration", e.target.value)}
                    >
                      <option value="">Not sure — advise me</option>
                      {decorationMethods.map((d) => (
                        <option key={d.key} value={d.key}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Deadline or event date (optional)
                  </span>
                  <input
                    type="date"
                    className="field"
                    value={form.deadline}
                    onChange={(e) => set("deadline", e.target.value)}
                  />
                </label>
                <div className="flex gap-3 rounded-sm border border-border bg-background p-4">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Not sure about decoration? Leave it blank — we recommend a
                    method based on the product, artwork and quantity. You can
                    also attach your logo after submitting.
                  </p>
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Name
                    </span>
                    <input
                      required
                      className="field"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Jane Smith"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Work email
                    </span>
                    <input
                      required
                      type="email"
                      className="field"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="jane@company.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Company / organization
                  </span>
                  <input
                    className="field"
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                    placeholder="Acme Corp"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Anything else we should know?
                  </span>
                  <textarea
                    className="field min-h-28"
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    placeholder="Sizes breakdown, colors, budget range, shipping address..."
                  />
                </label>
              </div>
            ) : null}

            <div className="mt-8 flex items-center justify-between gap-3">
              {step > 0 ? (
                <ButtonAction
                  type="button"
                  variant="ghost"
                  onClick={() => setStep(step - 1)}
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </ButtonAction>
              ) : (
                <span />
              )}
              <ButtonAction type="submit" size="lg" disabled={!canContinue}>
                {step < steps.length - 1 ? (
                  <>
                    Continue <ArrowRight className="h-4 w-4" />
                  </>
                ) : (
                  "Submit quote request"
                )}
              </ButtonAction>
            </div>
          </form>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            No spam, no obligation. We respond within one business day.
          </p>
        </div>
      </Section>
    </div>
  );
}
