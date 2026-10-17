import type { ServiceDetail } from "./types";

export const interior: Record<string, ServiceDetail> = {
  // ------------------------------------------------------------------ Kitchen
  "kitchen-remodeling": {
    why: [
      { title: "One crew from demolition to paint", text: "Cabinets, counters, tile, floors, drywall and paint are our own work. A licensed electrician and plumber handle the rough-in. You have one schedule and one person to call." },
      { title: "Built for old Pennsylvania kitchens", text: "Soffits that hide a duct, floors that are not level, one small window and a door to the yard. We measure first and design the cabinets around the real room." },
      { title: "Storage to the ceiling", text: "Uppers that stop short of the ceiling waste a third of the wall. We take them up, add pantry cabinets where there is a dead end, and put drawers in the base cabinets." },
      { title: "The floor runs through", text: "We lay the kitchen floor before the cabinets and run it into the next room without a threshold, which is why our narrow kitchens feel wider than they are." },
    ],
    scope: {
      covers: ["Full and partial kitchen remodels on the existing footprint", "Layout changes, including removing non-bearing and bearing walls", "Cabinet installation, stock, semi-custom or custom", "Counters, backsplash, flooring, lighting, trim and paint"],
      elsewhere: [
        { text: "Painting the cabinets you already have is its own service", href: "/cabinet-painting/" },
        { text: "A kitchen inside a whole-house renovation is planned on the whole-home page", href: "/whole-home-renovation/" },
        { text: "Flooring for the rest of the house", href: "/flooring-tile-installation/" },
      ],
    },
    steps: [
      { title: "Walkthrough and measurements", text: "We measure the room and the openings, check the panel and the plumbing wall, and ask how you cook. You get a written, itemized estimate within a few days." },
      { title: "Layout and cabinet plan", text: "A drawing with every cabinet sized to the room. You pick the door style, the counter and the floor. Nothing is ordered until you approve the drawing." },
      { title: "Ordering, then demolition", text: "Cabinets take four to eight weeks. We order first and demolish when the delivery date is known, so the kitchen is out of service for weeks, not months." },
      { title: "Rough-in and inspection", text: "Licensed electrician and plumber, new circuits and lines where the plan needs them, township inspection before anything is covered." },
      { title: "Floors, cabinets, counters", text: "Floor first, cabinets set and leveled, counter templated and installed a week later, then the backsplash on the finished counter." },
      { title: "Lights, appliances, paint, walkthrough", text: "Under-cabinet lights, appliances last so nothing gets scratched, paint, and a room-by-room walkthrough with a list we finish before the final payment." },
    ],
    options: {
      heading: "Cabinets and counters we install",
      items: [
        { name: "Stock cabinets", note: "Fixed sizes, fastest delivery, lowest price. Fine for simple layouts; fillers hide the gaps." },
        { name: "Semi-custom cabinets", note: "Sizes to fit the room, better boxes and drawers. What most of our kitchens use." },
        { name: "Custom cabinets", note: "Built to the inch, any finish. For odd rooms and owners who want a specific look." },
        { name: "Quartz counters", note: "No sealing, no staining, light colors that open a small kitchen. Our usual recommendation." },
        { name: "Granite counters", note: "Real stone, each slab different, needs sealing every year or two." },
        { name: "Butcher block", note: "Warm and cheap, needs oil, shows knife marks. Good on an island." },
      ],
    },
    pricing: {
      intro: "Typical ranges for Lebanon County, not a quote. Your number comes after we measure.",
      ranges: [["Refresh, same cabinets", "$8,000 to $20,000"], ["New cabinets, counters, appliances, floor", "$25,000 to $50,000"], ["Full gut with layout changes", "$60,000 and up"]],
      guides: [{ slug: "kitchen-remodeling-trends", label: "Kitchen remodeling cost guide, line by line" }],
    },
    projects: ["south-philadelphia-rowhome-kitchen", "hershey-kitchen-and-stairs"],
    areas: "We remodel kitchens within about forty minutes of our shop in Myerstown: Lebanon, Annville, Palmyra, Cornwall, Hershey and Hummelstown, Lititz, Ephrata, Manheim, Elizabethtown and Lancaster. Kitchens inside a whole-home project are the exception; we take those in Philadelphia too.",
    faqs: [
      { q: "Do you design the kitchen or do I need a designer?", a: "We draw the layout and the cabinet plan ourselves for most kitchens. If you want a designer's full rendering package, we work with yours and build to it." },
      { q: "Can I keep my appliances?", a: "Yes. We build the cabinet openings to the appliances you have. Tell us the model numbers at the walkthrough." },
      { q: "Will I have a kitchen during the work?", a: "A temporary one: we set up a counter with the microwave and coffee maker and keep a sink working as long as the plan allows, usually all but a few days." },
      { q: "How do you handle the soffit above the old cabinets?", a: "We open it before the cabinets are ordered. If it is empty, it comes out and the cabinets go to the ceiling. If it hides a duct or a drain, we design around it." },
      { q: "Can you move the kitchen to another room?", a: "Yes, as part of a whole-home plan. It is a plumbing and electrical project as much as a kitchen one, so it is scoped on the whole-home renovation page." },
      { q: "Do you take small kitchen jobs, like a counter and backsplash only?", a: "Yes. Counters, a backsplash and new lighting on existing cabinets is a common two-week job for us." },
    ],
  },

  // ------------------------------------------------------------------ Bathroom
  "bathroom-remodeling": {
    why: [
      { title: "The part behind the tile is the part we care about", text: "Cement board, a waterproofing membrane, a flood-tested pan and a fan ducted outside. The finishes are the easy part; the shower stays dry because of what you cannot see." },
      { title: "Tub or walk-in, we build both", text: "Alcove tubs with tiled surrounds for family baths, walk-in and curbless showers for the main bath, corner enclosures for the small ones." },
      { title: "Old houses do not scare us", text: "Cast iron drains, galvanized supply lines, plaster walls and out-of-level floors are normal in Lebanon County bathrooms. We budget for them and tell you when we get lucky." },
      { title: "Glass ordered on time", text: "Shower glass is measured after the tile and takes two to three weeks. We order it the day the tile is done, which is the difference between a three-week bathroom and a six-week one." },
    ],
    scope: {
      covers: ["Full bathroom remodels, same layout or new", "Tub-to-shower conversions, standard and curbless", "Tile showers, tub surrounds, tiled floors", "Vanities, toilets, faucets, lighting, fans, paint"],
      elsewhere: [
        { text: "Only the floor, or tile outside the bathroom", href: "/flooring-tile-installation/" },
        { text: "A new bathroom in the basement is part of basement finishing", href: "/basement-finishing/" },
        { text: "Painting a bathroom without other work", href: "/painting/" },
      ],
    },
    steps: [
      { title: "Walkthrough", text: "We measure, find the drains, check the floor for softness and the walls for plaster, and talk about what the room is for. Written estimate in a few days." },
      { title: "Choices that come first", text: "Enclosure type, tile, valve brand, vanity size, toilet rough-in and the fan. These decide how the room is built. The faucet finish and the mirror can wait." },
      { title: "Demolition and rough-in", text: "The room to the studs where the plan calls for it. Licensed plumber sets the valve and the drain; electrician adds circuits and the fan. Inspection." },
      { title: "Waterproofing", text: "Cement board on wet walls, membrane over the surround and the pan, pan flood-tested overnight before a single tile goes on." },
      { title: "Tile, then glass", text: "Walls, floor and niche tiled and grouted. Glass measured to the finished tile and ordered; the shower works with a curtain until it arrives." },
      { title: "Fixtures, paint, walkthrough", text: "Vanity, toilet, lights, fan trim, paint, then the glass, final inspection and a walkthrough with a list we finish before the final payment." },
    ],
    options: {
      heading: "Showers and surfaces we build",
      items: [
        { name: "Tiled alcove tub", note: "The family bath. Tub with a tiled surround to the ceiling." },
        { name: "Walk-in shower with a curb", note: "Tiled pan, a low curb, a glass panel or door. The main-bath standard." },
        { name: "Curbless shower", note: "Floor sloped to a linear drain, no step. For aging in place; needs floor framing work." },
        { name: "Corner enclosure", note: "Curved or neo-angle glass in a small bathroom; frees the floor a square enclosure blocks." },
        { name: "Porcelain tile", note: "Large-format on walls, textured or mosaic on the floor. Looks like stone, needs no sealing." },
        { name: "Natural stone", note: "Beautiful, and a sealing commitment in a wet room. We install it for owners who want it." },
      ],
    },
    pricing: {
      intro: "Typical ranges for Lebanon County, not a quote. The glass, the tile and whether anything moves set the number.",
      ranges: [["Refresh: vanity, toilet, lights, paint", "$2,500 to $8,000"], ["Full remodel, same layout", "$15,000 to $25,000"], ["Gut with moved plumbing or curbless shower", "$25,000 to $45,000 and up"]],
      guides: [{ slug: "bathroom-remodeling", label: "Bathroom remodel cost guide" }],
    },
    projects: ["south-philadelphia-rowhome-bathrooms", "modern-farmhouse-bathroom-and-loft"],
    areas: "Bathrooms are the job we do most often across Lebanon County and the northern half of Lancaster County: Lebanon, Myerstown, Annville, Palmyra, Cornwall, Hershey, Lititz, Ephrata, Manheim and Elizabethtown. We built two at once in a Philadelphia rowhome as part of a whole-house project.",
    faqs: [
      { q: "Can you keep the toilet working during the remodel?", a: "If it is the only bathroom, we sequence it so the toilet is back in service within the first week, usually sooner. Showers elsewhere for a stretch is the honest answer." },
      { q: "Do you tile the walls to the ceiling?", a: "In the shower, always. On the rest of the room it is a choice: full-height tile costs more and makes a small room feel bigger; paint above a wainscot costs less." },
      { q: "What waterproofing do you use?", a: "Cement board on every wet wall and a sheet or liquid membrane over it and over the pan, flood-tested before tile. We name the products in the estimate." },
      { q: "Can I buy my own tile and fixtures?", a: "Tile, mirrors, lights and faucets, yes; we tell you what quantity and what to avoid. The shower valve and the toilet we prefer to supply so the warranty is clean." },
      { q: "Do you add grab bars?", a: "We add blocking in the walls on every bathroom so grab bars can be mounted later without opening the tile, and we install them now if you want them." },
      { q: "How is a tub-to-shower conversion different from a remodel?", a: "It is a remodel of the wet area only: pan, walls, glass, valve. The vanity, toilet and floor can stay. We do it as a standalone job or inside a full remodel." },
    ],
  },

  // ------------------------------------------------------------------ Basement
  "basement-finishing": {
    why: [
      { title: "We test the slab before we quote", text: "A plastic-sheet moisture test and a look at the walls come before any number. We will not finish a wet basement, and we tell you what the water needs first." },
      { title: "Built so the house can still be serviced", text: "Drop ceilings or access panels at every valve and cleanout, a full door to the furnace, framed walls off the block with a gap behind." },
      { title: "The right floor for a slab", text: "Vinyl plank in a dry basement, porcelain where there is a laundry or a bath, carpet only over a slab that passed the test. We do not put wood on concrete." },
      { title: "Bathrooms and egress included", text: "A basement bath with an ejector pump if the drain is below the sewer line, and a code egress window if a room will be a bedroom. Both are things we do, not things we send you elsewhere for." },
    ],
    scope: {
      covers: ["Finishing an unfinished basement: framing, insulation, drywall, ceiling, floor, trim, paint", "Basement bathrooms, wet bars and laundry rooms", "Egress windows", "Updating an old finished basement"],
      elsewhere: [
        { text: "Only a new basement floor", href: "/flooring-tile-installation/" },
        { text: "Basement stairs and railings on their own", href: "/stairs-and-railings/" },
        { text: "Waterproofing systems and sump pumps come from a waterproofing contractor; we coordinate and build after", href: "/contact/" },
      ],
    },
    steps: [
      { title: "Moisture check and walkthrough", text: "The slab test, the walls, the ceiling height, the panel, where the sewer line runs. You get a written estimate with a bathroom and an egress window as separate lines if you want them." },
      { title: "Permit", text: "Framing, electrical and plumbing in a basement need a permit in every municipality we work in. We draw it and file it; one to three weeks." },
      { title: "Rough-in", text: "Plumbing lines and any slab cut for a drain, new circuits, outlets at code spacing, recessed lights. Inspection before anything is covered." },
      { title: "Framing and insulation", text: "Walls framed off the block, columns and mechanicals boxed with access, foam board or mineral wool on exterior walls." },
      { title: "Drywall and ceiling", text: "Hung, taped, three coats, primed. Drop ceiling with flush LED panels or a drywall ceiling, your choice, discussed before framing." },
      { title: "Floor, trim, doors, paint, walkthrough", text: "The floor goes down last so it is never a work surface. Trim, closet doors, paint, final inspection and the walkthrough." },
    ],
    options: {
      heading: "Ceilings and floors for a basement",
      items: [
        { name: "Drop ceiling with LED panels", note: "Every pipe and valve stays reachable. Costs about the same as drywall and we recommend it for most basements." },
        { name: "Drywall ceiling", note: "Looks like upstairs. Access to anything above it is gone, so we add panels at valves." },
        { name: "Vinyl plank floor", note: "Waterproof, warm, floating. The default for a dry basement." },
        { name: "Porcelain tile floor", note: "For basements with a laundry, a bath or any water history. Cold underfoot; a rug fixes it." },
        { name: "Carpet with pad", note: "Warmest and quietest. Only over a slab that passed the moisture test." },
        { name: "Egress window", note: "Required for a bedroom. Cut through block, a window well, a code-size window." },
      ],
    },
    pricing: {
      intro: "Typical ranges for Lebanon County per square foot of finished space, not a quote. A bathroom, an egress window and waterproofing are the big add-ons.",
      ranges: [["Basic finish", "$25 to $40 per sq. ft."], ["Mid-range with a bath rough-in, trim, better floor", "$40 to $65 per sq. ft."], ["Full custom with bathroom and egress", "$65 to $100 and up per sq. ft."]],
      guides: [{ slug: "basement-finishing-pa", label: "Basement finishing cost guide" }],
    },
    projects: ["lititz-basement-remodel", "south-philadelphia-rowhome-basement"],
    areas: "Basements are a big part of our work in the ranches and colonials of Myerstown, Palmyra, Annville, Hershey, Lititz, Ephrata and Manheim, and in the older houses of Lebanon city, where the slab and the stone walls get a careful look first.",
    faqs: [
      { q: "My basement ceiling is low. Can it still be finished?", a: "Code wants 7 feet in finished rooms. Below that, the space can still be finished as a rec room or storage, not a bedroom, and ducts that drop lower have to be rerouted or boxed. We measure at the walkthrough." },
      { q: "Can you add a bathroom if there is no drain in the floor?", a: "Yes. Either we cut the slab and tie into the sewer line, or if the line is above the floor, we install an ejector pump system. Both are common; the ejector costs more." },
      { q: "What about the sump pump and the water heater?", a: "They stay accessible. We frame a utility room with a real door around the mechanicals and keep the sump pit reachable under a panel." },
      { q: "Do you insulate basement walls?", a: "Yes, foam board against the block or mineral wool in the framed wall, with a gap so the drywall never touches masonry." },
      { q: "How long will the basement be a construction site?", a: "Three to four weeks for an open basement with one room, six to eight with a bathroom and several rooms. The permit and the inspections set the pace." },
      { q: "Can you update a basement that was finished badly years ago?", a: "That is half of our basement work: paneling and old drop ceilings out, moisture checked, new drywall, lighting and floor. Often cheaper than you expect because the framing is already there." },
    ],
  },

  // ------------------------------------------------------------------ Stairs
  "stairs-and-railings": {
    why: [
      { title: "We build stairs in house", text: "Most remodelers subcontract stairs or avoid them. Our crew cuts stringers, sets treads and installs railings ourselves, which is why we can rebuild a staircase inside a renovation without waiting on anyone." },
      { title: "Code is not optional", text: "Rise within three-eighths of an inch step to step, treads at least ten inches, handrail at 34 to 38 inches, no gap a four-inch ball can pass. We build to it and the inspector agrees." },
      { title: "From a tread swap to a whole new stair", text: "New oak treads on sound stringers in a day or two. Iron balusters in an afternoon. A new staircase from the stringers up inside a gutted house." },
      { title: "Finished last, so it stays finished", text: "On a renovation we fit temporary treads for the crew and install the oak and the railings in the final weeks. New stairs should not be a construction stair." },
    ],
    scope: {
      covers: ["New treads and risers on existing stringers", "Railing, newel post and baluster replacement", "Complete staircase rebuilds with new stringers", "Landing and loft railings, basement stairs, stair painting and finishing"],
      elsewhere: [
        { text: "Deck and porch stairs outdoors", href: "/decks-and-porches/" },
        { text: "Flooring that meets the stairs", href: "/flooring-tile-installation/" },
        { text: "Trim, built-ins and other interior carpentry", href: "/blog/custom-carpentry-pa-built-ins/" },
      ],
    },
    steps: [
      { title: "Inspection", text: "We probe the stringers, sight the run for sag, measure every rise and check the headroom and handrail height. The walkthrough decides whether it is a retread, a railing job or a rebuild." },
      { title: "Design and samples", text: "Tread species, riser color, newel style, iron or wood balusters, handrail profile. We bring samples so the stair matches the floors and the trim." },
      { title: "Demolition or carpet removal", text: "Carpet and old treads off, or the whole stair out in a rebuild. Stringers checked again once they are exposed." },
      { title: "Structure", text: "New stringers cut and set to even rises, or existing stringers shimmed true. Temporary treads if the house is under construction." },
      { title: "Treads, risers, newel, rail", text: "Treads fitted and fastened, risers set, newel posts anchored, handrail cut, fitted and returned into the wall at the top." },
      { title: "Balusters, finish, walkthrough", text: "Balusters set at code spacing, treads sealed, risers painted, a last check of every rise and the rail with a level." },
    ],
    options: {
      heading: "Treads and railings we install",
      items: [
        { name: "Red oak treads", note: "The standard. Hard, takes stain or clear finish, matches most hardwood and vinyl plank floors." },
        { name: "Pine treads, painted", note: "Budget choice for basement and secondary stairs." },
        { name: "Carpeted stairs", note: "Quiet and warm, hides plywood treads, the usual choice for basement runs." },
        { name: "Iron balusters", note: "Square or twisted, black or bronze, set into treads and rail. Our most requested look." },
        { name: "Wood balusters", note: "Painted white with a stained rail for a traditional stair." },
        { name: "Oak handrail and newels", note: "Stained to the treads or painted. Returned into the wall at the top as code asks." },
      ],
    },
    pricing: {
      intro: "Typical ranges for our area, not a quote. A stair is priced after we see the stringers; the rebuild number depends on what is under the carpet.",
      ranges: [["Railing replacement, oak and iron, straight run", "$1,500 to $4,000"], ["New treads and risers on sound stringers", "Priced per step after inspection"], ["Complete staircase rebuild", "Priced after inspection; about a week of carpentry"]],
      guides: [{ slug: "staircase-remodel-cost-lebanon-county-pa", label: "Staircase remodel cost guide" }, { slug: "stair-railing-height-code-pennsylvania", label: "Stair railing height and code in PA" }],
    },
    projects: ["south-philadelphia-rowhome-staircase", "hershey-kitchen-and-stairs", "modern-farmhouse-bathroom-and-loft"],
    areas: "We rebuild stairs across Lebanon County, in the colonials around Hershey, Lititz and Manheim, and in city rowhomes in Lebanon and Philadelphia, where the old steep stair is usually the first thing to go in a renovation.",
    faqs: [
      { q: "Can you replace just the carpet with wood treads?", a: "Yes, if the stringers are sound. We pull the carpet, check the treads underneath, and either refinish them or fit new oak treads with painted risers. A straight run is one to two days." },
      { q: "My stairs are steep. Can you fix that without moving walls?", a: "Sometimes. Extending the bottom of the run into the room gains tread depth and lowers each rise. If the room does not allow it, we tell you honestly that the stair stays steep." },
      { q: "Do iron balusters need a different railing?", a: "No. They set into the existing oak rail and treads with epoxy and shoes. Spacing is kept under four inches." },
      { q: "Can you match new treads to my hardwood floor?", a: "Red oak treads can be stained to match most oak floors. For vinyl plank floors we pick a close tone; an exact match is not possible across materials." },
      { q: "Is a permit needed for stairs?", a: "A railing or tread replacement, no. A new staircase with new stringers, yes, because rise, run, headroom and railing height are inspected." },
      { q: "Do you do loft and landing railings?", a: "Yes, with the same oak and iron or painted wood, at 36 inches for a guard. Half walls can be replaced with railings to open a loft." },
    ],
  },
};
