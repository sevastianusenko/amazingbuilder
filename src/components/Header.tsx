"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/content/nav";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

/** The old site's header: a white pill bar floating over the page, sticky on scroll. */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const [lastPath, setLastPath] = useState(path);

  if (path !== lastPath) {
    setLastPath(path);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.requestAnimationFrame(onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const active = (href: string) => href !== "/" && path.startsWith(href);

  return (
    <header className="pointer-events-none sticky top-0 z-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[60] focus:bg-bronze focus:px-3 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <div className={`mx-auto w-full max-w-7xl px-3 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? "pt-2" : "pt-3 sm:pt-5"}`}>
        <div className={`pointer-events-auto flex h-[70px] items-center justify-between gap-4 rounded-pill bg-white pl-4 pr-2 text-ink transition-shadow duration-300 sm:pl-6 ${scrolled ? "shadow-[var(--shadow-bar)]" : "shadow-[0_10px_30px_rgba(41,51,61,0.08)]"}`}>
          <Logo />

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {nav.map((item) => (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 text-[0.76rem] font-semibold uppercase tracking-[0.08em] hover:text-bronze ${active(item.href) ? "text-bronze" : "text-ink"}`}
                  >
                    {item.label}
                    {item.groups && (
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="opacity-60">
                        <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    )}
                  </Link>
                  {item.groups && (
                    <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <div className="grid w-[820px] grid-cols-3 gap-6 rounded-card bg-white p-6 text-ink shadow-[var(--shadow-lift)]">
                        {item.groups.map((g) => (
                          <div key={g.label}>
                            <p className="eyebrow mb-3">{g.label}</p>
                            <ul className="space-y-0.5">
                              {g.items.map((c) => (
                                <li key={c.href}>
                                  <Link href={c.href} className="block rounded-xl px-3 py-2 hover:bg-primer">
                                    <span className="block text-[0.95rem] font-semibold">{c.label}</span>
                                    {c.note && <span className="block text-[0.82rem] leading-snug text-ink-mute">{c.note}</span>}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button href={site.phoneHref} variant="bronze">
                Call {site.phone}
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-line text-ink xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
                <path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and tablet menu */}
      <div
        className={`pointer-events-auto fixed inset-0 z-[70] bg-white text-ink transition-opacity duration-300 ${open ? "visible opacity-100" : "invisible opacity-0"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="mx-auto flex h-[86px] w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <button type="button" onClick={() => setOpen(false)} className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-line" aria-label="Close menu">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <div className="h-[calc(100dvh-86px)] overflow-y-auto px-4 pb-28 pt-2 sm:px-6">
          <ul className="divide-y divide-line">
            {nav.map((item) => (
              <li key={item.href} className="py-3">
                {item.groups ? (
                  <details className="group">
                    <summary className="flex items-center justify-between py-2 text-[1.35rem] font-bold">
                      {item.label}
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="transition-transform group-open:rotate-180">
                        <path d="M2 5l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </summary>
                    <div className="mb-2 mt-1 space-y-4 rounded-card bg-primer p-4">
                      {item.groups.map((g) => (
                        <div key={g.label}>
                          <p className="eyebrow mb-1">{g.label}</p>
                          <ul className="space-y-1">
                            {g.items.map((c) => (
                              <li key={c.href}>
                                <Link href={c.href} className="block py-1.5 text-[1.02rem] font-medium">
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link href={item.href} className="block py-2 text-[1.35rem] font-bold">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3">
            <Button href={site.phoneHref} variant="bronze" className="w-full">
              Call {site.phone}
            </Button>
            <Button href="/contact/" variant="ghost" className="w-full">
              Request a free estimate
            </Button>
            <p className="pt-2 text-center text-[0.9rem] text-ink-mute">
              {site.hoursText}
              {site.hic ? ` · PA HIC #${site.hic}` : ""}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
