export type Project = {
  slug: string;
  title: string;
  seoTitle?: string; // short <title>; falls back to title
  seoDescription?: string; // meta description; falls back to summary
  place: string; // town, state
  placeKey: string;
  when: string; // e.g. "April to August 2025"; empty when the client has not confirmed the date
  date: string; // page publish date, YYYY-MM-DD
  services: string[]; // service slugs
  summary: string; // one paragraph
  scope: string[]; // bullet list
  cover: string; // photo key
  gallery?: string[]; // photo keys to show; defaults to every photo tagged with this project key
  before?: string; // photo key for slider
  after?: string;
  related?: string[]; // other project slugs from the same house or type
  published: boolean; // false until the client confirms place and year
  body: string; // markdown
};

const PUBLISHED = "2026-10-07";

export const projects: Project[] = [
  // ---------------------------------------------------------------- 1. Hub
  {
    slug: "south-philadelphia-rowhome-renovation",
    seoTitle: "South Philadelphia Rowhome Renovation, 2025",
    seoDescription: "A brick rowhome taken to the studs in April and handed back in August: new kitchen, two bathrooms, rebuilt staircase, floors, basement, windows and patio.",
    title: "South Philadelphia rowhome: full renovation, April to August 2025",
    place: "South Philadelphia, PA",
    placeKey: "south-philadelphia",
    when: "April to August 2025",
    date: PUBLISHED,
    services: ["whole-home-renovation", "kitchen-remodeling", "bathroom-remodeling", "stairs-and-railings", "basement-finishing", "flooring-tile-installation", "windows-doors-installation", "exterior-remodeling", "painting", "drywall-repair"],
    summary:
      "A brick rowhome taken down to the studs in April and handed back in August. New kitchen, two bathrooms, a rebuilt staircase with iron balusters, vinyl plank floors throughout, a finished basement, new windows, a new front door and a cedar-fenced patio.",
    scope: [
      "Demolition of the first floor and the old staircase",
      "New stair stringers, oak treads, painted risers, iron balusters",
      "Kitchen: white shaker cabinets, quartz counters, tile backsplash",
      "Two full bathrooms: marble-look tile tub bath and grey tile glass shower",
      "Vinyl plank flooring on the living floors, carpet in the basement",
      "Finished basement with drop ceiling and closets",
      "Replacement windows and new entry door, iron railings",
      "Cedar privacy fence, stained planter, concrete patio",
      "Drywall and paint throughout",
    ],
    cover: "south-philadelphia-facade-after",
    before: "south-philadelphia-facade-before",
    after: "south-philadelphia-facade-after",
    related: ["south-philadelphia-rowhome-staircase", "south-philadelphia-rowhome-kitchen", "south-philadelphia-rowhome-bathrooms", "south-philadelphia-rowhome-basement", "south-philadelphia-windows-and-front-door", "south-philadelphia-vinyl-plank-floors", "south-philadelphia-cedar-fence-and-patio"],
    published: true,
    body: `## The house

A two-story brick rowhome in South Philadelphia, the kind built by the thousand a century ago: about sixteen feet wide, a shared wall on each side, a straight staircase in the middle of the plan, a kitchen at the back and a basement under all of it. The owner wanted to keep the house and replace almost everything inside it.

That is a different job from a kitchen or a bathroom. In a rowhome every room depends on the one next to it. The staircase sets where the hallway goes. The kitchen sits against the party wall, so there is only one wall to run plumbing on. The basement decides where a drain can go. If you do the rooms in the wrong order you end up opening finished walls twice.

## The plan

We wrote the sequence before we swung a hammer:

1. Demolition and structural work, including the old staircase.
2. New stair stringers, so the crew had a safe way between floors for the rest of the job.
3. Replacement windows, so the house was sealed before drywall.
4. Wiring and plumbing with licensed trades, then inspections.
5. Drywall, then floors, then kitchen and bathrooms.
6. Paint, trim and the finished stair parts last, so nothing got scratched.
7. The front door, railings and the back yard at the very end.

## Month by month

**April.** The first floor came down to the studs. The old staircase, worn and steeper than code allows today, came out with it.

**May.** New stringers went in and we set temporary pine treads so the stair could be used as a work stair. The old window openings got new vinyl replacement windows. Drywall went up on the first floor.

**June.** Vinyl plank flooring went down across the first floor in one continuous run from the front room to the kitchen, which makes a narrow house feel wider than it is. Drywall was finished and primed.

**July.** The staircase got its finished oak treads, painted white risers, an oak newel and handrail, and iron balusters. The kitchen cabinets were installed. Out back the crew built a cedar privacy fence with a matching planter box and stained both.

**August.** Quartz counters and the tile backsplash finished the kitchen. Both bathrooms were tiled and fitted. The basement was carpeted, with a drop ceiling and louvered closet doors. The front got a new entry door with an oval glass panel and new iron railings. Final paint throughout.

## What changed for the owner

The house went from a dark, chopped-up floor plan to an open first floor with an electric fireplace wall, a kitchen with storage to the ceiling, two bathrooms that are finished the same way instead of one new and one old, and a basement that is usable living space instead of storage. Outside, the black-framed windows and the fence changed how the house reads from the street and from the yard.

## Three lessons for rowhome owners

**Fix the stairs first, not last.** Everyone wants to start with the kitchen. The stairs are the one thing that touches every floor, and a new staircase is far easier to build in an empty house.

**Check the basement before you finish anything.** We looked at the walls and the floor for moisture before the rest of the plan was set. If a basement needs drainage work, it needs it before carpet and drywall, not after.

**Order windows and doors early.** Replacement windows for old masonry openings are made to size and can take weeks. We measured in April so they were on site when the drywall crew needed the house sealed.

## See the parts of this project

The staircase, the kitchen and the two bathrooms each have their own write-up with more photos. The links are below.`,
  },

  // ---------------------------------------------------------------- 2. Staircase
  {
    slug: "south-philadelphia-rowhome-staircase",
    seoTitle: "Rowhome Staircase Rebuild, South Philadelphia",
    seoDescription: "The steep old staircase came out in April. New stringers, oak treads, painted risers, an oak handrail and iron balusters went in over the summer.",
    title: "Rowhome staircase rebuilt from the stringers up, South Philadelphia",
    place: "South Philadelphia, PA",
    placeKey: "south-philadelphia",
    when: "May to August 2025",
    date: PUBLISHED,
    services: ["stairs-and-railings", "whole-home-renovation", "painting"],
    summary:
      "The old steep staircase came out in April. New stringers, oak treads, painted risers, an oak handrail and iron balusters went in over the summer, with a matching landing railing upstairs.",
    scope: [
      "Old staircase removed with the first-floor demolition",
      "New stringers cut and set to current rise and run",
      "Temporary pine treads during construction",
      "Finished oak treads, painted white risers",
      "Oak newel post and handrail, iron balusters",
      "Upstairs landing railing to match",
      "Basement stairs carpeted",
    ],
    cover: "south-philadelphia-stairs-iron-balusters-after",
    gallery: [
      "south-philadelphia-stairs-iron-balusters-after",
      "south-philadelphia-stairs-landing-after",
      "south-philadelphia-living-room-fireplace-after",
      "south-philadelphia-basement-stairs-after",
      "south-philadelphia-stairs-stringers-before",
      "south-philadelphia-stairs-new-stringers",
      "south-philadelphia-stairs-treads-install",
      "south-philadelphia-stairs-balusters-install",
    ],
    before: "south-philadelphia-stairs-stringers-before",
    after: "south-philadelphia-stairs-iron-balusters-after",
    related: ["south-philadelphia-rowhome-renovation", "south-philadelphia-rowhome-kitchen", "south-philadelphia-rowhome-bathrooms"],
    published: true,
    body: `## Why the old stairs came out

The original staircase in this rowhome was steep, narrow and tired. Old city stairs were often built with a tall rise and a short tread to save floor space, and after a hundred years of use the stringers had moved. Carpet hid most of it. Once the first floor was gutted, keeping the stair made no sense: it would have been the one old, uneven thing in a new house.

## What a stair has to do

A staircase is the most regulated piece of carpentry in a house, for good reason. The rules we build to:

- Risers no taller than 7 3/4 inches, treads at least 10 inches deep, and every step within 3/8 inch of the others. Uneven steps are what trip people.
- Headroom of at least 6 feet 8 inches along the whole run.
- Handrail height between 34 and 38 inches, graspable all the way down.
- No opening in the railing that a 4-inch sphere can pass through.

In a rowhome the challenge is fitting a code-compliant run into the same footprint. We gained the depth we needed by extending the bottom of the run slightly into the open first floor, which the new layout allowed.

## How we built it

**Stringers first.** New stringers were cut from solid lumber, laid out so every rise matched, and set with the top of the run framed into the second-floor joists. This happened in May, right after demolition.

**A working stair for the crew.** We fitted plain pine treads and risers on the new stringers. For two months that was the job-site stair: paint, drywall, flooring and cabinets all went up and down it. Finished oak would have been ruined.

**Finish parts last.** In July the pine came off and the finished parts went on: solid oak treads, risers painted white, an oak newel post at the bottom and an oak handrail. Iron balusters were set into the treads and the rail at even spacing. The same railing style continues along the upstairs landing, so the two floors read as one design.

**Basement stairs.** The stairs down to the finished basement got carpet, matching the basement floor. A carpeted basement stair is quieter and warmer underfoot, and it hides the plywood treads that are normal on a basement run.

## Details that matter

- Iron balusters against painted white risers and oak treads is a classic combination because it reads well from the front room. In a narrow house the staircase is always in view, so it has to look finished from the side as well as from the top.
- Treads were sealed before the balusters went in, so no finish built up around the metal.
- The handrail returns into the wall at the top, which is what the code asks for and what keeps a sleeve from catching.

## Timeline

Demolition in April, stringers in May, finish work in July, paint touch-up in August. The stair itself was about a week of carpentry spread across those months, scheduled around the other trades.

If your house has a stair like the old one here, read our stairs and railings page or ask for a walkthrough. A rebuilt staircase is one of the few jobs that changes how a whole house feels for a modest share of a renovation budget.`,
  },

  // ---------------------------------------------------------------- 3. Kitchen
  {
    slug: "south-philadelphia-rowhome-kitchen",
    seoTitle: "Rowhome Kitchen Remodel, South Philadelphia",
    seoDescription: "White shaker cabinets to the ceiling, quartz counters, subway tile, stainless appliances, a new window over the counter and vinyl plank floors.",
    title: "Rowhome kitchen remodel: white shaker cabinets and quartz, South Philadelphia",
    place: "South Philadelphia, PA",
    placeKey: "south-philadelphia",
    when: "July to August 2025",
    date: PUBLISHED,
    services: ["kitchen-remodeling", "flooring-tile-installation", "windows-doors-installation", "painting"],
    summary:
      "The kitchen at the back of the rowhome was rebuilt with white shaker cabinets to the ceiling, quartz counters, a subway tile backsplash, stainless appliances, a new window over the counter and vinyl plank floors that run straight through from the front room.",
    scope: [
      "Layout kept along the party wall, storage taken to the ceiling",
      "White shaker cabinets with tall pantry units",
      "Quartz countertops",
      "White subway tile backsplash",
      "Stainless range, over-the-range microwave, dishwasher, refrigerator",
      "Under-cabinet lighting",
      "New window over the counter",
      "Vinyl plank floor continuous with the living room",
    ],
    cover: "south-philadelphia-kitchen-white-shaker-after",
    gallery: [
      "south-philadelphia-kitchen-white-shaker-after",
      "south-philadelphia-kitchen-window-wall-after",
      "south-philadelphia-kitchen-range-wall-after",
      "south-philadelphia-kitchen-fridge-wall-after",
      "south-philadelphia-kitchen-cabinets-install",
      "south-philadelphia-window-old-opening-before",
      "south-philadelphia-window-new-after",
    ],
    before: "south-philadelphia-kitchen-cabinets-install",
    after: "south-philadelphia-kitchen-white-shaker-after",
    related: ["south-philadelphia-rowhome-renovation", "south-philadelphia-rowhome-staircase", "south-philadelphia-rowhome-bathrooms"],
    published: true,
    body: `## The starting point

Rowhome kitchens sit at the back of the house, against one shared wall, with a window or two onto the yard. This one was gutted with the rest of the first floor in April, so by July we had bare studs, a new window opening already finished, and a clean subfloor with vinyl plank running in from the living room.

## The layout

We did not fight the shape of the room. The plumbing wall stayed where it was, the range went on the long wall with an over-the-range microwave, and the refrigerator took the end wall with a tall pantry cabinet beside it. What changed was height: the upper cabinets go all the way to the ceiling. In a narrow kitchen the storage you give up to a dusty gap above the cabinets is storage you miss every day.

## What went in

- **Cabinets:** white shaker doors, soft-close, with tall pantry units flanking the refrigerator. Shaker is the right choice in an old city house because it looks correct next to original trim and it will not date.
- **Counters:** quartz. For a working family kitchen we recommend quartz over granite: no sealing, no staining from wine or lemon, and a clean white that matches the cabinets.
- **Backsplash:** white subway tile, running from counter to uppers. A small kitchen gets visually bigger when the backsplash and cabinets are the same color.
- **Appliances:** stainless range, microwave hood, dishwasher and a French-door refrigerator.
- **Lighting:** under-cabinet LED strips, which matter more than the ceiling light in a galley kitchen because you work with your back to the ceiling light.
- **Window:** a new vinyl double-hung over the counter, installed in May so the room was sealed before drywall.

## Order of work

Cabinets were set and leveled first, in July. Then the counter was templated and cut, which takes about a week. The backsplash went on after the counter, so the tile sits on the quartz with a clean caulk line. Appliances went in last, after paint. The photos show the cabinets installed with the appliances still wrapped in blue film, and the finished kitchen a few weeks later.

## Expert notes for a rowhome kitchen

**Run the floor through.** We laid the vinyl plank in one direction from the front door to the back wall before the cabinets went in. A threshold or a change of flooring at the kitchen door chops a narrow house into pieces.

**Vent what you can.** An over-the-range microwave recirculates unless there is a duct to the outside. On a party wall there often is not. We tell owners this up front so they can decide whether a ducted hood is worth the extra work.

**Light the counters.** Under-cabinet lighting is a small line in the estimate and the first thing people notice in the finished room.

## Timeline

Cabinets installed in July, counters and backsplash in August, appliances and final paint the same month. The kitchen was part of a whole-house renovation; on its own, a kitchen of this size takes us about three to four weeks once materials are on site.`,
  },

  // ---------------------------------------------------------------- 4. Bathrooms
  {
    slug: "south-philadelphia-rowhome-bathrooms",
    seoTitle: "Two Rowhome Bathrooms, South Philadelphia",
    seoDescription: "A full bath with a tub, marble-look porcelain floor to ceiling and a lighted mirror, plus a compact second bath with grey tile and a curved glass shower.",
    title: "Two bathrooms in one rowhome: a tiled tub bath and a glass shower, South Philadelphia",
    place: "South Philadelphia, PA",
    placeKey: "south-philadelphia",
    when: "May to August 2025",
    date: PUBLISHED,
    services: ["bathroom-remodeling", "flooring-tile-installation", "drywall-repair"],
    summary:
      "The house got two finished bathrooms: a full bath with a tub, marble-look porcelain tile floor to ceiling and a lighted mirror, and a compact second bath with grey tile, a curved glass shower enclosure and a wall-hung sink.",
    scope: [
      "Both rooms taken to the studs, new drywall and cement board",
      "Waterproofed tub surround and shower pan",
      "Bath 1: tub, marble-look porcelain tile on walls and floor, vanity, LED mirror",
      "Bath 2: curved glass corner shower, grey tile, wall-hung sink, toilet",
      "New ventilation fans",
      "Paint and trim",
    ],
    cover: "south-philadelphia-bathroom-marble-tub-after",
    gallery: [
      "south-philadelphia-bathroom-marble-tub-after",
      "south-philadelphia-bathroom-marble-vanity-after",
      "south-philadelphia-bathroom-glass-shower-after",
      "south-philadelphia-bathroom-shower-sink-after",
      "south-philadelphia-bathroom-tile-in-progress",
    ],
    before: "south-philadelphia-bathroom-tile-in-progress",
    after: "south-philadelphia-bathroom-marble-tub-after",
    related: ["south-philadelphia-rowhome-renovation", "south-philadelphia-rowhome-kitchen", "south-philadelphia-rowhome-staircase"],
    published: true,
    body: `## Two rooms, two jobs

A house with one bathroom is a house where somebody is always waiting. This renovation gave the rowhome two finished bathrooms, built with the same materials and the same care, but planned for different jobs. The main bath has a tub for kids and baths. The second bath is a compact shower room that works for guests and for the morning rush.

## Bath 1: the tub bath

- **Tile:** large-format marble-look porcelain on the floor and on every wall, floor to ceiling. Porcelain gives the look of marble without the sealing and the staining, and large tiles mean fewer grout lines to keep clean.
- **Fixtures:** an alcove tub with a tiled surround, a vanity with a quartz top, and a mirror with built-in LED lighting, which gives better face light than a ceiling fixture.
- **Window:** the small window above the tub stayed; it was replaced with a new vinyl unit and the tile returns into the opening so there is no wood sill to rot.

## Bath 2: the shower room

- **Shower:** a curved corner enclosure with a low threshold, chosen because the room is narrow and a square enclosure would have blocked the door swing.
- **Tile:** grey porcelain on the walls and floor, continuous into the shower. One tile everywhere makes a small room feel larger.
- **Sink:** a wall-hung sink instead of a vanity, which keeps the floor clear and makes the room easier to clean. Storage went into a mirrored cabinet instead.

## What is behind the tile

The parts you cannot see in the photos are the parts that decide whether a bathroom lasts:

1. Both rooms were stripped to the studs with the rest of the house, so the framing was checked and straightened before anything went on it.
2. Cement board on all wet walls, with a waterproofing membrane over the tub surround and the shower walls. Drywall and paint are only used outside the wet zone.
3. The shower pan was built with a proper slope to the drain and tested with water before tile.
4. Every room got a new exhaust fan ducted outside. In a rowhome with a shared wall, moisture has nowhere to go without one.

## Expert notes for small bathrooms

**Floor-to-ceiling tile on every wall is worth it in a tiny room.** It costs more in tile than a half-height wainscot, but it removes the line that cuts the room in half, and there is no painted wall above a tub to peel later.

**Pick the enclosure before the tile.** The shower door decides where the curb goes and how the tile is cut. We order the glass first and tile to it.

**Lighted mirrors beat ceiling lights.** In both rooms the mirror is the main light source at the sink. It is a small upgrade that makes the room feel finished.

## Timeline

Tile started in May once drywall and cement board were up. Fixtures, glass and mirrors went in during August with the final paint. Each bathroom on its own would be about two to three weeks of work; here they were scheduled inside the larger project.`,
  },

  // ---------------------------------------------------------------- 5. Lititz basement
  {
    slug: "lititz-basement-remodel",
    seoTitle: "Basement Remodel in Lititz, PA",
    seoDescription: "An older Warwick Township basement opened up and rebuilt: old ceiling and partitions out, new plumbing lines, new drywall and a porcelain tile floor.",
    title: "Basement remodel in Warwick Township, Lititz: plumbing, drywall and a porcelain tile floor",
    place: "Lititz, PA",
    placeKey: "lititz",
    when: "September 2025",
    date: PUBLISHED,
    services: ["basement-finishing", "flooring-tile-installation", "drywall-repair"],
    summary:
      "An older basement near Lititz opened up and rebuilt: old ceiling and partitions out, new plumbing lines, new drywall and a marble-look porcelain tile floor laid around the steel support columns. Photographed in progress; finished photos follow when the owner is ready.",
    scope: [
      "Old drop ceiling, paneling and partitions removed",
      "New plumbing lines run for the future bathroom and laundry",
      "Framing around steel columns and mechanicals",
      "New drywall, taped and finished",
      "Marble-look porcelain tile floor",
    ],
    cover: "lititz-basement-tile-floor",
    gallery: ["lititz-basement-tile-floor", "lititz-basement-demo", "lititz-basement-plumbing-rough"],
    related: ["south-philadelphia-rowhome-renovation"],
    published: true,
    body: `## The starting point

This is a typical Lancaster County basement from the second half of the last century: block walls, a low drop ceiling with yellowed tiles, a few partitions from an old finishing attempt, pipes running wherever they were convenient at the time, and two steel support columns in the middle of the floor. The owner wanted a real living level, with a bathroom and laundry planned in.

## The order of work

A basement is finished from the inside out, and the order is not negotiable:

1. **Moisture first.** We checked the walls and the slab for water before anything else. If a basement is wet, finishing it just hides the problem until the drywall grows mold.
2. **Demolition.** The old ceiling, paneling and partitions came out, which is the stage in the first photo: bare block, open joists, the old pipes exposed.
3. **Plumbing.** New supply and drain lines were run while the ceiling was open, including lines for the planned bathroom. Cutting the slab for a drain is messy work and it has to happen before the floor goes down.
4. **Framing.** Walls were framed around the steel columns and the mechanical equipment so they can be boxed cleanly and still be reached.
5. **Drywall.** Hung, taped and finished. The second photo shows the room at this stage, with the columns boxed and the new lines in.
6. **Floor.** Marble-look porcelain tile, laid in a straight pattern and cut tight around the columns.

## Why porcelain tile in a basement

Owners usually ask for carpet or vinyl plank down here. Both are fine in a dry basement. We suggested porcelain for this one for three reasons:

- A slab is never as dry as a wood floor upstairs. Porcelain does not care about humidity; carpet and some vinyl floors do.
- Tile over a slab is the most durable floor there is. Laundry rooms and basement baths see water on the floor eventually.
- A light marble-look tile reflects what little daylight a basement gets. The room in the last photo already looks brighter than the paneled room it replaced.

The trade-off is that tile is cold underfoot. A rug in the sitting area solves that for a fraction of what a heated floor costs.

## Details that matter

- Tile was laid with spacers for even grout lines and cut to the columns rather than boxed around them at the floor, which keeps the floor plane clean.
- The ceiling framing keeps access to shut-off valves and the cleanout. A finished basement that hides a shut-off is a future emergency.
- Outlets and lighting were roughed in before drywall, with the bathroom and laundry locations already decided.

## Status

The photos on this page were taken in September 2025 while the work was in progress. Finished photos will be added when the owner is ready to share them. If you have a basement like this one in Lititz, Manheim, Ephrata or anywhere in northern Lancaster County, our basement finishing page explains how we approach the job and what to check before you start.`,
  },

  // ---------------------------------------------------------------- 6. Composite deck
  {
    slug: "composite-deck-replacement",
    seoTitle: "Composite Deck Replacement in PA",
    seoDescription: "A grey, splintering wood deck rebuilt with brown composite boards and new stairs on the same footprint, after the frame was inspected and repaired.",
    title: "Weathered wood deck replaced with composite decking",
    place: "Pennsylvania",
    placeKey: "",
    when: "",
    date: PUBLISHED,
    services: ["decks-and-porches", "exterior-remodeling"],
    summary:
      "A grey, splintering wood deck on a white-sided home was rebuilt with brown composite boards and new stairs on the same footprint. The frame was inspected and repaired before the first board went down.",
    scope: [
      "Old decking and stair treads removed",
      "Frame inspected: ledger, joists, posts and footings",
      "Repairs to the frame where needed",
      "Composite decking with hidden fasteners",
      "New stairs",
      "Black railings",
    ],
    cover: "deck-composite-after",
    gallery: ["deck-composite-after", "deck-composite-corner-after", "deck-weathered-before"],
    before: "deck-weathered-before",
    after: "deck-composite-after",
    related: ["modern-farmhouse-bathroom-and-loft"],
    published: true,
    body: `## The starting point

The before photo tells the story. Pressure-treated wood decking that had gone grey and furry, boards cupping and splintering, gaps opening up, and a surface that needed sanding and staining every other year to look acceptable. The deck was still structurally sound where it counted, which is what made this a resurfacing job rather than a tear-out.

## Resurface or rebuild

Every deck job starts with the same question. The decking boards are the skin; the frame underneath is the skeleton. If the skeleton is good, you can replace the skin for a fraction of the cost of a new deck. We check four things before we decide:

1. **The ledger**, the board that attaches the deck to the house. It has to be properly bolted and flashed. A rotten or nailed-only ledger is the number one cause of deck collapses, and it is a rebuild, not a resurface.
2. **The joists.** We probe them with an awl, especially the tops where water sat under the old boards.
3. **The posts and footings.** Posts sitting on or in soil rot from the bottom. Footings have to be below frost line, which in Pennsylvania means about 36 inches.
4. **The connections.** Joist hangers, post bases and bolts. Old decks often have a few that were never there.

This frame passed with a few repairs, so the old boards came off and the frame was prepared for composite.

## Why composite

- No staining, ever. The brown color in the photos is the color it will be in ten years, give or take some fading.
- No splinters, which matters with kids and bare feet.
- Boards are made with a consistent profile, so the surface is flat and the gaps are even.

The honest downsides: composite costs more per board than treated wood, it gets hotter in full sun, and it is heavier, so the joist spacing has to be right. We confirmed 16-inch joist spacing before ordering boards.

## How it was built

- Boards were fastened with hidden clips in the grooved edges, so there are no screw heads on the surface and no place for water to start rot.
- We left the manufacturer's recommended gap between boards for drainage and for the boards to move with temperature.
- Picture-frame boards around the edge give a clean border and cover the cut ends.
- New stairs were built with composite treads on new stringers, and the black railings finish the edges and the stair run.

## Maintenance

Wash it once a year with soap and a soft brush. That is the whole list. No sanding, no stain, no sealer.

## Thinking about your own deck

If your deck looks like the before photo, do not assume it needs to be torn out. Ask us to look at the frame. A resurfacing with composite on a sound frame is one of the best values in exterior work, and we build new decks too when the frame has reached the end of its life. Our decks and porches page covers both.

*The town and date of this project will be added once we confirm them with the homeowner.*`,
  },

  // ---------------------------------------------------------------- 7. Farmhouse bathroom and loft
  {
    slug: "modern-farmhouse-bathroom-and-loft",
    seoTitle: "Modern Farmhouse Bathroom and Loft Railing",
    seoDescription: "A bathroom with geometric wallpaper, a wood door and a subway tile shower, plus an upstairs loft with an oak and iron railing and a barn door wall.",
    title: "Modern farmhouse bathroom, loft railing and a board-and-batten barn door wall",
    place: "Pennsylvania",
    placeKey: "",
    when: "August 2023",
    date: PUBLISHED,
    services: ["bathroom-remodeling", "stairs-and-railings", "painting", "exterior-remodeling"],
    summary:
      "A bathroom with geometric wallpaper, a natural wood door, black-trimmed window and a subway tile shower with a patterned niche, plus an upstairs loft with an oak and iron railing and a dark board-and-batten wall with a sliding barn door.",
    scope: [
      "Bathroom: subway tile shower with a patterned tile niche",
      "Geometric wallpaper outside the wet zone",
      "Natural wood door, black window trim and hardware",
      "Loft railing: oak top rail and posts, black balusters",
      "Board-and-batten accent wall, painted dark",
      "Sliding barn door on a black track",
      "New wood flooring on the loft",
    ],
    cover: "farmhouse-bathroom-wallpaper-wood-door",
    gallery: ["farmhouse-bathroom-wallpaper-wood-door", "farmhouse-shower-subway-tile-niche", "farmhouse-loft-railing-oak-iron", "farmhouse-accent-wall-barn-door"],
    related: ["composite-deck-replacement", "south-philadelphia-rowhome-bathrooms"],
    published: true,
    body: `## The look

Modern farmhouse is the style most of our Lebanon and Lancaster County clients ask for, and it is easy to get wrong. Done well it is white walls, warm wood, black metal and one strong pattern per room. Done badly it is a shiplap wall in every room and a dozen signs that say "gather". This project is the first kind.

## The bathroom

- **Wallpaper where it belongs.** The geometric gold-line wallpaper is the one pattern in the room, and it stays out of the wet zone. The shower is fully tiled, and the wallpaper starts where the tile stops. Wallpaper in a bathroom works if you keep it away from direct water and vent the room properly.
- **A real wood door.** A natural-finish wood door with black hardware against white walls is the warm note the room needs. It was sealed on all six sides before hanging, which is what keeps a wood door flat in a humid room.
- **Black window trim.** The window inside the room was trimmed in black to match the hardware and the fixtures. One line of black around the window ties the whole room to the farmhouse palette.
- **The shower.** White subway tile in a running bond, with a built-in niche lined in a patterned tile. The niche is the one place to spend on a special tile: it is a square foot of material and it is the first thing you see.

## The loft

- **Railing.** The old railing came out and a new one went in: oak top rail and newel posts, square black metal balusters at code spacing, 36 inches high. Oak and black iron is the same pairing we use in our rowhome staircases, because it works with almost any floor.
- **The wall.** A board-and-batten wall painted a deep charcoal, with a sliding barn door on a black track. The photos show the wall during painting and the door hung. Dark board-and-batten reads as a feature wall without any pattern at all; the shadows of the battens do the work.
- **Floor.** New wood-look flooring across the loft, laid before the railing posts were set so there are no cuts around the posts.

## How we build board-and-batten

1. Skim and prime the wall first. Battens hide a lot, but they do not hide a wavy wall.
2. Lay out the battens from the center so the spacing is symmetrical at the corners.
3. Fill every nail hole and caulk every batten edge before paint. The caulk line is what makes it look like one piece.
4. Spray if the room allows it, otherwise brush and roll the field and brush the battens. Dark colors show every roller mark, so the last coat matters.

## Painting notes

Dark walls need a tinted primer. Three coats of a dark charcoal over white primer still looks patchy; two coats over a grey-tinted primer looks right. This is a small thing that saves a day of frustration.

## Timeline

The photos are from August 2023. Work like this, a bathroom plus a loft railing and feature wall, usually runs about three weeks for us.

*The town of this project will be added once we confirm it with the homeowner.*`,
  },

  // ---------------------------------------------------------------- 8. Philly basement
  {
    slug: "south-philadelphia-rowhome-basement",
    seoTitle: "Rowhome Basement Finishing, South Philadelphia",
    seoDescription: "The basement under the rowhome became a finished room: new drywall, a drop ceiling with flush lights, carpet over the slab and louvered closet doors.",
    title: "Finishing a rowhome basement: carpet, drop ceiling and closets, South Philadelphia",
    place: "South Philadelphia, PA",
    placeKey: "south-philadelphia",
    when: "August 2025",
    date: PUBLISHED,
    services: ["basement-finishing", "stairs-and-railings", "drywall-repair", "painting"],
    summary:
      "The basement under the rowhome became a finished room: new drywall, a drop ceiling with flush lights, carpet over the slab, louvered closet doors and carpeted stairs. The last part of the whole-house renovation to be finished.",
    scope: [
      "Moisture check of the block walls and slab before any finish",
      "Framing and drywall on the walls",
      "Drop ceiling with flush LED panels",
      "Carpet and pad over the slab",
      "Louvered bifold closet doors",
      "Carpeted basement stairs",
      "Paint",
    ],
    cover: "south-philadelphia-basement-finished-after",
    gallery: ["south-philadelphia-basement-finished-after", "south-philadelphia-basement-stairs-after", "south-philadelphia-basement-in-progress"],
    before: "south-philadelphia-basement-in-progress",
    after: "south-philadelphia-basement-finished-after",
    related: ["south-philadelphia-rowhome-renovation", "lititz-basement-remodel", "south-philadelphia-rowhome-staircase"],
    published: true,
    body: `## Why the basement came last

In the whole-house plan for this rowhome, the basement was scheduled after everything upstairs. Two reasons. First, the basement is where the new plumbing and wiring for the floors above had to run, so the ceiling had to stay open until the trades were done and inspected. Second, carpet is the one finish that cannot survive a construction site. It went down in the final week, after the painters.

## What a rowhome basement can and cannot be

A century-old city basement has low ceilings, a slab that was never meant to be lived on, and block or stone walls that breathe moisture. It can be a very good family room, office or guest space. It cannot be a bedroom without a legal egress window or door, and we tell every owner that before they plan one.

For this house the owner wanted a comfortable second living room with storage. That decided the finishes.

## The finishes and why

- **Drop ceiling.** A drop ceiling is not glamorous, but in a basement it is the right answer. Every shut-off valve, cleanout and junction box stays reachable by lifting a tile. We used flush LED panels in the grid instead of hanging fixtures, which keeps the headroom.
- **Carpet over the slab.** For a room where people sit on the floor and kids play, carpet with a good pad is warmer and quieter than anything else. It only works in a dry basement, which is why the moisture check came first.
- **Drywall on the walls.** Framed off the block with a gap behind, so the wall can breathe and the drywall never touches masonry.
- **Louvered closet doors.** Louvers let air move through a closet, which stops the musty smell basement closets get behind solid doors.
- **Carpeted stairs.** The basement stair was carpeted to match the floor. It is quieter, warmer and safer than bare treads on a steep run.

## Details that matter

- The slab was checked with a plastic-sheet test before carpet was ordered. Tape a square of plastic to the floor for two days; if the underside is damp, carpet is the wrong floor.
- Outlets were placed on every wall at code spacing, which old basements never have.
- The furnace and water heater area was framed with a full-size door, not a hatch.

## Timeline

Framing and drywall happened with the rest of the house in May and June. The ceiling grid, carpet, doors and paint were done in August, in about a week.

A basement like this adds a whole room to a sixteen-foot-wide house for a fraction of what the same space costs upstairs. If yours is dry and the ceiling height works, it is usually the best value in the house.`,
  },

  // ---------------------------------------------------------------- 9. Philly fence and patio
  {
    slug: "south-philadelphia-cedar-fence-and-patio",
    seoTitle: "Cedar Fence and Patio, South Philadelphia",
    seoDescription: "The back yard rebuilt as a small patio: a cedar privacy fence built on site, a matching cedar planter box, both stained red-brown, and the pad cleaned up.",
    title: "Cedar privacy fence, planter and patio behind a South Philadelphia rowhome",
    place: "South Philadelphia, PA",
    placeKey: "south-philadelphia",
    when: "July to August 2025",
    date: PUBLISHED,
    services: ["exterior-remodeling", "painting"],
    summary:
      "The back yard of the rowhome was rebuilt as a small patio: a cedar privacy fence built on site, a matching cedar planter box, both stained a warm red-brown, and the concrete pad cleaned up and planted.",
    scope: [
      "Old fence removed",
      "Cedar privacy fence with pressure-treated posts set in concrete",
      "Cedar planter box built to match",
      "Semi-transparent stain on fence and planter",
      "Concrete patio cleaned and edged",
      "Planting in the new box",
    ],
    cover: "south-philadelphia-patio-fence-after",
    gallery: ["south-philadelphia-patio-fence-after", "south-philadelphia-fence-build", "south-philadelphia-fence-stained"],
    before: "south-philadelphia-fence-build",
    after: "south-philadelphia-patio-fence-after",
    related: ["south-philadelphia-rowhome-renovation", "composite-deck-replacement", "marysville-ac-screen"],
    published: true,
    body: `## The yard

A South Philadelphia back yard is a concrete rectangle, a few feet wide, looking at the back of the next block. What makes it usable is privacy. The old fence was gone; neighbors on three sides could see straight in. The owner wanted a fence that looked like part of the house, not a lumberyard panel.

## Building the fence

- **Posts first.** Pressure-treated posts set in concrete, below frost depth, spaced for the board run. Cedar is the right wood for the boards, but for posts in the ground treated lumber lasts longer.
- **Cedar boards, built on site.** We ran horizontal cedar boards between the posts rather than hanging pre-made panels. Site-built fences can follow a yard that is not square, and in a rowhome yard nothing is square.
- **A planter to match.** The same cedar, built as a raised box along the fence. It gives the yard something green without taking the patio space a pot would.
- **Stain, not paint.** A semi-transparent red-brown stain. Stain soaks into cedar and weathers gracefully; paint on a fence peels in sheets after a few winters. The second photo shows the fence freshly stained with the planter box beside it.

## The patio

The existing concrete pad was in good shape, so it stayed. It was pressure-washed, the edges cleaned up, and the planter filled and planted. The last photo is the finished yard: fence, planter with new shrubs, and the pad ready for a table.

## Expert notes for a city yard

**Get the fence line right with the neighbors first.** Rowhome lot lines are old and often not where the previous fence was. We checked the survey before setting posts.

**Leave a gap at the bottom.** Cedar boards that touch concrete wick water and rot from the bottom. We hold the boards an inch or two above the pad.

**Stain within the first month.** Fresh cedar takes stain best before it greys. A fence stained the first year and again in three or four years will last decades.

**Think about what you see from inside.** This fence is in view from the new kitchen window. The color was chosen to work with the kitchen, not just the yard.

## Questions we get about city fences

**Cedar, vinyl or pressure-treated?** Cedar looks best and takes stain well; vinyl needs no upkeep but looks like vinyl; pressure-treated is cheapest and needs stain after it dries out. For a yard you look at from the kitchen we recommend cedar.

**How tall can it be?** Philadelphia limits fence height, and so do most townships. Six feet is the usual maximum for a back yard. We check the local rule before we order boards.

**Do I need my neighbor's permission?** Not for a fence on your own side of the line, but a conversation before the posts go in saves a lot of trouble.

## Timeline

Posts and boards in July, stain and planting in August, at the end of the whole-house project so nothing got damaged by the work inside.`,
  },

  // ---------------------------------------------------------------- 10. Philly windows and door
  {
    slug: "south-philadelphia-windows-and-front-door",
    seoTitle: "New Windows and Front Door, South Philadelphia",
    seoDescription: "Every window replaced with vinyl double-hungs, black outside and white inside, plus a new entry door and iron railings on the front steps.",
    title: "Replacement windows, a new front door and iron railings on a brick rowhome, South Philadelphia",
    place: "South Philadelphia, PA",
    placeKey: "south-philadelphia",
    when: "May to August 2025",
    date: PUBLISHED,
    services: ["windows-doors-installation", "exterior-remodeling", "painting"],
    summary:
      "Every window in the rowhome was replaced with a vinyl double-hung unit, black outside and white inside. The old aluminum awning came down, a new entry door with an oval glass panel went in, and the front steps got new iron railings.",
    scope: [
      "Old windows removed from the masonry openings",
      "Vinyl double-hung replacement windows, black exterior, white interior",
      "New interior casing and sills",
      "Aluminum awning removed",
      "New entry door with oval glass, new threshold and trim",
      "New iron railings at the front steps",
      "Exterior caulking and flashing",
    ],
    cover: "south-philadelphia-facade-after",
    gallery: ["south-philadelphia-facade-after", "south-philadelphia-window-new-after", "south-philadelphia-bedroom-windows-after", "south-philadelphia-facade-before", "south-philadelphia-window-old-opening-before"],
    before: "south-philadelphia-facade-before",
    after: "south-philadelphia-facade-after",
    related: ["south-philadelphia-rowhome-renovation", "black-frame-window-installation", "south-philadelphia-rowhome-kitchen"],
    published: true,
    body: `## Before

The before photo shows what most of the block looks like: an aluminum awning over the door, a worn entry door, old windows with failed seals and a railing that had been painted a dozen times. None of it was wrong, exactly. It was just tired, and it did not match the house that was being built inside.

## Windows in a brick house

Replacing windows in a masonry rowhome is a different job from a wood-framed suburban house:

- **Measure every opening.** Brick openings in old houses vary by half an inch or more. Each window was ordered to its own opening, which is why we measured in April and installed in May.
- **Pocket replacement, not full tear-out.** The old sash and frames came out, the brick opening stayed. A full-frame replacement in brick means cutting masonry, and it is rarely worth it.
- **Black outside, white inside.** The exterior frames are black, which gives the brick front a crisp, current look. Inside they are white, so the trim and casing stay simple. This two-color option is standard from most vinyl window makers and costs little extra.
- **Seal, insulate, flash.** Low-expansion foam around the frame, a sill pan under it, caulk on the outside. In a party-wall house the front and back walls are the only ones that face weather, so they get all the attention.

## The front door

The awning came off first. A new entry door with an oval glass panel went into the existing opening, with a new threshold, weatherstripping and trim. White was the right color against the dark brick and black windows: it makes the entry read as the front of the house instead of a hole in it.

## Railings

The old railings came out and new iron railings went in at the front steps, set into the masonry. They match the iron balusters on the new staircase inside, which is a small thing nobody notices and everybody feels.

## Order of work

Windows went in during May so the house was weather-tight before drywall. The door and railings came last, in August, because a new door on a construction site gets scratched. The after photo was taken the week the project finished.

## If your rowhome looks like the before photo

Windows, a door and railings are a smaller project than they look and they change the whole front of the house. We can do them on their own or as part of a bigger renovation. Our windows and doors page covers how we measure and what to expect.`,
  },

  // ---------------------------------------------------------------- 11. Philly floors
  {
    slug: "south-philadelphia-vinyl-plank-floors",
    seoTitle: "Vinyl Plank Floors, South Philadelphia Rowhome",
    seoDescription: "One floor, one direction, every room: grey oak-look vinyl plank across the first floor and bedrooms, subfloor flattened first, planks run front to back.",
    title: "Vinyl plank floors through a whole rowhome, South Philadelphia",
    place: "South Philadelphia, PA",
    placeKey: "south-philadelphia",
    when: "June to August 2025",
    date: PUBLISHED,
    services: ["flooring-tile-installation", "whole-home-renovation"],
    summary:
      "One floor, one direction, every room: grey oak-look vinyl plank laid across the first floor and the bedrooms of the rowhome, with the subfloor flattened first and the planks run front to back to stretch a narrow house.",
    scope: [
      "Old flooring and underlayment removed",
      "Subfloor screwed down, leveled and swept",
      "Vinyl plank laid front to back through the first floor",
      "Same plank in all bedrooms upstairs",
      "Transitions only at the bathrooms",
      "New baseboard and shoe molding",
    ],
    cover: "south-philadelphia-living-room-fireplace-after",
    gallery: ["south-philadelphia-living-room-fireplace-after", "south-philadelphia-living-room-front-after", "south-philadelphia-bedroom-after", "south-philadelphia-lvp-flooring-install"],
    before: "south-philadelphia-lvp-flooring-install",
    after: "south-philadelphia-living-room-front-after",
    related: ["south-philadelphia-rowhome-renovation", "schaefferstown-lvp-flooring", "south-philadelphia-rowhome-kitchen"],
    published: true,
    body: `## One floor for the whole house

The single biggest decision in this renovation was also one of the cheapest: use one flooring everywhere. Grey oak-look vinyl plank runs from the front door through the living room, into the kitchen, and across every bedroom upstairs. The only breaks are the tiled bathrooms and the carpeted basement.

In a house sixteen feet wide, every threshold is a wall. Take them out and the house feels like one space.

## Why vinyl plank

- It is waterproof, which matters in a kitchen and in a house with an old basement under it.
- It goes down as a floating floor over a flat subfloor, no nailing and no glue, so it is fast and clean.
- The oak look is convincing at normal viewing distance and it does not need refinishing.
- It is tough enough for a rowhome front door that opens straight onto the sidewalk.

The honest trade-off: it is not real wood. If an owner wants a floor that can be sanded and refinished in thirty years, we install hardwood instead. For a rental or a family house, vinyl plank is usually the right call.

## The subfloor is the job

The planks are the easy part. Before any went down:

1. The old flooring and underlayment came out and the subfloor was screwed to the joists to stop squeaks.
2. High spots were sanded and low spots filled. Vinyl plank shows every hump in the floor beneath it.
3. The floor was swept and vacuumed. One screw head under a plank shows up as a bump forever.

The in-progress photo shows the planks going down in June with the first floor still at the drywall stage.

## Direction and layout

Planks run front to back, the long way, which is also the way light comes in from the front window. We started the layout from the longest straight wall and planned the cuts so no sliver of plank ends up at a doorway.

## Details that matter

- A quarter-inch expansion gap at every wall, hidden by new baseboard and shoe molding. Floating floors move with the seasons.
- The floor went down before the kitchen cabinets, so it runs under the toe kicks and a future cabinet change will not leave a hole.
- Transitions at the bathrooms are flat metal strips, not raised thresholds.

## Timeline

First floor in June, bedrooms in July, baseboard and shoe molding with the final paint in August. About three days of installation in total, spread across the project.`,
  },

  // ---------------------------------------------------------------- 12. Hershey
  {
    slug: "hershey-kitchen-and-stairs",
    seoTitle: "Kitchen Update and New Stairs near Hershey, PA",
    seoDescription: "Two jobs in one West Hanover Township house: a straight run of stairs rebuilt with new treads and painted risers, and a kitchen update with an island.",
    title: "Kitchen update and new stair treads near Hershey, West Hanover Township",
    place: "West Hanover Township, PA",
    placeKey: "hershey",
    when: "September 2025",
    date: PUBLISHED,
    services: ["kitchen-remodeling", "stairs-and-railings", "painting"],
    summary:
      "Two jobs in one house east of Harrisburg: a straight run of stairs rebuilt with new wood treads and painted risers, and a kitchen update with dark cabinets and a granite island. Photographed in September 2025 with the work in progress.",
    scope: [
      "Old stair treads and risers removed",
      "New wood treads, risers painted white",
      "Stair walls patched and painted",
      "Kitchen update: dark cabinets, granite island",
      "Lighting and paint",
    ],
    cover: "hershey-stairs-new-treads",
    gallery: ["hershey-stairs-new-treads", "hershey-kitchen-dark-cabinets-island"],
    related: ["south-philadelphia-rowhome-staircase", "south-philadelphia-rowhome-kitchen"],
    published: true,
    body: `## Two jobs, one visit

Homeowners around Hershey and the East Shore often call us for one thing and add a second once we are there. This house was a stair job that grew to include the kitchen. Doing both at once saves the setup time and the dust barriers only go up once.

## The stairs

A straight, enclosed run between the first and second floor, the most common stair in a suburban colonial. The old treads were worn and the carpet had been off for years.

- **New wood treads** replaced the old ones. On a straight enclosed run this can be done tread by tread without rebuilding the stringers, as long as the stringers are sound. These were.
- **Risers painted white**, which makes a closed stair feel lighter and shows off the wood treads.
- **Walls patched and painted** where the old treads had torn the drywall.

The photo shows the finished run from the bottom, with the walls painted and the treads sealed.

## The kitchen

The kitchen is a different style from the white kitchens we build in the city: dark cabinets, a granite island and warm walls. The photo was taken mid-project, with tools on the island, which is honest about where the job was in September. The finished kitchen photo will be added when the owner is ready.

## Expert notes

**Check the stringers before you buy treads.** A tread retrofit is a good value only if the structure under it is straight and solid. We probe and sight every stringer first. If they are shot, it is a rebuild, like our South Philadelphia staircase.

**Paint risers, finish treads.** Painted risers hide the small gaps that open at the back of a tread over time and they take scuffs from shoes better than stain.

**Dark cabinets want more light.** A kitchen with dark cabinets needs under-cabinet lighting and good ceiling light or it reads as a cave. We plan the lighting before the cabinet color is final.

## Questions we get about jobs like this

**Can you replace just the treads?** Yes, when the stringers are sound. It costs a fraction of a new staircase and takes a day or two for a straight run.

**Will the new treads match our floors?** We bring tread samples to the walkthrough. Oak and maple treads can be stained to match most hardwood; for vinyl plank floors we usually pick a close tone rather than chasing an exact match.

**Do you need the whole kitchen empty to update it?** For cabinet and counter work, yes, for the days we are in there. For paint and lighting, we work around you.

## Status

Work in progress, September 2025. If you are in Hershey, Hummelstown or Harrisburg's East Shore and have a stair or a kitchen like this one, our stairs and railings and kitchen remodeling pages explain how we work.`,
  },

  // ---------------------------------------------------------------- 13. Schaefferstown floors
  {
    slug: "schaefferstown-lvp-flooring",
    seoTitle: "Vinyl Plank Flooring near Schaefferstown, PA",
    seoDescription: "Old flooring out, subfloor prepared, light oak-look vinyl plank laid across a living room with a brick fireplace, furniture back in place within the week.",
    title: "Vinyl plank flooring in a Heidelberg Township living room, near Schaefferstown",
    place: "Schaefferstown, PA",
    placeKey: "schaefferstown",
    when: "May to June 2025",
    date: PUBLISHED,
    services: ["flooring-tile-installation"],
    summary:
      "Old flooring out, subfloor prepared, light oak-look vinyl plank in across a living room with a brick fireplace, and the furniture back in place within the week. A small job done right, ten minutes from our shop.",
    scope: ["Old flooring removed", "Subfloor preparation", "Vinyl plank installation", "New shoe molding", "Furniture moved and reset"],
    cover: "schaefferstown-lvp-flooring-after",
    gallery: ["schaefferstown-lvp-flooring-after", "schaefferstown-lvp-flooring-install"],
    before: "schaefferstown-lvp-flooring-install",
    after: "schaefferstown-lvp-flooring-after",
    related: ["south-philadelphia-vinyl-plank-floors", "lititz-basement-remodel"],
    published: true,
    body: `## The room

A living room in Heidelberg Township, a few minutes south of Myerstown: brick fireplace, a bay of windows onto the yard, and a floor that had reached the end of its life. The owner wanted a lighter room without a renovation.

## What we did

- **Out with the old.** The old flooring came up and the subfloor was checked, screwed down where it moved and vacuumed clean.
- **Light oak-look vinyl plank.** A pale plank with a matte finish. Against the red brick of the fireplace a light floor lifts the whole room; a dark one would have made it heavier.
- **Planks run toward the windows.** We laid them the long way, toward the light, which is the direction that makes a room look longest.
- **Shoe molding, not quarter round.** New shoe molding covers the expansion gap at the baseboard with a smaller profile.
- **Furniture out and back.** The in-progress photo shows the sectional pushed aside with the planks going down; the finished photo shows the room back together.

## Why a small floor job is worth doing well

A floor is the biggest surface in a room. Replacing it changes the room more than new paint and costs less than new furniture. It is also the easiest job to do badly: a wavy subfloor, a tight expansion gap or planks run the wrong way show forever.

## Details that matter

- Planks were acclimated in the house before installation so they did not shrink after.
- The first row was set off the straightest wall and the last row was planned so it was not a sliver.
- The hearth got a clean straight cut and a flush transition, no raised threshold.

## Timeline

Flooring removed and subfloor prepared one day, planks and molding the next, furniture back the same week. Photos from May and June 2025.

## Questions we get about a floor like this

**Can vinyl plank go over the old floor?** Over a flat, sound hard floor, sometimes. Over carpet, never. Here the old floor came out so the subfloor could be fixed, which is the only way to guarantee a flat result.

**Do you move the furniture?** Yes. We move it, protect it and put it back. Pianos and aquariums are the exceptions we talk about first.

**How long before we can walk on it?** Right away. A floating vinyl plank floor has no glue to cure. Heavy furniture can go back the same day.

Floors like this are the most common job we do in Myerstown, Schaefferstown, Lebanon and Cornwall. Our flooring and tile page lists what we install.`,
  },

  // ---------------------------------------------------------------- 14. Deck with vinyl railings
  {
    slug: "deck-with-vinyl-railings",
    seoTitle: "Composite Deck with Vinyl Railings",
    seoDescription: "A new raised deck off a brick and siding ranch: treated frame on concrete footings, brown composite decking, white vinyl railings and a wide stair.",
    title: "New composite deck with white vinyl railings and a wide stair",
    place: "Pennsylvania",
    placeKey: "",
    when: "August 2022",
    date: PUBLISHED,
    services: ["decks-and-porches", "exterior-remodeling"],
    summary:
      "A new raised deck off the back of a brick and siding ranch home: pressure-treated frame on concrete footings, brown composite decking, white vinyl railings that match the trim, and a wide stair down to the yard.",
    scope: [
      "Layout and permit",
      "Concrete footings below frost line",
      "Pressure-treated frame with flashed ledger",
      "Composite decking with hidden fasteners",
      "White vinyl railing system",
      "Wide stair with closed risers",
    ],
    cover: "deck-white-vinyl-railings",
    gallery: ["deck-white-vinyl-railings", "deck-white-vinyl-railings-stairs", "deck-white-vinyl-railings-corner"],
    related: ["composite-deck-replacement", "deck-resurfacing-new-boards"],
    published: true,
    body: `## The house

A single-story home with a brick base and tan siding, white trim, and a back door that opened onto a drop to the yard. The owner wanted a deck for a table and chairs and an easy way down to the lawn. The photos show the finished deck in August 2022 with the yard still bare from the construction.

## How a new deck gets built

Unlike the resurfacing jobs on this site, this was a deck from the ground up, which means the frame is the whole story:

1. **Permit and layout.** A deck attached to a house needs a permit in almost every Pennsylvania township. We draw it, submit it and lay it out on the ground before digging.
2. **Footings.** Concrete footings dug below frost line, about 36 inches here, with the posts on metal bases above the concrete so they never sit in water.
3. **Ledger.** The board that ties the deck to the house is bolted through to the framing and flashed so water cannot get behind the siding. This is the part that fails on badly built decks.
4. **Frame.** Pressure-treated joists at 16 inches on center, with the tops taped so water does not sit in the fastener holes under the boards.
5. **Decking.** Brown composite boards with hidden fasteners, so the surface has no screw heads.
6. **Railings and stairs.** A white vinyl railing system, posts sleeved over treated posts, and a wide stair with closed risers.

## Why white vinyl railings

The house has white trim and white windows. A white railing ties the deck to the house instead of making it look like an add-on. Vinyl railings never need paint, which is the difference between a deck you use and a deck you maintain. The trade-off is a chunkier profile than metal; on a house like this one it looks right.

## Why a wide stair

A deck stair that is only as wide as code requires feels like a fire escape. This one is wide enough for two people, which makes the yard part of the deck instead of a place you climb down to.

## Expert notes

- Composite boards on a new frame need the joist spacing the manufacturer specifies. Sixteen inches is standard; some boards want twelve on a diagonal layout.
- Leave the yard grading for after the deck. The photos show the ground raw because the deck came first and the lawn repair second.
- Picture-frame the edge so no cut ends show.

*The town of this project will be added once we confirm it with the homeowner.*`,
  },

  // ---------------------------------------------------------------- 15. Deck resurfacing
  {
    slug: "deck-resurfacing-new-boards",
    seoTitle: "Deck Resurfacing with Composite Boards",
    seoDescription: "A long side deck got new brown composite boards and rebuilt stairs on its existing frame, with the original wood railings kept for later. Done in February.",
    title: "Deck resurfacing in February: new composite boards and stairs, original railings kept",
    place: "Pennsylvania",
    placeKey: "",
    when: "February 2023",
    date: PUBLISHED,
    services: ["decks-and-porches"],
    summary:
      "A long deck along the side of a house got new brown composite boards and rebuilt stairs on its existing frame, with the original wood railings left in place for a later phase. Done in winter, between the owner's two budget years.",
    scope: [
      "Old deck boards and stair treads removed",
      "Frame inspected and repaired",
      "Composite boards laid on the existing joists",
      "Stairs rebuilt with composite treads",
      "Original railings kept for a later phase",
    ],
    cover: "deck-resurfaced-boards",
    gallery: ["deck-resurfaced-boards", "deck-resurfaced-angle", "deck-resurfaced-stairs"],
    related: ["composite-deck-replacement", "deck-with-vinyl-railings"],
    published: true,
    body: `## A deck in two phases

Not every deck job has to be done at once. This long deck ran along the side of the house and down a stair to the driveway. The boards were finished; the frame was fine; the railings were old but safe. The owner's budget covered the boards this year and the railings next year, so that is how we did it.

## What we did

- **Boards off, frame checked.** The old wood decking and stair treads came off. We probed every joist and checked the ledger and posts. The frame passed.
- **New composite boards.** Brown composite decking laid across the existing joists with hidden fasteners, running the length of the deck.
- **Stairs rebuilt.** New composite treads on the stair stringers, with the original railings on each side.
- **Railings left alone.** The original wood railings stayed. They are sound, and replacing them later does not disturb the new boards.

## Working in winter

The photos are from February. Decks can be resurfaced in cold weather with two adjustments:

1. **Gapping.** Composite boards expand in heat and contract in cold. Boards installed at 30 degrees are at their shortest, so they get a tighter gap than boards installed in July, or the summer gap will be too wide. The manufacturer publishes a chart; we follow it.
2. **Fasteners.** Hidden clips and screws go in fine in the cold. What does not work in winter is stain and sealer, which is another reason composite suits a winter job: there is nothing to apply.

## Why keep the old railings

A railing replacement is a separate job with its own cost. If the existing railing is structurally sound and meets code height, there is no reason it has to go the same day the boards do. We told the owner what to budget for the railings and the deck is usable in the meantime.

## Questions we get about resurfacing

**How do I know if my frame is good enough?** Push an awl into the joists where the boards were. If it sinks in more than a quarter inch, that joist is done. Check the ledger bolts and the post bottoms the same way. We do this for free at the walkthrough.

**Can you do it in winter?** Yes, as long as the ground is not frozen hard where posts need work. Boards and fasteners do not care about the cold; stain and sealer do, and composite needs neither.

**How long does it last?** Composite boards carry 25-year warranties from most makers. The frame under them is the limit, which is why we only resurface frames that will outlast the boards.

## Expert notes

- Composite boards over an old frame need the frame to be flat. We shimmed two joists that had sagged so the new surface runs true.
- Stair treads take more abuse than the deck surface. Composite stair treads with a nosing board look finished and do not splinter.
- When the railings are replaced, the posts can be sleeved or set beside the old ones without lifting a board.

*The town of this project will be added once we confirm it with the homeowner.*`,
  },

  // ---------------------------------------------------------------- 16. Black-frame windows
  {
    slug: "black-frame-window-installation",
    seoTitle: "Black-Frame Window Installation",
    seoDescription: "Three new black-frame double-hung windows with divided lites, installed and cased in white during a room renovation.",
    title: "Three black-frame double-hung windows with white casing",
    place: "Pennsylvania",
    placeKey: "",
    when: "September 2022",
    date: PUBLISHED,
    services: ["windows-doors-installation", "painting"],
    summary:
      "A row of three new black-frame double-hung windows with divided lites, installed and cased in white during a room renovation, photographed with the manufacturer labels still on the glass.",
    scope: [
      "Three new double-hung windows, black frames, grids",
      "Openings framed and insulated",
      "White casing, stool and apron",
      "Exterior flashing and trim",
    ],
    cover: "windows-black-frames-new",
    gallery: ["windows-black-frames-new", "windows-black-frame-single"],
    related: ["south-philadelphia-windows-and-front-door", "modern-farmhouse-bathroom-and-loft"],
    published: true,
    body: `## The windows

Three double-hung windows in a row, black frames inside and out, with grids that divide each sash into lites. They were installed during a room renovation, which is why the photos show a plywood floor and a ladder: windows go in before drywall and flooring, not after.

## Why black windows work

Black window frames are the biggest change in residential windows in a decade, and they are not just a trend. A black frame disappears against the view outside, so the window reads as a hole in the wall rather than a white rectangle. With white casing around it, the contrast makes the wall feel more finished than a plain white window ever does.

Two cautions we give every owner:

- Black frames show dust and pollen more than white ones. They want a wipe-down each spring.
- On a south or west wall in full sun, dark vinyl frames get hot. Fiberglass or composite frames handle it better. We match the frame material to the wall.

## The installation

1. **Openings framed square.** New windows in a renovated wall get new framing, with the header sized for the opening.
2. **Set, shimmed, checked.** Each window is shimmed plumb and level and checked by opening and closing both sashes before it is fastened.
3. **Insulated and sealed.** Low-expansion foam in the gap around the frame, a sill pan underneath, exterior flashing tape to the housewrap.
4. **Cased in white.** Flat casing, a stool and an apron, painted white, which frames the black and ties the windows to the trim in the rest of the house.

## Why the labels are still on

The labels on the glass carry the energy ratings and the serial numbers. We leave them until the final walkthrough so the owner can see what was installed and the inspector can read them. They peel off clean.

## Grids or no grids

The grids in these windows sit between the glass panes, so they never need cleaning around. They suit an older or traditional house; on a very modern house we usually leave the glass clear. The owner's call, and we show samples of both.

## Questions we get about black windows

**Are black windows more expensive?** Usually a little, for the exterior color. Black inside and out costs more than black outside and white inside. We price both.

**Will they fade?** Good vinyl and fiberglass frames use through-color or a bonded finish and carry a fade warranty. Cheap painted frames do fade. We only install windows with a color warranty.

**Can I mix black and white windows on one house?** Yes, and it is common: black on the front and sides, white in the back where nobody sees them. It saves money without changing the look from the street.

## Timeline

Windows installed and cased in a day; the room continued after. Photos from September 2022.

*The town of this project will be added once we confirm it with the homeowner.*`,
  },

  // ---------------------------------------------------------------- 17. Marysville AC screen
  {
    slug: "marysville-ac-screen",
    seoTitle: "AC Unit Privacy Screen, Marysville PA",
    seoDescription: "A board-and-batten privacy screen around an outdoor AC unit, with a hinged service door, painted to match the sage-green siding, with room to breathe.",
    title: "Board-and-batten screen for an outdoor AC unit, Marysville",
    place: "Marysville, PA",
    placeKey: "marysville",
    when: "September 2025",
    date: PUBLISHED,
    services: ["exterior-remodeling", "painting"],
    summary:
      "A small carpentry job that solves a common problem: a board-and-batten privacy screen around an outdoor air conditioning unit, built with a hinged service door, painted to match the sage-green siding, with the clearance the unit needs to breathe.",
    scope: [
      "Layout for airflow and service clearance",
      "Pressure-treated frame",
      "Board-and-batten panels",
      "Hinged service door",
      "Exterior paint matched to the siding",
    ],
    cover: "exterior-ac-screen-board-batten",
    gallery: ["exterior-ac-screen-board-batten", "exterior-ac-screen-front", "exterior-ac-screen-inside"],
    related: ["south-philadelphia-cedar-fence-and-patio", "modern-farmhouse-bathroom-and-loft"],
    published: true,
    body: `## The problem

New houses put the outdoor AC unit where the HVAC contractor wants it, which is usually the first thing you see when you walk around the house. This one sat on a concrete pad beside the side door, in full view from the driveway.

## The screen

A three-sided board-and-batten enclosure with a hinged door on the fourth side, built in September 2025 and painted the same sage green as the siding, with white trim to match the house. From the driveway it reads as part of the house. From inside, as the last photo shows, the unit sits on its pad with open space on every side.

## The rules for screening an AC unit

An air conditioner is a fan that moves a lot of air. Box it in and it works harder, costs more to run and dies young. We build screens to these rules:

- **Two feet of clear space** on every side of the unit, minimum. The manufacturer's spec sheet gives the exact number; we check it.
- **Nothing above it.** The fan blows up. A screen with a roof or a shelf over the unit is the worst thing you can do to it.
- **Gaps in the panels.** Board-and-batten with spacing lets air through while blocking the view. A solid panel does not.
- **A service door.** The technician needs to get at the unit from the front with a gauge set and a coil brush. Our door is full height and swings clear.
- **Keep it off the ground.** The frame sits on the pad and on treated blocking, not on soil, so the bottom does not rot.

## Materials

- Pressure-treated frame.
- Board-and-batten panels in exterior-grade boards, primed on all sides before assembly so the end grain is sealed.
- Exterior paint color-matched to the siding. Two coats, after primer.
- Stainless or coated fasteners, because this stays wet.

## Why we take jobs this size

A screen like this is a day of carpentry. It is the kind of job big remodelers do not return calls for. We do, because the same homeowner calls us when the kitchen comes up, and because a house is made of small things done right as much as big ones.

Marysville is across the river from Harrisburg, a little outside our usual forty minutes. We took this one because the owner asked and the job was quick. If you are nearer Lebanon, Hershey or Lititz, we are already in your area most weeks.`,
  },
];

export const publishedProjects = projects.filter((p) => p.published);
export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
