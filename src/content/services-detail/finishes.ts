import type { ServiceDetail } from "./types";

export const finishes: Record<string, ServiceDetail> = {
  // ------------------------------------------------------------------ Flooring and tile
  "flooring-tile-installation": {
    why: [
      { title: "The subfloor is the job", text: "We screw down loose subfloors, level the humps and dips and check slabs for moisture before a plank or a tile goes down. Floors fail from below; ours do not." },
      { title: "One floor, one direction, no thresholds", text: "We run the same floor through connected rooms the long way, with flat transitions only where the material changes. It is why our narrow houses feel wide." },
      { title: "Tile set to last", text: "Cement board or an uncoupling membrane under every tile floor, a flat base, straight layout from the longest wall. Tile set straight on plywood cracks within a year; we do not do that." },
      { title: "We look for the old floor first", text: "Many Lebanon County houses have original oak or pine under the carpet. If it can be refinished for less than a new floor, we tell you." },
    ],
    scope: {
      covers: ["Luxury vinyl plank, laminate, engineered and solid hardwood", "Porcelain and ceramic tile floors, kitchen backsplashes", "Subfloor repair and leveling, moisture testing on slabs", "Transitions, baseboard and shoe molding, stair nosings"],
      elsewhere: [
        { text: "Shower and tub tile is part of bathroom remodeling", href: "/bathroom-remodeling/" },
        { text: "Stair treads and railings have their own page", href: "/stairs-and-railings/" },
        { text: "Flooring inside a basement finish is scoped there", href: "/basement-finishing/" },
      ],
    },
    steps: [
      { title: "Walkthrough", text: "We look at what is on the floor now and what is under it, check for moisture on slabs and softness on wood, and measure the rooms. Written estimate with the subfloor work as its own line." },
      { title: "Material and direction", text: "Samples in your light, not the store's. We agree the direction, the transitions and the trim profile before ordering." },
      { title: "Removal", text: "Old carpet, vinyl or tile out and disposed of. Furniture moved and covered; we put it back." },
      { title: "Subfloor", text: "Screwed to the joists, sanded and filled flat, vacuumed. On a slab, a moisture barrier where the test says so. On tile floors, cement board or membrane." },
      { title: "Installation", text: "Floating planks with expansion gaps, nailed or glued hardwood after acclimation, tile set in a straight layout and grouted after it cures." },
      { title: "Trim and walkthrough", text: "New shoe molding or quarter round, flat transitions, nosings on any step, and a walk with a light to catch anything we missed." },
    ],
    options: {
      heading: "Floors we install",
      items: [
        { name: "Luxury vinyl plank", note: "Waterproof, warm, floating. Kitchens, baths, basements, whole floors. Rigid-core planks only." },
        { name: "Laminate", note: "Cheapest wood look, scratch-resistant, not for wet rooms." },
        { name: "Engineered hardwood", note: "Real wood veneer on plywood, stable in our humid summers, can be refinished once or twice." },
        { name: "Solid hardwood", note: "Lasts a century, refinished many times, needs acclimation and a dry room." },
        { name: "Porcelain and ceramic tile", note: "Baths, mudrooms, laundries, kitchens. Porcelain for floors." },
        { name: "Refinishing existing hardwood", note: "Sand, stain, finish. Often the best floor in the house for less than a new one." },
      ],
    },
    pricing: {
      intro: "Typical installed ranges for Lebanon County, not a quote. Subfloor prep is priced separately so you can see it.",
      ranges: [["Laminate", "$3 to $8 per sq. ft."], ["Vinyl plank", "$4 to $9 per sq. ft."], ["Tile and hardwood", "$7 to $15 and up per sq. ft."]],
      guides: [
        { slug: "flooring-tile-installation-options", label: "Flooring cost and options guide" },
        { slug: "best-flooring-for-a-basement-in-lebanon-county-pa-2026-guide", label: "Best flooring for a basement" },
      ],
    },
    projects: ["south-philadelphia-vinyl-plank-floors", "schaefferstown-lvp-flooring", "lititz-basement-remodel"],
    areas: "Floors are the most common small job we do: Myerstown, Schaefferstown, Lebanon, Cornwall, Annville, Palmyra, Hershey, Lititz, Ephrata, Manheim, Elizabethtown and Lancaster. A single room is usually one or two days.",
    faqs: [
      { q: "Do you move the furniture?", a: "Yes, and we put it back. Pianos, aquariums and anything that needs a specialist we talk about first." },
      { q: "How long do planks need to sit in the house before installation?", a: "Vinyl plank, a day or two. Hardwood, about a week, in the room where it will be installed, so it reaches the house's humidity." },
      { q: "Can vinyl plank go under the kitchen cabinets?", a: "Yes, and it should when the cabinets are new, so a future cabinet change does not leave a hole. We lay the floor before cabinets on every kitchen we build." },
      { q: "What about pets?", a: "Rigid-core vinyl plank and porcelain tile handle claws and accidents. Laminate and softwood show scratches." },
      { q: "Do you install over radiant heat?", a: "Tile and most engineered floors, yes. Vinyl plank only if the manufacturer rates it for radiant; we check before ordering." },
      { q: "Can you match my existing hardwood in a new room?", a: "Usually, with the same species and width and a stain matched on site. New and old will still read slightly different until they age together." },
    ],
  },

  // ------------------------------------------------------------------ Whole-home renovation
  "whole-home-renovation": {
    why: [
      { title: "We write the sequence before we swing a hammer", text: "Stairs before floors, windows before drywall, kitchen before paint, yard last. Doing the rooms in the right order is the whole difference between four months and a year." },
      { title: "One contract, one crew, one person to call", text: "Our crew does the carpentry, tile, floors, drywall and paint. Licensed electricians and plumbers are scheduled by us, inspected by the township, and you never have to chase them." },
      { title: "We have done it", text: "In 2025 we took a South Philadelphia rowhome from bare studs in April to a finished house in August: kitchen, two bathrooms, a rebuilt staircase, basement, floors, windows, door and yard." },
      { title: "Honest about surprises", text: "Every old house has something behind a wall. We budget a contingency with you up front and show you the surprise the day we find it, with a price." },
    ],
    scope: {
      covers: ["Full gut renovations of houses and rowhomes", "Multi-room projects: kitchen, bathrooms, floors and paint under one contract", "Phased whole-house plans over two or three years", "Structural changes: walls out, beams in, new staircases"],
      elsewhere: [
        { text: "A single kitchen is scoped on the kitchen page", href: "/kitchen-remodeling/" },
        { text: "A single bathroom, including tub-to-shower conversions", href: "/bathroom-remodeling/" },
        { text: "A basement on its own", href: "/basement-finishing/" },
      ],
    },
    steps: [
      { title: "Walkthrough and the one sentence", text: "We walk every room and ask what has to be true when it is done. That sentence decides the order and the budget split." },
      { title: "Estimate by room and phase", text: "An itemized estimate for each room and trade, with the sequence written out and a contingency line you can see." },
      { title: "Contract, permits, orders", text: "Written contract with dates and the payment schedule, township permits for structure, electrical and plumbing, long-lead items ordered before demolition." },
      { title: "Demolition and structure", text: "The house to the studs where the plan calls for it. Walls out, beams in, new stair stringers so the crew has a safe stair for the rest of the job." },
      { title: "Rough-ins, inspections, drywall", text: "Wiring and plumbing with licensed trades, inspection, insulation, drywall, prime. The quiet weeks are drying time and inspections, and they are planned." },
      { title: "Finishes in order, then the walkthrough", text: "Floors, cabinets and tile, counters and glass, doors and trim, paint last, the yard after. Then a room-by-room walkthrough with a list we close before the final payment." },
    ],
    options: {
      heading: "Projects we run as a whole",
      items: [
        { name: "Full gut renovation", note: "Everything inside the walls replaced. Three to five months. The house should be empty." },
        { name: "Multi-room remodel", note: "Kitchen plus bathrooms plus floors, with you living in part of the house." },
        { name: "Phased plan", note: "Rough-ins for the future done now, rooms finished completely one phase at a time." },
        { name: "Rowhome renovation", note: "Narrow stairs, party walls, one way in. Our specialty in Lebanon city and Philadelphia." },
        { name: "Farmhouse update", note: "Kitchen, baths and systems in an old house without losing what makes it one." },
        { name: "Rental turnover", note: "Durable finishes, fast schedule, one invoice." },
      ],
    },
    pricing: {
      intro: "A whole-house project is the sum of its rooms plus the structure and systems between them. We price it by room and phase after the walkthrough; the room guides below give the ranges.",
      ranges: [["Kitchen inside a whole-house project", "$25,000 to $50,000 mid-range"], ["Each full bathroom", "$15,000 to $25,000"], ["Contingency we recommend", "10 to 15 percent of the contract"]],
      guides: [
        { slug: "remodeling-cost-pa-budget", label: "How to budget a whole remodel" },
        { slug: "home-remodeling-process-step-by-step", label: "The process, step by step" },
      ],
    },
    projects: ["south-philadelphia-rowhome-renovation", "south-philadelphia-rowhome-staircase", "south-philadelphia-vinyl-plank-floors"],
    areas: "Whole-house projects within forty minutes of Myerstown: Lebanon, Annville, Palmyra, Hershey, Lititz, Ephrata, Manheim, Elizabethtown and Lancaster. Rowhome renovations in Philadelphia, where the crew works on site for months.",
    faqs: [
      { q: "Do we have to move out?", a: "For a full gut, yes; there is no kitchen, no bathroom and no floor for weeks. For a multi-room project we phase the work so you keep a bathroom and a place to cook." },
      { q: "How long does a whole-house renovation take?", a: "Our 2025 rowhome took four and a half months from demolition to final paint. Smaller multi-room projects run two to three months. Permits and material lead times set the pace." },
      { q: "Who is in the house every day?", a: "Our own crew, the same people from demolition to paint, with the owner on site. Electricians and plumbers come for their days and we are there with them." },
      { q: "Can we change the plan halfway?", a: "Yes, with a written change order and a price before the work. Changes before rough-in are cheap; changes after drywall are not, and we will say so." },
      { q: "Do you do additions?", a: "Bump-outs and additions are quoted case by case, because they are foundation and roof work on top of a remodel. Ask and we will tell you honestly whether it is a good use of the money." },
      { q: "What do you need from us?", a: "Decisions on time, one point of contact in the household, honesty about the budget, and patience with the one surprise every old house has." },
    ],
  },

  // ------------------------------------------------------------------ Painting
  painting: {
    why: [
      { title: "Prep is most of the job, and we do it", text: "Fill, tape, sand, caulk, prime. A painter's day is mostly not painting, and the quotes that come in far below ours are quotes that skip this." },
      { title: "We paint as the last step of every remodel", text: "Which is why we are picky. The walls, trim and risers of a four-month renovation are finished by the same crew that built them." },
      { title: "Products named in the estimate", text: "Premium paint by default, the finish for each surface written down, low-VOC inside. You know what is going on your walls." },
      { title: "Inside and out, paint and stain", text: "Interior rooms and trim, exterior siding and trim in season, decks and fences stained within the window when the wood takes it best." },
    ],
    scope: {
      covers: ["Interior walls, ceilings, trim, doors and accent walls", "Exterior siding, trim, shutters and doors", "Deck, fence and railing staining", "Board-and-batten and feature walls, including painting new carpentry"],
      elsewhere: [
        { text: "Kitchen and bathroom cabinets are sprayed on their own page", href: "/cabinet-painting/" },
        { text: "Walls that need more than patching before paint", href: "/drywall-repair/" },
        { text: "Siding that should be replaced rather than painted", href: "/exterior-remodeling/" },
      ],
    },
    steps: [
      { title: "Walkthrough and colors", text: "Room by room or wall by wall outside. Finishes agreed for each surface, colors written down, samples on the wall if you want them." },
      { title: "Protection", text: "Furniture moved and covered, floors protected, outlets and fixtures taped. Outside: plants, decks and windows masked." },
      { title: "Prep", text: "Nail holes and cracks filled and taped, old caulk cut out and replaced, glossy surfaces sanded, stains primed. Outside: wash, scrape, sand, prime bare wood, replace rotten trim." },
      { title: "Prime and two coats", text: "Ceilings, then walls, two finish coats. Outside, body color sprayed and back-rolled into the siding. Trim and doors brushed." },
      { title: "Walk with a light", text: "At the end of each day we check the walls with a light held low. Touch-ups happen before we leave the room." },
      { title: "Cleanup and walkthrough", text: "Tape off, furniture back, floors cleaned, a final walk with you." },
    ],
    options: {
      heading: "Finishes and products",
      items: [
        { name: "Flat and matte", note: "Ceilings and low-traffic walls. Hides imperfections, hard to scrub." },
        { name: "Eggshell and satin", note: "Walls in living areas, kitchens and baths. Scrubbable, soft sheen." },
        { name: "Semi-gloss", note: "Trim, doors and cabinets. Hard, wipeable, shows prep." },
        { name: "Premium interior paint", note: "Our default. Covers in fewer coats, holds its finish for years, low-VOC." },
        { name: "Exterior acrylic", note: "Flexible, breathable, lasts ten years on prepared siding." },
        { name: "Stains", note: "Semi-transparent for new cedar, solid-color for older decks and fences." },
      ],
    },
    pricing: {
      intro: "Typical ranges for Lebanon County, not a quote. Prep, trim and height are what move it.",
      ranges: [["One bedroom, walls, ceiling and trim", "$400 to $800"], ["Whole 2,000 sq. ft. house interior", "$4,200 to $9,500"], ["Exterior, most houses", "$3,000 to $14,000"]],
      guides: [
        { slug: "interior-painting", label: "Interior painting cost guide" },
        { slug: "exterior-painting-cost-myerstown-pa", label: "Exterior painting cost and season" },
      ],
    },
    projects: ["south-philadelphia-rowhome-renovation", "modern-farmhouse-bathroom-and-loft", "south-philadelphia-cedar-fence-and-patio"],
    areas: "Interior painting year-round and exteriors from mid-April to October across Lebanon County, the Hershey area and the northern half of Lancaster County. Exteriors book by March; ask early.",
    faqs: [
      { q: "How many coats do you apply?", a: "Primer where it is needed, then two finish coats. One coat only when it is the same color over sound paint, and we say so in the estimate." },
      { q: "Can you help with colors?", a: "Yes. We bring samples, paint test patches on your wall and look at them in morning and evening light with you." },
      { q: "Is the paint safe for kids and pets?", a: "We use low-VOC paints inside. Rooms are usable the same evening; we suggest a night with the window cracked for nurseries." },
      { q: "Do you paint over wallpaper?", a: "No. Wallpaper comes off, the wall is washed and skim-coated where it needs it, then primed and painted. It is more work and it is the only way it lasts." },
      { q: "What is the painting season for exteriors?", a: "Mid-April through October, with May, June and September the best months. Paint needs the surface above about 50 degrees for a day and night to cure." },
      { q: "What if the paint peels later?", a: "On surfaces we prepared, we come back and fix it. Peeling on bare wood we were asked not to prime is the reason we do not skip priming." },
    ],
  },

  // ------------------------------------------------------------------ Cabinet painting
  "cabinet-painting": {
    why: [
      { title: "A factory finish, not a brushed one", text: "Doors and drawer fronts come off, get labeled and are sprayed off site with a cabinet-grade enamel. Boxes are finished in your kitchen behind plastic. No brush marks, no drips." },
      { title: "The prep that stops chipping", text: "Degrease, sand or degloss, bonding primer. Painted cabinets chip because someone skipped one of those three. We do not." },
      { title: "A week, not two months", text: "New cabinets take four to eight weeks to arrive and days to install. A paint job is about a week with the kitchen still usable, doors off." },
      { title: "We tell you if yours should not be painted", text: "Thermofoil doors, swollen boxes, a layout that does not work. We check five things at the walkthrough and say when new cabinets are the better money." },
    ],
    scope: {
      covers: ["Kitchen cabinet painting and refinishing", "Bathroom vanities, islands, pantry and laundry cabinets", "Built-ins and bookcases", "New hinges, hardware and minor door repairs"],
      elsewhere: [
        { text: "Replacing the cabinets is a kitchen remodel", href: "/kitchen-remodeling/" },
        { text: "Walls, trim and ceilings around the cabinets", href: "/painting/" },
        { text: "Counters and backsplash with new paint are quoted as a small kitchen job", href: "/kitchen-remodeling/" },
      ],
    },
    steps: [
      { title: "The five-point check", text: "Boxes solid, doors paintable, layout works, hinges swappable, you like the door style. Pass and we quote painting; fail and we quote honestly what it should be instead." },
      { title: "Doors off, kitchen masked", text: "Every door and drawer front labeled and removed. Counters, floors and appliances masked; the kitchen stays usable." },
      { title: "Degrease, sand, repair", text: "Every surface washed with degreaser, scuffed, holes filled, oak grain filled if you want a smooth finish." },
      { title: "Bonding primer", text: "A primer made to stick to old finishes, not a wall primer. Boxes in place, doors in the spray booth." },
      { title: "Sprayed enamel", text: "Two coats of waterborne cabinet enamel on doors and fronts, boxes sprayed or brushed and tipped in place." },
      { title: "Cure, rehang, hardware", text: "Doors cure for days before they come back. New soft-close hinges and the hardware you chose, every door adjusted." },
    ],
    options: {
      heading: "Choices that change the look",
      items: [
        { name: "Color", note: "White and off-white are most of our jobs. Greens, blues and greys on islands and lowers." },
        { name: "Two-tone", note: "Dark lowers or island, light uppers. Costs nothing extra in labor." },
        { name: "Sheen", note: "Satin hides fingerprints; semi-gloss wipes easier. Both are cabinet enamel." },
        { name: "Grain filled or shown", note: "Oak grain can be filled for a smooth look or left to show texture through the paint." },
        { name: "Hardware and hinges", note: "New pulls and soft-close hinges fit most doors and change the kitchen as much as the color." },
        { name: "Glass inserts and open shelves", note: "A door panel cut for glass or a cabinet opened up, done while the doors are off." },
      ],
    },
    pricing: {
      intro: "Typical range for an average Lebanon County kitchen, not a quote. The number of doors and drawers and the condition set it.",
      ranges: [["Professional cabinet painting", "$3,000 to $10,000"], ["Compared with refacing", "$4,000 to $15,000"], ["Compared with new cabinets", "$8,000 to $25,000 and up"]],
      guides: [
        { slug: "cabinet-painting-vs-replacement-lebanon-county-pa", label: "Paint, reface or replace: the comparison" },
      ],
    },
    projects: [],
    areas: "Cabinet painting is a week-long job we do across Lebanon County and the Hershey and Lititz areas. The doors go to our spray setup; the boxes are finished in your kitchen.",
    faqs: [
      { q: "Can you paint laminate or thermofoil cabinets?", a: "Laminate, sometimes, with the right primer and realistic expectations. Thermofoil that is peeling, no; the doors should be replaced. We tell you at the walkthrough." },
      { q: "Will I see the oak grain through white paint?", a: "Yes, unless the grain is filled first. We do either; filled is smoother and costs more in prep." },
      { q: "How long until I can use the kitchen normally?", a: "About a week with doors off, then be gentle with the doors for two to three weeks while the enamel fully cures." },
      { q: "Does it smell?", a: "Waterborne enamel has a mild smell for a day. Doors are sprayed off site, so the kitchen gets only the boxes." },
      { q: "Can you paint just the island a different color?", a: "Yes. An island alone is a common small job, and a two-tone kitchen with new hardware is most of the look of a new one." },
      { q: "What about the inside of the cabinets?", a: "Usually left as is; the insides are rarely seen and painting them adds a lot of labor. We do it on request." },
    ],
  },

  // ------------------------------------------------------------------ Drywall
  "drywall-repair": {
    why: [
      { title: "A patch that disappears", text: "Backed, taped, three feathered coats, sanded with a light held low, primed. The difference between a patch and a wall is in those steps, and most people skip two of them." },
      { title: "We find the cause first", text: "A crack that comes back is the house moving. A stain is a leak. We look before we patch, so you are not paying for the same repair twice." },
      { title: "Plaster, texture and lead handled", text: "Plaster walls in old Lebanon County houses, textured ceilings in the townships, lead paint in anything built before 1978. Each has its own method and we use it." },
      { title: "Repairs and whole rooms", text: "From a nail pop to hanging and finishing an entire floor after a gut, as we did in a South Philadelphia rowhome." },
    ],
    scope: {
      covers: ["Holes, cracks, nail pops and dents", "Water-damaged walls and ceilings after the leak is fixed", "Skim coating plaster and textured walls, popcorn ceiling removal", "Hanging and finishing new drywall in renovations"],
      elsewhere: [
        { text: "The paint that finishes the repair", href: "/painting/" },
        { text: "Drywall inside a basement finish is scoped there", href: "/basement-finishing/" },
        { text: "Whole-room or whole-house rebuilds", href: "/whole-home-renovation/" },
      ],
    },
    steps: [
      { title: "Look at the damage and the cause", text: "A photo is often enough to quote a repair. Water damage we need to see. Any crack that has come back gets a look at what is moving." },
      { title: "Back the patch", text: "Anything bigger than a golf ball gets wood or a clip behind it so the patch cannot flex." },
      { title: "Tape", text: "Paper tape on flat joints and corners, mesh on small patches. Mud without tape cracks." },
      { title: "Three thin coats", text: "Each wider than the last, feathered out 12 to 18 inches on a large patch, dried between coats." },
      { title: "Sand with a low light", text: "A light held across the wall shows every ridge. Overhead light hides them until you paint." },
      { title: "Prime and paint", text: "Bare compound soaks up paint and leaves a dull spot. Primer first, then the wall gets a coat so the patch blends." },
    ],
    options: {
      heading: "Repairs we do",
      items: [
        { name: "Nail pops and hairline cracks", note: "Fastener reset, taped, three coats. Several in a room are bundled." },
        { name: "Holes, small to large", note: "Patch kits for small, backed patches to a foot, new sheet beyond that." },
        { name: "Water damage", note: "After the leak is fixed: cut out, replace, stain-blocking primer. Mold and wet insulation addressed first." },
        { name: "Skim coat", note: "A thin new surface over cracked plaster or old texture. Level 5 finish for walls under strong side light." },
        { name: "Texture match", note: "Sprayed or stomped to match the existing ceiling, tested on a sample first." },
        { name: "New drywall", note: "Hung, taped and finished for renovations, priced per square foot." },
      ],
    },
    pricing: {
      intro: "Typical ranges for Myerstown and Lebanon, not a quote. Paint is added to every repair.",
      ranges: [["Most standalone repairs", "$150 to $800"], ["Water damage", "$500 to $2,500 and up"], ["New drywall, hung and finished", "$1.50 to $3.50 per sq. ft."]],
      guides: [
        { slug: "drywall-repair-cost-in-myerstown-lebanon-pa-2026-guide", label: "Drywall repair cost by damage type" },
      ],
    },
    projects: ["south-philadelphia-rowhome-renovation", "south-philadelphia-rowhome-basement"],
    areas: "Drywall repairs across Lebanon County, often bundled with painting the room. New drywall for renovations anywhere we work, including Philadelphia rowhomes.",
    faqs: [
      { q: "Can you fix it in one visit?", a: "Small patches with setting compound, yes, in one long day. Larger repairs need drying time between coats, so two or three short visits over a few days." },
      { q: "My house has plaster. Do you work with it?", a: "Yes. Plaster cracks are repaired with bonding agent and setting compound, and badly cracked walls are skim-coated or covered with new drywall over the old plaster." },
      { q: "Is my popcorn ceiling safe to remove?", a: "Ceilings sprayed before 1980 can contain asbestos. We test first; if positive, a licensed abatement company removes it before we finish the ceiling." },
      { q: "Will the repair show after painting?", a: "Not if the patch is primed and the whole wall gets a coat. A patch touched up on an old wall shows in most light, which is why we recommend painting the wall." },
      { q: "Can you match a knockdown or orange-peel texture?", a: "Usually. We spray a sample patch and compare before doing the area." },
      { q: "Do you handle the mold behind water damage?", a: "Small areas, yes, with the wet material removed and the cavity dried before new drywall. Large or recurring mold is a remediation company's job and we say so." },
    ],
  },
};
