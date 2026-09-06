import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Clock3, Mail, MapPin } from "lucide-react";
import {
  Action,
  ButtonAction,
  PageHeader,
  Section,
} from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Isaac Promos | Talk to Our Team" },
      {
        name: "description",
        content:
          "Get in touch with Isaac Promos about a bulk merchandise order, a custom project or a question about decoration methods. We respond to every inquiry.",
      },
      { property: "og:title", content: "Contact Isaac Promos | Talk to Our Team" },
      {
        property: "og:description",
        content:
          "Get in touch with Isaac Promos about a bulk merchandise order, a custom project or a question about decoration methods.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Talk to our team"
        lead="Have a question before you request a quote, or want to sanity-check an idea? Send us a note. A real person reads every message and replies with a useful answer, not a canned response."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl">What to expect</h2>
              <ul className="mt-5 space-y-4">
                {[
                  {
                    icon: Clock3,
                    title: "Response within one business day",
                    body: "Most messages get a reply the same day during US business hours.",
                  },
                  {
                    icon: Mail,
                    title: "A direct answer, not a sales pitch",
                    body: "If your project is a better fit for a different approach, we will say so.",
                  },
                  {
                    icon: MapPin,
                    title: "US-facing, bulk-focused",
                    body: "We work with businesses, schools and organizations across the United States.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-surface-2">
                      <item.icon className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">
                Already know what you need?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                If you have quantities, a product in mind or a deadline, the
                quote form collects everything we need to price your order
                accurately — no back-and-forth required.
              </p>
              <div className="mt-5">
                <Action to="/quote" size="lg">
                  Get a Quote
                </Action>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-border bg-surface p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h2 className="mt-5 text-2xl">Message received</h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thanks for reaching out. Someone from our team will get back
                  to you within one business day. If your project is urgent,
                  mention the deadline in a follow-up and we will prioritize
                  it.
                </p>
                <div className="mt-6">
                  <Action to="/products" variant="outline">
                    Browse products meanwhile
                  </Action>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <h2 className="text-2xl">Send us a message</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Name
                    </span>
                    <input required className="field" name="name" placeholder="Jane Smith" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Work email
                    </span>
                    <input
                      required
                      type="email"
                      className="field"
                      name="email"
                      placeholder="jane@company.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Company / organization
                  </span>
                  <input className="field" name="company" placeholder="Acme Corp" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    What can we help with?
                  </span>
                  <textarea
                    required
                    className="field min-h-32"
                    name="message"
                    placeholder="Tell us about your project, question or timeline..."
                  />
                </label>
                <ButtonAction type="submit" size="lg" className="w-full sm:w-auto">
                  Send message
                </ButtonAction>
                <p className="text-xs text-muted-foreground">
                  We only use your details to reply to this inquiry. No
                  newsletters, no list-selling.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
