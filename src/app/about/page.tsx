import type { Metadata } from "next";
import { site } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { PageHero, Process, CtaBand, PhotoGrid, CallButtons } from "@/components/blocks";
import { Section, Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About Amazing Builders: Crew and How We Work",
  description:
    "A small remodeling and painting crew in Myerstown, PA, run by Dennis Drahni. One contract, written estimates, our own carpentry, tile, floors and paint.",
  alternates: { canonical: "/about/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
];

const promises = [
  ["One contract", "Carpentry, tile, floors, drywall and paint from our crew. Licensed electricians and plumbers for the wiring and plumbing. One estimate, one schedule, one person to call."],
  ["Written estimates", "Itemized and in writing before any work starts. Pennsylvania law requires a written contract for jobs over $500; we follow it on every job."],
  ["A clean site", "Dust barriers up, floors protected, tools put away and the floor swept at the end of every day."],
  ["Honest photos", "Every photo on this site is from our own work, with the place and month from the camera left on. No stock, no borrowed kitchens."],
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        eyebrow="About"
        title="A small crew that does the whole job"
        lede={`Amazing Builders is a remodeling and painting company based in Myerstown, Pennsylvania, run by ${site.owner}. We rebuild kitchens, bathrooms, basements and staircases, install floors, windows and doors, build decks and paint, inside and out.`}
        photo="south-philadelphia-stairs-iron-balusters-after"
      >
        <CallButtons />
      </PageHero>
      <Section tone="paper" tight>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {promises.map(([t, d]) => (
            <div key={t} className="rounded-card bg-primer p-6">
              <h2 className="text-[1.2rem]">{t}</h2>
              <p className="mt-2 text-[0.95rem] text-ink-soft">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-3">Who we are</Eyebrow>
            <h2>Remodeling and painting, together on purpose</h2>
            <p className="measure mt-5 text-ink-soft">
              Most remodelers hand you a finished room and leave the painting to someone else. Most painters will not touch a wall that needs rebuilding. We do both, because a remodel is not done until the last coat is on and the trim lines are clean.
            </p>
            <p className="measure mt-4 text-ink-soft">
              The crew is small by design. The same people who tear out your old kitchen set the new cabinets and paint the walls. {site.owner} is on site, not in an office.
            </p>
            <p className="measure mt-4 text-ink-soft">
              We work out of Myerstown in Lebanon County and spend most of our time within forty minutes of the shop. In 2025 we also took a South Philadelphia rowhome from bare studs to a finished house in four and a half months.
            </p>
          </div>
          <div className="lg:col-span-7">
            <PhotoGrid ids={["south-philadelphia-stairs-treads-install", "south-philadelphia-kitchen-cabinets-install", "farmhouse-accent-wall-barn-door", "south-philadelphia-fence-build"]} cols={2} />
          </div>
        </div>
      </Section>
      <Section tone="graphite" steps>
        <Process dark />
      </Section>
      <Section tone="paper" tight>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Eyebrow className="mb-2">Reviews</Eyebrow>
            <p className="font-display text-[2rem] font-extrabold leading-none tracking-[-0.02em] tnum">{site.google.rating.toFixed(1)}</p>
            <p className="mt-1 text-[0.95rem] text-ink-soft">
              on Google from {site.google.count} reviews.{" "}
              <a href={site.google.mapsUrl} rel="noopener" target="_blank" className="underline">
                Read them
              </a>
            </p>
          </div>
          <div>
            <Eyebrow className="mb-2">Hours</Eyebrow>
            <p className="font-display text-[1.2rem] font-semibold">{site.hoursText}</p>
            <p className="mt-1 text-[0.95rem] text-ink-soft">Estimates by appointment, at your house.</p>
          </div>
          <div>
            <Eyebrow className="mb-2">{site.hic ? "PA registration" : "Based in"}</Eyebrow>
            {site.hic ? (
              <>
                <p className="font-display text-[1.2rem] font-semibold">PA HIC #{site.hic}</p>
                {site.hicNote && <p className="mt-1 text-[0.9rem] text-ink-mute">{site.hicNote}</p>}
                <p className="mt-1 text-[0.95rem] text-ink-soft">
                  <a href={site.hicUrl} rel="noopener" target="_blank" className="underline">
                    Verify with the PA Attorney General
                  </a>
                </p>
              </>
            ) : (
              <>
                <p className="font-display text-[1.2rem] font-semibold">Myerstown, Lebanon County</p>
                <p className="mt-1 text-[0.95rem] text-ink-soft">Serving Lebanon and Lancaster County, Hershey and Philadelphia.</p>
              </>
            )}
          </div>
        </div>
      </Section>
      <CtaBand source="about" />
    </>
  );
}
