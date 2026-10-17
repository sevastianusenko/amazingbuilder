import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { publishedProjects, projectBySlug } from "@/content/projects";
import { photosOf, photo as getPhoto } from "@/content/photos";
import { services } from "@/content/services";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/components/Schema";
import { Photo } from "@/components/Photo";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Markdown } from "@/components/Markdown";
import { PageHero, CtaBand, Related, CallButtons } from "@/components/blocks";
import { Section, Eyebrow } from "@/components/ui/Section";

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p || !p.published) return {};
  return {
    title: { absolute: `${p.seoTitle ?? p.title} | Amazing Builders` },
    description: p.seoDescription ?? p.summary,
    alternates: { canonical: `/projects/${p.slug}/` },
    openGraph: { type: "article", title: p.title, description: p.seoDescription ?? p.summary, images: [{ url: `/photos/${p.cover}.jpg` }], publishedTime: p.date },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p || !p.published) notFound();
  const all = p.gallery ? p.gallery.map((k) => getPhoto(k)) : photosOf(p.slug);
  const afters = all.filter((x) => x.stage === "after" && x.key !== p.cover);
  const process = all.filter((x) => x.stage !== "after");
  const related = (p.related ?? []).map((s) => projectBySlug(s)).filter((x) => x && x.published);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects/" },
    { name: p.title, href: `/projects/${p.slug}/` },
  ];
  const eyebrow = [p.place, p.when].filter(Boolean).join(" · ");
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={articleSchema({ title: p.title, description: p.summary, url: `/projects/${p.slug}/`, image: `/photos/${p.cover}.jpg`, datePublished: p.date })} />
      <PageHero crumbs={crumbs} eyebrow={eyebrow} title={p.title} lede={p.summary} photo={p.cover}>
        <CallButtons />
      </PageHero>

      {p.before && p.after && (
        <Section tone="graphite" tight>
          <div className="mx-auto max-w-5xl">
            <Eyebrow className="mb-3">Before and after</Eyebrow>
            <BeforeAfter before={getPhoto(p.before)} after={getPhoto(p.after)} sizes="(min-width: 1024px) 64rem, 100vw" />
          </div>
        </Section>
      )}

      <Section tone="paper" tight>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-3">Scope</Eyebrow>
            <h2 className="text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)]">What we did</h2>
            <p className="mt-4 text-[0.95rem] text-ink-mute">
              Services on this job:{" "}
              {p.services.map((s, i) => {
                const svc = services.find((x) => x.slug === s);
                return svc ? (
                  <span key={s}>
                    {i > 0 && ", "}
                    <a href={`/${s}/`} className="text-bronze-deep underline">
                      {svc.name.toLowerCase()}
                    </a>
                  </span>
                ) : null;
              })}
              .
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {p.scope.map((it) => (
              <li key={it} className="rounded-card bg-primer px-5 py-4 font-semibold text-ink">
                {it}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {p.body && (
        <Section tone="paper" tight flushTop>
          <div className="mx-auto max-w-3xl">
            <Markdown source={p.body} />
          </div>
        </Section>
      )}

      {afters.length > 0 && (
        <Section tone="primer">
          <Eyebrow className="mb-3">Finished</Eyebrow>
          <h2 className="mb-8">The result</h2>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure]:mb-4 [&>figure]:break-inside-avoid">
            {afters.map((x) => (
              <Photo key={x.key} id={x.key} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" />
            ))}
          </div>
        </Section>
      )}

      {process.length > 0 && (
        <Section tone="paper">
          <Eyebrow className="mb-3">In progress</Eyebrow>
          <h2 className="mb-8">How it got there</h2>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-4 [&>figure]:mb-4 [&>figure]:break-inside-avoid">
            {process.map((x) => (
              <Photo key={x.key} id={x.key} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw" />
            ))}
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section tone="primer" tight>
          <Eyebrow className="mb-3">More projects</Eyebrow>
          <h2 className="mb-8">Related work</h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <li key={r!.slug}>
                <Link href={`/projects/${r!.slug}/`} className="group block rounded-card bg-paper p-4">
                  <Photo id={r!.cover} ratio="4 / 3" sizes="(min-width: 768px) 30vw, 100vw" />
                  <h3 className="mt-4 text-[1.1rem] group-hover:text-bronze-deep">{r!.title}</h3>
                  <p className="mt-1 text-[0.85rem] text-ink-mute">{[r!.place, r!.when].filter(Boolean).join(" · ")}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section tone="paper" tight>
        <Related serviceSlugs={p.services.slice(0, 6)} />
      </Section>
      <CtaBand source={`project-${p.slug}`} title="Have a house like this one?" />
    </>
  );
}
