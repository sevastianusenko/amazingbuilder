# amazingbuilderspa.com

Next.js 16 (App Router, Turbopack), Tailwind 4, TypeScript. Static site with one API route for the lead form. Design system in `DESIGN.md`. Research behind every decision in `../research/`.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run lint
npx tsc --noEmit
```

Set `RESEND_API_KEY` in `.env.local` (and in Vercel) for the lead form to deliver email through Resend. `LEAD_TO`: comma-separated recipients, the Resend account email first (default info@amazingbuilderspa.com). `LEAD_FROM` overrides the sender (default leads@amazingbuilderspa.com, the domain must be verified in Resend); if Resend refuses it, the route retries from resend.dev to the first `LEAD_TO` address only. Without the key the route logs the lead on the server and still returns success.

## Where things live

| Path | What |
|---|---|
| `src/lib/site.ts` | NAP, phone, hours, Google profile ids, HIC number (`null` hides every license line). Change business facts here only. |
| `src/content/services.ts` | 12 service pages: title, H1, meta, intro, includes, hero photo, related links. Rendered by `app/[slug]`. |
| `src/content/services-detail/` | Landing-page content per service: why-us cards, scope boundaries (what lives on other pages), step-by-step process, options table, short pricing with guide links, project slugs, areas, FAQs. One object per service, split across interior/finishes/outside. |
| `src/content/towns.ts` | 11 service-area pages, each written on its own: local facts and glance table, the housing stock and what it needs, the services that matter there with the local reason, practical notes, nearby townships, photo keys, project slugs, FAQs. `variant` (story / guide / qa) sets the section order so the pages do not read as one template. Facts checked against `../research/wp-export/pages-txt/`. Rendered by `app/service-areas/[slug]`. |
| `src/content/projects.ts` | Case studies. `published: false` keeps a project out of the index, sitemap and routes until the client confirms place and year. |
| `src/content/photos.ts` | Generated. Every client photo with place, month and stage from EXIF. Regenerate with `python ../research/process-photos.py`. |
| `src/content/reviews.ts` | Real Google reviews, text as written. |
| `src/content/posts/*.md` | Blog posts migrated from WordPress (frontmatter + markdown). `lib/posts.ts` reads them at build time and strips em dashes. |
| `src/content/nav.ts` | Header menu groups. |
| `src/components/Photo.tsx` | The only way to place a photo: `next/image` plus the EXIF stamp. |
| `src/components/blocks.tsx` | Shared page blocks: PageHero, Process (the staircase), cards, CtaBand, Related. |
| `src/components/home/` | Home page sections. |
| `src/app/api/lead/route.ts` | Lead form endpoint (honeypot, validation, Web3Forms). |
| `next.config.ts` | 301 map from every old WordPress URL, security headers, trailing slashes. |
| `public/photos/` | Processed client photos (1800px, q82). `public/brand/` the old raster logo. |

## Adding content

- New service: add an object to `services.ts` and a line to `nav.ts`. Route, sitemap, footer and schema pick it up.
- New town: add to `towns.ts`. Footer and sitemap pick it up.
- New project: add to `projects.ts` with photos in `photos.ts` (run the photo script with new entries in `PHOTOS`). Set `published: true` when the facts are confirmed.
- New post: drop a `.md` with the same frontmatter keys into `src/content/posts/`.

## QA

- `../research/screens/shots.mjs` screenshots every page type with Playwright, reports console errors and horizontal overflow. `node shots.mjs` against a server on :3300 (`BASE=` to change).
- `../research/screens/overflow.mjs` lists elements wider than a 390px viewport: `MSYS_NO_PATHCONV=1 P=/kitchen-remodeling/ node overflow.mjs`.
- `../research/qa/crawl.py` crawls every sitemap URL plus linked pages and reports titles and descriptions over length, duplicate or missing H1, canonical and Open Graph gaps, heading order, images without alt, broken links and images, JSON-LD parse errors, dashes and placeholder strings, external link attributes, orphans and word counts. Run `python -X utf8 crawl.py http://localhost:3300 ../../site/src/lib/redirects.ts report.md` from `research/qa/`. (Redirects are checked separately with curl: urllib follows them.)
- `../research/qa/audit.mjs` opens every page at 390px and 1440px in Playwright and reports console errors, failed requests, horizontal overflow, broken images, tiny tap targets and reveal blocks that never appeared. `node audit.mjs > audit-report.txt`.
- `../research/qa/seo-meta.json` holds every page's title and description (page part only; the layout appends ` | Amazing Builders`). `apply-fixes.py` wrote them into the content files on 2026-10-09; edit the content files directly from now on.
- Title budget: 65 characters with the suffix. Description budget: 70 to 155 characters. Every page has an `og:image` (its own photo, or `public/og-default.jpg`).
- Never run `npm run build` while `next dev` is running on the same `.next`.

## Deploy

Vercel, production branch `main`, domain `www.amazingbuilderspa.com` (apex redirects to www). DNS stays at Hostinger; only the A and CNAME records change, MX stays for `info@`. Launch checklist in `../PLAN.md` section 9.

## Open items (waiting on the client)

See `../research/01-business-profile.md`, section "Вопросы клиенту": HIC number, owner name and photos, price ranges yes/no, confirmation of towns for undated photos, GBP access, lead email.
