import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { towns, townBySlug, type Town } from "@/content/towns";
import { services } from "@/content/services";
import { projectBySlug } from "@/content/projects";
import { site, fullAddress } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { Photo } from "@/components/Photo";
import { PageHero, CtaBand, PhotoGrid, CallButtons } from "@/components/blocks";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";

export function generateStaticParams() {
  return towns.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = townBySlug(slug);
  if (!t) return {};
  return {
    title: { absolute: `${t.title} | Amazing Builders` },
    description: t.description,
    alternates: { canonical: `/service-areas/${t.slug}/` },
    openGraph: { title: t.title, description: t.description, images: [{ url: t.photos[0] ? `/photos/${t.photos[0]}.jpg` : "/og-default.jpg" }] },
  };
}

/* ---------- Blocks. Their order changes per town (variant) so the pages do not read as one template. ---------- */

function IntroBlock({ t }: { t: Town }) {
  if (t.intro.length < 2) return null;
  return (
    <Section tone="paper" tight>
      <div className="measure">
        {t.intro.slice(1).map((p) => (
          <p key={p.slice(0, 40)} className="mt-4 text-ink-soft first:mt-0">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}

function GlanceBlock({ t, tone = "primer" }: { t: Town; tone?: "primer" | "paper" }) {
  return (
    <Section tone={tone} tight>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow className="mb-3">{t.name} at a glance</Eyebrow>
          <dl className={`divide-y divide-line rounded-card px-6 ${tone === "paper" ? "bg-primer" : "bg-paper"}`}>
            {t.glance.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-3 sm:grid-cols-12 sm:gap-4">
                <dt className="text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-ink-mute sm:col-span-4">{k}</dt>
                <dd className="text-[0.97rem] text-ink sm:col-span-8">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-5">
          <Eyebrow className="mb-3">Getting to you</Eyebrow>
          <p className="text-ink-soft">{t.route}</p>
          <p className="mt-3 text-[0.9rem] text-ink-mute">
            Our shop: {fullAddress}.{" "}
            <a href={site.google.mapsUrl} rel="noopener" target="_blank" className="underline hover:text-bronze">
              Map
            </a>
          </p>
          <Eyebrow className="mb-2 mt-6">Around {t.name} we also cover</Eyebrow>
          <ul className="flex flex-wrap gap-2">
            {t.nearby.map((n) => (
              <li key={n} className={`rounded-pill px-3 py-1 text-[0.85rem] text-ink ${tone === "paper" ? "bg-primer" : "bg-paper"}`}>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function HousesBlock({ t, tone = "paper" }: { t: Town; tone?: "primer" | "paper" }) {
  return (
    <Section tone={tone} tight>
      <div className="mb-8 max-w-2xl">
        <Eyebrow className="mb-3">The houses</Eyebrow>
        <h2>What houses in {t.name} need</h2>
      </div>
      <div className={`grid gap-5 ${t.houses.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
        {t.houses.map((h) => (
          <div key={h.title} className={`rounded-card p-6 ${tone === "paper" ? "bg-primer" : "bg-paper"}`}>
            <h3 className="text-[1.1rem]">{h.title}</h3>
            <p className="mt-2 text-[0.95rem] text-ink-soft">{h.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FocusBlock({ t, tone = "primer" }: { t: Town; tone?: "primer" | "paper" }) {
  return (
    <Section tone={tone} tight>
      <div className="mb-8 max-w-2xl">
        <Eyebrow className="mb-3">What we do most here</Eyebrow>
        <h2>Services that matter in {t.name}</h2>
      </div>
      <ul className="grid gap-4 md:grid-cols-2">
        {t.focus.map((f) => {
          const s = services.find((x) => x.slug === f.slug);
          if (!s) return null;
          return (
            <li key={f.slug}>
              <Link href={`/${s.slug}/`} className={`group flex h-full items-start gap-4 rounded-card p-5 transition-colors ${tone === "primer" ? "bg-paper hover:bg-primer-deep" : "bg-primer hover:bg-primer-deep"}`}>
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze text-white" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[1.05rem] font-semibold text-ink group-hover:text-bronze-deep">{s.name}</span>
                  <span className="mt-1 block text-[0.93rem] text-ink-soft">{f.why}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function WorkBlock({ t, tone = "paper" }: { t: Town; tone?: "primer" | "paper" }) {
  const projects = t.projects.map((p) => projectBySlug(p)).filter((p) => p && p.published);
  const covers = new Set(projects.map((p) => p!.cover));
  // Photos already shown as a project cover are not repeated in the grid; a grid of one photo is skipped.
  const extra = t.photos.filter((id) => !covers.has(id));
  const photos = extra.length >= 2 ? extra : [];
  if (!projects.length && !photos.length) return null;
  const local = projects.length > 0;
  const card = tone === "paper" ? "bg-primer" : "bg-paper";
  return (
    <Section tone={tone} tight>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow className="mb-3">{local ? "Our work nearby" : "Work like the houses here"}</Eyebrow>
          <h2>{local ? `What we have built around ${t.name}` : `The kind of work ${t.name} houses ask for`}</h2>
        </div>
        <p className="max-w-md text-[0.95rem] text-ink-mute">Every photo is our own job. The stamp says where and when it was taken.</p>
      </div>
      {projects.length === 1 && (
        <Link href={`/projects/${projects[0]!.slug}/`} className={`group mb-8 grid gap-6 rounded-card p-4 md:grid-cols-12 md:items-center ${card}`}>
          <div className="md:col-span-7">
            <Photo id={projects[0]!.cover} ratio="16 / 10" sizes="(min-width: 768px) 55vw, 100vw" />
          </div>
          <div className="md:col-span-5 md:pr-4">
            <Eyebrow className="mb-2">Project</Eyebrow>
            <h3 className="text-[1.3rem] group-hover:text-bronze-deep">{projects[0]!.title}</h3>
            <p className="mt-2 text-[0.95rem] text-ink-soft">{projects[0]!.summary}</p>
            <p className="mt-3 text-[0.85rem] text-ink-mute">{[projects[0]!.place, projects[0]!.when].filter(Boolean).join(" · ")}</p>
          </div>
        </Link>
      )}
      {projects.length > 1 && (
        <ul className={`mb-8 grid gap-6 ${projects.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {projects.map((p) => (
            <li key={p!.slug}>
              <Link href={`/projects/${p!.slug}/`} className={`group block h-full rounded-card p-4 ${card}`}>
                <Photo id={p!.cover} ratio="4 / 3" sizes="(min-width: 768px) 45vw, 100vw" />
                <h3 className="mt-4 text-[1.1rem] group-hover:text-bronze-deep">{p!.title}</h3>
                <p className="mt-1 text-[0.85rem] text-ink-mute">{[p!.place, p!.when].filter(Boolean).join(" · ")}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <PhotoGrid ids={photos} cols={photos.length >= 3 ? 3 : 2} />
    </Section>
  );
}

function NotesBlock({ t }: { t: Town }) {
  return (
    <Section tone="graphite" tight>
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow className="mb-3">Good to know</Eyebrow>
          <h2>Working in {t.name}</h2>
        </div>
        <ul className="space-y-4 lg:col-span-8">
          {t.notes.map((n) => (
            <li key={n.slice(0, 40)} className="flex items-start gap-3">
              <span className="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-bronze-light" aria-hidden="true" />
              <span className="text-white/90">{n}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function FaqBlock({ t, tone = "paper" }: { t: Town; tone?: "primer" | "paper" }) {
  return (
    <Section tone={tone}>
      <div className="mx-auto max-w-3xl">
        <Faq items={t.faqs} title={`Questions from ${t.name} homeowners`} />
      </div>
    </Section>
  );
}

function NearbyBlock({ t }: { t: Town }) {
  const others = towns.filter((x) => x.slug !== t.slug);
  return (
    <Section tone="primer" tight>
      <Eyebrow className="mb-3">Other towns we serve</Eyebrow>
      <ul className="flex flex-wrap gap-2">
        {others.map((o) => (
          <li key={o.slug}>
            <Link href={`/service-areas/${o.slug}/`} className="inline-block rounded-pill bg-paper px-4 py-1.5 text-[0.9rem] font-medium text-ink hover:bg-primer-deep">
              {o.name}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/philadelphia-rowhome-renovation/" className="inline-block rounded-pill bg-paper px-4 py-1.5 text-[0.9rem] font-medium text-ink hover:bg-primer-deep">
            Philadelphia rowhomes
          </Link>
        </li>
      </ul>
    </Section>
  );
}

function order(t: Town): ReactNode[] {
  switch (t.variant) {
    case "story":
      return [<IntroBlock key="i" t={t} />, <HousesBlock key="h" t={t} tone="primer" />, <FocusBlock key="f" t={t} tone="paper" />, <WorkBlock key="w" t={t} tone="primer" />, <GlanceBlock key="g" t={t} tone="paper" />, <NotesBlock key="n" t={t} />, <FaqBlock key="q" t={t} />, <NearbyBlock key="nb" t={t} />];
    case "guide":
      return [<GlanceBlock key="g" t={t} />, <IntroBlock key="i" t={t} />, <FocusBlock key="f" t={t} tone="primer" />, <HousesBlock key="h" t={t} tone="paper" />, <WorkBlock key="w" t={t} tone="primer" />, <NotesBlock key="n" t={t} />, <FaqBlock key="q" t={t} />, <NearbyBlock key="nb" t={t} />];
    case "qa":
    default:
      return [<IntroBlock key="i" t={t} />, <FaqBlock key="q" t={t} tone="primer" />, <HousesBlock key="h" t={t} tone="paper" />, <FocusBlock key="f" t={t} tone="primer" />, <WorkBlock key="w" t={t} tone="paper" />, <NotesBlock key="n" t={t} />, <GlanceBlock key="g" t={t} tone="primer" />, <NearbyBlock key="nb" t={t} />];
  }
}

export default async function TownPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = townBySlug(slug);
  if (!t) notFound();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service areas", href: "/service-areas/" },
    { name: `${t.name}, PA`, href: `/service-areas/${t.slug}/` },
  ];
  const eyebrow = `${t.name} · ${t.county}${t.driveMinutes ? ` · about ${t.driveMinutes} minutes from our shop` : " · our home base"}`;
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero crumbs={crumbs} eyebrow={eyebrow} title={t.h1} tagline={t.tagline} lede={t.intro[0]} photo={t.photos[0]}>
        <CallButtons />
      </PageHero>
      {order(t)}
      <CtaBand source={`town-${t.slug}`} title={`Planning a project in ${t.name}?`} />
    </>
  );
}
