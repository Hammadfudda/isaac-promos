export type DecorationKey =
  | "embroidery"
  | "dtf"
  | "screen-print"
  | "pvc"
  | "chenille"
  | "leather"
  | "laser"
  | "pad-print"
  | "dtg"
  | "heat-transfer"
  | "sublimation";

export type Product = {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  idealFor: string[];
  decoration: DecorationKey[];
  why: string;
  useCases: string[];
  comingSoon?: boolean;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  image: "apparel" | "drinkware" | "patches" | "workwear" | "promo";
};

export const categories: Category[] = [
  {
    slug: "apparel",
    name: "Apparel",
    tagline: "Shirts, Polos & Hoodies Built Around Your Budget and Branding",
    intro:
      "We keep pricing as lean as we can and include shipping in the quote, so you can compare the real cost of the order without extra surprises later. We work with a wide range of fabrics and can use screen printing, embroidery, DTG, heat transfer and sublimation. Leather, chenille and PVC patches are also available. We can prepare mock-ups and, where practical, prefer sending a sample before full production so issues can be caught early.",
    image: "apparel",
  },
  {
    slug: "drinkware",
    name: "Drinkware",
    tagline: "Custom bottles and tumblers with your logo for everyday use.",
    intro:
      "Drinkware works well for onboarding kits, events and client gifts. Decoration options depend on the finish and shape of the item, and we help you compare the tradeoffs before ordering.",
    image: "drinkware",
  },
  {
    slug: "bags",
    name: "Bags",
    tagline: "Tote, woven and non-woven bags for events, kits and campaigns.",
    intro:
      "Bags keep your branding in use after an event ends. Material, weight, handle style and print area all affect the final look, so we help you compare options before ordering.",
    image: "promo",
  },
  {
    slug: "promotional-items",
    name: "Promotional Items",
    tagline: "Pens, keychains, lanyards, stress balls and notebooks for bulk programs.",
    intro:
      "Small promotional products are usually about quantity, usability and consistency. We help you choose items that fit the budget without looking disposable.",
    image: "promo",
  },
  {
    slug: "patches-badges",
    name: "Patches & Badges",
    tagline: "Leather, PVC, chenille and embroidered patches.",
    intro:
      "Patches let you brand caps, jackets, bags and uniforms without decorating every piece directly. Each material gives a different look and price point.",
    image: "patches",
  },
  {
    slug: "workwear",
    name: "Workwear",
    tagline: "Durable shirts and uniforms for field and shop crews.",
    intro:
      "Field crews are hard on apparel. We help select fabrics and branding placements that make sense for the working environment and repeat wear.",
    image: "workwear",
  },
  {
    slug: "towels",
    name: "Towels",
    tagline: "Golf and utility towels for events, gifting and daily use.",
    intro:
      "Towels are useful for tournaments, gift sets, gyms, shops and hospitality. Weight, weave and hanging hardware are the main choices.",
    image: "promo",
  },
  {
    slug: "garment-labels",
    name: "Garment Labels",
    tagline: "Neck, care and garment labels for apparel branding and finishing.",
    intro:
      "Garment labels are useful when the branding needs to be part of the finished apparel rather than added only to the outside. Send the label size, wording, artwork and garment details and we can help review the best direction.",
    image: "apparel",
  },
  {
    slug: "custom-projects",
    name: "Custom Projects",
    tagline: "Something not listed here? Send us the requirement.",
    intro:
      "If you have a product idea, a reference image or a spec sheet, send it over. We review custom requests case by case and tell you whether we can source it.",
    image: "promo",
  },
];

export const products: Product[] = [
  {
    slug: "custom-t-shirts",
    name: "Custom T-Shirts",
    category: "apparel",
    blurb: "Standard and ring-spun cotton tees for staff, events, teams and giveaways.",
    idealFor: ["Events", "Staff shirts", "School and team orders", "Giveaways"],
    decoration: ["screen-print", "dtf", "embroidery"],
    why:
      "T-shirts are one of the most flexible bulk products. Blank weight, fit and fabric blend change both feel and price, so we help you choose the right combination for the quantity you are ordering.",
    useCases: ["Company events and trade shows", "School spirit and club orders", "Fundraisers and campaigns"],
  },
  {
    slug: "gildan-2000",
    name: "Gildan 2000",
    category: "apparel",
    blurb: "A widely used heavyweight cotton tee for higher quantity orders.",
    idealFor: ["Large quantity orders", "Budget-conscious projects", "Events"],
    decoration: ["screen-print", "dtf"],
    why:
      "Gildan 2000 is a familiar heavyweight blank with broad sizing and color availability. It is often a practical choice when buyers need volume and a straightforward fit.",
    useCases: ["Volunteer shirts", "Bulk event tees", "Warehouse and crew shirts"],
  },
  {
    slug: "premium-polos",
    name: "Premium Polos",
    category: "apparel",
    blurb: "Higher-end polos for client-facing teams, management and hospitality staff.",
    idealFor: ["Front-of-house teams", "Sales staff", "Corporate uniforms"],
    decoration: ["embroidery", "dtf", "leather"],
    why:
      "A premium polo reads differently from an entry-level one. Collar construction, fabric weight and shrinkage behavior are worth reviewing when the shirt is part of a uniform program.",
    useCases: ["Restaurant and hotel staff", "Dealership teams", "Conference staff"],
  },
  {
    slug: "custom-polos",
    name: "Custom Polos",
    category: "apparel",
    blurb: "Standard polos configured around your color, fabric and branding needs.",
    idealFor: ["Staff uniforms", "Team apparel", "Corporate gifting"],
    decoration: ["embroidery", "dtf", "screen-print"],
    why:
      "Most uniform programs start with a practical polo. We help compare cotton, blends and performance fabrics based on the working environment.",
    useCases: ["Office uniforms", "Golf outings", "Service technicians"],
  },
  {
    slug: "embroidered-polos",
    name: "Embroidered Polos",
    category: "apparel",
    blurb: "Stitched left-chest or sleeve branding for a clean, durable finish.",
    idealFor: ["Uniform programs", "Executive gifts", "Trade organizations"],
    decoration: ["embroidery"],
    why:
      "Embroidery gives polos a professional stitched finish. Fine detail and thin text may need artwork adjustment before stitching, and we flag those issues before production.",
    useCases: ["Company uniforms", "Association apparel", "Client gifting"],
  },
  {
    slug: "dtf-branded-polos",
    name: "DTF Polos",
    category: "apparel",
    blurb: "Full-color transfers for logos with gradients, photos or fine detail.",
    idealFor: ["Detailed logos", "Multi-color artwork", "Smaller quantities"],
    decoration: ["dtf"],
    why:
      "DTF is useful when the artwork contains gradients, fine detail or several colors. It can also make sense for smaller quantities where screen setup is less practical.",
    useCases: ["Campaign apparel", "Event staff", "Multi-color brand marks"],
  },
  {
    slug: "custom-hoodies",
    name: "Hoodies",
    category: "apparel",
    blurb: "Fleece pullovers and zip hoodies for cooler seasons and team apparel.",
    idealFor: ["Team apparel", "Employee gifts", "School stores"],
    decoration: ["screen-print", "dtf", "embroidery", "chenille"],
    why:
      "Hoodies carry higher perceived value than basic tees, which makes them useful for gifting and merchandise programs. Fleece weight is one of the main quality drivers.",
    useCases: ["Employee appreciation", "School and club merchandise", "Winter events"],
  },
  {
    slug: "custom-bottles",
    name: "Custom Bottles",
    category: "drinkware",
    blurb: "Insulated and sport bottles for onboarding kits, events and gifting.",
    idealFor: ["Employee kits", "Conferences", "Client gifts"],
    decoration: ["laser", "pad-print", "dtf"],
    why:
      "Bottle finish usually determines the best branding method. Powder-coated stainless often suits laser engraving, while printed methods keep brand colors visible.",
    useCases: ["New hire kits", "Wellness programs", "Trade show giveaways"],
  },
  {
    slug: "tumblers",
    name: "Tumblers with Custom Logo",
    category: "drinkware",
    blurb: "Insulated tumblers customized with your logo by engraving or printing.",
    idealFor: ["Corporate gifts", "Holiday programs", "Recognition awards"],
    decoration: ["laser", "pad-print"],
    why:
      "Tumblers stay in circulation on desks and in vehicles, which gives branding a long useful life. Capacity, lid style and finish are the main product choices.",
    useCases: ["Service awards", "Client thank-you gifts", "Team milestones"],
  },
  {
    slug: "tote-bags",
    name: "Tote Bags",
    category: "bags",
    blurb: "Canvas and reusable totes for conferences, retail and welcome kits.",
    idealFor: ["Conferences", "Welcome kits", "Retail and markets"],
    decoration: ["screen-print", "dtf", "embroidery", "leather"],
    why:
      "Material weight and construction affect whether a tote feels reusable or disposable. We help you compare those choices against your budget.",
    useCases: ["Event swag bags", "School book bags", "Store merchandise"],
  },
  {
    slug: "woven-bags",
    name: "Woven Bags",
    category: "bags",
    blurb: "Reusable woven bags for events, retail, welcome kits and higher-volume programs.",
    idealFor: ["Events", "Retail", "Welcome kits", "Campaigns"],
    decoration: ["screen-print", "dtf"],
    why:
      "Woven construction gives the bag more structure than a basic giveaway tote. Size, handle style, material weight and print area can be matched to the project.",
    useCases: ["Conference bags", "Retail packaging", "School and community events"],
  },
  {
    slug: "non-woven-bags",
    name: "Non-Woven Bags",
    category: "bags",
    blurb: "Lightweight reusable bags for giveaways, events and high-volume distribution.",
    idealFor: ["Giveaways", "Trade shows", "School events", "High-volume programs"],
    decoration: ["screen-print", "dtf"],
    why:
      "Non-woven bags are a practical option when you need useful branded packaging at scale without moving into a heavier premium bag.",
    useCases: ["Trade show handouts", "Community events", "Welcome packs"],
  },
  {
    slug: "custom-lanyards",
    name: "Custom Lanyards",
    category: "promotional-items",
    blurb: "Branded lanyards produced in bulk for events, staff, schools and organizations.",
    idealFor: ["Events", "Staff IDs", "Schools", "Conferences"],
    decoration: ["sublimation", "screen-print"],
    why:
      "Lanyards are useful when identification and branding need to stay visible throughout an event or workday. Width, attachment and print style can be matched to the use case.",
    useCases: ["Conference credentials", "Employee badges", "School events"],
  },
  {
    slug: "custom-stress-balls",
    name: "Custom Stress Balls with Logo",
    category: "promotional-items",
    blurb: "Logo-branded stress balls for giveaways, campaigns and event tables.",
    idealFor: ["Giveaways", "Health campaigns", "Events", "Trade shows"],
    decoration: ["pad-print"],
    why:
      "Stress balls are simple giveaway items that work best when the logo remains clear at a small print size. Shape, color and imprint area depend on the selected item.",
    useCases: ["Trade show tables", "Awareness campaigns", "Office giveaways"],
  },
  {
    slug: "small-giveaway-items",
    name: "Small Giveaway Items",
    category: "promotional-items",
    blurb: "More small branded giveaway options are being added soon.",
    idealFor: ["Events", "Campaigns", "Trade shows"],
    decoration: ["pad-print"],
    why:
      "This range is still being expanded. Tell us what kind of giveaway you have in mind and we can discuss what is currently practical to source.",
    useCases: ["Event handouts", "Campaign kits", "High-volume giveaways"],
    comingSoon: true,
  },
  {
    slug: "pens",
    name: "Pens",
    category: "promotional-items",
    blurb: "Everyday and executive pens for high-quantity distribution.",
    idealFor: ["Trade shows", "Front-desk giveaways", "Mailers"],
    decoration: ["pad-print", "laser"],
    why:
      "Pens are a classic volume item. Barrel material, clip style and imprint area determine how premium or practical the final piece feels.",
    useCases: ["Conference bags", "Reception desks", "Direct mail inserts"],
  },
  {
    slug: "keychains",
    name: "Keychains",
    category: "promotional-items",
    blurb: "Metal, acrylic and leather keychains for giveaways and kits.",
    idealFor: ["Giveaways", "Dealership handoffs", "Event kits"],
    decoration: ["laser", "pvc", "leather", "pad-print"],
    why:
      "Keychains can stay in daily use for years, which makes them a practical small-format branding item. Material choice sets the tone.",
    useCases: ["Auto dealerships", "Real estate closings", "Membership kits"],
  },
  {
    slug: "custom-keychains",
    name: "Custom Keychains",
    category: "promotional-items",
    blurb: "Custom-shape keychains molded or cut around your brand or idea.",
    idealFor: ["Distinct brand shapes", "Mascots", "Product-shaped promos"],
    decoration: ["pvc", "laser"],
    why:
      "Custom shapes need clean artwork and may involve tooling or mold setup. Quantity matters more here because setup cost is spread across the run.",
    useCases: ["Brand mascots", "Anniversary campaigns", "Retail merchandise"],
  },
  {
    slug: "custom-notebook",
    name: "Custom Notebook",
    category: "promotional-items",
    blurb: "Branded notebooks for meetings, onboarding kits, conferences and client gifts.",
    idealFor: ["Corporate kits", "Conferences", "Client gifts", "Employee onboarding"],
    decoration: ["screen-print", "laser"],
    why:
      "Notebooks are practical business merchandise that stay in use after an event or onboarding program. Cover material and branding method determine the final look.",
    useCases: ["Meeting kits", "Welcome packs", "Client gifting"],
  },
  {
    slug: "garment-labels",
    name: "Garment Labels",
    category: "garment-labels",
    blurb: "Custom garment labels for branded apparel and private-label finishing.",
    idealFor: ["Custom apparel", "Private-label garments", "Uniform programs"],
    decoration: ["screen-print"],
    why:
      "Garment labels help make the finished piece feel intentional and branded from the inside as well as the outside. Size, material and information depend on the garment and program.",
    useCases: ["Branded apparel", "School merchandise", "Uniform programs"],
  },
  {
    slug: "neck-labels",
    name: "Neck Labels",
    category: "garment-labels",
    blurb: "Custom neck labels for shirts, polos, hoodies and other branded apparel.",
    idealFor: ["T-shirts", "Polos", "Hoodies", "Private-label apparel"],
    decoration: ["screen-print", "heat-transfer"],
    why:
      "A neck label can replace or supplement the standard garment label with brand, sizing or care information depending on the project.",
    useCases: ["Retail apparel", "Event merchandise", "Brand programs"],
  },
  {
    slug: "care-labels",
    name: "Care Labels",
    category: "garment-labels",
    blurb: "Custom care labels for garment instructions, sizing and brand information.",
    idealFor: ["Apparel programs", "Uniforms", "Private-label garments"],
    decoration: ["screen-print"],
    why:
      "Care labels are useful when a garment program needs consistent washing, sizing or brand information inside each item.",
    useCases: ["Uniform programs", "Retail apparel", "Custom clothing runs"],
  },
  {
    slug: "leather-patches",
    name: "Leather Patches",
    category: "patches-badges",
    blurb: "Debossed leather and leatherette patches for caps, jackets and bags.",
    idealFor: ["Caps", "Outerwear", "Premium merchandise"],
    decoration: ["leather", "laser"],
    why:
      "Leather patches give a clean, premium look. Real and synthetic leather behave differently, so finish and budget both matter.",
    useCases: ["Branded caps", "Workwear jackets", "Retail merchandise"],
  },
  {
    slug: "pvc-patches",
    name: "PVC Patches",
    category: "patches-badges",
    blurb: "Molded rubber patches with raised detail and durable color.",
    idealFor: ["Uniforms", "Outdoor gear", "Team identifiers"],
    decoration: ["pvc"],
    why:
      "PVC patches can hold bold shapes and color while offering a different feel from thread-based patches.",
    useCases: ["Field crews", "Outdoor brands", "Team gear"],
  },
  {
    slug: "chenille-patches",
    name: "Chenille Patches",
    category: "patches-badges",
    blurb: "Raised, textured patches with a classic varsity look.",
    idealFor: ["Schools", "Letterman jackets", "Retail apparel"],
    decoration: ["chenille"],
    why:
      "Chenille has a distinct texture that works best with bold letters and simple shapes. Fine detail often needs to be simplified.",
    useCases: ["School award jackets", "Club apparel", "Streetwear lines"],
  },
  {
    slug: "embroidery-patches",
    name: "Embroidery Patches",
    category: "patches-badges",
    blurb: "Stitched patches with clean borders for uniforms, caps and bags.",
    idealFor: ["Uniforms", "Organizations", "Caps and bags"],
    decoration: ["embroidery"],
    why:
      "Embroidered patches are useful when you want a removable or separately produced branding element instead of decorating every garment directly.",
    useCases: ["Service uniforms", "Membership organizations", "Cap programs"],
  },
  {
    slug: "pvc-plastic-badges",
    name: "PVC Plastic Badges",
    category: "patches-badges",
    blurb: "Rigid badges and name plates for staff identification and events.",
    idealFor: ["Staff ID", "Events", "Facilities"],
    decoration: ["pvc", "laser", "pad-print"],
    why:
      "Badges need to stay readable under repeat use. Attachment style, thickness and finish are all worth confirming before production.",
    useCases: ["Hospitality staff", "Conference credentials", "Facility access"],
  },
  {
    slug: "fr-shirts",
    name: "FR Shirts",
    category: "workwear",
    blurb: "Flame-resistant work shirts for field crews with branding requirements.",
    idealFor: ["Construction", "Energy and utilities", "Industrial crews"],
    decoration: ["embroidery", "leather"],
    why:
      "FR garments can have specific labeling and decoration considerations. Send us the requirement and any standard your site follows so we can review the project correctly.",
    useCases: ["Job-site uniforms", "Contractor crews", "Field service teams"],
  },
  {
    slug: "branded-work-shirts",
    name: "Branded Work Shirts",
    category: "workwear",
    blurb: "Durable button-ups and work polos built for daily field and shop use.",
    idealFor: ["Trades", "Facilities teams", "Service fleets"],
    decoration: ["embroidery", "dtf"],
    why:
      "Work shirts are selected differently from office apparel. Fabric weight, construction and branding placement matter when garments are worn and washed frequently.",
    useCases: ["HVAC and plumbing teams", "Landscaping crews", "Maintenance staff"],
  },
  {
    slug: "golf-towels",
    name: "Golf Towels",
    category: "towels",
    blurb: "Waffle and terry golf towels with grommet and clip options.",
    idealFor: ["Tournaments", "Sponsor gifts", "Client outings"],
    decoration: ["embroidery", "screen-print", "dtf"],
    why:
      "Golf towels are a standard tournament item. Embroidery works well on many terry options, while printing is often better suited to flatter surfaces.",
    useCases: ["Charity tournaments", "Sponsor packages", "Golf outings"],
  },
  {
    slug: "custom-towels",
    name: "Custom Towels",
    category: "towels",
    blurb: "Shop, gym and utility towels sized and branded to your requirement.",
    idealFor: ["Shops and garages", "Gyms", "Hospitality"],
    decoration: ["embroidery", "screen-print"],
    why:
      "Utility towels are usually about weight, absorbency and repeat use. Tell us where they will be used and we can help narrow the options.",
    useCases: ["Auto shops", "Fitness facilities", "Event hospitality"],
  },
];

export const productsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);

export const findProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const findCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const decorationMethods: {
  key: DecorationKey;
  name: string;
  bestFor: string;
  look: string;
  products: string;
}[] = [
  {
    key: "embroidery",
    name: "Embroidery",
    bestFor: "Uniform programs and apparel that gets washed often",
    look: "Stitched thread with visible texture and a professional finish",
    products: "Polos, caps, jackets, work shirts, towels, patches",
  },
  {
    key: "dtf",
    name: "DTF Printing",
    bestFor: "Multi-color or detailed artwork, including smaller runs",
    look: "Full-color print with sharp detail and a smooth surface feel",
    products: "T-shirts, polos, hoodies, tote bags",
  },
  {
    key: "screen-print",
    name: "Screen Printing",
    bestFor: "Higher quantities with a limited number of ink colors",
    look: "Flat, solid color that sits well on cotton",
    products: "T-shirts, hoodies, totes, towels",
  },
  {
    key: "dtg",
    name: "DTG Printing",
    bestFor: "Detailed artwork on suitable cotton garments and smaller apparel runs",
    look: "Printed directly into the garment with a soft, detailed finish",
    products: "T-shirts and selected cotton apparel",
  },
  {
    key: "heat-transfer",
    name: "Heat Transfer",
    bestFor: "Names, numbers, smaller runs and selected apparel applications",
    look: "Applied graphic or lettering bonded to the garment with heat",
    products: "T-shirts, polos, hoodies and neck labels",
  },
  {
    key: "sublimation",
    name: "Sublimation",
    bestFor: "Polyester items and artwork that benefits from full-color coverage",
    look: "Color infused into suitable polyester material",
    products: "Performance apparel, selected lanyards and other polyester items",
  },
  {
    key: "pvc",
    name: "PVC",
    bestFor: "Outdoor gear, badges and custom molded pieces",
    look: "Molded rubber with raised detail and durable color",
    products: "Patches, badges, custom keychains",
  },
  {
    key: "chenille",
    name: "Chenille",
    bestFor: "Bold letters and simple shapes with a varsity feel",
    look: "Raised, fuzzy texture with strong physical presence",
    products: "Jackets, hoodies, school and club apparel",
  },
  {
    key: "leather",
    name: "Leather Patch",
    bestFor: "Premium branding on caps, outerwear and bags",
    look: "Debossed or engraved mark on leather or leatherette",
    products: "Caps, jackets, tote bags, premium polos",
  },
  {
    key: "laser",
    name: "Laser Engraving",
    bestFor: "Hard-surface items where a permanent mark is preferred",
    look: "Etched mark in the surface material",
    products: "Tumblers, bottles, metal keychains, notebooks",
  },
  {
    key: "pad-print",
    name: "Pad Printing",
    bestFor: "Small imprint areas on curved or irregular surfaces",
    look: "Clean printed mark in one or more colors",
    products: "Pens, bottles and small promotional items",
  },
];

export const decorationLabel = (key: DecorationKey) =>
  decorationMethods.find((d) => d.key === key)?.name ?? key;

export const solutions = [
  {
    slug: "employee-uniforms",
    title: "Employee & Staff Uniforms",
    outcome:
      "Keep your team looking consistent with branded polos, shirts and outerwear selected around your environment and budget.",
    needs: ["Consistent look across shifts", "Sizing across a mixed team", "Repeat reorders"],
    categories: ["Apparel", "Workwear", "Patches"],
    methods: ["Embroidery", "DTF Printing", "Leather Patch"],
    cta: "Build a Uniform Program",
  },
  {
    slug: "school-team-apparel",
    title: "School & Team Apparel",
    outcome:
      "Spirit wear, team shirts and award apparel built around your season, budget and branding.",
    needs: ["Season deadlines", "Roster names and numbers", "Budget per student"],
    categories: ["Apparel", "Patches", "Bags"],
    methods: ["Screen Printing", "DTF Printing", "Chenille"],
    cta: "Plan a School Order",
  },
  {
    slug: "event-merchandise",
    title: "Event Merchandise",
    outcome:
      "Shirts, totes and giveaways coordinated around one campaign, one date and one visual direction.",
    needs: ["Fixed event date", "Mixed product types", "Consistent artwork"],
    categories: ["Apparel", "Bags", "Drinkware", "Promotional Items"],
    methods: ["Screen Printing", "DTF Printing", "Pad Printing"],
    cta: "Plan Event Merchandise",
  },
  {
    slug: "corporate-giveaways",
    title: "Corporate Giveaways",
    outcome:
      "Trade show and campaign items selected around your quantity and per-unit budget.",
    needs: ["Volume pricing", "Shipping requirements", "Brand consistency"],
    categories: ["Promotional Items", "Drinkware", "Bags"],
    methods: ["Pad Printing", "Laser Engraving"],
    cta: "Get Giveaway Options",
  },
  {
    slug: "branded-workwear",
    title: "Branded Workwear",
    outcome:
      "Field-ready shirts and uniforms with branding choices that fit the environment.",
    needs: ["Durability", "FR requirements where applicable", "Crew sizing"],
    categories: ["Workwear", "Apparel", "Patches"],
    methods: ["Embroidery", "PVC", "Leather Patch"],
    cta: "Build a Workwear Order",
  },
  {
    slug: "client-gifts",
    title: "Client Gifts",
    outcome:
      "Gift items selected around the relationship, occasion and presentation level you want.",
    needs: ["Presentation quality", "Quantity", "Recipient variety"],
    categories: ["Drinkware", "Apparel", "Promotional Items"],
    methods: ["Laser Engraving", "Embroidery"],
    cta: "Discuss a Gift Program",
  },
  {
    slug: "fundraiser-merchandise",
    title: "Fundraiser Merchandise",
    outcome:
      "Merchandise selected around your cost target so the fundraising model still makes sense.",
    needs: ["Cost per unit", "Simple ordering", "Predictable quantities"],
    categories: ["Apparel", "Promotional Items", "Bags"],
    methods: ["Screen Printing", "DTF Printing"],
    cta: "Price a Fundraiser",
  },
  {
    slug: "promotional-campaigns",
    title: "Promotional Campaigns",
    outcome:
      "A coordinated product mix for a launch, seasonal push or regional campaign.",
    needs: ["Multiple items, one look", "Timeline coordination", "Reorder capability"],
    categories: ["Apparel", "Drinkware", "Promotional Items"],
    methods: ["DTF Printing", "Screen Printing", "Pad Printing"],
    cta: "Plan a Campaign",
  },
  {
    slug: "patches-badges-programs",
    title: "Custom Patches & Badges",
    outcome:
      "Patch and badge programs for uniforms, caps and gear in the material that fits the application.",
    needs: ["Material selection", "Attachment method", "Artwork simplification"],
    categories: ["Patches & Badges"],
    methods: ["PVC", "Chenille", "Embroidery", "Leather Patch"],
    cta: "Spec a Patch Order",
  },
  {
    slug: "distributor-orders",
    title: "Distributor / Outsourced Orders",
    outcome:
      "Sourcing and production support when you already have the customer but need help behind the scenes.",
    needs: ["Clear specifications", "Consistent communication", "Repeat capability"],
    categories: ["All categories"],
    methods: ["Varies by project"],
    cta: "Discuss an Outsourced Project",
  },
];

export const industries = [
  {
    name: "Schools & Universities",
    need:
      "Spirit wear, department apparel, event merchandise and award patches built around academic-year deadlines.",
    cats: ["Apparel", "Patches", "Bags", "Drinkware"],
    methods: ["Screen Printing", "DTF Printing", "Chenille"],
    cta: "Plan a School Order",
  },
  {
    name: "Corporate Teams",
    need:
      "Uniform programs, onboarding kits, recognition gifts and campaign merchandise across locations.",
    cats: ["Apparel", "Drinkware", "Promotional Items"],
    methods: ["Embroidery", "Laser Engraving", "DTF Printing"],
    cta: "Talk to a Product Specialist",
  },
  {
    name: "Construction & Trades",
    need:
      "Durable uniforms, FR shirts, branded polos, towels and promotional items for field teams.",
    cats: ["Workwear", "Apparel", "Towels", "Promotional Items"],
    methods: ["Embroidery", "PVC", "Leather Patch"],
    cta: "Build a Workwear Order",
  },
  {
    name: "Events & Conferences",
    need:
      "Attendee bags, staff shirts, speaker gifts and sponsor items built around a fixed event date.",
    cats: ["Bags", "Apparel", "Drinkware", "Promotional Items"],
    methods: ["Screen Printing", "Pad Printing", "DTF Printing"],
    cta: "Plan Event Merchandise",
  },
  {
    name: "Sports Teams",
    need:
      "Team apparel, warmups, towels and patches with roster details and season timing.",
    cats: ["Apparel", "Towels", "Patches"],
    methods: ["DTF Printing", "Embroidery", "Chenille"],
    cta: "Order Team Apparel",
  },
  {
    name: "Restaurants & Hospitality",
    need:
      "Front-of-house polos, staff tees and guest merchandise selected for repeat daily wear.",
    cats: ["Apparel", "Towels", "Drinkware"],
    methods: ["Embroidery", "DTF Printing"],
    cta: "Spec Staff Uniforms",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Tell Us What You Need",
    body:
      "Send a product idea, reference image, logo, quantity or simply explain the goal. You do not need a final decision to start the conversation.",
  },
  {
    n: "02",
    title: "We Help Build the Right Option",
    body:
      "We help narrow down product style, material, branding method and quantity based on how the items will actually be used.",
  },
  {
    n: "03",
    title: "Review Your Quote & Details",
    body:
      "Confirm specifications, pricing and project details before anything moves forward. Questions at this stage are expected.",
  },
  {
    n: "04",
    title: "Customization & Production",
    body:
      "Once approved, your order moves into customization and production with the confirmed artwork and specifications.",
  },
  {
    n: "05",
    title: "Delivery & Completion",
    body:
      "Your project is completed according to the confirmed order requirements, and we stay reachable if you need a reorder.",
  },
];

export const faqGroups = [
  {
    group: "Ordering",
    items: [
      {
        q: "How do I request a quote?",
        a:
          "Use the quote form and tell us the product type, approximate quantity and when you need it. If you are not sure about the product, describe the goal instead and we will follow up with options.",
      },
      {
        q: "Do you handle bulk orders?",
        a:
          "Yes. Bulk and repeat orders are the main type of work we take on. Send your quantity range and we will tell you what is realistic for that volume.",
      },
      {
        q: "Can I order several products for the same campaign?",
        a:
          "Yes. If you need several product types, mention them in the Product Details or Notes field. The category selector itself stays single-select so the form remains easy to use.",
      },
    ],
  },
  {
    group: "Product Selection",
    items: [
      {
        q: "Can you help if I do not know the exact product?",
        a:
          "Yes. Tell us who the items are for, roughly how many you need and what you want to accomplish, and we can recommend suitable options.",
      },
      {
        q: "Can I request products that are not shown on the website?",
        a:
          "Yes. Send a description, reference image or spec sheet. We review custom requests individually and tell you directly if it is not something we can source.",
      },
      {
        q: "Do minimum quantities vary by product?",
        a:
          "Minimums depend on the product and customization method. Send us your approximate quantity and we can help identify suitable options.",
      },
      {
        q: "Do you offer custom lanyards?",
        a:
          "Yes. We can review bulk custom lanyard projects for events, staff IDs, schools and conferences. Send the quantity, artwork and attachment style if you already know it.",
      },
      {
        q: "Can you make stress balls with our logo?",
        a:
          "Yes. Logo-branded stress balls can be discussed for giveaway and event orders. The imprint size and available shapes depend on the selected item.",
      },
      {
        q: "Do you offer woven and non-woven bags?",
        a:
          "Yes. We can help compare tote, woven and non-woven bag options based on quantity, intended use and branding requirements.",
      },
      {
        q: "Can you make garment labels?",
        a:
          "Yes. Garment, neck and care label projects can be reviewed for apparel programs. Send the label size, wording, artwork and garment details.",
      },
    ],
  },
  {
    group: "Artwork & Customization",
    items: [
      {
        q: "Can I send my logo?",
        a:
          "Yes. The quote form includes an artwork upload step. If the file needs cleanup for a specific decoration method, we will let you know.",
      },
      {
        q: "Which artwork file types are preferred?",
        a:
          "Vector files such as AI, EPS, PDF or SVG work best. High-resolution PNG files are usually workable. Screenshots and small web images may need to be recreated.",
      },
      {
        q: "Can you help choose between embroidery and printing?",
        a:
          "Yes. The right choice depends on the garment, artwork detail and how the item will be used. Send your logo and we can recommend an approach.",
      },
      {
        q: "Do you offer custom patches?",
        a:
          "Yes, including leather, PVC, chenille and embroidered patches, plus PVC plastic badges. Material choice affects both the look and the price.",
      },
    ],
  },
  {
    group: "Pricing & Quotes",
    items: [
      {
        q: "How is pricing calculated?",
        a:
          "Pricing depends on the product, quantity, decoration method, imprint locations, artwork requirements and timeline.",
      },
      {
        q: "Why are prices not listed on the website?",
        a:
          "Bulk pricing changes with quantity and customization. A single public price would often be misleading, so we quote against the actual project requirements.",
      },
    ],
  },
  {
    group: "Production & Shipping",
    items: [
      {
        q: "How long does production take?",
        a:
          "Timelines depend on the product, decoration method and quantity. Tell us your need-by date early and we will confirm what is workable before you commit.",
      },
      {
        q: "Can you ship across the United States?",
        a:
          "We work with US-based buyers. Share your destination or destinations with your request and we will include that in the quote.",
      },
    ],
  },
  {
    group: "Outsourced Projects",
    items: [
      {
        q: "Can you handle distributor or outsourced projects?",
        a:
          "We evaluate outsourced and distributor projects based on the requirements. Send the specifications, quantity and timeline and we will tell you whether it is a fit.",
      },
      {
        q: "Can you work with schools and businesses?",
        a:
          "Yes. Schools, businesses, organizations, teams, contractors and event groups are among the buyers we work with.",
      },
    ],
  },
];
