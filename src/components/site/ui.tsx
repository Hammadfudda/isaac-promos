import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ActionProps = {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  variant?: "primary" | "dark" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

const base =
  "inline-flex max-w-full items-center justify-center gap-2 rounded-sm font-display font-semibold tracking-tight transition-all duration-200 active:translate-y-px disabled:opacity-60";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]",
  dark: "bg-ink text-ink-foreground hover:bg-ink/90 hover:-translate-y-0.5",
  outline:
    "border border-input bg-background text-foreground hover:border-foreground hover:bg-surface",
  ghost: "text-foreground hover:text-primary",
};

const sizes = {
  md: "min-h-10 px-4 py-2 text-sm",
  lg: "min-h-12 px-5 py-3 text-[0.95rem] sm:px-6",
};

export function Action({
  to,
  params,
  children,
  variant = "primary",
  size = "md",
  className,
}: ActionProps) {
  return (
    <Link
      to={to}
      params={params as never}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}

export function ButtonAction({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "ink";
  id?: string;
}) {
  const tones = {
    default: "bg-background",
    surface: "bg-surface",
    ink: "bg-ink text-ink-foreground",
  };

  return (
    <section id={id} className={cn("py-12 sm:py-16 lg:py-24", tones[tone], className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "min-w-0 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}

      <h2
        className={cn(
          "mt-3 text-2xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
          invert && "text-ink-foreground",
        )}
      >
        {title}
      </h2>

      {lead ? (
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed sm:text-base",
            invert ? "text-ink-foreground/70" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: { label: string; to?: string; params?: Record<string, string> }[];
}) {
  return (
    <header className="w-full border-b border-border bg-surface">
      <div className="container-x py-9 sm:py-12 lg:py-20">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}

        {eyebrow ? <p className="eyebrow mt-5 sm:mt-6">{eyebrow}</p> : null}

        <h1 className="mt-3 max-w-4xl text-3xl leading-[1.07] sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {lead ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            {lead}
          </p>
        ) : null}
      </div>
    </header>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; to?: string; params?: Record<string, string> }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="min-w-0">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex min-w-0 items-center gap-2">
            {item.to ? (
              <Link
                to={item.to}
                params={item.params as never}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}

            {i < items.length - 1 ? (
              <span aria-hidden="true" className="text-border">
                /
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center rounded-sm border border-border bg-background px-2 py-1 font-display text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
      {children}
    </span>
  );
}

export function ImageSlot({
  label,
  ratio = "4 / 3",
  className,
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      style={{ aspectRatio: ratio }}
      className={cn(
        "relative flex w-full items-end overflow-hidden border border-border bg-surface-2",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 14px, color-mix(in oklab, var(--color-ink) 5%, transparent) 14px 15px)",
        }}
      />
      <div className="relative p-4">
        <span className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}

export function CTABlock({
  title,
  body,
  primaryLabel = "Get a Quote",
  secondary,
}: {
  title: string;
  body: string;
  primaryLabel?: string;
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="container-x py-12 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div className="min-w-0">
            <p className="eyebrow">Next step</p>
            <h2 className="mt-3 max-w-2xl text-2xl leading-[1.1] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-foreground/70 sm:text-base">
              {body}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Action to="/quote" size="lg" className="w-full sm:w-auto">
              {primaryLabel}
            </Action>

            {secondary ? (
              <Action
                to={secondary.to}
                size="lg"
                variant="outline"
                className="w-full border-ink-foreground/25 bg-transparent text-ink-foreground hover:border-ink-foreground hover:bg-ink-foreground/10 sm:w-auto"
              >
                {secondary.label}
              </Action>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
