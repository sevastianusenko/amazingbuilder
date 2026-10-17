import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, fullAddress } from "@/lib/site";
import { services, serviceBySlug } from "@/content/services";
import { serviceDetail } from "@/content/services-detail";
import { towns } from "@/content/towns";
import { projectBySlug } from "@/content/projects";
import { photosFor } from "@/content/photos";
import { getPost } from "@/lib/posts";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/Schema";
import { Photo } from "@/components/Photo";
import { PageHero, PhotoGrid, CtaBand, Related, CallButtons } from "@/components/blocks";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: { absolute: `${s.title} | Amazing Builders` },
    description: s.description,
    alternates: { canonical: `/${s.slug}/` },
    openGraph: { title: s.title, description: s.description, images: [{ url: `/photos/${s.photo}.jpg` }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();
  const d = serviceDetail(s.slug);
  const gallery = photosFor(s.slug)
    .filter((p) => p.key !== s.photo)
    .sort((a, b) => (a.stage === "after" ? -1 : 1) - (b.stage === "after" ? -1 : 1))
    .slice(0, 6)
    .map((p) => p.key);
  const posts = s.posts.map((slug) => getPost(slug)).filter(Boolean) as { slug: string; title: string }[];
  const projects = (d?.projects ?? []).map((p) => projectBySlug(p)).filter((p) => p && p.published);
  const faqs = d?.faqs ?? s.faqs;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services/" },
    { name: s.name, href: `/${s.slug}/` },
  ];
  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Services · Free written estimates" title={s.h1} tagline={s.tagline} lede={s.intro[0]} photo={s.photo}>
        <CallButtons />
      </PageHero>

      {/* Why us, for this service */}
      {d && (
        <Section tone="primer" tight>
          <div className="mb-8 max-w-2xl">
            <Eyebrow className="mb-3">Why Amazing Builders</Eyebrow>
            <h2>Why homeowners call us for {s.name.toLowerCase()}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {d.why.map((w) => (
              <div key={w.title} className="rounded-card bg-paper p-6">
                <h3 className="text-[1.1rem]">{w.title}</h3>
                <p className="mt-2 text-[0.95rem] text-ink-soft">{w.text}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* What is included and what lives on other pages */}
      <Section tone="paper" tight>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow className="mb-3">What is included</Eyebrow>
            <h2 className="text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)]">Everything from the first day to the last coat of paint</h2>
            {s.intro.slice(1).map((p) => (
              <p key={p} className="measure mt-5 text-ink-soft">
                {p}
              </p>
            ))}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.includes.map((it) => (
                <li key={it} className="flex items-start gap-3 rounded-card bg-primer px-5 py-4">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bronze text-white" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <path d="M2 5l2.2 2.2L8 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-semibold text-ink">{it}</span>
                </li>
              ))}
            </ul>
          </div>
          {d && (
            <aside className="lg:col-span-5">
              <div className="rounded-card border border-line p-6">
                <Eyebrow className="mb-3">Not on this page</Eyebrow>
                <p className="text-[0.95rem] text-ink-soft">Related work that has its own page, so you find the right one:</p>
                <ul className="mt-4 space-y-3">
                  {d.scope.elsewhere.map((e) => (
                    <li key={e.href + e.text}>
                      <Link href={e.href} className="font-semibold text-bronze-deep underline underline-offset-4 hover:text-ink">
                        {e.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </Section>

      {/* Our work */}
      {(gallery.length > 0 || projects.length > 0) && (
        <Section tone="primer">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow className="mb-3">Our work</Eyebrow>
              <h2>{s.name} we have done</h2>
            </div>
            <p className="max-w-md text-[0.95rem] text-ink-mute">Every photo is from our own jobs. The stamp shows where and when it was taken.</p>
          </div>
          {projects.length > 0 && (
            <ul className="mb-8 grid gap-6 md:grid-cols-3">
              {projects.map((p) => (
                <li key={p!.slug}>
                  <Link href={`/projects/${p!.slug}/`} className="group block rounded-card bg-paper p-4">
                    <Photo id={p!.cover} ratio="4 / 3" sizes="(min-width: 768px) 30vw, 100vw" />
                    <h3 className="mt-4 text-[1.1rem] group-hover:text-bronze-deep">{p!.title}</h3>
                    <p className="mt-1 text-[0.85rem] text-ink-mute">{[p!.place, p!.when].filter(Boolean).join(" · ")}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <PhotoGrid ids={gallery} />
        </Section>
      )}

      {/* How we do it, for this service */}
      {d && (
        <Section tone="graphite">
          <div className="mb-10 max-w-2xl">
            <Eyebrow className="mb-3">How we do it</Eyebrow>
            <h2>{s.name}, step by step</h2>
          </div>
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {d.steps.map((st, i) => (
              <li key={st.title} className="rounded-card bg-white/10 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-bronze text-[0.95rem] font-semibold text-white">{i + 1}</span>
                <h3 className="mt-4 text-[1.1rem] text-white">{st.title}</h3>
                <p className="mt-2 text-[0.95rem] text-white/85">{st.text}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* Options and pricing */}
      {d && (
        <Section tone="paper">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow className="mb-3">Options</Eyebrow>
              <h2 className="mb-6 text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)]">{d.options.heading}</h2>
              <div className="overflow-hidden rounded-card border border-line">
                <table className="w-full text-[0.95rem]">
                  <tbody>
                    {d.options.items.map((o, i) => (
                      <tr key={o.name} className={i % 2 ? "bg-primer" : "bg-paper"}>
                        <th scope="row" className="w-[38%] px-5 py-3 text-left align-top font-semibold text-ink">
                          {o.name}
                        </th>
                        <td className="px-5 py-3 text-ink-soft">{o.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-card bg-primer p-6 sm:p-8">
                <Eyebrow className="mb-3">What it costs</Eyebrow>
                <h2 className="text-[clamp(1.4rem,1.1rem+1.2vw,2rem)]">Typical ranges</h2>
                <p className="mt-3 text-[0.95rem] text-ink-soft">{d.pricing.intro}</p>
                <dl className="mt-5 divide-y divide-line">
                  {d.pricing.ranges.map(([label, range]) => (
                    <div key={label} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <dt className="text-[0.95rem] text-ink-soft">{label}</dt>
                      <dd className="font-semibold text-ink tnum sm:text-right">{range}</dd>
                    </div>
                  ))}
                </dl>
                {d.pricing.guides && d.pricing.guides.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {d.pricing.guides.map((g) => (
                      <li key={g.slug}>
                        <Link href={`/blog/${g.slug}/`} className="font-semibold text-bronze-deep underline underline-offset-4 hover:text-ink">
                          {g.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-6 text-[0.9rem] text-ink-mute">Pennsylvania requires a written contract for any home improvement job over $500. Every estimate we send is itemized.</p>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* About us and where we do this */}
      <Section tone="primer" tight>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow className="mb-3">About Amazing Builders</Eyebrow>
            <h2 className="text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)]">A small crew that does the whole job</h2>
            <p className="measure mt-4 text-ink-soft">
              Amazing Builders is a remodeling and painting company based at {fullAddress}, run by {site.owner}. Our crew does the carpentry, tile, floors, drywall and paint; licensed electricians and plumbers handle the rough-in. {site.google.rating.toFixed(1)} stars from {site.google.count} Google reviews, {site.hoursText.toLowerCase()}.
              {site.hic ? ` PA Home Improvement Contractor #${site.hic}.` : ""}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.9rem]">
              <Link href="/about/" className="font-semibold text-bronze-deep underline underline-offset-4 hover:text-ink">
                More about us
              </Link>
              <Link href="/reviews/" className="font-semibold text-bronze-deep underline underline-offset-4 hover:text-ink">
                Read the reviews
              </Link>
              <Link href="/projects/" className="font-semibold text-bronze-deep underline underline-offset-4 hover:text-ink">
                All projects
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Eyebrow className="mb-3">Where we do this</Eyebrow>
            <p className="text-ink-soft">{d?.areas ?? "Within about forty minutes of Myerstown, across Lebanon County, the northern half of Lancaster County and the Hershey area."}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {towns.map((t) => (
                <li key={t.slug}>
                  <Link href={`/service-areas/${t.slug}/`} className="inline-block rounded-pill bg-paper px-4 py-1.5 text-[0.9rem] font-medium text-ink hover:bg-primer-deep">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <Faq items={faqs} title={`${s.name}: questions people ask us`} />
        </div>
      </Section>

      <Section tone="primer" tight>
        <Related serviceSlugs={s.related} posts={posts} />
      </Section>

      <CtaBand service={s.name} source={`service-${s.slug}`} title={`Planning ${s.name.toLowerCase()}? Tell us about it.`} />
    </>
  );
}
