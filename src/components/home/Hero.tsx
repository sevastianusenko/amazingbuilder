import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { photo as getPhoto } from "@/content/photos";
import { Stamp } from "@/components/Photo";
import { Button } from "@/components/ui/Button";

const strip: [string, string][] = [
  ["kitchen-remodeling", "Kitchens"],
  ["bathroom-remodeling", "Bathrooms"],
  ["basement-finishing", "Basements"],
  ["stairs-and-railings", "Stairs & railings"],
  ["flooring-tile-installation", "Flooring & tile"],
  ["painting", "Painting"],
];

/** The old site's hero: full-bleed photo under a dark overlay, white headline left, stacked pill buttons, owner quote card right. */
export function Hero() {
  const p = getPhoto("south-philadelphia-living-room-fireplace-after");
  return (
    <section className="relative -mt-[86px] overflow-hidden bg-graphite-deep sm:-mt-[94px]">
      <div className="absolute inset-0">
        <Image src={p.src} alt={p.alt} fill priority fetchPriority="high" quality={72} sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,24,27,0.82)_0%,rgba(20,24,27,0.62)_55%,rgba(20,24,27,0.45)_100%)]" aria-hidden="true" />
      </div>
      <div className="on-dark relative mx-auto w-full max-w-7xl px-4 pb-16 pt-[130px] sm:px-6 sm:pt-[150px] lg:px-8 lg:pb-24 lg:pt-[170px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow hero-rise">Myerstown, PA · Free written estimates</p>
            <h1 className="hero-rise mt-4 max-w-[16ch] text-white">Home remodeling and painting in Lebanon County, PA. One crew, start to finish.</h1>
            <p className="lede hero-rise-2 mt-6 max-w-[48ch]">
              Kitchens, bathrooms, basements, stairs, floors, windows, decks and paint. Based in Myerstown, working across Lebanon and Lancaster County, around Hershey, and on whole-home rowhome projects in Philadelphia.
            </p>
            <div className="hero-rise-2 mt-8 flex flex-col items-start gap-3">
              <Button href="/contact/" variant="bronze">
                Get a free estimate
              </Button>
              <Button href={site.phoneHref} variant="bronze">
                Call {site.phone}
              </Button>
            </div>
            <ul className="hero-rise-3 mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-white/80">
              <li>
                <a href={site.google.mapsUrl} rel="noopener" target="_blank" className="underline underline-offset-4 hover:text-white">
                  {site.google.rating.toFixed(1)} on Google · {site.google.count} reviews
                </a>
              </li>
              <li>Mon to Fri, 7 to 5</li>
              {site.hic && <li>PA HIC #{site.hic}</li>}
            </ul>
          </div>
          <div className="hero-rise-3 lg:col-span-5 lg:justify-self-end">
            <blockquote className="glass max-w-sm rounded-card p-6">
              <span className="block text-[0.8rem] font-semibold text-bronze-light">{site.owner.split(" ")[0]}, owner of Amazing Builders</span>
              <p className="mt-2 text-[1.05rem] leading-relaxed text-white">“We don&apos;t just remodel houses. We build trust, one project at a time.”</p>
            </blockquote>
            <Stamp p={p} className="mt-4" />
          </div>
        </div>
      </div>
      {/* Service strip, like the icon row under the old hero */}
      <div className="relative bg-bronze">
        <ul className="mx-auto grid w-full max-w-7xl grid-cols-2 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
          {strip.map(([slug, label]) => (
            <li key={slug}>
              <Link href={`/${slug}/`} className="flex items-center justify-center gap-2 px-2 py-4 text-center text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-white hover:bg-bronze-deep">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
