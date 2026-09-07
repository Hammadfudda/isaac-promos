import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { CheckCircle2, Loader2, Upload } from "lucide-react";
import apparelImg from "@/assets/cat-apparel.png";
import drinkwareImg from "@/assets/cat-drinkware.png";
import patchesImg from "@/assets/cat-patches.jpg";
import workwearImg from "@/assets/cat-workwear.jpg";
import promoImg from "@/assets/cat-promo.jpg";

import customTshirtImg from "@/assets/custom-tshirt.png";
import gildan2000Img from "@/assets/gildan-2000.png";
import premiumPolosImg from "@/assets/premium-polos.png";
import customPolosImg from "@/assets/custom-polos.png";
import embroideredPolosImg from "@/assets/Embroidered Polos.png";
import dtfPolosImg from "@/assets/DTF-Polos.png";
import hoodiesImg from "@/assets/Hoodies.png";

import customBottleImg from "@/assets/custom bottle.png";
import tumblersImg from "@/assets/tumblers-with -custom-logo.png";

import toteBagsImg from "@/assets/Tote-Bags.png";
import wovenBagsImg from "@/assets/Woven-Bags.png";
import nonWovenBagsImg from "@/assets/non-woven-bags.png";

import customLanyardsImg from "@/assets/Custom Lanyards.png";
import stressBallsImg from "@/assets/Custom-Stress-Balls-with-Logo.png";
import smallGiveawayImg from "@/assets/Small-Giveaway-Items.png";
import pensImg from "@/assets/pen.png";
import keychainsImg from "@/assets/Keychains.png";
import customKeychainImg from "@/assets/custom-keychain.png";
import notebooksImg from "@/assets/Custom-Notebooks.png";

import garmentLabelsImg from "@/assets/Garment-Labels.png";
import neckLabelsImg from "@/assets/Neck-Labels.png";
import careLabelsImg from "@/assets/Care-Labels.png";

import leatherPatchesImg from "@/assets/Leather-Patches.png";
import pvcPatchesImg from "@/assets/PVC-Patches.png";
import chenillePatchesImg from "@/assets/Chenille-Patches.png";
import embroideryPatchesImg from "@/assets/Embroidery-Patches.png";
import pvcBadgesImg from "@/assets/pvc-plastic-badges.png";

import frShirtsImg from "@/assets/FR-Shirts.png";
import brandedWorkShirtsImg from "@/assets/Branded-Work-Shirts.png";

import golfTowelsImg from "@/assets/Golf-Towels.png";
import customTowelsImg from "@/assets/custom-Towels.png";
import {
  Action,
  Breadcrumbs,
  ButtonAction,
  CTABlock,
  Tag,
} from "@/components/site/ui";
import {
  sendEmailJs,
  uploadToCloudinary,
  validateUpload,
} from "@/lib/form-delivery";
import {
  decorationLabel,
  findCategory,
  findProduct,
  productsByCategory,
} from "@/data/catalog";

const categoryImages = {
  apparel: apparelImg,
  drinkware: drinkwareImg,
  patches: patchesImg,
  workwear: workwearImg,
  promo: promoImg,
};

const productImages: Record<string, string> = {
  "custom-t-shirts": customTshirtImg,
  "gildan-2000": gildan2000Img,
  "premium-polos": premiumPolosImg,
  "custom-polos": customPolosImg,
  "embroidered-polos": embroideredPolosImg,
  "dtf-branded-polos": dtfPolosImg,
  "custom-hoodies": hoodiesImg,

  "custom-bottles": customBottleImg,
  tumblers: tumblersImg,

  "tote-bags": toteBagsImg,
  "woven-bags": wovenBagsImg,
  "non-woven-bags": nonWovenBagsImg,

  "custom-lanyards": customLanyardsImg,
  "custom-stress-balls": stressBallsImg,
  "small-giveaway-items": smallGiveawayImg,
  pens: pensImg,
  keychains: keychainsImg,
  "custom-keychains": customKeychainImg,
  "custom-notebook": notebooksImg,

  "garment-labels": garmentLabelsImg,
  "neck-labels": neckLabelsImg,
  "care-labels": careLabelsImg,

  "leather-patches": leatherPatchesImg,
  "pvc-patches": pvcPatchesImg,
  "chenille-patches": chenillePatchesImg,
  "embroidery-patches": embroideryPatchesImg,
  "pvc-plastic-badges": pvcBadgesImg,

  "fr-shirts": frShirtsImg,
  "branded-work-shirts": brandedWorkShirtsImg,

  "golf-towels": golfTowelsImg,
  "custom-towels": customTowelsImg,
};

export const Route = createFileRoute("/products/$category/$product")({
  loader: ({ params }) => {
    const product = findProduct(params.product);
    const category = findCategory(params.category);
    if (!product || !category || product.category !== category.slug) throw notFound();

    return {
      product,
      category,
      related: productsByCategory(category.slug)
        .filter((item) => item.slug !== product.slug)
        .slice(0, 3),
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product, category, related } = Route.useLoaderData();
  const hero = productImages[product.slug] ?? categoryImages[category.image];

  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="container-x py-5">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              {
                label: category.name,
                to: "/products/$category",
                params: { category: category.slug },
              },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      <section className="py-10 lg:py-16">
        <div className="container-x grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="min-w-0">
            <div className="hover-media flex aspect-[4/3] w-full items-center justify-center overflow-hidden border border-border bg-surface p-3 sm:p-5">
              <img
                src={hero}
                alt={`${product.name} product example`}
                width={1200}
                height={900}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="mt-5 border border-border bg-surface p-5 sm:p-6">
              <p className="eyebrow">Before you request a quote</p>
              <h2 className="mt-3 text-xl">A few details help us price it correctly.</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You do not need every specification figured out. Send what you know and we will help with the rest.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="border-t border-border pt-3">
                  <p className="font-display text-sm font-bold">Quantity</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    An estimate is enough to get started.
                  </p>
                </div>

                <div className="border-t border-border pt-3">
                  <p className="font-display text-sm font-bold">Deadline</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us when you need the order in hand.
                  </p>
                </div>

                <div className="border-t border-border pt-3">
                  <p className="font-display text-sm font-bold">Artwork</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Upload your logo or send a reference image.
                  </p>
                </div>

                <div className="border-t border-border pt-3">
                  <p className="font-display text-sm font-bold">Branding</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    If you are not sure which method fits, we can recommend one.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Action to="/contact" variant="outline">
                  Ask a Product Question
                </Action>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <p className="eyebrow">{category.name}</p>
            <h1 className="mt-3 text-3xl leading-tight sm:text-4xl">{product.name}</h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">{product.blurb}</p>

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                  Ideal for
                </h2>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {product.idealFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                  Customization options
                </h2>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.decoration.map((method) => (
                    <Tag key={method}>{decorationLabel(method)}</Tag>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                Available colors
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Color range depends on the selected product and quantity. Tell us which colors you need and we will confirm the available options.
              </p>
            </div>

            <QuickQuoteForm productName={product.name} categoryName={category.name} />

            <p className="mt-4 text-xs text-muted-foreground">
              Availability, colors and pricing may vary based on quantity and project requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-12 lg:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-xl sm:text-2xl">Why this product</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.why}</p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl">Decoration possibilities</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {product.decoration.map((method) => (
                <li key={method} className="border-b border-border pb-2">
                  {decorationLabel(method)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl">Common use cases</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {product.useCases.map((useCase) => (
                <li key={useCase} className="border-b border-border pb-2">
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="py-12 lg:py-20">
          <div className="container-x">
            <h2 className="text-2xl sm:text-3xl">Related products</h2>
            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to="/products/$category/$product"
                  params={{ category: item.category, product: item.slug }}
                  className="min-w-0 bg-background p-5 transition-colors hover:bg-surface sm:p-6"
                >
                  <h3 className="text-base">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTABlock
        title={`Ready to price a ${product.name.toLowerCase()} order?`}
        body="Send the quantity, artwork and deadline. We will confirm the specifications and help you move the project forward."
        primaryLabel="Request a Quote"
        secondary={{ label: "Ask a Product Question", to: "/contact" }}
      />
    </>
  );
}

function QuickQuoteForm({
  productName,
  categoryName,
}: {
  productName: string;
  categoryName: string;
}) {
  const [quantity, setQuantity] = useState("");
  const [deadline, setDeadline] = useState("");
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [artwork, setArtwork] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  async function submitQuickQuote() {
    setSubmitError("");
    setSubmitting(true);

    try {
      const artworkUrl = artwork
        ? await uploadToCloudinary(artwork)
        : "No artwork uploaded";

      await sendEmailJs(import.meta.env.VITE_EMAILJS_TEMPLATE_ID_QUOTE, {
        customer_name: name.trim(),
        customer_email: email.trim(),
        customer_phone: phone.trim() || "Not provided",
        company_name: company.trim() || "Not provided",
        product_category: categoryName,
        product_name: productName,
        quantity: quantity.trim() || "Not provided",
        deadline: deadline || "Not provided",
        decoration_method: "Not specified",
        artwork_url: artworkUrl,
        message: notes.trim() || "No additional notes",
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
      <div className="mt-8 border border-border bg-surface p-5 text-center sm:p-6">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mt-4 text-lg">Quote request sent</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Your request for {productName} has been sent to the Izaac Promos team.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-8 border border-border bg-surface p-5 sm:p-6"
      onSubmit={async (event) => {
        event.preventDefault();
        await submitQuickQuote();
      }}
    >
      <h2 className="text-lg">Ask about this product</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Product selected: <span className="font-semibold text-foreground">{productName}</span>
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">
            Name
          </span>
          <input
            required
            className="field"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">
            Email
          </span>
          <input
            required
            type="email"
            className="field"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@company.com"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">
            Phone, optional
          </span>
          <input
            className="field"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="(555) 555-5555"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">
            Company, optional
          </span>
          <input
            className="field"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Company / Organization"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">
            Order quantity
          </span>
          <input
            className="field"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            placeholder="Example: 150"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">
            Desired deadline
          </span>
          <input
            className="field"
            value={deadline}
            onChange={(event) => setDeadline(event.target.value)}
            type="date"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">
            Logo / artwork, optional
          </span>
          <div className="rounded-sm border border-dashed border-border bg-background p-4">
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

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">
            Notes
          </span>
          <textarea
            className="field min-h-24"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder={`Anything specific about your ${productName.toLowerCase()} order`}
          />
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

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ButtonAction
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={submitting || Boolean(fileError) || !name.trim() || !email.trim()}
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Request Quote"
          )}
        </ButtonAction>

        <Action to="/quote" variant="outline" size="lg" className="w-full sm:w-auto">
          Use the Full Quote Form
        </Action>
      </div>
    </form>
  );
}

