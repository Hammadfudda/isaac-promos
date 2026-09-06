import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { CheckCircle2, Loader2, Upload } from "lucide-react";
import { Action, ButtonAction, PageHeader, Section } from "@/components/site/ui";
import {
  sendEmailJs,
  uploadToCloudinary,
  validateUpload,
} from "@/lib/form-delivery";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Izaac Promos | Bulk Merchandise Help" },
      {
        name: "description",
        content:
          "Talk to Izaac Promos about custom products, bulk merchandise, product sourcing, branding questions and outsourced orders.",
      },
    ],
  }),
  component: ContactPage,
});

type ContactForm = {
  name: string;
  email: string;
  company: string;
  phone: string;
  inquiryType: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  company: "",
  phone: "",
  inquiryType: "Product Question",
  message: "",
};

function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const set = (key: keyof ContactForm, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  async function submitContact() {
    setSubmitError("");
    setSubmitting(true);

    try {
      const artworkUrl = file
        ? await uploadToCloudinary(file)
        : "No file uploaded";

      await sendEmailJs(import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT, {
        customer_name: form.name.trim(),
        customer_email: form.email.trim(),
        customer_phone: form.phone.trim() || "Not provided",
        company_name: form.company.trim() || "Not provided",
        inquiry_type: form.inquiryType,
        message: form.message.trim(),
        artwork_url: artworkUrl,
      });

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not send your message. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title="Talk to our team."
        lead="Tell us what you are sourcing, what you are trying to accomplish or where you are stuck. You do not need final specifications to start."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-7">
            <div>
              <h2 className="text-xl">Get a Quote</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                If you already have a product, quantity and deadline in mind, use the guided quote form.
              </p>
              <div className="mt-4">
                <Action to="/quote">Get a Quote</Action>
              </div>
            </div>

            <div>
              <h2 className="text-xl">Ask a Product Question</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Not sure which product or decoration method fits? Send the question in plain language.
              </p>
            </div>

            <div>
              <h2 className="text-xl">Discuss an Outsourced Project</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                If you already have the customer and need help sourcing or producing the merchandise, share the requirements and we can review the fit.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-xl">Contact Details</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Email:</span>{" "}
                  <a
                    href="mailto:info@izaacpromos.com"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    info@izaacpromos.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">Phone:</span>{" "}
                  <a
                    href="tel:+13127732671"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    (312) 773-2671
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">Address:</span>{" "}
                  1223 N Cleaver St, Chicago, IL 60642, United States
                </p>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="border border-border bg-surface p-6 text-center sm:p-8">
              <CheckCircle2 className="mx-auto h-11 w-11 text-primary" />
              <h2 className="mt-5 text-2xl">Message sent</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Your message and any uploaded reference file have been delivered to the Izaac Promos team.
              </p>
              <div className="mt-6">
                <ButtonAction
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                    setFile(null);
                    setFileError("");
                    setSubmitError("");
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                >
                  Send Another Message
                </ButtonAction>
              </div>
            </div>
          ) : (
            <form
              className="border border-border bg-surface p-5 sm:p-8"
              onSubmit={async (event) => {
                event.preventDefault();
                await submitContact();
              }}
            >
              <h2 className="text-2xl">Send a message</h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide">
                    Name
                  </span>
                  <input
                    required
                    className="field"
                    value={form.name}
                    onChange={(event) => set("name", event.target.value)}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    className="field"
                    value={form.email}
                    onChange={(event) => set("email", event.target.value)}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide">
                    Company / Organization
                  </span>
                  <input
                    className="field"
                    value={form.company}
                    onChange={(event) => set("company", event.target.value)}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide">
                    Phone
                  </span>
                  <input
                    className="field"
                    value={form.phone}
                    onChange={(event) => set("phone", event.target.value)}
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide">
                    Inquiry Type
                  </span>
                  <select
                    className="field"
                    value={form.inquiryType}
                    onChange={(event) => set("inquiryType", event.target.value)}
                  >
                    <option>Product Question</option>
                    <option>Decoration / Branding Question</option>
                    <option>Outsourced Project</option>
                    <option>Existing Order</option>
                    <option>General Inquiry</option>
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide">
                    What can we help with?
                  </span>
                  <textarea
                    required
                    className="field min-h-36"
                    value={form.message}
                    onChange={(event) => set("message", event.target.value)}
                    placeholder="Product, quantity, deadline, reference idea, branding question or anything else you know so far"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide">
                    Reference file, optional
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
                          setFile(error ? null : nextFile);
                        }}
                        className="block min-w-0 w-full text-sm text-muted-foreground file:mr-3 file:border-0 file:bg-transparent file:font-semibold file:text-foreground"
                      />
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground">
                      PNG, JPG, WEBP, PDF, SVG, EPS or AI. Maximum 10 MB.
                    </p>

                    {file && !fileError ? (
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                        <span className="rounded-sm bg-primary/10 px-2.5 py-1.5 font-semibold text-primary">
                          {file.name}
                        </span>
                        <button
                          type="button"
                          className="font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground"
                          onClick={() => {
                            setFile(null);
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

              {submitError ? (
                <div
                  className="mt-5 rounded-sm border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive"
                  role="alert"
                >
                  {submitError}
                </div>
              ) : null}

              <div className="mt-6">
                <ButtonAction
                  type="submit"
                  size="lg"
                  disabled={submitting || Boolean(fileError)}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </ButtonAction>
              </div>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
