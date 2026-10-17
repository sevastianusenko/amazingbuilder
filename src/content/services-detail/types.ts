import type { Faq } from "@/lib/site";

/**
 * Landing-page content for one service. Everything here is specific to that service so the
 * twelve pages do not repeat each other or the blog: the proof points, the scope boundaries,
 * the process, the options table, the FAQs. Prices are short and point to the cost guides.
 */
export type ServiceDetail = {
  /** 3 to 4 reasons homeowners call us for this specific service. */
  why: { title: string; text: string }[];
  /** What this page covers and what belongs on a sibling page, with links. Keeps pages from overlapping. */
  scope: { covers: string[]; elsewhere: { text: string; href: string }[] };
  /** The job, step by step, for this service. */
  steps: { title: string; text: string }[];
  /** Options or materials, with our honest note on each. */
  options: { heading: string; items: { name: string; note: string }[] };
  /** Short pricing block: a sentence, two or three ranges, and the guides to read. */
  pricing: { intro: string; ranges: [string, string][]; guides?: { slug: string; label: string }[] };
  /** Project slugs to show. */
  projects: string[];
  /** One paragraph on where we do this work. */
  areas: string;
  /** Service-specific questions, different from the blog guide. */
  faqs: Faq[];
};
