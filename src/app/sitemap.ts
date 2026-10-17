import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { towns } from "@/content/towns";
import { publishedProjects } from "@/content/projects";
import { getPosts } from "@/lib/posts";

const LAUNCH = new Date("2026-10-06");

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${site.url}${p}`;
  const entries: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: LAUNCH, changeFrequency: "monthly", priority: 1 },
    { url: u("/services/"), lastModified: LAUNCH, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/projects/"), lastModified: LAUNCH, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/service-areas/"), lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.6 },
    { url: u("/philadelphia-rowhome-renovation/"), lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.8 },
    { url: u("/blog/"), lastModified: LAUNCH, changeFrequency: "weekly", priority: 0.7 },
    { url: u("/about/"), lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.6 },
    { url: u("/reviews/"), lastModified: LAUNCH, changeFrequency: "monthly", priority: 0.6 },
    { url: u("/contact/"), lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.7 },
  ];
  for (const s of services) entries.push({ url: u(`/${s.slug}/`), lastModified: LAUNCH, changeFrequency: "monthly", priority: 0.9 });
  for (const p of publishedProjects) entries.push({ url: u(`/projects/${p.slug}/`), lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.7 });
  for (const t of towns) entries.push({ url: u(`/service-areas/${t.slug}/`), lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.6 });
  for (const p of getPosts()) entries.push({ url: u(`/blog/${p.slug}/`), lastModified: new Date(p.modified || p.date), changeFrequency: "yearly", priority: 0.5 });
  return entries;
}
