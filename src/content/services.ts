import type { Faq } from "@/lib/site";

export type Service = {
  slug: string;
  name: string; // short name used in nav, cards, breadcrumbs
  title: string; // <title>
  h1: string; // keyword-led, the main search term for the page
  tagline: string; // the line in our own voice under the H1
  description: string; // meta description
  short: string; // one line for cards
  intro: string[]; // opening paragraphs
  includes: string[]; // what is included
  photo: string; // hero photo key from photos.ts
  group: "inside" | "paint" | "outside";
  related: string[]; // other service slugs
  posts: string[]; // blog slugs
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "kitchen-remodeling",
    name: "Kitchen remodeling",
    title: "Kitchen Remodeling Contractor in Lebanon County, PA",
    h1: "Kitchen remodeling contractor in Lebanon and Lancaster County, PA",
    tagline: "Kitchen remodeling that fits how you cook and live",
    description:
      "Kitchen remodeling by one crew: cabinets, counters, tile, lighting, floors and paint. Lebanon County, Lancaster County and Hershey, PA. Free estimates.",
    short: "Cabinets, counters, tile, lighting and floors, planned around the way you use the room.",
    intro: [
      "A kitchen remodel involves every kind of work: demolition, framing, wiring and plumbing, drywall, cabinets, counters, tile, flooring, trim and paint. We run all of it with one crew and one schedule, so you are not waiting on four different subcontractors to show up.",
      "Most of our kitchens are in older Pennsylvania homes where nothing is square and the layout was never planned for a modern refrigerator. We measure first, then design cabinets and lighting around the real room.",
    ],
    includes: [
      "Full or partial demolition and haul-away",
      "Layout changes, including removing non-bearing walls",
      "Electrical and plumbing coordination",
      "Cabinet installation, stock or semi-custom",
      "Quartz, granite or butcher block counters",
      "Tile backsplash and flooring",
      "Lighting, trim and paint",
    ],
    photo: "south-philadelphia-kitchen-white-shaker-after",
    group: "inside",
    related: ["cabinet-painting", "flooring-tile-installation", "painting"],
    posts: ["kitchen-remodeling-trends", "small-kitchen-remodel-ideas-lebanon-county-pa", "cabinet-painting-vs-replacement-lebanon-county-pa"],
    faqs: [
      { q: "How long does a kitchen remodel take?", a: "A cabinet-and-counter refresh runs about two to three weeks once materials are on site. A full tear-out with layout changes usually takes five to eight weeks. We give you a written schedule before we start and tell you right away if something slips." },
      { q: "Can we stay in the house during the work?", a: "Yes. We put up dust barriers, protect the floors along the path to the kitchen and set up a temporary spot for a microwave and coffee maker. Most families stay home." },
      { q: "Do you handle the electrical and plumbing?", a: "We bring in licensed electricians and plumbers for the wiring, plumbing and inspections, and our crew does the carpentry, cabinets, tile, flooring and paint." },
      { q: "Do you supply the cabinets or do we?", a: "Either. Many homeowners pick cabinets from a local supplier and we install them. We can also order semi-custom cabinets for you and handle the lead time." },
      { q: "Do you give a written estimate?", a: "Always. After a walkthrough you get an itemized written estimate. Pennsylvania law requires a written contract for any home improvement job over $500, and we follow it." },
    ],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom remodeling",
    title: "Bathroom Remodeling Contractor in Lebanon County, PA",
    h1: "Bathroom remodeling contractor in Lebanon and Lancaster County, PA",
    tagline: "Bathroom remodeling, from a new shower to a complete rebuild",
    description:
      "Tile showers, tub-to-shower conversions, vanities, lighting and waterproofing. Lebanon County, Lancaster County and Hershey, PA. Free written estimates.",
    short: "Tile showers, tub-to-shower conversions, vanities and waterproofing that lasts.",
    intro: [
      "Bathrooms fail at the details: the waterproofing behind the tile, the slope of the pan, the vent fan nobody wired. We build the parts you will never see as carefully as the parts you will.",
      "We do everything from a hall bath refresh to gutting a 1920s bathroom down to the joists and rebuilding it with a curbless shower.",
    ],
    includes: [
      "Demolition down to studs where needed",
      "Waterproofed shower pans and walls",
      "Tile floors and walls, large format or mosaic",
      "Tub-to-shower conversions and glass enclosures",
      "Vanities, toilets, faucets and lighting",
      "Exhaust fans and ventilation",
      "Paint and trim",
    ],
    photo: "south-philadelphia-bathroom-marble-tub-after",
    group: "inside",
    related: ["flooring-tile-installation", "painting", "drywall-repair"],
    posts: ["bathroom-remodeling", "walk-in-shower-conversion-cost-pa", "how-to-plan-a-bathroom-renovation-step-by-step"],
    faqs: [
      { q: "How long is a bathroom out of service?", a: "A typical full bathroom remodel takes two to three weeks. If it is the only bathroom in the house, we plan the sequence so the toilet is back in service as early as possible." },
      { q: "Can you convert a tub to a walk-in shower?", a: "Yes. Tub-to-shower conversions are one of our most common jobs. We rebuild the pan, waterproof the walls, tile and install a glass enclosure." },
      { q: "Do you move plumbing?", a: "Yes, with a licensed plumber. Moving a toilet or drain adds cost and time, and we tell you up front whether it is worth it." },
      { q: "Will you match the tile I picked online?", a: "We work with whatever tile you choose. We will tell you honestly if a tile is a poor fit for a shower floor or needs a special setting method." },
    ],
  },
  {
    slug: "basement-finishing",
    name: "Basement finishing",
    title: "Basement Finishing Contractor in Lebanon County, PA",
    h1: "Basement finishing contractor in Lebanon and Lancaster County, PA",
    tagline: "Finished basements that feel like the rest of the house",
    description:
      "Basement finishing in Lebanon County, Lititz, Hershey and Lancaster, PA: framing, insulation, drywall, floors, bathrooms and egress. Free estimates.",
    short: "Framing, insulation, drywall, flooring and a bathroom if you want one.",
    intro: [
      "A basement is the cheapest square footage you will ever add to a house, as long as it is dry and the ceiling height works. We start every basement job by checking moisture, headroom, the electrical panel and where the plumbing can go.",
      "From there it is framing, insulation, drywall, flooring and finish carpentry, done to the same standard as the floors above.",
    ],
    includes: [
      "Moisture check and vapor barrier",
      "Framing around posts, pipes and ductwork",
      "Insulation and drywall",
      "Drop ceilings or drywall ceilings",
      "Vinyl plank, tile or carpet flooring",
      "Basement bathrooms and wet bars",
      "Stairs, railings and closet doors",
    ],
    photo: "south-philadelphia-basement-finished-after",
    group: "inside",
    related: ["stairs-and-railings", "flooring-tile-installation", "drywall-repair"],
    posts: ["basement-finishing-pa", "best-flooring-for-a-basement-in-lebanon-county-pa-2026-guide"],
    faqs: [
      { q: "My basement gets damp. Can it still be finished?", a: "Often yes, but the moisture has to be solved first. We will tell you whether it is a grading and gutter issue, a crack to seal or a job for a waterproofing company before we frame anything." },
      { q: "Do I need a permit to finish a basement?", a: "In most Pennsylvania municipalities, yes, for framing, electrical and any new bathroom. We pull the permits and schedule inspections." },
      { q: "How long does a basement finish take?", a: "A straightforward open basement with one room takes three to four weeks. Adding a bathroom or several rooms pushes it to six to eight weeks." },
    ],
  },
  {
    slug: "stairs-and-railings",
    name: "Stairs and railings",
    title: "Stair & Railing Installation in Lebanon County, PA",
    h1: "Stair remodeling and railing installation in Lebanon and Lancaster County, PA",
    tagline: "New stairs, treads and railings, built in place",
    description:
      "Staircase rebuilds and railing installation in Lebanon County, Lancaster County, Hershey and Philadelphia: oak treads, painted risers, iron balusters.",
    short: "Oak treads, painted risers, iron balusters and whole new staircases.",
    intro: [
      "Stairs are the one thing most remodelers avoid. We build them. Replacing carpeted treads with oak, swapping wood spindles for iron balusters, or tearing out a steep old staircase and setting new stringers: we have done all of it, in rowhomes and in farmhouses.",
      "A stair job changes how a whole house feels, and it is usually finished in days, not weeks.",
    ],
    includes: [
      "Carpet removal and new oak or pine treads",
      "Painted or stained risers",
      "Iron or wood balusters, newel posts and handrails",
      "New stringers and complete staircase rebuilds",
      "Landings, loft railings and half walls",
      "Basement stairs",
    ],
    photo: "south-philadelphia-stairs-iron-balusters-after",
    group: "inside",
    related: ["flooring-tile-installation", "painting", "whole-home-renovation"],
    posts: ["staircase-remodel-cost-lebanon-county-pa", "stair-railing-height-code-pennsylvania", "custom-carpentry-pa-built-ins"],
    faqs: [
      { q: "Can you replace carpeted stairs with wood?", a: "Yes. We pull the carpet, check the existing treads and either refinish them or install new oak treads with painted risers." },
      { q: "How long does a railing replacement take?", a: "Swapping balusters and a handrail on a straight run is usually a one to two day job. A full staircase rebuild takes about a week including finish." },
      { q: "Do iron balusters meet code?", a: "Yes, when spaced correctly. We keep openings under four inches and set handrail height to current code." },
    ],
  },
  {
    slug: "flooring-tile-installation",
    name: "Flooring and tile",
    title: "Flooring & Tile Installation in Lebanon County, PA",
    h1: "Flooring and tile installation in Lebanon and Lancaster County, PA",
    tagline: "Hardwood, vinyl plank and tile floors installed right",
    description:
      "Vinyl plank, hardwood, laminate, porcelain and ceramic tile installed with proper subfloor prep. Lebanon County, Lancaster County and Hershey, PA.",
    short: "Vinyl plank, hardwood, laminate and tile, with the subfloor work that makes it last.",
    intro: [
      "Floors fail from below. Before any plank or tile goes down we flatten the subfloor, fix squeaks and check for moisture. After that the installation is the easy part.",
      "We install vinyl plank (LVP), engineered and solid hardwood, laminate, and porcelain or ceramic tile, and we handle transitions, stairs and trim so the job looks finished.",
    ],
    includes: [
      "Removal of old carpet, vinyl or tile",
      "Subfloor repair and leveling",
      "Luxury vinyl plank and laminate",
      "Hardwood installation",
      "Porcelain and ceramic tile, floors and walls",
      "Stair treads and transitions",
      "New baseboard and shoe molding",
    ],
    photo: "schaefferstown-lvp-flooring-after",
    group: "inside",
    related: ["stairs-and-railings", "basement-finishing", "kitchen-remodeling"],
    posts: ["flooring-tile-installation-options", "best-flooring-for-a-basement-in-lebanon-county-pa-2026-guide"],
    faqs: [
      { q: "Can you install over my existing floor?", a: "Sometimes. Vinyl plank can go over a flat, sound hard floor. Carpet always comes out, and tile needs a stable, flat base. We check and tell you before quoting." },
      { q: "How soon can we walk on the new floor?", a: "Vinyl plank and hardwood right away. Tile needs about 24 hours before foot traffic and longer before heavy furniture goes back." },
    ],
  },
  {
    slug: "whole-home-renovation",
    name: "Whole-home renovation",
    title: "Whole Home Renovation Contractor, Lebanon County PA",
    h1: "Whole-home renovation contractor in Lebanon and Lancaster County, PA",
    tagline: "Whole-home renovations, one crew from demolition to paint",
    description:
      "Whole-house renovations and rowhome rebuilds in Lebanon County and Philadelphia: kitchens, bathrooms, stairs, basements, windows and paint, one contract.",
    short: "Whole-house and multi-room remodels under one contract and one schedule.",
    intro: [
      "Some houses need everything at once: a kitchen, two bathrooms, a staircase, floors, windows, a basement and paint. Done as separate jobs by separate contractors, that takes a year. Done as one project by one crew, it takes months.",
      "In 2025 we took a South Philadelphia rowhome from bare studs in April to a finished house in August. That is the kind of project this page is about.",
    ],
    includes: [
      "Demolition and structural repairs",
      "Kitchen and bathroom rebuilds",
      "Staircases, floors and trim",
      "Windows, doors and exterior work",
      "Drywall and paint throughout",
      "Basement finishing",
      "Permits, inspections and scheduling",
    ],
    photo: "south-philadelphia-living-room-fireplace-after",
    group: "inside",
    related: ["kitchen-remodeling", "bathroom-remodeling", "stairs-and-railings"],
    posts: ["home-remodeling-process-step-by-step", "remodeling-cost-pa-budget", "home-improvement-contractor-pa"],
    faqs: [
      { q: "How long does a whole-house renovation take?", a: "Our 2025 rowhome renovation took about four and a half months from demolition to final paint. Smaller multi-room projects take two to three months. Permits and material delivery times set the pace." },
      { q: "Do we need to move out?", a: "For a whole-house renovation, yes. For multi-room projects we can often phase the work so you stay in part of the house." },
    ],
  },
  {
    slug: "painting",
    name: "Interior and exterior painting",
    title: "Interior & Exterior House Painters, Lebanon County PA",
    h1: "Interior and exterior house painters in Lebanon and Lancaster County, PA",
    tagline: "Interior and exterior painting with real prep work",
    description:
      "Interior and exterior painting in Lebanon County, Lancaster County and Hershey, PA: walls, ceilings, trim, doors, siding and decks, with real prep.",
    short: "Walls, trim, ceilings and siding, with the patching and sanding that make paint last.",
    intro: [
      "Paint is the last thing on every remodel we do, so we paint a lot. Good paint work is mostly prep: filling, sanding, caulking, priming and masking. The rolling is the quick part.",
      "We paint interiors, exteriors, trim, doors, ceilings and decks, and we stain fences and railings.",
    ],
    includes: [
      "Wall and ceiling repair before paint",
      "Interior walls, ceilings, trim and doors",
      "Exterior siding, trim and shutters",
      "Deck and fence staining",
      "Accent walls and board-and-batten",
      "Color help if you want it",
    ],
    photo: "south-philadelphia-living-room-front-after",
    group: "paint",
    related: ["cabinet-painting", "drywall-repair", "exterior-remodeling"],
    posts: ["interior-painting", "exterior-painting-cost-myerstown-pa"],
    faqs: [
      { q: "How many coats do you apply?", a: "Primer where it is needed, then two finish coats. One coat only when we are repainting the same color over sound paint, and we say so in the estimate." },
      { q: "When is exterior painting season in Pennsylvania?", a: "Roughly April through October. Paint needs nights above about 50 degrees to cure properly, so we schedule exteriors inside that window." },
    ],
  },
  {
    slug: "cabinet-painting",
    name: "Cabinet painting",
    title: "Cabinet Painting & Refinishing in Lebanon County, PA",
    h1: "Cabinet painting and refinishing in Lebanon and Lancaster County, PA",
    tagline: "Cabinet painting that looks factory finished",
    description:
      "Cabinet painting and refinishing in Lebanon County, Lancaster County and Hershey, PA. Doors sprayed off site, boxes finished in place, new hardware.",
    short: "A new look for your kitchen at a fraction of the cost of new cabinets.",
    intro: [
      "If your cabinet boxes are solid, painting them costs a fraction of replacing them and takes about a week instead of two months. The difference between a cabinet paint job that lasts and one that chips is the prep and the product.",
      "We clean, degrease, sand, prime with a bonding primer and spray a cabinet-grade enamel. Doors and drawer fronts are sprayed off site. Boxes are finished in your kitchen behind plastic.",
    ],
    includes: [
      "Degreasing, sanding and bonding primer",
      "Sprayed cabinet enamel on doors and drawer fronts",
      "Boxes and face frames finished in place",
      "New hinges and hardware if you want them",
      "Minor repairs to doors and drawers",
      "Island and bathroom vanity painting",
    ],
    photo: "kitchen-grey-brass-herringbone",
    group: "paint",
    related: ["kitchen-remodeling", "painting"],
    posts: ["cabinet-painting-vs-replacement-lebanon-county-pa", "kitchen-remodeling-trends"],
    faqs: [
      { q: "Will painted cabinets chip?", a: "Not with the right prep and a cabinet-grade enamel. Chipping comes from skipping the degreasing and primer or using wall paint. We do neither." },
      { q: "How long is the kitchen out of use?", a: "About a week. Doors are off site for spraying for most of that time, but you can still use the kitchen with the doors removed." },
    ],
  },
  {
    slug: "drywall-repair",
    name: "Drywall repair",
    title: "Drywall Repair & Installation in Lebanon County, PA",
    h1: "Drywall repair and installation in Lebanon and Lancaster County, PA",
    tagline: "Drywall repair, patching and new installation",
    description:
      "Drywall repair and installation in Lebanon County, Lancaster County and Hershey, PA: holes, cracks, water damage, ceilings and new walls, ready for paint.",
    short: "Holes, cracks, water damage, ceilings and new walls, finished smooth.",
    intro: [
      "Drywall is in every job we do, so we are fast at it and good at the part most people get wrong: the finish. A patch should disappear after paint, not announce itself in afternoon light.",
      "We repair holes and cracks, replace water-damaged ceilings, hang and finish new walls, and skim-coat old plaster.",
    ],
    includes: [
      "Hole and crack repair",
      "Water damage and ceiling replacement",
      "Hanging and finishing new drywall",
      "Skim coating plaster and textured walls",
      "Corner bead and trim repairs",
      "Priming and painting the repair",
    ],
    photo: "south-philadelphia-drywall-hung",
    group: "paint",
    related: ["painting", "basement-finishing"],
    posts: ["drywall-repair-cost-in-myerstown-lebanon-pa-2026-guide"],
    faqs: [
      { q: "Do you do small drywall repairs?", a: "Yes. Small patches are usually bundled with painting, since the repair is not finished until it is painted." },
      { q: "Can you fix a water-stained ceiling?", a: "Yes, once the leak is fixed. We cut out the damaged section, replace it, finish it and prime with a stain-blocking primer." },
    ],
  },
  {
    slug: "windows-doors-installation",
    name: "Windows and doors",
    title: "Window & Door Installation in Lebanon County, PA",
    h1: "Window and door installation in Lebanon and Lancaster County, PA",
    tagline: "Replacement windows and doors, installed and trimmed",
    description:
      "Replacement windows, entry doors, interior doors and trim installed by the crew that does your remodel. Lebanon County, Lancaster County and Hershey, PA.",
    short: "Replacement windows, entry doors and interior doors, installed and trimmed.",
    intro: [
      "We install windows and doors as part of remodels and as stand-alone jobs. The installation matters as much as the unit: flashing, insulation around the frame, and trim that fits the house.",
      "We work with vinyl and fiberglass replacement windows, fiberglass and steel entry doors, and interior doors with new casing.",
    ],
    includes: [
      "Replacement windows in existing openings",
      "New openings and enlarged windows",
      "Entry and storm doors",
      "Interior doors, prehung or slab",
      "Casing, sills and trim",
      "Exterior caulking and flashing",
    ],
    photo: "south-philadelphia-facade-after",
    group: "outside",
    related: ["exterior-remodeling", "painting", "whole-home-renovation"],
    posts: ["door-replacement"],
    faqs: [
      { q: "Do you supply the windows?", a: "We can order them for you or install windows you have bought. We measure the openings before any order goes in." },
      { q: "How long does a window replacement take?", a: "Usually one to two windows per hour for standard replacements once the units are on site, plus trim and caulking." },
    ],
  },
  {
    slug: "decks-and-porches",
    name: "Decks and porches",
    title: "Deck Builder & Porch Contractor, Lebanon County PA",
    h1: "Deck builder and porch contractor in Lebanon and Lancaster County, PA",
    tagline: "Decks and porches built for Pennsylvania weather",
    description:
      "Deck building, resurfacing and porch repair in Lebanon County, Lancaster County and Hershey, PA. Composite and wood decks, railings and stairs.",
    short: "New composite or wood decks, new boards on a sound frame, railings and steps.",
    intro: [
      "A deck in Pennsylvania takes freeze and thaw, wet springs and hot summers. We build with pressure-treated framing, proper ledger flashing and footings below frost line, then finish with composite or wood decking and railings that meet code.",
      "If your frame is sound and only the boards are tired, resurfacing with new composite decking costs far less than a rebuild.",
    ],
    includes: [
      "New deck construction, composite or wood",
      "Deck resurfacing on an existing frame",
      "Railings, vinyl, composite or metal",
      "Stairs and landings",
      "Porch repair and rebuilding",
      "Staining and sealing",
    ],
    photo: "deck-composite-after",
    group: "outside",
    related: ["exterior-remodeling", "painting"],
    posts: ["porch-remodeling-pa-guide"],
    faqs: [
      { q: "Composite or wood?", a: "Composite costs more up front and needs almost no upkeep. Pressure-treated wood is cheaper and needs staining every few years. We build both and will tell you which fits your budget and patience." },
      { q: "Do I need a permit for a deck?", a: "In most Pennsylvania townships, yes, for any deck attached to the house or above a certain height. We handle the permit and inspections." },
    ],
  },
  {
    slug: "exterior-remodeling",
    name: "Siding, fences and exterior",
    title: "Siding Contractor & Exterior Remodeling, Lebanon County",
    h1: "Siding, fences and exterior remodeling in Lebanon and Lancaster County, PA",
    tagline: "Siding, trim, fences and patios",
    description:
      "Siding, exterior trim, fences, patios and outdoor carpentry in Lebanon County, Lancaster County and Hershey, PA. Free written estimates.",
    short: "Siding and trim, cedar fences, patios and outdoor carpentry that matches the house.",
    intro: [
      "Exterior work is where a house makes its first impression. We replace and repair siding and trim, build fences and privacy screens, and handle the outdoor carpentry that other contractors treat as an afterthought.",
      "Everything gets flashed, caulked and painted or stained so it lasts.",
    ],
    includes: [
      "Vinyl and fiber cement siding",
      "Exterior trim, soffit and fascia repair",
      "Cedar and vinyl fences and gates",
      "Privacy screens and equipment enclosures",
      "Patios and small hardscape",
      "Exterior painting and staining",
    ],
    photo: "south-philadelphia-patio-fence-after",
    group: "outside",
    related: ["painting", "decks-and-porches", "windows-doors-installation"],
    posts: ["fence-installation-cost-lebanon-county-pa", "siding-replacement-cost-lebanon-county-pa", "exterior-painting-cost-myerstown-pa"],
    faqs: [
      { q: "Can you match existing siding?", a: "Often yes for common vinyl profiles. If a match is impossible we will say so and suggest a plan, like residing one elevation." },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const serviceName = (slug: string) => serviceBySlug(slug)?.name ?? slug;
