import type { Metadata } from "next";
import Link from "next/link";
import { towns } from "@/content/towns";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { PageHero, CtaBand, CallButtons } from "@/components/blocks";
import { Section, Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Areas We Serve: Lebanon & Lancaster County, PA",
  description:
    "Lebanon, Annville, Palmyra, Hershey, Lititz, Ephrata, Manheim, Elizabethtown and Lancaster, within 40 minutes of Myerstown. Also Philadelphia rowhomes.",
  alternates: { canonical: "/service-areas/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Service areas", href: "/service-areas/" },
];

export default function AreasPage() {
  const byCounty = Array.from(new Set(towns.map((t) => t.county)));
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Service areas"
        title="Where we work"
        lede="Our shop is in Myerstown. Most jobs are within forty minutes: Lebanon County, the northern half of Lancaster County and the Hershey area. We also take whole-home rowhome renovations in Philadelphia."
      >
        <CallButtons />
      </PageHero>
      {byCounty.map((county, i) => (
        <Section key={county} tone={i % 2 ? "primer" : "paper"} tight>
          <Eyebrow className="mb-6">{county}</Eyebrow>
          <ul className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {towns
              .filter((t) => t.county === county)
              .map((t) => (
                <li key={t.slug} className="border-b border-line py-4">
                  <Link href={`/service-areas/${t.slug}/`} className="group block">
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-[1.15rem] font-semibold group-hover:text-bronze-deep">{t.name}, PA</span>
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink-mute tnum">{t.driveMinutes === 0 ? "home base" : `${t.driveMinutes} min · ${t.miles} mi`}</span>
                    </span>
                    <span className="mt-1 block text-[0.92rem] text-ink-soft">{t.intro[0].split(". ")[0]}.</span>
                  </Link>
                </li>
              ))}
          </ul>
        </Section>
      ))}
      <Section tone="graphite" steps tight>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <Eyebrow className="mb-3">Philadelphia</Eyebrow>
            <h2>Rowhome renovations in Philadelphia</h2>
            <p className="mt-4 max-w-2xl">
              Philadelphia is about an hour and forty-five minutes from Myerstown, so we do not drive there for a single bathroom. We do take on whole-home rowhome renovations, where the crew works on site for months. In 2025 we took a South Philadelphia rowhome from bare studs to finished house.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link href="/philadelphia-rowhome-renovation/" className="font-display text-[1.05rem] font-semibold text-white underline underline-offset-4 hover:text-bronze">
              Philadelphia rowhome renovation
            </Link>
          </div>
        </div>
      </Section>
      <CtaBand source="areas" />
    </>
  );
}
