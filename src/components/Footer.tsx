import Link from "next/link";
import { site, fullAddress } from "@/lib/site";
import { services } from "@/content/services";
import { towns } from "@/content/towns";
import { Logo } from "./Logo";

const company = [
  ["About", "/about/"],
  ["Projects", "/projects/"],
  ["Reviews", "/reviews/"],
  ["Service areas", "/service-areas/"],
  ["Blog", "/blog/"],
  ["Contact", "/contact/"],
];

function Chip({ label, children, icon }: { label: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 rounded-pill bg-primer py-3 pl-3 pr-6">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bronze text-white" aria-hidden="true">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink-mute">{label}</span>
        <span className="block truncate text-[0.95rem] font-medium text-ink">{children}</span>
      </span>
    </div>
  );
}

/** White footer like the old site: logo and menu on top, cream contact chips, link columns, legal line. */
export function Footer() {
  return (
    <footer className="bg-paper text-ink-soft">
      <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Logo />
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.76rem] font-semibold uppercase tracking-[0.08em]">
            {company.map(([l, h]) => (
              <li key={h}>
                <Link href={h} className="inline-block py-1.5 text-ink hover:text-bronze">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Chip
            label="Address"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
              </svg>
            }
          >
            <a href={site.google.mapsUrl} rel="noopener" target="_blank" className="hover:text-bronze">
              {fullAddress}
            </a>
          </Chip>
          <Chip
            label="Phone"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            }
          >
            <a href={site.phoneHref} className="hover:text-bronze tnum">
              {site.phone}
            </a>
          </Chip>
          <Chip
            label="Email"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zm0 2v.5l8 5 8-5V7l-8 5-8-5z" />
              </svg>
            }
          >
            <a href={`mailto:${site.email}`} className="hover:text-bronze">
              {site.email}
            </a>
          </Chip>
        </div>

        <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[0.95rem]">
              Remodeling and painting from one crew: kitchens, bathrooms, basements, stairs, floors, windows, decks and paint. Based in Myerstown, working across Lebanon and Lancaster County and in Philadelphia.
            </p>
            <p className="mt-3 text-[0.9rem] text-ink-mute">{site.hoursText}</p>
            <p className="mt-3 text-[0.9rem] text-ink-mute">
              <a href={site.google.mapsUrl} rel="noopener" target="_blank" className="underline hover:text-bronze">
                {site.google.rating.toFixed(1)} stars from {site.google.count} Google reviews
              </a>
            </p>
            {site.hic && (
              <p className="mt-3 text-[0.9rem]">
                PA Home Improvement Contractor #{site.hic}.{" "}
                <a href={site.hicUrl} className="underline hover:text-bronze" rel="noopener" target="_blank">
                  Verify at the PA Attorney General
                </a>
                .
              </p>
            )}
          </div>
          <div className="md:col-span-4">
            <h2 className="eyebrow mb-3">Services</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[0.92rem]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className="inline-block py-0.5 hover:text-bronze">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h2 className="eyebrow mb-3">Where we work</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[0.92rem]">
              {towns.map((t) => (
                <li key={t.slug}>
                  <Link href={`/service-areas/${t.slug}/`} className="inline-block py-0.5 hover:text-bronze">
                    {t.name}, PA
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/philadelphia-rowhome-renovation/" className="inline-block py-0.5 hover:text-bronze">
                  Philadelphia
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-[0.85rem] text-ink-mute md:flex-row md:items-center md:justify-between">
          <p>
            © {site.copyrightYear} {site.legalName}.{" "}
            <Link href="/privacy-policy/" className="underline hover:text-bronze">
              Privacy policy
            </Link>{" "}
            ·{" "}
            <Link href="/terms/" className="underline hover:text-bronze">
              Terms of use
            </Link>
          </p>
          <p>
            Website designed & developed by{" "}
            <a href={site.studio.url} rel="noopener" target="_blank" className="underline hover:text-bronze">
              {site.studio.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
