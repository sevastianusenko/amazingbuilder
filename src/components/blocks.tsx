import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { services, type Service } from "@/content/services";
import { towns } from "@/content/towns";
import type { Project } from "@/content/projects";
import { photo as getPhoto } from "@/content/photos";
import { Photo } from "./Photo";
import { EstimateCard } from "./LeadForm";
import { Button } from "./ui/Button";
import { Eyebrow, Breadcrumbs } from "./ui/Section";

/* ---------- Inner page hero (white, like the old site's inner pages) ---------- */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  tagline,
  lede,
  photo,
  children,
}: {
  crumbs: { name: string; href: string }[];
  eyebrow?: string;
  title: string;
  tagline?: string; // our own line under a keyword-led H1
  lede?: string;
  photo?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-paper">
      <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        <Breadcrumbs items={crumbs} />
        <div className={`mt-6 grid gap-10 ${photo ? "lg:grid-cols-12 lg:items-end" : ""}`}>
          <div className={photo ? "lg:col-span-7" : "max-w-4xl"}>
            {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
            <h1>{title}</h1>
            {tagline && <p className="mt-4 text-[clamp(1.15rem,1rem+0.7vw,1.5rem)] font-semibold leading-snug text-ink">{tagline}</p>}
            {lede && <p className="lede measure mt-6 text-ink-soft">{lede}</p>}
            {children && <div className="mt-8">{children}</div>}
          </div>
          {photo && (
            <div className="lg:col-span-5">
              <Photo id={photo} priority sizes="(min-width: 1024px) 40vw, 100vw" ratio="4 / 3" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process: five numbered cream cards ---------- */
export const processSteps = [
  { label: "Day 1", title: "Call or send the form", text: "A ten-minute conversation about the room, your budget range and when you want it done." },
  { label: "Within a week", title: "Walkthrough and written estimate", text: "We measure, look behind the walls where we can, and send an itemized estimate." },
  { label: "2 to 4 weeks", title: "Schedule and materials", text: "You pick finishes. We order materials and give you a start date and a plan for living through the work." },
  { label: "The build", title: "Same crew, every day", text: "Dust barriers up, floors protected, cleanup every evening. You get updates, not surprises." },
  { label: "After", title: "Walkthrough and follow-up", text: "We walk the finished job with you, fix anything on the list, and come back if something needs attention." },
];

export function Process({ dark = false, title = "How a job runs" }: { dark?: boolean; title?: string }) {
  return (
    <div>
      <div className="mb-10 max-w-2xl">
        <Eyebrow className="mb-3">Process</Eyebrow>
        <h2>{title}</h2>
      </div>
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((s, i) => (
          <li key={s.title} className={`rounded-card p-6 ${dark ? "bg-white/10" : "bg-primer"}`}>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-bronze text-[0.95rem] font-semibold text-white">{i + 1}</span>
            <p className={`mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.08em] ${dark ? "text-bronze-light" : "text-bronze-deep"}`}>{s.label}</p>
            <h3 className={`mt-1 text-[1.1rem] ${dark ? "text-white" : ""}`}>{s.title}</h3>
            <p className={`mt-2 text-[0.95rem] ${dark ? "text-white/85" : "text-ink-soft"}`}>{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- Cards ---------- */
export function ServiceCard({ s, photo = true, className = "" }: { s: Service; photo?: boolean; className?: string }) {
  return (
    <Link href={`/${s.slug}/`} className={`group block ${className}`}>
      {photo && <Photo id={s.photo} ratio="4 / 3" sizes="(min-width: 1024px) 30vw, 100vw" />}
      <h3 className="mt-5 group-hover:text-bronze-deep">{s.name}</h3>
      <p className="mt-2 text-[0.97rem] text-ink-soft">{s.short}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-bronze-deep">
        See the work
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

export function ServiceRow({ s }: { s: Service }) {
  return (
    <Link href={`/${s.slug}/`} className="group flex items-center justify-between gap-4 rounded-card bg-primer px-5 py-4 transition-colors hover:bg-primer-deep">
      <span>
        <span className="block text-[1.02rem] font-semibold text-ink group-hover:text-bronze-deep">{s.name}</span>
        <span className="block text-[0.9rem] text-ink-mute">{s.short}</span>
      </span>
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze text-white" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14">
          <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/projects/${p.slug}/`} className="group block">
      <Photo id={p.cover} ratio="4 / 3" sizes="(min-width: 1024px) 45vw, 100vw" />
      <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink-mute">{[p.place, p.when].filter(Boolean).join(" · ")}</p>
      <h3 className="mt-1 group-hover:text-bronze-deep">{p.title}</h3>
      <p className="mt-2 text-[0.97rem] text-ink-soft">{p.summary}</p>
    </Link>
  );
}

/* ---------- Photo grid with stamps ---------- */
export function PhotoGrid({ ids, cols = 3 }: { ids: string[]; cols?: 2 | 3 }) {
  if (!ids.length) return null;
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`}>
      {ids.map((id) => {
        const p = getPhoto(id);
        return <Photo key={id} id={id} ratio={p.h > p.w ? "4 / 5" : "4 / 3"} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" />;
      })}
    </div>
  );
}

/* ---------- Trust line ---------- */
export function TrustLine({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 text-[0.74rem] font-semibold uppercase tracking-[0.08em] ${className}`}>
      <li>
        <a href={site.google.mapsUrl} rel="noopener" target="_blank" className="underline underline-offset-4 hover:text-bronze">
          {site.google.rating.toFixed(1)} on Google · {site.google.count} reviews
        </a>
      </li>
      <li>Mon to Fri, 7 to 5</li>
      <li>Based in Myerstown, PA</li>
      {site.hic && <li>PA HIC #{site.hic}</li>}
    </ul>
  );
}

/* ---------- CTA band: photo under a dark overlay, white form card (the old site's closing section) ---------- */
export function CtaBand({ service, source = "cta", title = "Tell us about the room." }: { service?: string; source?: string; title?: string }) {
  const p = getPhoto("deck-white-vinyl-railings");
  return (
    <section id="estimate" className="relative overflow-hidden bg-graphite-deep">
      <div className="absolute inset-0">
        <Image src={p.src} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,24,27,0.85)_0%,rgba(20,24,27,0.7)_50%,rgba(20,24,27,0.55)_100%)]" aria-hidden="true" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="on-dark lg:col-span-5">
            <Eyebrow className="mb-3">Free estimate</Eyebrow>
            <h2 className="text-white">{title}</h2>
            <p className="mt-5 max-w-md">Send a few lines and a couple of photos for a ballpark price, or call. For an exact number we walk through the house and send a written, itemized estimate a few days later.</p>
            <div className="mt-7">
              <Button href={site.phoneHref} variant="bronze">
                Call {site.phone}
              </Button>
            </div>
            <p className="mt-4 text-[0.9rem]">{site.hoursText}</p>
          </div>
          <div className="lg:col-span-7">
            <EstimateCard source={source} defaultService={service} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Related links ---------- */
export function Related({ serviceSlugs = [], townSlugs = [], posts = [] }: { serviceSlugs?: string[]; townSlugs?: string[]; posts?: { slug: string; title: string }[] }) {
  const svc = serviceSlugs.map((s) => services.find((x) => x.slug === s)).filter(Boolean) as Service[];
  const tw = townSlugs.map((s) => towns.find((x) => x.slug === s)).filter(Boolean);
  if (!svc.length && !tw.length && !posts.length) return null;
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {svc.length > 0 && (
        <div>
          <Eyebrow className="mb-3">Related services</Eyebrow>
          <ul className="space-y-2">
            {svc.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}/`} className="font-semibold text-ink hover:text-bronze-deep">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {posts.length > 0 && (
        <div>
          <Eyebrow className="mb-3">Guides</Eyebrow>
          <ul className="space-y-2">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}/`} className="font-semibold text-ink hover:text-bronze-deep">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {tw.length > 0 && (
        <div>
          <Eyebrow className="mb-3">Where we do this work</Eyebrow>
          <ul className="flex flex-wrap gap-2">
            {tw.map((t) => (
              <li key={t!.slug}>
                <Link href={`/service-areas/${t!.slug}/`} className="inline-block rounded-pill bg-primer px-4 py-1.5 text-[0.9rem] font-medium text-ink hover:bg-primer-deep">
                  {t!.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function CallButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button href="/contact/" variant="bronze">
        Get a free estimate
      </Button>
      <Button href={site.phoneHref} variant={light ? "ghost-light" : "ghost"}>
        Call {site.phone}
      </Button>
    </div>
  );
}
