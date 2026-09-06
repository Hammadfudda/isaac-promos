import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Info, Upload } from "lucide-react";
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
          "Request pricing for custom bulk merchandise. Tell us the product, quantity, branding preference, timeline and contact details.",
      },
    ],
  }),
  component: QuotePage,
});

type FormState = {
  category: string;
  productDetails: string;
  quantity: string;
  budget: string;
  deadline: string;
  purpose: string;
  decoration: string;
  artworkName: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  cityState: string;
  notes: string;
};

const initialState: FormState = {
  category: "",
  productDetails: "",
  quantity: "",
  budget: "",
  deadline: "",
  purpose: "",
  decoration: "",
  artworkName: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  cityState: "",
  notes: "",
};

const steps = ["Product", "Project Details", "Customization", "Contact"] as const;

function QuotePage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);

  const set = (key: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canContinue = useMemo(() => {
    if (step === 0) return form.category !== "";
    if (step === 1) return form.quantity.trim() !== "";
    if (step === 2) return true;
    return form.name.trim() !== "" && form.email.trim() !== "";
  }, [step, form]);

  if (submitted) {
    return (
      <>
        <PageHeader
          eyebrow="Quote request"
          title="Request details captured"
          lead="Your information is ready for review."
        />

        <Section>
          <div className="mx-auto max-w-xl rounded-sm border border-border bg-surface p-6 text-center sm:p-8">
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-5 text-2xl">What happens next</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The current frontend captures the form state only. Connect this form to your email or backend before launch so real requests are delivered to the team.
            </p>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Request a quote"
        title="Tell us what you are trying to order"
        lead="Four short steps. You do not need to know every product or printing term before you start."
        crumbs={[{ label: "Home", to: "/" }, { label: "Get a Quote" }]}
      />

      <Section>
        <div className="mx-auto max-w-3xl min-w-0">
          <ol className="grid grid-cols-4 gap-1.5 sm:gap-2" aria-label="Progress">
            {steps.map((label, i) => (
              <li key={label} className="flex min-w-0 flex-col gap-2">
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-sm border font-display text-xs font-bold",
                    i <= step
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface text-muted-foreground",
                  )}
                >
                  {i + 1}
                </span>

                <span
                  className={cn(
                    "text-[0.58rem] font-semibold uppercase leading-tight tracking-wide sm:text-xs",
                    i <= step ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {label}
                </span>
              </li>
            ))}
          </ol>

          <form
            className="mt-7 rounded-sm border border-border bg-surface p-4 sm:mt-8 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();

              if (step < steps.length - 1) {
                setStep(step + 1);
              } else {
                setSubmitted(true);
              }
            }}
          >
            {step === 0 ? (
              <div className="space-y-6">
                <div>
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    What do you need?
                  </span>

                  <p className="mb-4 text-sm text-muted-foreground">
                    Choose one category. If your project includes several product types, list the others in Product Details or Notes.
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {categories.map((cat) => {
                      const selected = form.category === cat.slug;

                      return (
                        <button
                          key={cat.slug}
                          type="button"
                          onClick={() => set("category", cat.slug)}
                          className={cn(
                            "relative min-w-0 rounded-sm border p-4 text-left transition-colors",
                            selected
                              ? "border-primary bg-background font-semibold"
                              : "border-border bg-background hover:border-foreground/40",
                          )}
                          aria-pressed={selected}
                        >
                          {selected ? (
                            <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                              <Check className="h-3 w-3" />
                            </span>
                          ) : null}

                          <span className="block pr-7 font-display text-sm font-semibold">
                            {cat.name}
                          </span>

                          <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                            {cat.tagline}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Product details
                  </span>
                  <textarea
                    className="field min-h-24"
                    value={form.productDetails}
                    onChange={(e) => set("productDetails", e.target.value)}
                    placeholder="Example: 150 heavyweight tees plus 50 polos, or I am not sure which product yet"
                  />
                </label>

                <div className="flex gap-3 rounded-sm border border-border bg-background p-4">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    No exact product picked yet? That is okay. Tell us the goal and we will help you narrow it down.
                  </p>
                </div>
              </div>
            ) : null}

            {step === 1 ? (
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block min-w-0">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Approximate quantity
                    </span>
                    <input
                      required
                      className="field"
                      value={form.quantity}
                      onChange={(e) => set("quantity", e.target.value)}
                      placeholder="Example: 150 or 100 to 250"
                    />
                  </label>

                  <label className="block min-w-0">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Budget range, optional
                    </span>
                    <select
                      className="field"
                      value={form.budget}
                      onChange={(e) => set("budget", e.target.value)}
                    >
                      <option value="">Prefer not to say</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-2500">$1,000 to $2,500</option>
                      <option value="2500-5000">$2,500 to $5,000</option>
                      <option value="5000-10000">$5,000 to $10,000</option>
                      <option value="10000-plus">$10,000+</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block min-w-0">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Need-by date
                    </span>
                    <input
                      type="date"
                      className="field"
                      value={form.deadline}
                      onChange={(e) => set("deadline", e.target.value)}
                    />
                  </label>

                  <label className="block min-w-0">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Purpose or event
                    </span>
                    <input
                      className="field"
                      value={form.purpose}
                      onChange={(e) => set("purpose", e.target.value)}
                      placeholder="School event, staff uniforms, trade show..."
                    />
                  </label>
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="space-y-5">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Decoration preference
                  </span>
                  <select
                    className="field"
                    value={form.decoration}
                    onChange={(e) => set("decoration", e.target.value)}
                  >
                    <option value="">Not sure, advise me</option>
                    {decorationMethods.map((d) => (
                      <option key={d.key} value={d.key}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Logo or artwork
                  </span>

                  <div className="rounded-sm border border-dashed border-border bg-background p-4 sm:p-5">
                    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
                      <Upload className="h-5 w-5 shrink-0 text-primary" />
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg,.pdf,.svg,.eps,.ai"
                        onChange={(e) => set("artworkName", e.target.files?.[0]?.name ?? "")}
                        className="block min-w-0 w-full text-sm text-muted-foreground file:mr-3 file:border-0 file:bg-transparent file:font-semibold file:text-foreground"
                      />
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground">
                      Preferred files include AI, EPS, PDF or SVG. High-resolution PNG is usually workable.
                    </p>
                  </div>
                </label>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block min-w-0">
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

                  <label className="block min-w-0">
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

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block min-w-0">
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

                  <label className="block min-w-0">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Phone, optional
                    </span>
                    <input
                      className="field"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="(555) 555-5555"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    City / State
                  </span>
                  <input
                    className="field"
                    value={form.cityState}
                    onChange={(e) => set("cityState", e.target.value)}
                    placeholder="Dallas, TX"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Additional notes
                  </span>
                  <textarea
                    className="field min-h-28"
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    placeholder="Sizes, colors, shipping details, extra product types, or anything else we should know"
                  />
                </label>
              </div>
            ) : null}

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              {step > 0 ? (
                <ButtonAction
                  type="button"
                  variant="ghost"
                  onClick={() => setStep(step - 1)}
                  className="w-full sm:w-auto"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </ButtonAction>
              ) : (
                <span />
              )}

              <ButtonAction
                type="submit"
                size="lg"
                disabled={!canContinue}
                className="w-full sm:w-auto"
              >
                {step < steps.length - 1 ? (
                  <>
                    Continue <ArrowRight className="h-4 w-4" />
                  </>
                ) : (
                  "Request My Quote"
                )}
              </ButtonAction>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
