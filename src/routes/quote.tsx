import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Info,
  Loader2,
  Upload,
} from "lucide-react";
import { categories, decorationMethods } from "@/data/catalog";
import { ButtonAction, PageHeader, Section } from "@/components/site/ui";
import { cn } from "@/lib/utils";
import {
  sendEmailJs,
  uploadToCloudinary,
  validateUpload,
} from "@/lib/form-delivery";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Izaac Promos" },
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
  categories: string[];
  productDetails: string;
  quantity: string;
  budget: string;
  deadline: string;
  purpose: string;
  decoration: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  cityState: string;
  notes: string;
};

const initialState: FormState = {
  categories: [],
  productDetails: "",
  quantity: "",
  budget: "",
  deadline: "",
  purpose: "",
  decoration: "",
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
  const [artwork, setArtwork] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const set = (
    key: Exclude<keyof FormState, "categories">,
    value: string,
  ) => setForm((current) => ({ ...current, [key]: value }));

  const toggleCategory = (slug: string) => {
    setForm((current) => ({
      ...current,
      categories: current.categories.includes(slug)
        ? current.categories.filter((item) => item !== slug)
        : [...current.categories, slug],
    }));
  };

  const canContinue = useMemo(() => {
    if (step === 0) return form.categories.length > 0;
    if (step === 1) return form.quantity.trim() !== "";
    if (step === 2) return !fileError;
    return form.name.trim() !== "" && form.email.trim() !== "";
  }, [step, form, fileError]);

  const categoryLabel =
    form.categories
      .map(
        (slug) =>
          categories.find((category) => category.slug === slug)?.name || slug,
      )
      .join(", ") || "Not specified";

  const decorationLabel =
    decorationMethods.find((method) => method.key === form.decoration)?.name ||
    "Not sure, advise me";

  const budgetLabel =
    {
      "under-1000": "Under $1,000",
      "1000-2500": "$1,000 to $2,500",
      "2500-5000": "$2,500 to $5,000",
      "5000-10000": "$5,000 to $10,000",
      "10000-plus": "$10,000+",
    }[form.budget] || "Not provided";

  async function submitQuote() {
    setSubmitError("");
    setSubmitting(true);

    try {
      const artworkUrl = artwork
        ? await uploadToCloudinary(artwork)
        : "No artwork uploaded";

      const projectDetails = [
        `Budget: ${budgetLabel}`,
        `Purpose / Event: ${form.purpose.trim() || "Not provided"}`,
        `City / State: ${form.cityState.trim() || "Not provided"}`,
        "",
        "Additional Notes:",
        form.notes.trim() || "No additional notes",
      ].join("\n");

      await sendEmailJs(import.meta.env.VITE_EMAILJS_TEMPLATE_ID_QUOTE, {
        customer_name: form.name.trim(),
        customer_email: form.email.trim(),
        customer_phone: form.phone.trim() || "Not provided",
        company_name: form.company.trim() || "Not provided",
        product_category: categoryLabel,
        product_name: form.productDetails.trim() || categoryLabel,
        quantity: form.quantity.trim(),
        deadline: form.deadline || "Not provided",
        decoration_method: decorationLabel,
        artwork_url: artworkUrl,
        message: projectDetails,
      });

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not send your quote request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <>
        <PageHeader
          eyebrow="Quote request"
          title="Your quote request has been sent"
          lead="We received the details you submitted."
        />

        <Section>
          <div className="mx-auto max-w-xl rounded-sm border border-border bg-surface p-6 text-center sm:p-8">
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-5 text-2xl">Thank you</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Your order details and any uploaded artwork have been delivered to the Izaac Promos team for review.
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
            onSubmit={async (event) => {
              event.preventDefault();

              if (step < steps.length - 1) {
                setStep((current) => current + 1);
                return;
              }

              await submitQuote();
            }}
          >
            {step === 0 ? (
              <div className="space-y-6">
                <div>
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    What do you need?
                  </span>

                  <p className="mb-4 text-sm text-muted-foreground">
                    Choose one or more categories that apply to your project.
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {categories.map((cat) => {
                      const selected = form.categories.includes(cat.slug);

                      return (
                        <button
                          key={cat.slug}
                          type="button"
                          onClick={() => toggleCategory(cat.slug)}
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

                  {form.categories.length > 0 ? (
                    <p className="mt-3 text-xs font-medium text-primary">
                      {form.categories.length} {form.categories.length === 1 ? "category" : "categories"} selected
                    </p>
                  ) : null}
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
                        ref={fileInputRef}
                        type="file"
                        accept=".png,.jpg,.jpeg,.webp,.pdf,.svg,.eps,.ai"
                        onChange={(event) => {
                          const nextFile = event.target.files?.[0] ?? null;
                          const error = validateUpload(nextFile);
                          setFileError(error ?? "");
                          setArtwork(error ? null : nextFile);
                        }}
                        className="block min-w-0 w-full text-sm text-muted-foreground file:mr-3 file:border-0 file:bg-transparent file:font-semibold file:text-foreground"
                      />
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground">
                      PNG, JPG, WEBP, PDF, SVG, EPS or AI. Maximum 10 MB.
                    </p>

                    {artwork && !fileError ? (
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                        <span className="rounded-sm bg-primary/10 px-2.5 py-1.5 font-semibold text-primary">
                          {artwork.name}
                        </span>
                        <button
                          type="button"
                          className="font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground"
                          onClick={() => {
                            setArtwork(null);
                            setFileError("");
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ) : null}

                    {fileError ? (
                      <p className="mt-3 text-xs font-medium text-destructive">
                        {fileError}
                      </p>
                    ) : null}
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

            {submitError ? (
              <div
                className="mt-6 rounded-sm border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive"
                role="alert"
              >
                {submitError}
              </div>
            ) : null}

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              {step > 0 ? (
                <ButtonAction
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    setSubmitError("");
                    setStep((current) => current - 1);
                  }}
                  className="w-full sm:w-auto"
                  disabled={submitting}
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </ButtonAction>
              ) : (
                <span />
              )}

              <ButtonAction
                type="submit"
                size="lg"
                disabled={!canContinue || submitting}
                className="w-full sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : step < steps.length - 1 ? (
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
