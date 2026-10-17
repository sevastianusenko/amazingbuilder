import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { towns } from "@/content/towns";
import { publishedProjects } from "@/content/projects";
import { featuredReviews } from "@/content/reviews";
import { Photo } from "@/components/Photo";
import { Button } from "@/components/ui/Button";
import { Section, Eyebrow } from "@/components/ui/Section";
import { ServiceCard, ServiceRow } from "@/components/blocks";

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-bronze" role="img" aria-label="5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.5 5.8 21l1.6-7L2 9.3l7.1-.7z" />
        </svg>
      ))}
    </span>
  );
}

/* ---------- Intro + services, like the old "At Amazing Builders, we combine..." and "What We Do" ---------- */
export function ServicesHome() {
  const lead = ["kitchen-remodeling", "bathroom-remodeling", "stairs-and-railings"].map((s) => services.find((x) => x.slug === s)!);
  const rest = services.filter((s) => !lead.includes(s));
  return (
    <Section tone="paper" id="services">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="reveal">
          <Eyebrow className="mb-3">What we do</Eyebrow>
          <h2>Twelve services, one crew, one contract.</h2>
          <p className="measure mt-4 text-ink-soft">We do the carpentry, tile, floors, drywall and paint ourselves and bring in licensed electricians and plumbers when a job needs them. You deal with one person, one written estimate and one schedule.</p>
        </div>
        <div className="reveal">
          <Button href="/services/" variant="bronze">
            All services
          </Button>
        </div>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {lead.map((s, i) => (
          <div key={s.slug} className={`reveal reveal-delay-${i}`}>
            <ServiceCard s={s} />
          </div>
        ))}
      </div>
      <div className="reveal mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((s) => (
          <ServiceRow key={s.slug} s={s} />
        ))}
      </div>
    </Section>
  );
}

/* ---------- Featured project: the old site's mid-grey band ---------- */
export function FeaturedProject() {
  const p = publishedProjects[0];
  if (!p) return null;
  const grid = ["south-philadelphia-kitchen-window-wall-after", "south-philadelphia-bathroom-glass-shower-after", "south-philadelphia-stairs-iron-balusters-after", "south-philadelphia-patio-fence-after"];
  return (
    <Section tone="graphite" id="work">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="reveal lg:col-span-5">
          <Eyebrow className="mb-3">Project · {p.place} · {p.when}</Eyebrow>
          <h2>One rowhome. Four and a half months. Everything new.</h2>
          <p className="mt-6 max-w-lg">{p.summary}</p>
          <ul className="mt-6 space-y-2">
            {p.scope.slice(0, 5).map((it) => (
              <li key={it} className="flex items-start gap-3 text-[0.97rem]">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bronze text-white" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <path d="M2 5l2.2 2.2L8 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-white/90">{it}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`/projects/${p.slug}/`} variant="bronze">
              See the whole project
            </Button>
            <Button href="/projects/" variant="ghost-light">
              All projects
            </Button>
          </div>
        </div>
        <div className="reveal reveal-delay-1 grid grid-cols-2 gap-4 lg:col-span-7">
          {grid.map((id) => (
            <Photo key={id} id={id} ratio="4 / 3" sizes="(min-width: 1024px) 28vw, 50vw" />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Reviews: "What Our Customers Say" ---------- */
export function ReviewsHome() {
  return (
    <Section tone="paper" id="reviews">
      <div className="reveal mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Eyebrow className="mb-3">Reviews</Eyebrow>
          <h2>What our customers say</h2>
        </div>
        <a href={site.google.mapsUrl} rel="noopener" target="_blank" className="font-semibold text-bronze-deep underline underline-offset-4 hover:text-ink">
          {site.google.rating.toFixed(1)} stars from {site.google.count} Google reviews
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featuredReviews.map((r, i) => (
          <blockquote key={r.name} className={`reveal reveal-delay-${i} flex flex-col rounded-card bg-primer p-7`}>
            <Stars />
            <p className="mt-4 flex-1 text-[1rem] leading-relaxed text-ink-soft">“{r.text}”</p>
            <footer className="mt-5 flex items-center justify-between gap-4">
              <cite className="text-[0.95rem] font-semibold not-italic text-ink">{r.name}</cite>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-ink-mute">Google · {r.date.slice(0, 7).replace("-", "/")}</span>
            </footer>
          </blockquote>
        ))}
      </div>
      <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/reviews/" variant="bronze">
          Read all reviews
        </Button>
        <Button href={site.google.reviewUrl} variant="ghost">
          Leave a review on Google
        </Button>
      </div>
    </Section>
  );
}

/* ---------- Areas: "We serve homeowners across..." cream card ---------- */
export function AreasHome() {
  return (
    <Section tone="primer" id="areas">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <Eyebrow className="mb-3">Where we work</Eyebrow>
          <h2>
            Within forty minutes of Myerstown, <span className="hl">plus Philadelphia.</span>
          </h2>
          <p className="measure mt-6 text-ink-soft">
            Our shop is on South 5th Avenue in Myerstown. Most jobs are in Lebanon County, the northern half of Lancaster County and around Hershey. We also take on whole-home rowhome renovations in Philadelphia, where we finished a complete rebuild of a rowhome in 2025.
          </p>
          <div className="mt-8">
            <Button href="/service-areas/" variant="bronze">
              All service areas
            </Button>
          </div>
        </div>
        <div className="reveal reveal-delay-1 rounded-card bg-paper p-6 sm:p-8 lg:col-span-7">
          <ol className="grid gap-x-8 sm:grid-cols-2">
            {towns.map((t) => (
              <li key={t.slug} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                <Link href={`/service-areas/${t.slug}/`} className="text-[1.02rem] font-semibold text-ink hover:text-bronze-deep">
                  {t.name}
                </Link>
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink-mute tnum">{t.driveMinutes === 0 ? "home base" : `${t.driveMinutes} min`}</span>
              </li>
            ))}
            <li className="flex items-baseline justify-between gap-4 py-3 sm:col-span-2">
              <Link href="/philadelphia-rowhome-renovation/" className="text-[1.02rem] font-semibold text-ink hover:text-bronze-deep">
                Philadelphia <span className="text-[0.9rem] font-normal text-ink-mute">(whole-home rowhome projects)</span>
              </Link>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink-mute tnum">about 1 h 45</span>
            </li>
          </ol>
          <p className="mt-4 text-[0.85rem] text-ink-mute">Drive times are approximate, from Myerstown.</p>
        </div>
      </div>
    </Section>
  );
}
