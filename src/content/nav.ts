export type NavChild = { href: string; label: string; note?: string };
export type NavItem = { href: string; label: string; children?: NavChild[]; groups?: { label: string; items: NavChild[] }[] };

export const serviceGroups: { label: string; items: NavChild[] }[] = [
  {
    label: "Inside the house",
    items: [
      { href: "/kitchen-remodeling/", label: "Kitchen remodeling", note: "Cabinets, counters, layout" },
      { href: "/bathroom-remodeling/", label: "Bathroom remodeling", note: "Showers, tubs, tile, vanities" },
      { href: "/basement-finishing/", label: "Basement finishing", note: "From bare block to living space" },
      { href: "/stairs-and-railings/", label: "Stairs and railings", note: "Treads, risers, iron balusters" },
      { href: "/flooring-tile-installation/", label: "Flooring and tile", note: "Hardwood, vinyl plank, tile" },
      { href: "/whole-home-renovation/", label: "Whole-home renovation", note: "Rowhomes and whole-house projects" },
    ],
  },
  {
    label: "Paint and finishes",
    items: [
      { href: "/painting/", label: "Interior and exterior painting", note: "Walls, trim, siding" },
      { href: "/cabinet-painting/", label: "Cabinet painting", note: "Refinish instead of replace" },
      { href: "/drywall-repair/", label: "Drywall repair", note: "Patches, new walls, finishing" },
    ],
  },
  {
    label: "Outside",
    items: [
      { href: "/windows-doors-installation/", label: "Windows and doors", note: "Replacement and new openings" },
      { href: "/decks-and-porches/", label: "Decks and porches", note: "New builds and resurfacing" },
      { href: "/exterior-remodeling/", label: "Siding, fences and exterior", note: "Siding, trim, fences, patios" },
    ],
  },
];

export const nav: NavItem[] = [
  { href: "/services/", label: "Services", groups: serviceGroups },
  { href: "/projects/", label: "Projects" },
  { href: "/service-areas/", label: "Service areas" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];
