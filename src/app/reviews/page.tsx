import type { Metadata } from "next";
import { site } from "@/lib/site";
import { reviews } from "@/content/reviews";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { PageHero, CtaBand } from "@/components/blocks";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Amazing Builders Reviews: 5.0 on Google",
  description: `What homeowners say about Amazing Builders after kitchen, bathroom, painting and remodeling jobs. ${site.google.rating.toFixed(1)} stars from ${site.google.count} Google reviews.`,
  alternates: { canonical: "/reviews/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Reviews", href: "/reviews/" },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Reviews" title={`${site.google.rating.toFixed(1)} stars from ${site.google.count} homeowners on Google`} lede="These are public Google reviews, quoted as written. The full list, with dates, is on our Google profile.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={site.google.mapsUrl} variant="graphite">
            See all reviews on Google
          </Button>
          <Button href={site.google.reviewUrl} variant="ghost">
            Leave a review
          </Button>
        </div>
      </PageHero>
      <Section tone="paper" tight>
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>blockquote]:mb-6 [&>blockquote]:break-inside-avoid">
          {reviews.map((r) => (
            <blockquote key={r.name + r.date} className="rounded-card bg-primer p-7">
              <p className="text-[1.02rem] leading-relaxed text-ink-soft">“{r.text}”</p>
              <footer className="mt-5 flex items-center justify-between gap-4">
                <cite className="font-display text-[0.95rem] font-semibold not-italic">{r.name}</cite>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-ink-mute">Google · {r.date}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-[0.9rem] text-ink-mute">
          Reviews are shown with the names their authors chose on Google. We never write, buy or edit reviews. If we did work for you and you have something to say, good or bad, please say it on Google so the next homeowner can read it.
        </p>
      </Section>
      <CtaBand source="reviews" />
    </>
  );
}
