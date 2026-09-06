import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Action, ButtonAction, PageHeader, Section } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Isaac Promos | Bulk Merchandise Help" },
      {
        name: "description",
        content:
          "Talk to Isaac Promos about custom products, bulk merchandise, product sourcing, branding questions and outsourced orders.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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

            <div className="border-t border-border pt-5 text-sm text-muted-foreground">
              <p>Business email: available on request</p>
              <p className="mt-2">Phone: available on request</p>
            </div>
          </div>

          <form
            className="border border-border bg-surface p-5 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <h2 className="text-2xl">Send a message</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide">
                  Name
                </span>
                <input required className="field" name="name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide">
                  Email
                </span>
                <input required type="email" className="field" name="email" />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide">
                  Company / Organization
                </span>
                <input className="field" name="company" />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide">
                  Phone
                </span>
                <input className="field" name="phone" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide">
                  What can we help with?
                </span>
                <textarea
                  required
                  className="field min-h-36"
                  name="message"
                  placeholder="Product, quantity, deadline, reference idea, branding question or anything else you know so far"
                />
              </label>
            </div>

            <div className="mt-6">
              <ButtonAction type="submit" size="lg">
                Send Message
              </ButtonAction>
            </div>

            {submitted ? (
              <p className="mt-4 text-sm text-primary">
                Message details captured. Connect this form to the live email or backend endpoint before launch.
              </p>
            ) : null}
          </form>
        </div>
      </Section>
    </>
  );
}
