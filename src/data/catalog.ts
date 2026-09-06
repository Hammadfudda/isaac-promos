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
      "Tees, polos and fleece are the backbone of most bulk orders. We help you match the blank to the use case, then pick a decoration method that holds up after repeated washing.",
    image: "apparel",
  },
  {
    slug: "drinkware",
    name: "Drinkware",
    tagline: "Bottles and tumblers people actually keep on their desk.",
    intro:
      "Drinkware works well for onboarding kits, events and client gifts. Decoration options depend on the finish and shape of the item, and we walk you through the trade-offs.",
    image: "drinkware",
  },
  {
    slug: "bags",
    name: "Bags",
    tagline: "Totes for events, conferences and welcome kits.",
    intro:
      "Bags carry your branding long after an event ends. Weight of the canvas, handle length and print area all change the final look, so we help you compare options before ordering.",
    image: "promo",
  },
  {
    slug: "promotional-items",
    name: "Promotional Items",
    tagline: "Pens, keychains and small-format giveaways at volume.",
    intro:
      "Small items are usually about quantity and consistency. We help you keep unit cost reasonable without ending up with something that gets thrown away at the door.",
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
      "Field crews are hard on apparel. We help select fabrics and branding placements that survive job-site conditions and repeated industrial laundering.",
    image: "workwear",
  },
  {
    slug: "towels",
    name: "Towels",
    tagline: "Golf and utility towels for events and gifting.",
    intro:
      "Towels are a straightforward add-on for tournaments, gift sets and shop use. Weight, weave and hanging hardware are the main choices.",
    image: "promo",
  },
  {
    slug: "custom-projects",
    name: "Custom Projects",
    tagline: "Something not listed here? Send us the requirement.",
    intro:
      "If you have a product idea, a reference image or a spec sheet, send it over. We review custom requests case by case and tell you honestly whether we can source it.",
    image: "promo",
  },
];

export const products: Product[] = [
  {
    slug: "custom-t-shirts",
    name: "Custom T-Shirts",
    category: "apparel",
    blurb:
      "Standard and ring-spun cotton tees for staff, events, teams and giveaways.",
    idealFor: ["Events", "Staff shirts", "School and team orders", "Giveaways"],
    decoration: ["screen-print", "dtf", "embroidery"],
    why: "Tees are the most flexible bulk item on this list. Blank weight, fit and fabric blend change both the feel and the price, and we help you land on the right combination for the quantity you are ordering.",
    useCases: [
      "Company events and trade shows",
      "School spirit and club orders",
      "Fundraisers and community campaigns",
    ],
  },
  {
    slug: "gildan-2000",
    name: "Gildan 2000 Shirts",
    category: "apparel",
    blurb:
      "A widely used heavyweight cotton tee for high-quantity orders at a workable price.",
    idealFor: ["Large quantity orders", "Budget-conscious projects", "Events"],
    decoration: ["screen-print", "dtf"],
    why: "The Gildan 2000 is a familiar blank for buyers who need volume without surprises. Sizing and color ranges are broad, which helps when ordering for a mixed group.",
    useCases: ["Volunteer shirts", "Bulk event tees", "Warehouse and crew shirts"],
  },
  {
    slug: "premium-polos",
    name: "Premium Polos",
    category: "apparel",
    blurb:
      "Higher-end polos for client-facing teams, management and hospitality staff.",
    idealFor: ["Front-of-house teams", "Sales staff", "Corporate uniforms"],
    decoration: ["embroidery", "dtf", "leather"],
    why: "A premium polo reads differently than an entry-level one. Collar construction, fabric weight and shrinkage behavior are worth reviewing when the shirt is part of a uniform program.",
    useCases: ["Restaurant and hotel staff", "Dealership teams", "Conference staff"],
  },
  {
    slug: "custom-polos",
    name: "Custom Polos",
    category: "apparel",
    blurb: "Standard polos configured around your color, fabric and branding needs.",
    idealFor: ["Staff uniforms", "Team apparel", "Corporate gifting"],
    decoration: ["embroidery", "dtf", "screen-print"],
    why: "Most uniform programs start here. We help you compare cotton, blends and performance fabrics based on the working environment.",
    useCases: ["Office uniforms", "Golf outings", "Service technicians"],
  },
  {
    slug: "embroidered-polos",
    name: "Embroidered Polos",
    category: "apparel",
    blurb: "Stitched left-chest or sleeve branding for a clean, durable finish.",
    idealFor: ["Uniform programs", "Executive gifts", "Trade organizations"],
    decoration: ["embroidery"],
    why: "Embroidery holds up to repeated washing and gives a professional finish. Fine detail and thin text need review before stitching, and we flag artwork that will not translate well.",
    useCases: ["Company uniforms", "Association apparel", "Client gifting"],
  },
  {
    slug: "dtf-branded-polos",
    name: "DTF Branded Polos",
    category: "apparel",
    blurb: "Full-color transfers for logos with gradients, photos or fine detail.",
    idealFor: ["Detailed logos", "Multi-color artwork", "Smaller quantities"],
    decoration: ["dtf"],
    why: "DTF reproduces color detail that embroidery cannot. It is a good fit when your logo has gradients or many colors, or when the run size does not justify screen setup.",
    useCases: ["Campaign apparel", "Event staff", "Multi-color brand marks"],
  },
  {
    slug: "custom-hoodies",
    name: "Custom Hoodies",
    category: "apparel",
    blurb: "Fleece pullovers and zip hoodies for cooler seasons and team apparel.",
    idealFor: ["Team apparel", "Employee gifts", "School stores"],
    decoration: ["screen-print", "dtf", "embroidery", "chenille"],
    why: "Hoodies carry higher perceived value than tees, which makes them useful for gifting and merchandise programs. Fleece weight is the main quality driver.",
    useCases: ["Employee appreciation", "School and club merchandise", "Winter events"],
  },
  {
    slug: "fr-shirts",
    name: "FR Shirts",
    category: "workwear",
    blurb: "Flame-resistant work shirts for field crews with branding requirements.",
    idealFor: ["Construction", "Energy and utilities", "Industrial crews"],
    decoration: ["embroidery", "leather"],
    why: "FR garments have specific labeling and decoration considerations. Send us your requirement and any standard your site follows so we can source and brand correctly.",
    useCases: ["Job-site uniforms", "Contractor crews", "Field service teams"],
  },
  {
    slug: "branded-work-shirts",
    name: "Branded Work Shirts",
    category: "workwear",
    blurb: "Durable button-ups and work polos built for daily job-site wear.",
    idealFor: ["Trades", "Facilities teams", "Service fleets"],
    decoration: ["embroidery", "dtf"],
    why: "Work shirts get washed hard. Reinforced stitching and heavier fabrics cost more up front but usually reduce replacement frequency.",
    useCases: ["HVAC and plumbing teams", "Landscaping crews", "Maintenance staff"],
  },
  {
    slug: "custom-bottles",
    name: "Custom Bottles",
    category: "drinkware",
    blurb: "Insulated and sport bottles for onboarding kits, events and gifting.",
    idealFor: ["Employee kits", "Conferences", "Client gifts"],
    decoration: ["laser", "pad-print", "dtf"],
    why: "Bottle finish drives the branding method. Powder-coated stainless takes laser engraving well, while printed marks give you color.",
    useCases: ["New hire kits", "Wellness programs", "Trade show giveaways"],
  },
  {
    slug: "tumblers",
    name: "Tumblers",
    category: "drinkware",
    blurb: "Insulated tumblers in common sizes with engraved or printed branding.",
    idealFor: ["Corporate gifts", "Holiday programs", "Recognition awards"],
    decoration: ["laser", "pad-print"],
    why: "Tumblers stay in circulation on desks and in vehicles, which gives your branding a long life. Lid style and capacity are the main choices.",
    useCases: ["Service awards", "Client thank-you gifts", "Team milestones"],
  },
  {
    slug: "pens",
    name: "Pens",
    category: "promotional-items",
    blurb: "Everyday and executive pens for high-quantity distribution.",
    idealFor: ["Trade shows", "Front-desk giveaways", "Mailers"],
    decoration: ["pad-print", "laser"],
    why: "Pens are a volume item. Barrel material and clip style change the feel considerably, and imprint area is limited, so we help keep the mark legible.",
    useCases: ["Conference bags", "Bank and clinic counters", "Direct mail inserts"],
  },
  {
    slug: "tote-bags",
    name: "Tote Bags",
    category: "bags",
    blurb: "Canvas and non-woven totes for conferences, retail and welcome kits.",
    idealFor: ["Conferences", "Welcome kits", "Retail and markets"],
    decoration: ["screen-print", "dtf", "embroidery", "leather"],
    why: "Canvas weight is what separates a tote that gets reused from one that gets recycled. We help you compare weights against your budget.",
    useCases: ["Event swag bags", "School book bags", "Store merchandise"],
  },
  {
    slug: "keychains",
    name: "Keychains",
    category: "promotional-items",
    blurb: "Metal, acrylic and leather keychains for giveaways and kits.",
    idealFor: ["Giveaways", "Dealership handoffs", "Event kits"],
    decoration: ["laser", "pvc", "leather", "pad-print"],
    why: "Keychains hold up for years, which makes them a low-cost way to keep a brand in daily use. Material choice sets the tone.",
    useCases: ["Auto dealerships", "Real estate closings", "Membership kits"],
  },
  {
    slug: "custom-keychains",
    name: "Custom Keychains",
    category: "promotional-items",
    blurb: "Custom-shape keychains molded or cut to your logo outline.",
    idealFor: ["Distinct brand shapes", "Mascots", "Product-shaped promos"],
    decoration: ["pvc", "laser"],
    why: "Custom shapes need a clean vector outline and a mold or cut file. Tooling adds to first-run cost, so quantity matters more here than on stock shapes.",
    useCases: ["Brand mascots", "Anniversary campaigns", "Retail merchandise"],
  },
  {
    slug: "golf-towels",
    name: "Golf Towels",
    category: "towels",
    blurb: "Waffle and terry golf towels with grommet and clip options.",
    idealFor: ["Tournaments", "Sponsor gifts", "Client outings"],
    decoration: ["embroidery", "screen-print", "dtf"],
    why: "Golf towels are a standard tournament item. Embroidery reads well on terry, while printing works better on flat waffle weaves.",
    useCases: ["Charity tournaments", "Sponsor packages", "Golf outings"],
  },
  {
    slug: "custom-towels",
    name: "Custom Towels",
    category: "towels",
    blurb: "Shop, gym and utility towels sized and branded to your requirement.",
    idealFor: ["Shops and garages", "Gyms", "Hospitality"],
    decoration: ["embroidery", "screen-print"],
    why: "Utility towels are usually about weight and absorbency. Tell us where they will be used and we recommend a suitable weave.",
    useCases: ["Auto shops", "Fitness facilities", "Event hospitality"],
  },
  {
    slug: "leather-patches",
    name: "Leather Patches",
    category: "patches-badges",
    blurb: "Debossed leather and leatherette patches for caps, jackets and bags.",
    idealFor: ["Caps", "Outerwear", "Premium merchandise"],
    decoration: ["leather", "laser"],
    why: "Leather patches give a premium, understated look. Real and synthetic leather behave differently under laser, and we help pick based on your finish and budget.",
    useCases: ["Branded caps", "Workwear jackets", "Retail merchandise lines"],
  },
  {
    slug: "pvc-patches",
    name: "PVC Patches",
    category: "patches-badges",
    blurb: "Molded rubber patches with raised detail and durable color.",
    idealFor: ["Uniforms", "Outdoor gear", "Team identifiers"],
    decoration: ["pvc"],
    why: "PVC holds fine shapes and bright colors, and it resists weather better than thread. It is a common choice for gear that lives outdoors.",
    useCases: ["Field crews", "Tactical and outdoor brands", "Team gear"],
  },
  {
    slug: "chenille-patches",
    name: "Chenille Patches",
    category: "patches-badges",
    blurb: "Raised, textured patches with a classic varsity look.",
    idealFor: ["Schools", "Letterman jackets", "Retail apparel"],
    decoration: ["chenille"],
    why: "Chenille has a distinct texture that works for bold letters and simple shapes. Fine detail does not translate, so artwork usually needs simplifying.",
    useCases: ["School award jackets", "Club apparel", "Streetwear lines"],
  },
  {
    slug: "embroidery-patches",
    name: "Embroidery Patches",
    category: "patches-badges",
    blurb: "Stitched patches with merrowed or laser-cut borders.",
    idealFor: ["Uniforms", "Organizations", "Caps and bags"],
    decoration: ["embroidery"],
    why: "Embroidered patches let you brand items that are hard to decorate directly, and they can be swapped between garments in a uniform program.",
    useCases: ["Service uniforms", "Membership organizations", "Cap programs"],
  },
  {
    slug: "pvc-plastic-badges",
    name: "PVC Plastic Badges",
    category: "patches-badges",
    blurb: "Rigid badges and name plates for staff identification.",
    idealFor: ["Staff ID", "Events", "Facilities"],
    decoration: ["pvc", "laser", "pad-print"],
    why: "Badges need to stay readable under wear. Attachment style, thickness and finish all matter, and we confirm those details before production.",
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
    bestFor: "Outdoor gear and uniforms that need weather resistance",
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
    look: "Debossed mark on leather or leatherette, understated finish",
    products: "Caps, jackets, tote bags, premium polos",
  },
  {
    key: "laser",
    name: "Laser Engraving",
    bestFor: "Hard-surface items where durability matters",
    look: "Permanent etched mark in the material itself",
    products: "Tumblers, bottles, metal keychains, badges",
  },
  {
    key: "pad-print",
    name: "Pad Printing",
    bestFor: "Small imprint areas on curved or irregular surfaces",
    look: "Clean printed mark in one or more colors",
    products: "Pens, bottles, small promotional items",
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
      "Spirit wear, team shirts and award apparel that hold up through a season and a lot of laundry.",
    needs: ["Season deadlines", "Roster names and numbers", "Budget per student"],
    categories: ["Apparel", "Patches", "Bags"],
    methods: ["Screen Printing", "DTF Printing", "Chenille"],
    cta: "Plan a School Order",
  },
  {
    slug: "event-merchandise",
    title: "Event Merchandise",
    outcome:
      "Shirts, totes and giveaways coordinated to one campaign so everything arrives together and matches.",
    needs: ["Fixed event date", "Mixed product types", "Consistent artwork"],
    categories: ["Apparel", "Bags", "Drinkware", "Promotional Items"],
    methods: ["Screen Printing", "DTF Printing", "Pad Printing"],
    cta: "Plan Event Merchandise",
  },
  {
    slug: "corporate-giveaways",
    title: "Corporate Giveaways",
    outcome:
      "Trade show and campaign items chosen to fit your per-unit budget without looking disposable.",
    needs: ["Volume pricing", "Shipping to one or many locations", "Brand consistency"],
    categories: ["Promotional Items", "Drinkware", "Bags"],
    methods: ["Pad Printing", "Laser Engraving"],
    cta: "Get Giveaway Options",
  },
  {
    slug: "branded-workwear",
    title: "Branded Workwear",
    outcome:
      "Field-ready shirts and uniforms branded in placements that survive job-site conditions.",
    needs: ["Durability", "FR requirements where applicable", "Crew sizing"],
    categories: ["Workwear", "Apparel", "Patches"],
    methods: ["Embroidery", "PVC", "Leather Patch"],
    cta: "Build a Workwear Order",
  },
  {
    slug: "client-gifts",
    title: "Client Gifts",
    outcome:
      "Gift items that reflect well on your company, selected around the relationship and the occasion.",
    needs: ["Presentation quality", "Smaller quantities", "Recipient variety"],
    categories: ["Drinkware", "Apparel", "Bags"],
    methods: ["Laser Engraving", "Embroidery", "Leather Patch"],
    cta: "Discuss a Gift Program",
  },
  {
    slug: "fundraiser-merchandise",
    title: "Fundraiser Merchandise",
    outcome:
      "Merchandise priced so your organization keeps a workable margin after production.",
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
      "Patch and badge programs for uniforms, caps and gear, in the material that fits the application.",
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
    need: "Spirit wear, department apparel, event merchandise and award patches on academic-year deadlines.",
    cats: ["Apparel", "Patches", "Bags", "Drinkware"],
    methods: ["Screen Printing", "DTF Printing", "Chenille"],
    cta: "Plan a School Order",
  },
  {
    name: "Corporate Teams",
    need: "Uniform programs, onboarding kits, recognition gifts and campaign merchandise across locations.",
    cats: ["Apparel", "Drinkware", "Promotional Items"],
    methods: ["Embroidery", "Laser Engraving", "DTF Printing"],
    cta: "Talk to a Product Specialist",
  },
  {
    name: "Construction & Trades",
    need: "Durable uniforms, FR shirts, branded polos, safety-oriented work apparel, towels and promotional items.",
    cats: ["Workwear", "Apparel", "Towels", "Promotional Items"],
    methods: ["Embroidery", "PVC", "Leather Patch"],
    cta: "Build a Workwear Order",
  },
  {
    name: "Events & Conferences",
    need: "Attendee bags, staff shirts, speaker gifts and sponsor items delivered to one date.",
    cats: ["Bags", "Apparel", "Drinkware", "Promotional Items"],
    methods: ["Screen Printing", "Pad Printing", "DTF Printing"],
    cta: "Plan Event Merchandise",
  },
  {
    name: "Sports Teams",
    need: "Team apparel, warmups, towels and patches with roster details and season timing.",
    cats: ["Apparel", "Towels", "Patches"],
    methods: ["DTF Printing", "Embroidery", "Chenille"],
    cta: "Order Team Apparel",
  },
  {
    name: "Restaurants & Hospitality",
    need: "Front-of-house polos, aprons, staff tees and guest merchandise that stay presentable under daily wear.",
    cats: ["Apparel", "Towels", "Drinkware"],
    methods: ["Embroidery", "DTF Printing"],
    cta: "Spec Staff Uniforms",
  },
  {
    name: "Nonprofits & Fundraisers",
    need: "Volunteer shirts, donor gifts and merchandise priced to protect fundraising margins.",
    cats: ["Apparel", "Bags", "Promotional Items"],
    methods: ["Screen Printing", "DTF Printing"],
    cta: "Price a Fundraiser",
  },
  {
    name: "Agencies & Distributors",
    need: "Sourcing and production support for client projects, with clear specs and consistent communication.",
    cats: ["All categories"],
    methods: ["Varies by project"],
    cta: "Discuss an Outsourced Project",
  },
  {
    name: "Small Businesses",
    need: "A first branded apparel run, shop merchandise or giveaway items without a large internal team.",
    cats: ["Apparel", "Promotional Items", "Drinkware"],
    methods: ["DTF Printing", "Embroidery"],
    cta: "Start a Bulk Order",
  },
  {
    name: "Organizations & Clubs",
    need: "Member apparel, patches and recognition items ordered on a recurring basis.",
    cats: ["Apparel", "Patches", "Promotional Items"],
    methods: ["Embroidery", "PVC", "Chenille"],
    cta: "Get Product Recommendations",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Tell Us What You Need",
    body: "Send a product idea, reference image, logo, quantity or simply explain the goal. You do not need a final decision to start the conversation.",
  },
  {
    n: "02",
    title: "We Help Build the Right Option",
    body: "We help narrow down product style, material, branding method and quantity based on how the items will actually be used.",
  },
  {
    n: "03",
    title: "Review Your Quote & Details",
    body: "Confirm specifications, pricing and project details before anything moves forward. Questions at this stage are expected.",
  },
  {
    n: "04",
    title: "Customization & Production",
    body: "Once approved, your order moves into the customization and production stage with the confirmed artwork and specifications.",
  },
  {
    n: "05",
    title: "Delivery & Completion",
    body: "Your project is completed according to the confirmed order requirements, and we stay reachable if you need a reorder.",
  },
];

export const faqGroups = [
  {
    group: "Ordering",
    items: [
      {
        q: "How do I request a quote?",
        a: "Use the quote form and tell us the product type, approximate quantity and when you need it. If you are not sure about the product, describe the goal instead and we will follow up with options.",
      },
      {
        q: "Do you handle bulk orders?",
        a: "Yes. Bulk and repeat orders are the main type of work we take on. Send your quantity range and we will tell you what is realistic for that volume.",
      },
      {
        q: "Can I order several products for the same campaign?",
        a: "Yes. Combining apparel, drinkware, bags and promotional items under one project is common and usually easier to coordinate than splitting it across vendors.",
      },
    ],
  },
  {
    group: "Product Selection",
    items: [
      {
        q: "Can you help if I do not know the exact product?",
        a: "That is a normal starting point. Tell us who the items are for, roughly how many you need and what you want to accomplish, and we will recommend options with the trade-offs explained.",
      },
      {
        q: "Can I request products that are not shown on the website?",
        a: "Yes. Send a description, reference image or spec sheet. We review custom requests individually and tell you directly if it is not something we can source.",
      },
      {
        q: "Do minimum quantities vary by product?",
        a: "Minimums depend on the product and customization method. Send us your approximate quantity and we can help identify suitable options.",
      },
    ],
  },
  {
    group: "Artwork & Customization",
    items: [
      {
        q: "Can I send my logo?",
        a: "Yes. Attach it to your quote request or email it after you submit. If the file needs cleanup for a specific decoration method, we will tell you.",
      },
      {
        q: "Which artwork file types are preferred?",
        a: "Vector files such as AI, EPS, PDF or SVG work best. High-resolution PNG files are usually workable. Screenshots and small web images often need to be recreated.",
      },
      {
        q: "Can you help choose between embroidery and printing?",
        a: "Yes. The right choice depends on the garment, the artwork detail and how the item will be washed or used. Send your logo and we will give you a recommendation.",
      },
      {
        q: "Do you offer custom patches?",
        a: "Yes, including leather, PVC, chenille and embroidered patches, plus PVC plastic badges. Material choice affects both the look and the price.",
      },
    ],
  },
  {
    group: "Pricing & Quotes",
    items: [
      {
        q: "How is pricing calculated?",
        a: "Pricing depends on the product, quantity, decoration method, number of imprint locations and timeline. We do not publish fixed prices because those variables change the number significantly.",
      },
      {
        q: "Why are prices not listed on the website?",
        a: "Bulk pricing changes with quantity and customization. Publishing a single price would be misleading, so we quote each project against its actual requirements.",
      },
    ],
  },
  {
    group: "Production & Shipping",
    items: [
      {
        q: "How long does production take?",
        a: "Timelines depend on the product, decoration method and quantity. Tell us your need-by date early and we will confirm what is workable before you commit.",
      },
      {
        q: "Can you ship across the United States?",
        a: "We work with US-based buyers. Share your destination or destinations with your request and we will include that in the quote.",
      },
    ],
  },
  {
    group: "Outsourced Projects",
    items: [
      {
        q: "Can you handle distributor or outsourced projects?",
        a: "We evaluate outsourced and distributor projects based on the requirements. Send the specifications, quantity and timeline and we will tell you whether it is a fit.",
      },
      {
        q: "Can you work with schools and businesses?",
        a: "Yes. Schools, businesses, organizations, teams, contractors and event groups are the buyers we work with most.",
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
