// Old WordPress URL -> new URL. Used by next.config.ts (301s) and by Markdown.tsx to rewrite links
// inside migrated posts so they point straight at the final page. See research/04-site-architecture.md.

export const blogMoves = [
  "walk-in-shower-conversion-cost-pa",
  "small-kitchen-remodel-ideas-lebanon-county-pa",
  "best-flooring-for-a-basement-in-lebanon-county-pa-2026-guide",
  "siding-replacement-cost-lebanon-county-pa",
  "cabinet-painting-vs-replacement-lebanon-county-pa",
  "exterior-painting-cost-myerstown-pa",
  "drywall-repair-cost-in-myerstown-lebanon-pa-2026-guide",
  "interior-painting",
  "kitchen-remodeling-trends",
  "home-improvement-contractor-pa",
  "door-replacement",
  "flooring-tile-installation-options",
  "porch-remodeling-pa-guide",
  "basement-finishing-pa",
  "custom-carpentry-pa-built-ins",
  "best-remodeling-company-pa-lancaster",
  "remodeling-cost-pa-budget",
  "home-remodeling-process-step-by-step",
  "remodeling-value-pa",
  "how-to-plan-a-bathroom-renovation-step-by-step",
];

export const pageMoves: [string, string][] = [
  ["/bathroom-renovation/", "/bathroom-remodeling/"],
  ["/exterior-upgrades/", "/exterior-remodeling/"],
  ["/gallery/", "/projects/"],
  ["/news/", "/blog/"],
  ["/myerstown-pa-home-remodeling-contractor/", "/service-areas/myerstown-pa/"],
  ["/annville-pa-home-remodeling-painting-contractor/", "/service-areas/annville-pa/"],
  ["/home-remodeling-painting-contractor-in-palmyra-pa/", "/service-areas/palmyra-pa/"],
  ["/cornwall-pa-home-remodeling-painting-contractor/", "/service-areas/cornwall-pa/"],
  ["/home-remodeling-painting-contractor-serving-harrisburg-pa/", "/service-areas/hershey-pa/"],
  ["/home-remodeling-painting-contractor-serving-lititz-pa/", "/service-areas/lititz-pa/"],
  ["/home-remodeling-painting-contractor-in-ephrata-pa/", "/service-areas/ephrata-pa/"],
  ["/elizabethtown-pa-home-remodeling-painting-contractor/", "/service-areas/elizabethtown-pa/"],
  ["/remodeling-contractor-lancaster-pa/", "/service-areas/lancaster-pa/"],
  ["/home-remodeling-painting-contractor-serving-philadelphia-pa/", "/philadelphia-rowhome-renovation/"],
  ["/home-remodeling-exterior-painting-contractor-in-reading-pa/", "/service-areas/"],
  ["/home-remodeling-painting-contractor-serving-york-pa/", "/service-areas/"],
  ["/remodeling-contractor-allentown-pa/", "/service-areas/"],
  // Old posts folded into other pages
  ["/home-remodeling/", "/services/"],
  ["/door-installation-pa-trim-carpentry/", "/blog/custom-carpentry-pa-built-ins/"],
  ["/interior-vs-exterior-remodeling/", "/blog/remodeling-cost-pa-budget/"],
  ["/remodeling-project-management-communication/", "/blog/home-remodeling-process-step-by-step/"],
  ["/home-remodeling-tips-and-mistakes/", "/blog/home-remodeling-process-step-by-step/"],
  ["/open-floor-plan-remodel/", "/whole-home-renovation/"],
  ["/historic-home-renovation-tips/", "/whole-home-renovation/"],
  ["/giving-your-stairs-a-second-life-real-remodeling-stories-from-lancaster-homes/", "/stairs-and-railings/"],
  ["/basement-remodeling-in-lancaster-pa-turn-your-basement-into-a-functional-living-space/", "/blog/basement-finishing-pa/"],
  ["/outdoor-spaces-decks-porches-and-entryways/", "/blog/porch-remodeling-pa-guide/"],
  ["/porch-remodeling-renovation-ideas-for-pennsylvania-homes/", "/blog/porch-remodeling-pa-guide/"],
  ["/windows-doors-replacement-in-pennsylvania/", "/blog/door-replacement/"],
  ["/best-flooring-and-tile-installation-ideas-for-your-home-in-pennsylvania/", "/blog/flooring-tile-installation-options/"],
  ["/%f0%9f%9a%bf-bathroom-remodeling-ideas-renovation-services-in-pennsylvania/", "/bathroom-remodeling/"],
  // WordPress plumbing
  ["/sitemap_index.xml", "/sitemap.xml"],
  ["/page-sitemap.xml", "/sitemap.xml"],
  ["/post-sitemap.xml", "/sitemap.xml"],
  ["/feed/", "/blog/"],
  ["/comments/feed/", "/blog/"],
  ["/home/", "/"],
];

const lookup = new Map<string, string>([
  ...pageMoves,
  // The old /bathroom-remodeling/ post moved into the blog; the service page now owns the root URL.
  ...blogMoves.filter((s) => s !== "bathroom-remodeling").map((s): [string, string] => [`/${s}/`, `/blog/${s}/`]),
]);

/** Resolve an old-site path to where it lives now. Unknown paths are returned unchanged. */
export function resolveOldPath(path: string): string {
  const clean = path.endsWith("/") || path.includes(".") ? path : `${path}/`;
  return lookup.get(clean) ?? clean;
}
