export type DecorationKey =
  | "embroidery"
  | "dtf"
  | "screen-print"
  | "pvc"
  | "chenille"
  | "leather"
  | "laser"
  | "pad-print";

export type Product = {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  idealFor: string[];
  decoration: DecorationKey[];
  why: string;
  useCases: string[];
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
    tagline: "Shirts, polos and hoodies built around your budget and branding.",
    intro:
      "We keep our margins tight and shipping is included, so the pricing you get is genuinely competitive. We work with a wide range of fabrics and can decorate with screen printing, embroidery, DTG, heat transfer or sublimation. Leather, chenille and PVC patch options are also available for a more premium look. We usually send a sample before full production starts. Once you approve it, we move to mass production, which saves fabric and time on both ends.",
    image: "apparel",
  },
  {
    slug: "drinkware",
    name: "Drinkware",
    tagline: "Custom bottles and tumblers built for daily use.",
    intro:
      "Drinkware works well for onboarding kits, events and client gifts. Decoration options depend on the finish and shape of the item, and we help you compare the tradeoffs before ordering.",
    image: "drinkware",
  },
  {
    slug: "bags",
    name: "Bags",
    tagline: "Totes plus woven and non-woven bags for events, kits and campaigns.",
    intro:
      "Bags keep your branding in use after an event ends. Material, weight, handle style and print area all affect the final look, so we help you compare options before ordering.",
    image: "promo",
  },
  {
    slug: "promotional-items",
    name: "Promotional Items",
    tagline: "Pens, keychains, lanyards and giveaway items for bulk programs.",
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
    name: "Gildan 2000 Shirts",
    category: "apparel",
    blurb: "A widely used heavyweight cotton tee for higher quantity orders.",
    idealFor: ["Large quantity orders", "Budget-conscious projects", "Events"],
    decoration: ["screen-print", "dtf"],
    why:
      "The Gildan 2000 is a familiar heavyweight blank with broad sizing and color availability. It is often a practical choice when buyers need volume and a straightforward fit.",
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
    name: "DTF Branded Polos",
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
    name: "Custom Hoodies",
    category: "apparel",
    blurb: "Fleece pullovers and zip hoodies for cooler seasons and team apparel.",
    idealFor: ["Team apparel", "Employee gifts", "School stores"],
    decoration: ["screen-print", "dtf", "embroidery", "chenille"],
    why:
      "Hoodies carry higher perceived value than basic tees, which makes them useful for gifting and merchandise programs. Fleece weight is one of the main quality drivers.",
    useCases: ["Employee appreciation", "School and club merchandise", "Winter events"],
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
    blurb: "Insulated tumblers with engraved or printed custom branding.",
    idealFor: ["Corporate gifts", "Holiday programs", "Recognition awards"],
    decoration: ["laser", "pad-print"],
    why:
      "Tumblers stay in circulation on desks and in vehicles, which gives branding a long useful life. Capacity, lid style and finish are the main product choices.",
    useCases: ["Service awards", "Client thank-you gifts", "Team milestones"],
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
    slug: "woven-non-woven-bags",
    name: "Woven & Non-Woven Bags",
    category: "bags",
    blurb: "Bulk branded bags for events, retail, trade shows and giveaway programs.",
    idealFor: ["Events", "Retail promotions", "Trade shows", "Campaign kits"],
    decoration: ["screen-print", "dtf"],
    why:
      "Woven and non-woven bags are useful when the priority is quantity, repeat use and a visible branding area. Material and handle construction affect both feel and price.",
    useCases: ["Conference bags", "Retail promotions", "School and community events"],
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
    slug: "custom-lanyards",
    name: "Custom Lanyards",
    category: "promotional-items",
    blurb: "Bulk branded lanyards for events, schools, staff and organizations.",
    idealFor: ["Conferences", "Schools", "Staff IDs", "Organizations"],
    decoration: ["screen-print", "dtf"],
    why:
      "Lanyards are useful when identification and brand visibility need to work together. Width, attachment style and print method are the main decisions.",
    useCases: ["Conference credentials", "School IDs", "Staff access programs"],
  },
  {
    slug: "custom-stress-balls",
    name: "Custom Stress Balls with Logo",
    category: "promotional-items",
    blurb: "Logo-branded stress balls for events, desks and giveaway programs.",
    idealFor: ["Trade shows", "Healthcare events", "Office giveaways", "Campaigns"],
    decoration: ["pad-print"],
    why:
      "Stress balls are simple, high-volume giveaway items. Shape, imprint area and material density determine how the finished item feels and how clearly the logo prints.",
    useCases: ["Trade show booths", "Wellness campaigns", "Office promotions"],
  },
  {
    slug: "garment-labels",
    name: "Garment Labels",
    category: "apparel",
    blurb: "Custom neck labels, care labels and garment branding for apparel programs.",
    idealFor: ["Private-label apparel", "Retail merchandise", "Uniform programs"],
    decoration: ["screen-print", "dtf"],
    why:
      "Garment labels help a custom apparel order feel more complete and brand-specific. The right approach depends on whether you need neck branding, care information or both.",
    useCases: ["Private-label shirts", "Retail apparel", "School and club merchandise"],
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
    products: "Tumblers, bottles, metal keychains, badges",
  },
  {
    key: "pad-print",
    name: "Pad Printing",
    bestFor: "Small imprint areas on curved or irregular surfaces",
    look: "Clean printed mark in one or more colors",
    products: "Pens, bottles, stress balls and small promotional items",
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
    categories: ["Drinkware", "Apparel", "Bags"],
    methods: ["Laser Engraving", "Embroidery", "Leather Patch"],
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
  {
    name: "Nonprofits & Fundraisers",
    need:
      "Volunteer shirts, donor gifts and merchandise selected around a workable fundraising budget.",
    cats: ["Apparel", "Bags", "Promotional Items"],
    methods: ["Screen Printing", "DTF Printing"],
    cta: "Price a Fundraiser",
  },
  {
    name: "Agencies & Distributors",
    need:
      "Sourcing and production support for client projects with clear specifications and communication.",
    cats: ["All categories"],
    methods: ["Varies by project"],
    cta: "Discuss an Outsourced Project",
  },
  {
    name: "Small Businesses",
    need:
      "A first branded apparel run, shop merchandise or giveaway items without a large internal team.",
    cats: ["Apparel", "Promotional Items", "Drinkware"],
    methods: ["DTF Printing", "Embroidery"],
    cta: "Start a Bulk Order",
  },
  {
    name: "Organizations & Clubs",
    need:
      "Member apparel, patches and recognition items for one-time or repeat programs.",
    cats: ["Apparel", "Patches", "Promotional Items"],
    methods: ["Embroidery", "PVC", "Chenille"],
    cta: "Get Product Recommendations",
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

export const projectPlaceholders = [
  { title: "Corporate Uniform Program", tag: "Apparel", scope: "Polos and work shirts", method: "Embroidery" },
  { title: "Conference Attendee Kit", tag: "Events", scope: "Totes, pens, bottles", method: "Screen Print / Pad Print" },
  { title: "School Spirit Run", tag: "Schools", scope: "Tees and hoodies", method: "DTF Printing" },
  { title: "Field Crew Workwear", tag: "Workwear", scope: "FR shirts and polos", method: "Embroidery" },
  { title: "Cap Patch Program", tag: "Patches", scope: "Leather patch caps", method: "Leather Patch" },
  { title: "Client Gift Drinkware", tag: "Drinkware", scope: "Insulated tumblers", method: "Laser Engraving" },
  { title: "Tournament Package", tag: "Corporate", scope: "Golf towels and polos", method: "Embroidery" },
  { title: "Team Award Jackets", tag: "Apparel", scope: "Fleece and chenille", method: "Chenille" },
];
