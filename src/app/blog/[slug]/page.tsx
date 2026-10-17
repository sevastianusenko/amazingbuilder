import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts, getPost } from "@/lib/posts";
import { services } from "@/content/services";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/components/Schema";
import { Markdown } from "@/components/Markdown";
import { CtaBand, Related } from "@/components/blocks";
import { Section, Breadcrumbs, Eyebrow } from "@/components/ui/Section";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: { absolute: `${p.seoTitle || p.title} | Amazing Builders` },
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}/` },
    openGraph: { type: "article", title: p.title, description: p.description, images: [{ url: p.hero ? `/photos/${p.hero}.jpg` : "/og-default.jpg" }], publishedTime: p.date, modifiedTime: p.modified },
  };
}

function fmt(d: string) {
  if (!d) return "";
  const [y, m, day] = d.split("-");
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[Number(m) - 1]} ${Number(day)}, ${y}`;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog/" },
    { name: p.title, href: `/blog/${p.slug}/` },
  ];
  const hub = services.filter((s) => s.posts.includes(p.slug)).map((s) => s.slug);
  const more = getPosts()
    .filter((x) => x.slug !== p.slug)
    .slice(0, 3)
    .map((x) => ({ slug: x.slug, title: x.title }));
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={articleSchema({ title: p.title, description: p.description, url: `/blog/${p.slug}/`, image: p.hero ? `/photos/${p.hero}.jpg` : "/og-default.jpg", datePublished: p.date, dateModified: p.modified })} />
      <article>
        <header className="bg-paper">
          <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
            <Breadcrumbs items={[crumbs[0], crumbs[1]]} />
            <div className="mt-6 max-w-4xl">
              <Eyebrow className="mb-4">
                Published {fmt(p.date)}
                {p.modified && p.modified !== p.date ? ` · Updated ${fmt(p.modified)}` : ""} · {Math.max(3, Math.round(p.words / 220))} min read
              </Eyebrow>
              <h1 className="text-[clamp(2rem,1.3rem+3vw,3.6rem)]">{p.title}</h1>
              <p className="mt-5 text-[0.95rem] text-ink-mute">
                By the Amazing Builders crew, Myerstown, PA. Prices quoted are typical ranges for our region, not a quote for your house.{" "}
                <Link href="/contact/" className="text-bronze-deep underline">
                  Ask for one.
                </Link>
              </p>
            </div>
          </div>
        </header>
        <Section tone="paper" tight>
          <div className="mx-auto max-w-3xl">
            <Markdown source={p.body} />
          </div>
        </Section>
      </article>
      <Section tone="primer" tight>
        <Related serviceSlugs={hub} posts={more} />
      </Section>
      <CtaBand source={`post-${p.slug}`} title="Want a number for your house?" />
    </>
  );
}
