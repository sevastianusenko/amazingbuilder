import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { PageHero, CtaBand } from "@/components/blocks";
import { Section } from "@/components/ui/Section";
import { Photo } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Remodeling Cost Guides for Lebanon County, PA",
  description:
    "Straight answers on what remodeling costs in Lebanon and Lancaster County, PA: kitchens, bathrooms, basements, painting, flooring, siding and hiring.",
  alternates: { canonical: "/blog/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog/" },
];

function fmt(d: string) {
  if (!d) return "";
  const [y, m] = d.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[Number(m) - 1]} ${y}`;
}

export default function BlogPage() {
  const posts = getPosts();
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Blog" title="Cost guides and straight answers" lede="What remodeling actually costs around Lebanon County, how long it takes, and how to tell a good contractor from a bad one. Written from our own jobs." />
      <Section tone="paper" tight>
        <ul className="grid gap-x-10 gap-y-2 md:grid-cols-2">
          {posts.map((p) => (
            <li key={p.slug} className="border-b border-line py-8">
              <Link href={`/blog/${p.slug}/`} className="group block">
                {p.hero && (
                  <div className="mb-5">
                    <Photo id={p.hero} ratio="16 / 10" sizes="(min-width: 768px) 45vw, 100vw" />
                  </div>
                )}
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink-mute">
                  Updated {fmt(p.modified)} · {Math.max(3, Math.round(p.words / 220))} min read
                </p>
                <h2 className="mt-2 text-[clamp(1.25rem,1.1rem+0.8vw,1.6rem)] group-hover:text-bronze-deep">{p.title}</h2>
                <p className="mt-2 text-[0.97rem] text-ink-soft">{p.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand source="blog" title="Want a number for your house instead of a range?" />
    </>
  );
}
