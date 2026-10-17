import type { Faq as FaqItem } from "@/lib/site";
import { JsonLd, faqSchema } from "@/components/Schema";

/** Accordion in the old site's style: cream rounded rows with a brand plus sign. */
export function Faq({ items, title = "Questions people ask us", withSchema = true, dark = false }: { items: FaqItem[]; title?: string; withSchema?: boolean; dark?: boolean }) {
  if (!items.length) return null;
  return (
    <div>
      {withSchema && <JsonLd data={faqSchema(items)} />}
      <h2 className="mb-8">{title}</h2>
      <div className="space-y-3">
        {items.map((it, i) => (
          <details key={i} className={`group rounded-card px-6 py-4 ${dark ? "bg-white/10" : "bg-primer"}`}>
            <summary className="flex items-start justify-between gap-6 text-[1.05rem] font-semibold leading-snug">
              <span className={dark ? "text-white" : "text-ink"}>{it.q}</span>
              <span aria-hidden="true" className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bronze text-white transition-transform group-open:rotate-45">
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </summary>
            <p className={`measure mt-3 ${dark ? "text-white/85" : "text-ink-soft"}`}>{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
