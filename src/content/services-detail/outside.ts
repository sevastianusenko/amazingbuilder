import type { ServiceDetail } from "./types";

export const outside: Record<string, ServiceDetail> = {
  // ------------------------------------------------------------------ Windows and doors
  "windows-doors-installation": {
    why: [
      { title: "Every opening measured", text: "Old houses have no two openings the same size. We measure each one and order each window to it, which is why ours fit without a wedge of foam." },
      { title: "Installed and finished, not just set", text: "Shimmed plumb, foamed, flashed and caulked outside, cased and trimmed inside. A window is not done when the sash moves; it is done when the trim is painted." },
      { title: "Brick, frame and rowhome experience", text: "Pocket replacements in masonry openings, full-frame replacements where the old frame is rotten, new-construction windows in renovations." },
      { title: "Ordered on time", text: "Windows take two to six weeks. In a renovation we measure in the first week so the house is sealed before drywall." },
    ],
    scope: {
      covers: ["Replacement windows in existing openings, vinyl, fiberglass, composite and wood-clad", "New windows in renovated or enlarged openings", "Entry doors, storm doors, patio and sliding doors", "Interior doors, prehung or slab, with casing and hardware"],
      elsewhere: [
        { text: "Siding, exterior trim and fences", href: "/exterior-remodeling/" },
        { text: "Windows and doors as part of a whole-house project", href: "/whole-home-renovation/" },
        { text: "Painting the new trim and doors", href: "/painting/" },
      ],
    },
    steps: [
      { title: "Walkthrough and measurements", text: "Every window and door measured, each noted for condensation, rot or damage. You get a per-opening estimate, so you can do the weather side first if the budget says so." },
      { title: "Order", text: "Windows and exterior doors made to size, two to six weeks. Interior doors and standard storm doors sooner." },
      { title: "Removal", text: "Old sashes and frames out. In brick, the opening stays. In frame walls with rot, the frame and sometimes the sheathing come out and are replaced." },
      { title: "Set, shim, seal", text: "Plumb and level, both sashes checked, low-expansion foam around the frame, sill pan under it, flashing tape outside." },
      { title: "Trim inside and out", text: "Casing, stool and apron inside; capping or wood trim and caulk outside. Doors get a new threshold, sweep and weatherstripping." },
      { title: "Labels off at the walkthrough", text: "Manufacturer labels stay on until you have seen them with us; they carry the ratings and serial numbers for the warranty." },
    ],
    options: {
      heading: "Windows and doors we install",
      items: [
        { name: "Vinyl windows", note: "The standard. No painting, good insulation, white or a few colors." },
        { name: "Fiberglass windows", note: "Stronger, stable, paintable, handles black frames in full sun." },
        { name: "Wood-clad windows", note: "Wood inside, aluminum or vinyl outside. The look for an old house without the upkeep." },
        { name: "Glass packages", note: "Double-pane low-E with argon is our default; triple-pane for cold north walls." },
        { name: "Entry doors", note: "Fiberglass for most houses; steel on a budget; wood when the house deserves it." },
        { name: "Interior doors", note: "Prehung when the jamb is shot, slab into a good jamb, barn doors where there is wall for the track." },
      ],
    },
    pricing: {
      intro: "Typical installed ranges for Lebanon County, not a quote. Each opening is priced on its own.",
      ranges: [["Vinyl replacement window", "$500 to $1,100"], ["Fiberglass, composite or wood window", "$900 to $2,200 and up"], ["Entry door, steel to wood", "$800 to $6,000"]],
      guides: [
        { slug: "door-replacement", label: "Window and door cost guide, with the energy ratings explained" },
      ],
    },
    projects: ["south-philadelphia-windows-and-front-door", "black-frame-window-installation"],
    areas: "Windows and doors across Lebanon County and the Hershey, Lititz and Ephrata areas, in brick boroughs and frame townships alike, and in rowhome renovations in Lebanon city and Philadelphia.",
    faqs: [
      { q: "Can you replace one window?", a: "Yes. One failed window with condensation between the panes is a repair call for us, not a minimum order." },
      { q: "Can windows be installed in winter?", a: "Yes. Each opening is open for under an hour, and the foam and caulk we use are rated for cold weather." },
      { q: "Black outside and white inside, is that possible?", a: "Yes, from most makers, for a small upcharge. It is the most common request we get now." },
      { q: "Do you replace the interior trim?", a: "Stops always; casing, stool and apron when the old ones are damaged or when you want an upgrade. We paint what we install." },
      { q: "What about screens and grids?", a: "Screens come with every window. Grids between the glass never need cleaning and suit older houses; we show samples with and without." },
      { q: "Who handles the warranty?", a: "The manufacturer covers the glass seal and frame, often 20 years to lifetime. We keep the labels on until the walkthrough so you have the records, and we handle the installation warranty ourselves." },
    ],
  },

  // ------------------------------------------------------------------ Decks and porches
  "decks-and-porches": {
    why: [
      { title: "We check the frame before we sell you a deck", text: "Ledger, joists, posts, footings, probed with an awl. If the frame is sound, new boards on it cost about half of a new deck, and we say so." },
      { title: "Built for Pennsylvania winters", text: "Footings below the 36-inch frost line, a bolted and flashed ledger, joist tape, hidden fasteners, gaps set to the temperature on the day." },
      { title: "Wood or composite, honestly", text: "Composite costs more once and needs nothing after. Treated wood costs less and needs stain every few years. We build both and tell you which fits your patience." },
      { title: "Permits and inspections handled", text: "Almost every township requires a permit for a deck attached to the house. We draw it, file it and meet the inspector." },
    ],
    scope: {
      covers: ["New decks, ground-level and raised, with railings and stairs", "Deck resurfacing: new boards on a sound frame", "Railing and stair replacement", "Front and back porches: floors, steps, columns, railings, roofs and screened porches"],
      elsewhere: [
        { text: "Fences, privacy screens and patios", href: "/exterior-remodeling/" },
        { text: "Staining and sealing an existing deck", href: "/painting/" },
        { text: "Interior stairs and railings", href: "/stairs-and-railings/" },
      ],
    },
    steps: [
      { title: "Site and frame inspection", text: "For a new deck, the ground, the slope and the house wall. For an existing one, the four-point frame check. Written estimate with railings and stairs as their own lines." },
      { title: "Design and permit", text: "A drawing with the size, height, railing and stair locations. Submitted to the township; one to three weeks." },
      { title: "Footings and frame", text: "Concrete footings below frost line, posts on metal bases, a bolted and flashed ledger, treated joists at 16 inches with taped tops." },
      { title: "Decking", text: "Composite or wood boards, hidden fasteners, picture-frame border, gaps by the chart." },
      { title: "Railings and stairs", text: "Posts sleeved or set, rail system installed at code height, stairs with closed risers and a wide run." },
      { title: "Inspection and walkthrough", text: "Final inspection, then a walk around with you before the ladders go in the truck." },
    ],
    options: {
      heading: "Decking and railings",
      items: [
        { name: "Composite decking", note: "Twenty-five-year warranties, no stain, hotter in full sun. What most of our clients choose." },
        { name: "Pressure-treated wood", note: "Cheapest, real wood, needs stain every two to three years." },
        { name: "Vinyl railings", note: "White, maintenance-free, chunkier profile. Matches white trim." },
        { name: "Aluminum and composite railings", note: "Slimmer, black is the current look, cost more." },
        { name: "Wood railings", note: "Cheapest, painted or stained with the deck." },
        { name: "Porch roofs and screens", note: "Framed and roofed to tie into the house, screened or open." },
      ],
    },
    pricing: {
      intro: "Typical installed ranges for Lebanon County, not a quote. Railings, stairs and the permit are on top of the square-foot number.",
      ranges: [["Treated wood deck", "$20 to $36 per sq. ft."], ["Composite deck", "$36 to $66 per sq. ft."], ["Porches, open to screened", "$30 to $135 per sq. ft."]],
      guides: [
        { slug: "porch-remodeling-pa-guide", label: "Deck and porch cost guide, resurface or rebuild" },
      ],
    },
    projects: ["composite-deck-replacement", "deck-with-vinyl-railings", "deck-resurfacing-new-boards"],
    areas: "Decks and porches in the townships around Myerstown, Lebanon, Palmyra, Hershey, Lititz, Ephrata and Manheim, and porch rebuilds on the older houses in the boroughs. Spring and fall book first.",
    faqs: [
      { q: "How do I know if my deck can be resurfaced?", a: "We probe the joists, check the ledger bolts and flashing and look at the post bottoms. If all four pass, new boards go on the old frame. We do this for free at the walkthrough." },
      { q: "Can a deck be built in winter?", a: "Boards and railings, yes. Footings need ground that is not frozen hard, so new decks usually start in spring or fall." },
      { q: "Why does composite get hot?", a: "Dark boards in full sun absorb heat. Lighter colors and a bit of shade help. Wood stays cooler but needs stain." },
      { q: "Do you reuse my railings?", a: "If they are sound and at code height, yes. A long deck we resurfaced kept its railings for a later phase on purpose." },
      { q: "How long does a new deck take?", a: "A 12-by-16 deck, one to two weeks including footings and the inspection. A screened porch, two to four weeks." },
      { q: "What is the right deck height for stairs?", a: "Anything over 30 inches off the ground needs a railing. We build the stair as wide as the yard allows; a wide stair makes the yard part of the deck." },
    ],
  },

  // ------------------------------------------------------------------ Exterior remodeling
  "exterior-remodeling": {
    why: [
      { title: "We open the wall and tell you what is there", text: "Siding comes off and the sheathing underneath is checked and repaired, by the sheet, at a price you saw in the estimate. New siding over rot is not a job we do." },
      { title: "Everything flashed, caulked and sealed", text: "Housewrap taped at the seams, flashing at every window and door, trim primed on every cut end. Exterior work fails at the joints, so we spend our time there." },
      { title: "Built to match the house", text: "Fences stained to the kitchen's color, screens painted to the siding, trim profiles matched. New exterior work should look like it was always there." },
      { title: "Small jobs welcome", text: "A fence, a screen around the AC unit, a rotten corner board. Big remodelers do not return those calls. We do, and the same homeowner calls us for the kitchen." },
    ],
    scope: {
      covers: ["Siding replacement: vinyl, engineered wood, fiber cement, cedar", "Exterior trim, soffit and fascia repair", "Cedar and vinyl fences, gates, privacy screens and equipment enclosures", "Patios, small hardscape and outdoor carpentry"],
      elsewhere: [
        { text: "Windows and exterior doors", href: "/windows-doors-installation/" },
        { text: "Decks and porches", href: "/decks-and-porches/" },
        { text: "Painting or staining existing siding and fences", href: "/painting/" },
      ],
    },
    steps: [
      { title: "Walk around", text: "Every side of the house, every soft spot and open joint noted. Siding, trim and any sheathing allowance priced as separate lines." },
      { title: "Material and match", text: "Samples held against the house. Color matched to the existing siding or trim where new meets old." },
      { title: "Demolition and inspection", text: "Old siding off, sheathing checked and repaired, or old fence out and the line confirmed with the survey." },
      { title: "Weather barrier and structure", text: "Housewrap and flashing on walls; treated posts in concrete below frost line for fences; a base and edging for patios." },
      { title: "Install", text: "Siding from the bottom up with the right nailing for the material; fence boards site-built to the yard; screens framed with airflow and a service door." },
      { title: "Trim, finish, walkthrough", text: "Caulk, paint or stain within the window the material wants, cleanup, a walk around with you." },
    ],
    options: {
      heading: "Materials outside",
      items: [
        { name: "Vinyl siding", note: "Cheapest, no paint, 20 to 40 years. Right for most ranches and colonials." },
        { name: "Engineered wood siding", note: "Looks like painted clapboard, takes paint, costs less than fiber cement." },
        { name: "Fiber cement siding", note: "Fifty years, fireproof, holds paint for fifteen. The choice for a house you keep." },
        { name: "Cedar fence", note: "Site-built, stained within the first month, boards held off the ground." },
        { name: "Vinyl fence", note: "No upkeep, white, panels rather than site-built." },
        { name: "Board-and-batten screens", note: "Around AC units, trash cans and utilities, painted to the house, with a service door." },
      ],
    },
    pricing: {
      intro: "Typical ranges for Lebanon County, not a quote. Fences, screens and patios are priced per job after we measure.",
      ranges: [["Siding, installed", "$4 to $18 per sq. ft. by material"], ["Whole-house re-side", "$9,000 to $30,000 and up"], ["Fences, screens, patios", "Priced per job"]],
      guides: [
        { slug: "siding-replacement-cost-lebanon-county-pa", label: "Siding cost by material, with lifespans" },
        { slug: "fence-installation-cost-lebanon-county-pa", label: "Fence cost per foot, permits and 811" },
      ],
    },
    projects: ["south-philadelphia-cedar-fence-and-patio", "marysville-ac-screen"],
    areas: "Exterior work across Lebanon County, the Hershey area and the northern half of Lancaster County, mostly April through November. Fences and screens are quick jobs we fit between larger ones.",
    faqs: [
      { q: "Can new siding go over the old siding?", a: "We take it off. Siding over siding hides rot, adds thickness at every window and voids most warranties." },
      { q: "Do I need a permit for a fence?", a: "Many boroughs and townships require one, and most limit height to six feet in a back yard. We check your municipality before ordering boards." },
      { q: "Can you match my existing siding for a repair or an addition?", a: "Often, for common vinyl profiles and colors. When an exact match is not made anymore we suggest residing the whole elevation so the seam is at a corner." },
      { q: "How close can a screen be to the AC unit?", a: "Two feet on every side, nothing over the top, and a door for the technician. Closer than that and the unit works harder and dies young." },
      { q: "When should a new cedar fence be stained?", a: "Within the first month, before the wood greys, then every three to four years. Stain soaks in; paint on a fence peels." },
      { q: "Do you do patios?", a: "Concrete pads, pavers and small hardscape around the work we are already doing, yes. Large retaining walls and drainage projects we refer to a landscape contractor." },
    ],
  },
};
