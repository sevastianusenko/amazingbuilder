import type { Faq } from "@/lib/site";

/**
 * Service-area pages. Each town is written on its own: different facts, different housing, a different
 * set of services that matter there, and a different section order (`variant`) so the pages do not read
 * as one template with the town name swapped. Facts come from the July 2026 research for the old site
 * (checked then) and from the places themselves; nothing about a town is invented.
 */
export type Town = {
  slug: string;
  name: string;
  county: string;
  driveMinutes: number; // from Myerstown, approximate
  miles: number;
  variant: "story" | "guide" | "qa";
  title: string;
  h1: string; // keyword-led, matches what the old page ranked for
  tagline: string; // the line in our own voice under the H1
  description: string;
  intro: string[]; // first paragraph is the lede
  route: string; // how we get there
  glance: [string, string][]; // label, value
  houses: { title: string; text: string }[]; // the housing here and what it needs
  focus: { slug: string; why: string }[]; // services that matter here, with the local reason
  notes: string[]; // practical local notes
  nearby: string[]; // neighborhoods and townships we cover from here
  photos: string[]; // photo keys of relevant work; stamps say where they were taken
  projects: string[]; // project slugs nearby
  faqs: Faq[];
};

export const towns: Town[] = [
  // ---------------------------------------------------------------- Myerstown (home base)
  {
    slug: "myerstown-pa",
    name: "Myerstown",
    county: "Lebanon County",
    driveMinutes: 0,
    miles: 0,
    variant: "story",
    title: "Remodeling Contractor in Myerstown, PA",
    h1: "Home remodeling and painting contractor in Myerstown, PA",
    tagline: "Your remodeler down the road in Myerstown",
    description: "Based on South 5th Avenue in Myerstown, PA. Kitchens, bathrooms, basements, stairs, floors and painting for Myerstown, Jackson Township and Newmanstown.",
    intro: [
      "Our shop is at 3564 South 5th Avenue, on the south edge of Myerstown. The trucks park here at night and most Myerstown addresses are under ten minutes from the door, which means an estimate this week and a crew that does not lose an hour of your day to the drive.",
      "Myerstown sits in the eastern half of Lebanon County, with Jackson Township around it and Millcreek and Heidelberg Townships just south. It is the tightest, fastest part of our service area, and it is also where the oldest houses we work on are: Pennsylvania German farmhouses from the 1700s and 1800s around Newmanstown and Schaefferstown, with thick masonry walls, low ceilings and additions added generation after generation. Fort Zeller, near Newmanstown, is one of the oldest buildings in the county, and plenty of working farmhouses nearby share its bones.",
      "The newer side of Myerstown is the developments along the edges of the borough and out toward Richland: colonials and split-levels from the last thirty years with aging vinyl siding, worn carpet and basements nobody finished. We work in both kinds of house, often in the same week.",
    ],
    route: "We are here. Jackson Township, Newmanstown, Schaefferstown and Richland are all within ten to fifteen minutes.",
    glance: [
      ["Our shop", "3564 S 5th Ave, Myerstown, PA 17067"],
      ["Township", "Jackson Township, with Millcreek and Heidelberg to the south"],
      ["Oldest houses", "Pennsylvania German farmhouses, 1700s and 1800s"],
      ["Newest houses", "Colonials and split-levels, last thirty years"],
    ],
    houses: [
      { title: "Farmhouses around Newmanstown and Schaefferstown", text: "Stone and brick, thick walls, low ceilings, wiring and plumbing updated piecemeal over decades, floors and walls that are never square. A kitchen or bathroom here is planned for surprises behind the walls, and insulation behind the original plaster is usually thin or missing." },
      { title: "Borough houses on the grid", text: "Brick and frame houses from the late 1800s to the 1950s along Main Avenue and the side streets. One bathroom upstairs, a kitchen at the back, a basement with a stone or block foundation that needs a moisture check before it is finished." },
      { title: "Developments at the edges", text: "Colonials and split-levels with builder-grade finishes: vinyl siding at the end of its life, carpet to replace, a full basement waiting to be finished, a kitchen that was never upgraded from the original cabinets." },
    ],
    focus: [
      { slug: "kitchen-remodeling", why: "Farmhouse kitchens that need structural work and new systems, and builder-grade kitchens in the developments that need cabinets and counters." },
      { slug: "bathroom-remodeling", why: "The single upstairs bathroom in a borough house, and owner's-suite baths in the newer colonials." },
      { slug: "basement-finishing", why: "Stone and block foundations get a moisture check first; the newer poured basements are the easiest finishes in the county." },
      { slug: "flooring-tile-installation", why: "We laid vinyl plank in a Heidelberg Township living room a few minutes from the shop; floors are our most common small job here." },
      { slug: "painting", why: "Freeze-thaw winters and humid summers are hard on exterior paint. We prep for that, not for a national color guide." },
    ],
    notes: [
      "Jackson Township and Myerstown Borough each handle permits; we pull them for basements, structural work and anything with new electrical or plumbing.",
      "Houses built before 1978, which is most of the borough, get lead-safe work practices whenever old paint is disturbed.",
      "Farmhouse additions often have framing that does not match the original house. We open a wall before we order cabinets or windows for it.",
    ],
    nearby: ["Jackson Township", "Richland", "Newmanstown", "Schaefferstown", "Millcreek Township", "Heidelberg Township", "Cleona", "Jonestown"],
    photos: ["schaefferstown-lvp-flooring-after", "schaefferstown-lvp-flooring-install"],
    projects: ["schaefferstown-lvp-flooring"],
    faqs: [
      { q: "Do you charge for travel in Myerstown?", a: "No. There is no travel charge anywhere in our normal service area, and Myerstown is the one place where the drive is measured in minutes." },
      { q: "How fast can you come out for an estimate?", a: "Usually the same week. The walkthrough is free and the written estimate follows within a few days." },
      { q: "Do you work on the old farmhouses outside town?", a: "Yes, and we plan for them: knob-and-tube wiring, galvanized pipes, plaster, out-of-square openings. The contingency we recommend on a farmhouse is 15 percent, and we show you anything we find the day we find it." },
      { q: "Do you take small jobs in Myerstown?", a: "Yes. A floor, a bathroom refresh, a railing, a room of paint. Small jobs in our own town are how most of our clients find us." },
    ],
  },

  // ---------------------------------------------------------------- Lebanon
  {
    slug: "lebanon-pa",
    name: "Lebanon",
    county: "Lebanon County",
    driveMinutes: 15,
    miles: 9,
    variant: "guide",
    title: "Home Remodeling Contractor in Lebanon, PA",
    h1: "Home remodeling and painting contractor in Lebanon, PA",
    tagline: "Remodeling the older houses of Lebanon",
    description: "Kitchen, bathroom, basement and stair remodeling plus painting in Lebanon, PA. Rowhomes and twins from the 1890s to the 1950s are our specialty.",
    intro: [
      "Lebanon is the county seat and the biggest town in our service area, fifteen minutes west of our shop on Route 422, which becomes Cumberland Street through downtown. Most of the city's houses were built between the 1890s and the 1950s: brick rowhomes and twins on narrow lots, with a straight staircase in the middle, one bathroom upstairs and a kitchen at the back.",
      "That is a specific kind of house and it needs a specific kind of contractor. The stairs are steep, the walls are plaster, the kitchen has one wall for plumbing, and the basement has a stone or block foundation that has seen a century of wet springs. We have rebuilt exactly this house, top to bottom, and the work on this page is organized around what Lebanon houses actually need.",
    ],
    route: "Route 422 west from Myerstown, about 15 minutes to Cumberland Street. North and South Lebanon Township and Cleona are a few minutes more.",
    glance: [
      ["Distance from our shop", "About 9 miles, 15 minutes on Route 422"],
      ["Founded", "Laid out in the 1740s; a city since 1885; the county seat"],
      ["Housing", "Brick rowhomes and twins, 1890s to 1950s, on the downtown grid"],
      ["Around the city", "North and South Lebanon Townships, Cleona, Avon"],
    ],
    houses: [
      { title: "Rowhomes and twins on the grid", text: "Sixteen to twenty feet wide, a shared wall on one or both sides, a steep straight stair, plaster walls and a kitchen against the party wall. The order of work matters here: stairs before floors, windows before drywall, kitchen before paint." },
      { title: "Larger houses on the west end and in the townships", text: "Brick foursquares and Colonial Revivals with real trim, and post-war ranches and capes in North and South Lebanon Township with one small bathroom and an unfinished basement." },
      { title: "Investment and rental houses", text: "Lebanon has a lot of rentals. Those need durable floors, scrubbable paint and a fast turnaround between tenants, and we schedule them that way." },
    ],
    focus: [
      { slug: "stairs-and-railings", why: "The steep, worn stair in a Lebanon rowhome is usually the first thing to fix. We rebuild them from the stringers up or retread them in a day." },
      { slug: "bathroom-remodeling", why: "One bathroom for the whole house is the Lebanon problem. A second bath in the basement or a tub-to-shower conversion upstairs is the usual answer." },
      { slug: "kitchen-remodeling", why: "Narrow kitchens with one plumbing wall. Cabinets to the ceiling, the floor run through from the front room, a window over the sink." },
      { slug: "painting", why: "Plaster walls that need patching before paint, and lead-safe prep on anything built before 1978, which is nearly everything downtown." },
      { slug: "windows-doors-installation", why: "Pocket replacements in brick openings, each one measured, black outside and white inside if you want the look." },
      { slug: "basement-finishing", why: "After a moisture check. Stone and block basements in Lebanon can be finished, but the water comes first." },
    ],
    notes: [
      "Permits come from the City of Lebanon for structural, electrical and plumbing work; the townships handle their own. We pull them.",
      "Narrow streets mean the dumpster and the materials need a plan. We arrange it before day one so nobody loses a parking space for a month.",
      "In a rowhome, dust travels through the whole house. We seal the work zone and the stair on every job.",
    ],
    nearby: ["Downtown Lebanon", "West Lebanon", "North Lebanon Township", "South Lebanon Township", "Cleona", "Avon", "Cornwall Borough line"],
    photos: ["hershey-stairs-new-treads", "south-philadelphia-stairs-iron-balusters-after", "south-philadelphia-kitchen-white-shaker-after", "south-philadelphia-bathroom-marble-tub-after"],
    projects: ["south-philadelphia-rowhome-staircase", "south-philadelphia-rowhome-kitchen"],
    faqs: [
      { q: "Have you worked on rowhomes like the ones in Lebanon?", a: "Yes. In 2025 we took a brick rowhome from bare studs to finished: new staircase, kitchen, two bathrooms, basement, floors and windows. The photos on this page are from that house, and the stamp on each one says so. Lebanon's rowhomes are the same kind of house." },
      { q: "Can you add a bathroom to a Lebanon rowhome?", a: "Usually in the basement, with an ejector pump if the drain is below the sewer line, or by converting a closet upstairs near the existing stack. We look at where the plumbing already runs before we suggest anything." },
      { q: "Is there a travel charge to Lebanon?", a: "No. Lebanon is fifteen minutes from the shop and we are there regularly." },
      { q: "What about the old paint in a Lebanon house?", a: "Anything built before 1978 gets lead-safe work practices whenever paint is disturbed: containment, cleanup, no dry sanding. It is the law and it is how we protect the kids in the house." },
    ],
  },

  // ---------------------------------------------------------------- Annville
  {
    slug: "annville-pa",
    name: "Annville",
    county: "Lebanon County",
    driveMinutes: 20,
    miles: 12,
    variant: "qa",
    title: "Remodeling Contractor in Annville, PA",
    h1: "Home remodeling and painting contractor in Annville, PA",
    tagline: "Remodeling and painting in Annville, from the historic district to the campus rentals",
    description: "Remodeling and painting for Annville, PA: historic homes near Lebanon Valley College and the rentals around campus. Kitchens, bathrooms, floors, paint.",
    intro: [
      "Annville is twelve miles down Route 422 from our shop, past Lebanon, about twenty minutes. Route 422 is West Main Street through town, with North Annville and South Annville Townships on either side of Annville Township. We are on it regularly.",
      "Two things shape the work here. The first is Lebanon Valley College, founded in 1866, with about 1,700 students on a 370-acre campus; the rental houses and duplexes around it turn over every August and need paint and floors turned around fast. The second is the Annville Historic District, on the National Register since 1979, with Federal, Georgian and Victorian houses going back to the 1700s. The Mary Gass House at Cumberland and King Streets, built in 1753, is still the oldest building in town. A stone house near the district and a rental near campus are different jobs, and we treat them differently.",
    ],
    route: "Route 422 west through Lebanon, about 20 minutes. North and South Annville Township are a few minutes either side of Main Street.",
    glance: [
      ["Distance from our shop", "About 12 miles, 18 to 20 minutes on Route 422"],
      ["Landmark", "Lebanon Valley College, founded 1866"],
      ["Historic core", "Annville Historic District, National Register since 1979"],
      ["Housing", "18th and 19th century homes, stone duplexes, rentals near campus"],
    ],
    houses: [
      { title: "Historic houses near Main Street", text: "Stone and brick, 1750s to 1900s, with original trim and plaster. These get a slower hand: trim matched rather than replaced, plaster patched rather than torn out, lead-safe prep on every surface." },
      { title: "Rental houses and duplexes near campus", text: "Turnover in late August, every year. Scrubbable paint, rigid-core vinyl plank, solid interior doors and bathrooms that survive four tenants in four years. We schedule these around move-out week." },
      { title: "Township houses", text: "Ranches and colonials in North and South Annville Township with full basements and first-generation kitchens and baths." },
    ],
    focus: [
      { slug: "painting", why: "Careful repaints in the historic district and fast, tough turnover painting for landlords between leases." },
      { slug: "flooring-tile-installation", why: "Vinyl plank that stands up to student rentals, and refinished original hardwood in the older houses." },
      { slug: "bathroom-remodeling", why: "Refreshes and tub-to-shower conversions for owners, durable rebuilds for rentals." },
      { slug: "kitchen-remodeling", why: "The tight kitchens in Annville's older houses: storage to the ceiling and a layout that works around one small window." },
      { slug: "windows-doors-installation", why: "Replacement windows measured to out-of-square openings in 150-year-old walls." },
    ],
    notes: [
      "Exterior changes to a house inside the historic district may need a review; we check with the township before ordering windows or siding for one.",
      "Landlords: tell us the lease dates in spring and we hold the August week for you.",
      "Permits for structural, electrical and plumbing work come from Annville Township.",
    ],
    nearby: ["Annville Historic District", "Lebanon Valley College area", "North Annville Township", "South Annville Township", "Cleona", "Palmyra line"],
    photos: ["schaefferstown-lvp-flooring-after", "south-philadelphia-bedroom-after", "south-philadelphia-living-room-front-after"],
    projects: [],
    faqs: [
      { q: "Do you charge more to work in Annville since you are in Myerstown?", a: "No. Annville is close enough that we do not think of it as a separate area, and there is no travel charge." },
      { q: "Can you turn a rental around between tenants in August?", a: "Yes, if we know in advance. Paint and vinyl plank in a two-bedroom unit is three to four days. Tell us the lease dates in spring." },
      { q: "Can you match the trim in a historic house?", a: "Usually. Common historic profiles are still milled, and for a larger job a custom knife can be cut to match exactly." },
      { q: "What about lead paint in a 1700s house?", a: "Assume it is there. We work to the EPA lead-safe rules on every pre-1978 house: containment, wet methods, cleanup and disposal." },
    ],
  },

  // ---------------------------------------------------------------- Palmyra
  {
    slug: "palmyra-pa",
    name: "Palmyra",
    county: "Lebanon County",
    driveMinutes: 25,
    miles: 17,
    variant: "story",
    title: "Remodeling Contractor in Palmyra, PA",
    h1: "Home remodeling and painting contractor in Palmyra, PA",
    tagline: "Bathrooms, basements and kitchens for Palmyra's post-war houses",
    description: "Bathroom remodels, basement finishing and kitchens for Palmyra, PA and North Londonderry Township, in the ranches and capes of the 1940s to 1960s.",
    intro: [
      "Palmyra is seventeen miles southwest of our shop, a straight run down Route 422 that takes under half an hour. We are in and out of the borough regularly, from the older streets around North Chestnut to the newer houses out toward North Londonderry Township.",
      "Palmyra grew up as a factory town. The Landis Shoe Company built its three-story brick factory at North Chestnut and East Broad Streets in 1905, and the building made the National Register of Historic Places in 1980. The older houses downtown were built for the people who worked there. Around that core are the ranches and capes from Palmyra's biggest growth years, the 1940s through the 1960s, and beyond them the newer construction in the township. We work in all three kinds of house.",
      "The post-war houses are the ones we see most, and they share a list: one small bathroom with a plain tub-shower, a kitchen with original cabinets, and a full basement nobody ever finished.",
    ],
    route: "Route 422 west through Lebanon and Annville, about 25 minutes. North Londonderry Township addresses are a few minutes further.",
    glance: [
      ["Distance from our shop", "About 17 miles, under 30 minutes on Route 422"],
      ["Landmark", "Landis Shoe Company factory, 1905, National Register 1980"],
      ["Housing", "Older downtown homes, 1940s to 1960s ranches and capes, newer township builds"],
      ["Township", "North Londonderry, with South Londonderry and Campbelltown nearby"],
    ],
    houses: [
      { title: "Ranches and capes from the 1940s to 1960s", text: "One bathroom, often the only one, with a tub-shower from the original build. A kitchen that is a galley or an L with soffits above the cabinets. A full basement with block walls, usually dry, usually unfinished. These houses are ideal candidates for a bathroom remodel and a basement finish." },
      { title: "Older houses near the factory", text: "Brick and frame houses from the early 1900s with plaster walls, original trim and the narrow floor plans of a worker's house." },
      { title: "Newer houses in North Londonderry Township", text: "Colonials from the last twenty years that need their first real update: counters, floors, a finished basement, paint in a color the builder never offered." },
    ],
    focus: [
      { slug: "bathroom-remodeling", why: "The most common call from Palmyra: a cramped 1950s bathroom turned into a walk-in shower with a real vanity and tile that does not date it." },
      { slug: "basement-finishing", why: "Ranch and cape basements are full-size and mostly dry. On a small lot, finishing one is the cheapest way to add a room." },
      { slug: "kitchen-remodeling", why: "Galley and L kitchens with soffits to open up and cabinets to take to the ceiling." },
      { slug: "windows-doors-installation", why: "Original aluminum and early vinyl windows in the post-war houses are at the end of their life." },
      { slug: "painting", why: "Whole-house interiors for new owners of post-war houses, and exteriors in the spring and fall window." },
    ],
    notes: [
      "Palmyra Borough requires permits for basement finishing with new circuits, a bathroom or an egress window, and for most exterior work. We handle the process.",
      "Post-war bathrooms are small: a corner enclosure or a 60-inch tub-to-shower conversion fits; a double vanity usually does not. We measure before we promise.",
      "Many Palmyra basements have a floor drain and a sump. Both stay accessible in our finishes.",
    ],
    nearby: ["Downtown Palmyra", "North Londonderry Township", "South Londonderry Township", "Campbelltown", "Annville line", "Hershey line"],
    photos: ["lititz-basement-tile-floor", "south-philadelphia-bathroom-glass-shower-after", "south-philadelphia-basement-finished-after"],
    projects: [],
    faqs: [
      { q: "Do you really work in Palmyra, or just Myerstown?", a: "Palmyra is a regular stop. Seventeen miles on Route 422 is one of the closer drives on our schedule." },
      { q: "Can a 1950s bathroom get a walk-in shower?", a: "Yes. Many post-war bathrooms are around five by eight feet; a tub-to-shower conversion in the same footprint with a glass enclosure is the standard job, usually two weeks." },
      { q: "Do I need a permit to finish my basement in Palmyra?", a: "For new electrical, a bathroom or an egress window, yes. We pull the permit and schedule the inspections with the borough." },
      { q: "How do you price a Palmyra job?", a: "The same way as everywhere: a free walkthrough, then an itemized written estimate. Our cost guides give typical ranges for a bathroom, a basement or a kitchen before we visit." },
    ],
  },

  // ---------------------------------------------------------------- Cornwall
  {
    slug: "cornwall-pa",
    name: "Cornwall",
    county: "Lebanon County",
    driveMinutes: 20,
    miles: 12,
    variant: "guide",
    title: "Remodeling Contractor in Cornwall, PA",
    h1: "Home remodeling and painting contractor in Cornwall, PA",
    tagline: "Remodeling and painting from the furnace village to Cornwall Junction",
    description: "Remodeling and painting for Cornwall, PA and Mt. Gretna: stone cottages near the Iron Furnace and newer homes in Cornwall Junction. Free estimates.",
    intro: [
      "Cornwall grew up around the Cornwall Iron Furnace, built in 1742 after Peter Grubb found one of the richest iron ore deposits in the colonies nearby. The furnace cast a cannon for the Continental Army in 1776, ran for more than 140 years, and is a National Historic Landmark today: the only intact charcoal-fired furnace still on its original plantation site in the Western Hemisphere. The Coleman family gave it to the Commonwealth in 1932 and it still sits in the middle of town.",
      "The housing follows that history. Stone workers' cottages from the ironmaster village are within walking distance of the furnace. A mile away, Cornwall Junction has newer houses on larger lots, many with first-floor owner's suites, closer to Mt. Gretna, the small arts and lake community with Governor Dick Park and the Lebanon Valley Rail Trail. We work in both, in a borough of about 4,700 people, twenty minutes from our shop.",
    ],
    route: "Local roads south of Lebanon, about 20 minutes. Mt. Gretna is five minutes further.",
    glance: [
      ["Distance from our shop", "About 12 miles, 20 minutes"],
      ["Landmark", "Cornwall Iron Furnace, 1742, National Historic Landmark"],
      ["Housing", "Stone ironmaster cottages, and newer homes in Cornwall Junction, 1,800 to 3,700 sq. ft."],
      ["Nearby", "Mt. Gretna, Governor Dick Park, the Lebanon Valley Rail Trail"],
    ],
    houses: [
      { title: "Stone cottages in the furnace village", text: "Masonry walls, small rooms, tight galley kitchens, old wiring, plaster. These want careful work: a kitchen opened up without losing the house, bathrooms planned around where the drain already is, lead-safe prep on every painted surface." },
      { title: "Newer homes in Cornwall Junction", text: "Open plans and first-floor owner's suites on third-acre lots. The calls here are owner's-bath upgrades, kitchen updates from builder-grade to real, and the first exterior repaint after a decade of Pennsylvania weather." },
      { title: "Cottages toward Mt. Gretna", text: "Smaller, often seasonal, with porches that need rebuilding and bathrooms that were an afterthought." },
    ],
    focus: [
      { slug: "kitchen-remodeling", why: "Opening a tight galley in a stone cottage, or taking a Cornwall Junction kitchen from builder-grade to the one the house deserves." },
      { slug: "bathroom-remodeling", why: "Owner's-suite upgrades in the newer houses and walk-in conversions in the older ones." },
      { slug: "painting", why: "First repaints for the Junction, lead-safe repaints for the village, and porches and cottages toward Mt. Gretna." },
      { slug: "basement-finishing", why: "Older Cornwall houses have unfinished lower levels; the newer ones have poured basements that finish easily." },
      { slug: "decks-and-porches", why: "Porches on the cottages and decks on the larger lots, built for the shade and damp of the hills around the furnace." },
    ],
    notes: [
      "Houses near the furnace are inside a historic landscape; exterior changes may get a look from the borough. We ask before ordering.",
      "Stone cottages hold moisture in their walls. Bathrooms and basements in them get extra attention to ventilation.",
      "Mt. Gretna's narrow lanes and seasonal cottages need a parking and delivery plan; we make one before the first day.",
    ],
    nearby: ["Cornwall Borough", "Cornwall Junction", "Mt. Gretna", "West Cornwall Township", "North Cornwall Township", "Quentin", "Rexmont"],
    photos: ["farmhouse-shower-subway-tile-niche", "kitchen-white-black-hardware"],
    projects: [],
    faqs: [
      { q: "Do you work on the old stone houses near the furnace?", a: "Yes. Masonry walls, older wiring and plaster that needs a careful hand instead of demolition. We plan around them, and we follow lead-safe practices on anything built before 1978." },
      { q: "How far is Cornwall from your shop?", a: "About twelve miles, twenty minutes. Estimates and follow-up visits are easy." },
      { q: "Do you do owner's-suite bathrooms in the newer houses?", a: "Often. A walk-in shower, a double vanity and large-format porcelain tile is the standard Cornwall Junction upgrade." },
      { q: "What do kitchens and bathrooms cost in Cornwall?", a: "Typical ranges for our area: full kitchens $25,000 to $50,000, full bathrooms $15,000 to $25,000, walk-in conversions often less. Not a quote; the walkthrough is free." },
    ],
  },

  // ---------------------------------------------------------------- Hershey
  {
    slug: "hershey-pa",
    name: "Hershey",
    county: "Dauphin County",
    driveMinutes: 30,
    miles: 22,
    variant: "qa",
    title: "Remodeling Contractor in Hershey, PA",
    h1: "Home remodeling and painting contractor in Hershey, PA",
    tagline: "Remodeling and painting in Hershey, Hummelstown and the East Shore",
    description: "Remodeling and painting in Hershey and Hummelstown, PA. We rebuilt a staircase and updated a kitchen in West Hanover Township in 2025. Free estimates.",
    intro: [
      "Hershey is thirty minutes west of our shop on Route 422, which runs through town as Chocolate Avenue. It is not a borough but a community in Derry Township, built by Milton Hershey around his chocolate factory starting in 1903, with Hersheypark opening for employees in 1906 and the medical center drawing families from everywhere since. Hummelstown, next door, is older: a borough laid out in 1762 with brick houses along Main Street.",
      "In September 2025 we rebuilt a staircase and updated a kitchen in West Hanover Township, on the East Shore side of Hershey. That is the kind of work we do here: the early company-built houses near Chocolate and Cocoa Avenues, the mid-century neighborhoods, and the newer developments in Derry, South Hanover and West Hanover Townships, where a lot of families arrive for the medical center and want the house done before the first shift.",
    ],
    route: "Route 422 west through Lebanon and Palmyra to Chocolate Avenue, about 30 minutes. Hummelstown and the East Shore townships are five to fifteen minutes more.",
    glance: [
      ["Distance from our shop", "About 22 miles, 30 minutes on Route 422"],
      ["Founded", "Hershey from 1903 around the factory; Hummelstown laid out 1762"],
      ["Housing", "Company-era homes near Chocolate Avenue, mid-century neighborhoods, newer township developments"],
      ["Our recent work", "West Hanover Township, September 2025: stairs and kitchen"],
    ],
    houses: [
      { title: "Company-era houses near the factory", text: "Brick and frame, early 1900s, built well and updated many times. Plaster walls, real trim, kitchens that were never meant for a modern refrigerator." },
      { title: "Mid-century neighborhoods", text: "Ranches and split-levels from the 1950s to 1970s with one or two small bathrooms, carpeted stairs and a basement that was finished badly in 1985 or not at all." },
      { title: "Newer developments in the townships", text: "Colonials in Derry, South Hanover and West Hanover Township. The jobs here are builder-grade kitchens and baths brought up to the house, basements finished, and stairs retreaded from carpet to wood." },
    ],
    focus: [
      { slug: "stairs-and-railings", why: "We rebuilt a straight run with new treads and painted risers in West Hanover Township last fall; carpet-to-wood stair jobs are common in the mid-century and newer houses here." },
      { slug: "kitchen-remodeling", why: "The kitchen on that same job, dark cabinets and a granite island. Hershey kitchens run from company-era galleys to open township kitchens." },
      { slug: "bathroom-remodeling", why: "Families arriving for the medical center want the bathrooms done before they move in; we schedule around closing dates." },
      { slug: "basement-finishing", why: "Township basements with poured walls and good headroom are the easiest finishes we do." },
      { slug: "painting", why: "Whole-house interiors for new owners, lead-safe repaints in the older houses and Hummelstown's brick borough." },
    ],
    notes: [
      "Permits come from Derry Township, Hummelstown Borough or the Hanover townships depending on the address; we handle whichever it is.",
      "New owners relocating for the medical center: send us the closing date and we can walk the house before you move in.",
      "The hills east of Hershey mean walk-out basements; finishing one is a different plan from a buried basement and often easier.",
    ],
    nearby: ["Hershey", "Hummelstown", "Derry Township", "South Hanover Township", "West Hanover Township", "Linglestown", "Palmyra line"],
    photos: ["hershey-stairs-new-treads", "hershey-kitchen-dark-cabinets-island"],
    projects: ["hershey-kitchen-and-stairs"],
    faqs: [
      { q: "Is Hershey inside your normal service area?", a: "Yes. Thirty minutes on Route 422, no travel charge, and we were working in West Hanover Township last fall." },
      { q: "Can you finish the house before we move in?", a: "Often. Send the closing date and the list; stairs, floors and paint can be done in an empty house faster than a lived-in one, and we prefer it." },
      { q: "Do you work in Hummelstown's older brick houses?", a: "Yes. Plaster, old trim and pre-1978 paint get the same careful treatment as the historic houses in Lebanon County." },
      { q: "Can you replace carpeted stairs with wood?", a: "That was the West Hanover job: carpet off, new treads, painted risers, walls patched and painted. One to two days for a straight run." },
    ],
  },

  // ---------------------------------------------------------------- Lititz
  {
    slug: "lititz-pa",
    name: "Lititz",
    county: "Lancaster County",
    driveMinutes: 30,
    miles: 16,
    variant: "story",
    title: "Remodeling Contractor in Lititz, PA",
    h1: "Home remodeling and painting contractor in Lititz, PA",
    tagline: "Remodeling in Lititz without losing what makes the house a Lititz house",
    description: "Basements, kitchens, bathrooms, stairs, trim and paint in Lititz, PA and Warwick Township, old houses and new alike. Basement remodel there in 2025.",
    intro: [
      "Lititz was founded by Moravian settlers in 1756 around a church square that is still the center of Main Street. The General Sutter Inn has taken guests since 1764. Budget Travel readers voted it America's Coolest Small Town in 2013, and the National Trust for Historic Preservation named it a Distinctive Destination. The houses in and around the Lititz Moravian Historic District date from the 1750s to the 1930s, set close to the sidewalk the way the congregation built them.",
      "The woodwork is the reason those houses feel the way they do: original baseboard, door casings, panel doors and built-in cabinets milled to profiles a big-box store does not stock. So in Lititz we start most conversations with the trim and the cabinets, not with demolition. Refinish what is solid, match what is missing, and modernize the kitchen without throwing off the proportions of an old room.",
      "Lititz also keeps growing outward: Warwick Township, Rothsville and Brickerville have newer colonials and fieldstone farmhouses with low basements and uneven stone walls. In September 2025 we were in one of those basements, opening it up, running new plumbing and laying a porcelain floor around the steel columns.",
    ],
    route: "Route 501 south from Myerstown through Schaefferstown and Brickerville, about 30 minutes to Main Street. Warwick Township and Rothsville are on the way.",
    glance: [
      ["Distance from our shop", "About 16 miles, 25 to 30 minutes on Route 501"],
      ["Founded", "1756, by Moravian settlers; General Sutter Inn since 1764"],
      ["Historic core", "Lititz Moravian Historic District, houses from the 1750s to the 1930s"],
      ["Our recent work", "Basement remodel in Warwick Township, September 2025"],
    ],
    houses: [
      { title: "Houses in and around the historic district", text: "Stone and brick, 1750s to 1930s, with original trim and panel doors worth keeping. Kitchens are small; the right move is often cabinet painting or a targeted update, not a full gut. Plaster is patched and skimmed. Pre-1978 paint gets lead-safe prep." },
      { title: "Fieldstone farmhouses in Warwick Township", text: "Low basements with uneven stone walls that take real planning to finish; additions from three generations with framing that does not match; exteriors that have been painted and re-sided many times." },
      { title: "Newer colonials toward Rothsville and Brickerville", text: "Builder-grade kitchens and baths, poured basements waiting to be finished, and the first repaint after a decade." },
    ],
    focus: [
      { slug: "basement-finishing", why: "The Warwick Township basement we opened up in 2025: demolition, new plumbing lines, drywall and porcelain tile around the columns. Stone and poured basements both." },
      { slug: "cabinet-painting", why: "In an old Lititz kitchen, painting the solid cabinets keeps the room's proportions and most of the budget." },
      { slug: "kitchen-remodeling", why: "Small historic kitchens that need storage to the ceiling, and township kitchens that need everything." },
      { slug: "bathroom-remodeling", why: "Walk-in conversions in small historic bathrooms, owner's-suite baths in the newer houses." },
      { slug: "painting", why: "Plaster patched before paint, trim profiles kept crisp, lead-safe on the old houses, straightforward on the new." },
      { slug: "windows-doors-installation", why: "Replacement windows sized to old openings, and interior doors rehung rather than swapped when they are solid." },
    ],
    notes: [
      "Exterior work on a house inside the historic district may need borough review. We check before ordering windows, doors or siding.",
      "Original trim and panel doors: we test a hidden spot for solid wood before anyone decides to replace them. Most are worth keeping.",
      "Fieldstone basements need a moisture plan before drywall; we test the walls and floor at the walkthrough.",
    ],
    nearby: ["Lititz Borough", "Lititz Moravian Historic District", "Warwick Township", "Rothsville", "Brickerville", "Brunnerville", "Manheim line"],
    photos: ["lititz-basement-tile-floor", "lititz-basement-plumbing-rough", "lititz-basement-demo"],
    projects: ["lititz-basement-remodel"],
    faqs: [
      { q: "Will you keep the original woodwork in my Lititz house?", a: "If it is solid, yes, and we will tell you which pieces are not worth saving. Matching a missing casing is carpentry we do; ripping out a century of trim for a stock profile is not." },
      { q: "Can a fieldstone basement be finished?", a: "Often, after the moisture is handled and the walls are framed off the stone with a gap behind. The Warwick Township basement on this page is a block basement; stone takes a bit more framing." },
      { q: "Is Lititz a special trip for you?", a: "No. Thirty minutes down Route 501 and no travel charge. We pass through Brickerville and Rothsville on the way." },
      { q: "Do you do exterior work inside the historic district?", a: "Yes, after checking what the borough wants to see for changes to a historic facade. Paint and repair rarely need review; windows and siding sometimes do." },
    ],
  },

  // ---------------------------------------------------------------- Ephrata
  {
    slug: "ephrata-pa",
    name: "Ephrata",
    county: "Lancaster County",
    driveMinutes: 30,
    miles: 18,
    variant: "guide",
    title: "Remodeling Contractor in Ephrata, PA",
    h1: "Home remodeling and painting contractor in Ephrata, PA",
    tagline: "Exterior, kitchen and bathroom work for Ephrata's farmhouses and borough homes",
    description: "Siding, exterior painting, kitchens, bathrooms and basements for farmhouses and borough homes in Ephrata, PA, Akron and Ephrata Township. Free estimates.",
    intro: [
      "Ephrata is about thirty minutes down Route 501 and Route 322 from Myerstown. It is best known for the Ephrata Cloister, the communal settlement Conrad Beissel founded in 1732, where close to 300 people lived at its peak and a printing press ran from 1745 to 1792; the state has preserved the buildings on West Main Street since 1941. The borough was incorporated in 1891 and is now the most populous borough in Lancaster County, and the Green Dragon Farmers Market has drawn crowds every Friday since 1932.",
      "The farmhouses around the borough are the houses we get called about most. A farmhouse that has stood near Ephrata since the 1800s has been painted, patched and re-sided more than once, with additions whose framing does not match the original. The exterior usually tells you what is going on underneath, which is why most Ephrata conversations start outside.",
    ],
    route: "Route 501 south to Route 322 east, about 30 minutes. Akron is a few minutes past the borough.",
    glance: [
      ["Distance from our shop", "About 18 miles, 30 minutes"],
      ["Landmark", "Ephrata Cloister, founded 1732, preserved since 1941"],
      ["Borough", "Incorporated 1891; the most populous borough in Lancaster County"],
      ["Housing", "Farmhouses in the township, twins and singles in the borough, newer developments"],
    ],
    houses: [
      { title: "Farmhouses in Ephrata Township", text: "Original wood siding under layers of paint, or vinyl over it. Trim built up with old caulk. Additions on additions. Stone or block basements with old grading pushing water toward the foundation. We read the exterior before we touch the finish." },
      { title: "Borough twins and singles", text: "Pre-war houses on the streets off Main with plaster walls, one bathroom and kitchens that need storage and light." },
      { title: "Newer houses toward Akron and the township edges", text: "Colonials and ranches whose owners want the basement finished and the builder's choices replaced." },
    ],
    focus: [
      { slug: "exterior-remodeling", why: "Siding repaired board by board where the wood is sound, replaced where rot has gone too far, with the framing checked underneath first." },
      { slug: "painting", why: "Exterior repaints on old wood with lead-safe prep, and interiors on plaster in the borough houses." },
      { slug: "windows-doors-installation", why: "Replacement windows measured to the out-of-square openings of a farmhouse addition." },
      { slug: "kitchen-remodeling", why: "Farmhouse kitchens with older wiring and plumbing that get replaced while the walls are open." },
      { slug: "basement-finishing", why: "Stone and block foundations get a moisture and drainage check before anything is framed." },
      { slug: "bathroom-remodeling", why: "The one upstairs bath in a borough twin, and a second bath added where the farmhouse never had one." },
    ],
    notes: [
      "Ephrata Borough and Ephrata Township handle permits separately; we pull the right one.",
      "On a farmhouse we open one wall of an addition before pricing cabinets or windows for it, because the framing often surprises.",
      "Old grading and gutters are the most common cause of a wet farmhouse basement; we flag them at the walkthrough even when the job is inside.",
    ],
    nearby: ["Ephrata Borough", "Ephrata Township", "Akron", "Clay Township", "Reamstown", "Hinkletown", "Lititz line"],
    photos: ["lititz-basement-tile-floor", "south-philadelphia-facade-after", "deck-white-vinyl-railings"],
    projects: [],
    faqs: [
      { q: "Can you tell if my siding needs replacing or just paint?", a: "At the walkthrough, with a screwdriver. Soft wood, paint that peels within a year, and sheathing you can feel through the siding mean replacement; chalky or faded but sound siding means paint." },
      { q: "Do you follow lead-safe rules on old farmhouses?", a: "Yes, on every house built before 1978, inside and out: containment, wet methods, cleanup. Most Ephrata farmhouses qualify." },
      { q: "How do you handle an addition that was built out of square?", a: "We measure every opening and order windows and cabinets to it rather than to a standard size, and we tell you where the walls are off before we start." },
      { q: "Is Ephrata inside your normal area?", a: "Yes, about thirty minutes down Route 501 and 322, no travel charge." },
    ],
  },

  // ---------------------------------------------------------------- Manheim
  {
    slug: "manheim-pa",
    name: "Manheim",
    county: "Lancaster County",
    driveMinutes: 30,
    miles: 20,
    variant: "qa",
    title: "Remodeling Contractor in Manheim, PA",
    h1: "Home remodeling and painting contractor in Manheim, PA",
    tagline: "Remodeling and painting in Manheim, Penn and Rapho Townships",
    description: "Kitchens, bathrooms, basements, decks, stairs and paint in Manheim, PA and Penn and Rapho Townships, from 1700s borough houses to new developments.",
    intro: [
      "Manheim is about thirty minutes from our shop, south on Route 501 and then Route 72. Henry William Stiegel, the glassmaker, laid the borough out in 1762, and every June Zion Lutheran Church still pays him the rent he asked for the church lot: a single red rose, at the Feast of Roses. Mount Hope Estate, home of the Pennsylvania Renaissance Faire, is just outside town in Rapho Township.",
      "The borough has brick and stone houses from the 1700s and 1800s on the streets around Market Square. Around it, Penn and Rapho Townships are farms, older farmhouses and newer developments on big lots, which is why so many Manheim calls start with the yard: a deck, a porch, a railing.",
    ],
    route: "Route 422 west to Lebanon, then Route 72 south, about 30 minutes to Market Square. Rapho and Penn Township addresses are five to ten minutes either side.",
    glance: [
      ["Distance from our shop", "About 20 miles, 30 minutes on Route 72"],
      ["Founded", "1762, by glassmaker Henry William Stiegel"],
      ["Tradition", "The Feast of Roses: one red rose a year to Zion Lutheran Church"],
      ["Housing", "18th and 19th century borough houses, farmhouses and newer developments on large lots"],
    ],
    houses: [
      { title: "Borough houses around Market Square", text: "Brick and stone, some from the 1700s, with plaster, deep sills and kitchens that have been reworked three times. Careful carpentry and lead-safe paint." },
      { title: "Farmhouses in Penn and Rapho Townships", text: "Stone and frame farmhouses with additions, old exterior paint and basements that need a moisture plan before they become rooms." },
      { title: "Developments on large lots", text: "Colonials and ranches from the last thirty years with full basements, builder-grade kitchens and yards that want a deck." },
    ],
    focus: [
      { slug: "decks-and-porches", why: "Big township lots and families who use the yard. New composite decks, resurfacing on sound frames, porches on the farmhouses. The deck on this page is one of ours." },
      { slug: "kitchen-remodeling", why: "Borough kitchens that need light and storage, township kitchens that need the builder's package replaced." },
      { slug: "bathroom-remodeling", why: "Second bathrooms and walk-in conversions in the older houses, owner's baths in the newer ones." },
      { slug: "basement-finishing", why: "Poured basements in the developments are straightforward; farmhouse basements get the moisture check first." },
      { slug: "painting", why: "Exterior repaints on farmhouses and the first repaint on the developments, interiors on plaster downtown." },
    ],
    notes: [
      "Decks attached to the house need a permit from Rapho or Penn Township; we draw it and file it.",
      "Manheim's old brick is soft; we do not paint it unless it has already been painted, and we point rather than seal.",
      "Farm properties often have a second building that needs the same work as the house: a porch, a window, a door. We quote both on one visit.",
    ],
    nearby: ["Manheim Borough", "Penn Township", "Rapho Township", "Mastersonville", "Sporting Hill", "Mount Hope", "Lititz line"],
    photos: ["deck-composite-after", "deck-weathered-before"],
    projects: ["composite-deck-replacement"],
    faqs: [
      { q: "Do you build decks in Manheim?", a: "Yes. New composite decks on frost-depth footings, resurfacing where the frame is sound, and porch rebuilds on the farmhouses." },
      { q: "How far is Manheim from Myerstown?", a: "About thirty minutes, through Lebanon and down Route 72. No travel charge." },
      { q: "Can you work on a 1700s house in the borough?", a: "Yes. Soft brick, plaster and old trim get careful work, and pre-1978 paint gets lead-safe prep." },
      { q: "Do you need a permit for a deck in Rapho or Penn Township?", a: "For a deck attached to the house or above a certain height, yes. We handle it." },
    ],
  },

  // ---------------------------------------------------------------- Elizabethtown
  {
    slug: "elizabethtown-pa",
    name: "Elizabethtown",
    county: "Lancaster County",
    driveMinutes: 35,
    miles: 25,
    variant: "story",
    title: "Remodeling Contractor in Elizabethtown, PA",
    h1: "Home remodeling and painting contractor in Elizabethtown, PA",
    tagline: "Two kinds of houses, two kinds of jobs: remodeling in Elizabethtown",
    description: "Kitchens and bathrooms in the older houses near High Street, basements and upgrades in the newer developments of West Donegal and Mount Joy Townships.",
    intro: [
      "Elizabethtown is about thirty-five minutes from our shop. Barnabas Hughes laid out the streets around a square in 1763 and named the town after his wife, and Elizabethtown College, founded in 1899, still holds its first classes' home, the Heisey Building, in the middle of town.",
      "A few blocks from downtown and High Street are the older twins, foursquares and Colonial Revival houses on tight, tree-lined lots. Drive toward West Donegal and Mount Joy Townships and you find developments with colonials and ranches built in the last fifteen to twenty years along Route 283. Elizabethtown is both an old Pennsylvania Dutch borough and a growing suburb, and the two halves need different things from us.",
      "In the old houses the project starts in the kitchen or the bathroom: choppy layouts, original cabinets, one bath untouched since the 1970s, plumbing patched over the decades. In the new ones it starts in the basement: a full, unfinished lower level with poured walls and good headroom, which is the cheapest room anyone in Elizabethtown will ever add.",
    ],
    route: "Route 422 west to Hershey, then Route 743 south, about 35 to 40 minutes.",
    glance: [
      ["Distance from our shop", "About 25 miles, 35 to 40 minutes, mostly on Route 743"],
      ["Founded", "Laid out 1763 by Barnabas Hughes; Elizabethtown College since 1899"],
      ["Old side", "Twins, foursquares and Colonial Revivals near downtown and High Street"],
      ["New side", "Developments in West Donegal and Mount Joy Townships along Route 283"],
    ],
    houses: [
      { title: "Older houses near downtown and High Street", text: "Early and mid-1900s, with plaster, out-of-square walls, a cramped kitchen and one small full bath. Kitchen and bathroom remodels with the wiring and plumbing replaced while the walls are open, and lead-safe prep on anything pre-1978." },
      { title: "Newer houses in the townships", text: "Builder-grade everything on a solid shell. Basement finishing first, then the upgrades the builder never offered: trim, built-ins, better paint, a real kitchen." },
    ],
    focus: [
      { slug: "kitchen-remodeling", why: "Opening up a choppy downtown kitchen, or replacing a builder's package in a Route 283 colonial." },
      { slug: "bathroom-remodeling", why: "The one bath in an old twin, usually the next call after the kitchen." },
      { slug: "basement-finishing", why: "Poured walls, decent headroom, nothing finished. The most requested job in the newer half of Elizabethtown." },
      { slug: "painting", why: "Plaster downtown, drywall in the townships, and a color the builder never offered." },
      { slug: "stairs-and-railings", why: "Carpeted builder stairs to wood treads and an oak and iron railing is a common add-on to a basement finish." },
    ],
    notes: [
      "Permits come from Elizabethtown Borough, West Donegal Township or Mount Joy Township depending on the address.",
      "Newer basements along Route 283 often have the plumbing rough-in for a bath already stubbed in the slab. We check before quoting the bathroom.",
      "Older downtown lots are tight; we plan the dumpster and deliveries with you.",
    ],
    nearby: ["Elizabethtown Borough", "West Donegal Township", "Mount Joy Township", "Mount Joy", "Rheems", "Bainbridge", "Hershey line"],
    photos: ["hershey-stairs-new-treads", "south-philadelphia-basement-finished-after", "farmhouse-loft-railing-oak-iron"],
    projects: [],
    faqs: [
      { q: "Is Elizabethtown too far for you?", a: "No. Thirty-five minutes is the edge of our normal area, with no travel charge. We schedule Elizabethtown jobs as full days so the drive is once, not twice." },
      { q: "Can you finish a builder-grade basement?", a: "That is most of our Elizabethtown work. Framing, insulation, drywall, a drop or drywall ceiling, vinyl plank, and a bathroom if the rough-in is there." },
      { q: "Do you work on the older houses near the college?", a: "Yes. Plaster, old plumbing and small bathrooms, planned with a contingency and lead-safe prep." },
      { q: "What do the common Elizabethtown jobs cost?", a: "Typical ranges for our area: kitchens $25,000 to $50,000 mid-range, bathrooms $15,000 to $25,000, basements $25 to $65 per square foot. The walkthrough and the written estimate are free." },
    ],
  },

  // ---------------------------------------------------------------- Lancaster
  {
    slug: "lancaster-pa",
    name: "Lancaster",
    county: "Lancaster County",
    driveMinutes: 40,
    miles: 28,
    variant: "guide",
    title: "Remodeling Contractor Serving Lancaster, PA",
    h1: "Home remodeling and painting contractor serving Lancaster, PA",
    tagline: "Remodeling and painting for Lancaster city and county, from Myerstown",
    description: "Remodeling and painting for Lancaster, PA from Myerstown, 40 minutes away: city rowhomes, township farmhouses and newer homes in Manheim Township.",
    intro: [
      "We are not a Lancaster shop and we say so. Our crew is based in Myerstown, about forty minutes away, and we drive to Lancaster for kitchens, bathrooms, basements, staircases and painting on a regular schedule. What we bring is real experience with the kind of house Lancaster is full of.",
      "Lancaster has some of the oldest and most distinctive housing in this part of Pennsylvania. Downtown and Cabbage Hill are Victorian brick rowhomes and twins, many over a century old, with narrow plans, original woodwork and plaster. Out in the townships are farmhouses and stone colonials on bigger lots toward Strasburg, and newer developments in Manheim Township and East Hempfield. Each needs a different approach, and we scope every job around the actual house.",
    ],
    route: "Route 501 south through Lititz, or Route 72, about 40 minutes to the city. Manheim Township and East Hempfield are on the way.",
    glance: [
      ["Distance from our shop", "About 28 miles, 40 minutes"],
      ["City neighborhoods", "Downtown historic district, Cabbage Hill, the west end"],
      ["Townships", "Manheim Township, East Hempfield, West Lampeter, toward Strasburg"],
      ["Housing", "Victorian rowhomes and twins, farmhouses and stone colonials, newer developments"],
    ],
    houses: [
      { title: "Rowhomes and twins in the city", text: "Narrow plans, steep stairs, plaster, original trim, one plumbing wall for the kitchen. The whole-house rowhome renovation on this page was in Philadelphia, and Lancaster's are the same kind of house: stairs first, then systems, then rooms." },
      { title: "Farmhouses and stone colonials in the townships", text: "Older framing, drafty windows, stone and block basements that may need waterproofing before a finished lower level makes sense." },
      { title: "Newer homes in Manheim Township and East Hempfield", text: "Straightforward kitchen and bath updates, basement finishes and cosmetic remodels." },
    ],
    focus: [
      { slug: "kitchen-remodeling", why: "Tight rowhome kitchens with old wiring behind plaster, and township kitchens that need a builder's package replaced." },
      { slug: "stairs-and-railings", why: "Steep Victorian stairs rebuilt or retreaded, with iron balusters and an oak rail." },
      { slug: "bathroom-remodeling", why: "Walk-in showers and second bathrooms in houses that were built with one." },
      { slug: "basement-finishing", why: "After a moisture plan in the old foundations; straightforward in the newer townships." },
      { slug: "painting", why: "Plaster patched and skimmed before paint, trim kept crisp, lead-safe on the historic housing stock." },
    ],
    notes: [
      "Lancaster city and each township handle permits differently; we have worked through the city's process and we pull the permits ourselves.",
      "City streets: the dumpster, the parking and the deliveries are planned before the first day, and the work zone is sealed so dust stays out of the rest of the rowhome.",
      "Forty minutes means we schedule Lancaster jobs as full days and multi-day runs, not quick visits. Small single-visit jobs are better served by a Lancaster contractor, and we will say so.",
    ],
    nearby: ["Downtown Lancaster", "Cabbage Hill", "Manheim Township", "East Hempfield Township", "West Lampeter Township", "Rohrerstown", "Strasburg"],
    photos: ["lititz-basement-tile-floor", "south-philadelphia-facade-after", "south-philadelphia-stairs-iron-balusters-after", "south-philadelphia-kitchen-window-wall-after"],
    projects: ["south-philadelphia-rowhome-renovation"],
    faqs: [
      { q: "Do you really take jobs in Lancaster?", a: "Yes, for kitchens, bathrooms, basements, stairs, painting and whole-house work. For a one-day job, a Lancaster contractor will serve you better and we will tell you so." },
      { q: "Have you done rowhome work?", a: "Yes. A full rowhome renovation in 2025, stairs to basement, and rowhome kitchens, bathrooms and staircases. Lancaster's rowhomes are the same kind of house." },
      { q: "Which Lancaster neighborhoods do you cover?", a: "The city, including downtown and Cabbage Hill, plus Manheim Township, East Hempfield, West Lampeter and out toward Strasburg." },
      { q: "Do you charge for the drive?", a: "No. We schedule Lancaster work in full days so the drive is part of a working day, not an extra line." },
    ],
  },
];

export const townBySlug = (slug: string) => towns.find((t) => t.slug === slug);
