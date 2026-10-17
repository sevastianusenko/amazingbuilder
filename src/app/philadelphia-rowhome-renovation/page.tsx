import type { Metadata } from "next";
import { projectBySlug } from "@/content/projects";
import { photo as getPhoto } from "@/content/photos";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { BeforeAfter } from "@/components/BeforeAfter";
import { PageHero, CtaBand, PhotoGrid, Process, Related, CallButtons } from "@/components/blocks";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";

export const metadata: Metadata = {
  title: { absolute: "Philadelphia Rowhome Renovation Contractor | Amazing Builders" },
  description:
    "Rowhome renovations in Philadelphia, top to bottom: kitchen, bathrooms, stairs, basement, floors, windows and paint under one contract. See our 2025 job.",
  alternates: { canonical: "/philadelphia-rowhome-renovation/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Service areas", href: "/service-areas/" },
  { name: "Philadelphia", href: "/philadelphia-rowhome-renovation/" },
];

const faqs = [
  { q: "Do you take small jobs in Philadelphia?", a: "No. Philadelphia is about an hour and forty-five minutes from our shop in Myerstown, so we only take whole-home or multi-room renovations there, where the crew is on site for weeks or months." },
  { q: "How long did the South Philadelphia project take?", a: "Demolition started in April 2025 and the house was finished in August 2025, about four and a half months, including a rebuilt staircase, kitchen, two bathrooms, basement, floors, windows and the back patio." },
  { q: "Do you pull Philadelphia permits?", a: "Yes. Licensed trades handle the electrical and plumbing permits and inspections, and we coordinate the building permit for structural and layout work." },
  { q: "Can the house stay empty while you work?", a: "For a whole-house renovation it should. We lock up every night, protect the front and keep the sidewalk clear." },
];

export default function PhillyPage() {
  const p = projectBySlug("south-philadelphia-rowhome-renovation")!;
  const ids = ["south-philadelphia-living-room-fireplace-after", "south-philadelphia-kitchen-window-wall-after", "south-philadelphia-bathroom-marble-vanity-after", "south-philadelphia-stairs-landing-after", "south-philadelphia-basement-finished-after", "south-philadelphia-patio-fence-after"];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Philadelphia · whole-home projects"
        title="We renovate Philadelphia rowhomes top to bottom"
        lede="Renovating a whole rowhome is a specific kind of job: narrow stairs, shared walls, a damp basement, one way in and out. We finished one in South Philadelphia in 2025 and we take on more."
        photo="south-philadelphia-facade-after"
      >
        <CallButtons />
      </PageHero>
      <Section tone="graphite" steps tight>
        <div className="mx-auto max-w-5xl">
          <Eyebrow className="mb-3">{p.place} · {p.when}</Eyebrow>
          <BeforeAfter before={getPhoto(p.before!)} after={getPhoto(p.after!)} sizes="(min-width: 1024px) 64rem, 100vw" />
        </div>
      </Section>
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-3">What a rowhome needs</Eyebrow>
            <h2>The whole house, in the right order</h2>
            <p className="measure mt-5 text-ink-soft">
              In a rowhome everything is connected: the staircase sets the layout, the kitchen sits against the party wall, the only bathroom is on the second floor and the basement decides where the plumbing can go. We plan the sequence first, then demo.
            </p>
            <p className="measure mt-4 text-ink-soft">On the 2025 project we rebuilt the staircase with new stringers, oak treads and iron balusters, installed a new kitchen and two bathrooms, ran LVP across the living floors, finished the basement, replaced the windows and front door and built a cedar-fenced patio out back.</p>
          </div>
          <div className="lg:col-span-7">
            <PhotoGrid ids={ids} />
          </div>
        </div>
      </Section>
      <Section tone="primer">
        <Process title="How a rowhome renovation runs" />
      </Section>
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <Faq items={faqs} title="Philadelphia: questions people ask" />
        </div>
      </Section>
      <Section tone="primer" tight>
        <Related serviceSlugs={["whole-home-renovation", "stairs-and-railings", "kitchen-remodeling", "bathroom-remodeling", "basement-finishing"]} />
      </Section>
      <CtaBand source="philadelphia" service="Whole-home renovation" title="Have a rowhome that needs everything?" />
    </>
  );
}
