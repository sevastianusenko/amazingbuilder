import fs from "node:fs";
import path from "node:path";

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  hero: string; // key of the first {{photo:...}} in the body, or empty
  date: string; // YYYY-MM-DD
  modified: string;
  words: number;
  body: string; // markdown
  excerpt: string;
};

const DIR = path.join(process.cwd(), "src", "content", "posts");

function parseFront(raw: string): { meta: Record<string, string>; body: string } {
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(raw);
  if (!m) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i < 0) continue;
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if (v.startsWith('"') && v.endsWith('"')) {
      try {
        v = JSON.parse(v) as string;
      } catch {
        v = v.slice(1, -1);
      }
    }
    meta[k] = v;
  }
  return { meta, body: raw.slice(m[0].length) };
}

function clean(s: string) {
  // House style: no em or en dashes.
  return s.replace(/\s*[—–]\s*/g, ", ").replace(/,\s*,/g, ",");
}

let cache: Post[] | null = null;

export function getPosts(): Post[] {
  if (cache) return cache;
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((f) => {
    const raw = fs.readFileSync(path.join(DIR, f), "utf8").replace(/\r\n/g, "\n");
    const { meta, body } = parseFront(raw);
    const text = body
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/^#+ .*$/gm, "")
      .replace(/\*\*/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\s+/g, " ")
      .trim();
    const date = (meta.date || "").slice(0, 10);
    const modified = (meta.modified || meta.date || "").slice(0, 10);
    return {
      slug: meta.slug || f.replace(/\.md$/, ""),
      title: clean(meta.title || meta.slug || f),
      seoTitle: clean(meta.seo_title || meta.title || "").replace(/\s*\|\s*Amazing Builders\s*$/i, ""),
      description: clean(meta.seo_description || text.slice(0, 155)),
      date,
      modified,
      words: Number(meta.words || 0),
      body: clean(body),
      hero: /\{\{photo:([a-z0-9-]+)\}\}/.exec(body)?.[1] ?? "",
      excerpt: clean(text.slice(0, 180)).replace(/\s\S*$/, "") + "...",
    } satisfies Post;
  });
  posts.sort((a, b) => (a.modified < b.modified ? 1 : -1));
  cache = posts;
  return posts;
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);
