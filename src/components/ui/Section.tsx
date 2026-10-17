import type { ReactNode } from "react";

type Tone = "paper" | "primer" | "graphite" | "bronze";

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink-soft",
  primer: "bg-primer text-ink-soft",
  graphite: "bg-graphite on-dark",
  bronze: "bg-bronze on-dark on-bronze",
};

export function Section({
  tone = "paper",
  tight = false,
  flushTop = false,
  id,
  className = "",
  children,
}: {
  tone?: Tone;
  /** Kept for call-site compatibility; the old site has flat section edges. */
  steps?: boolean;
  tight?: boolean;
  /** No top padding, for a section that continues the one above it. */
  flushTop?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative flow-root ${tones[tone]} ${className}`}>
      <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${tight ? (flushTop ? "pb-12 md:pb-16" : "py-12 md:py-16") : flushTop ? "pb-16 md:pb-24" : "py-16 md:py-24"}`}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-ink-mute">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? <span className="text-ink">{it.name}</span> : <a href={it.href} className="hover:text-bronze">{it.name}</a>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
