import type { Metadata } from "next";
import { services } from "@/content/services";
import { serviceGroups } from "@/content/nav";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { PageHero, ServiceCard, Process, CtaBand, CallButtons } from "@/components/blocks";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Remodeling & Painting Services",
  description:
    "One crew for kitchens, bathrooms, basements, stairs, floors, painting, cabinets, drywall, windows, doors, decks and siding in Lebanon County, PA.",
  alternates: { canonical: "/services/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Services"
        title="Everything we remodel, build and paint"
        lede="Twelve services from one crew. We do the carpentry, tile, floors, drywall and paint ourselves and bring in licensed electricians and plumbers when a job needs them."
      >
        <CallButtons />
      </PageHero>
      {serviceGroups.map((g, gi) => (
        <Section key={g.label} tone={gi % 2 ? "primer" : "paper"} tight>
          <h2 className="eyebrow mb-8">{g.label}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {g.items.map((it) => {
              const s = services.find((x) => `/${x.slug}/` === it.href)!;
              return <ServiceCard key={s.slug} s={s} />;
            })}
          </div>
        </Section>
      ))}
      <Section tone="graphite" steps>
        <Process dark />
      </Section>
      <CtaBand source="services" />
    </>
  );
}
