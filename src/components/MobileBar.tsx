import Link from "next/link";
import { site } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white p-2 md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a href={site.phoneHref} className="flex items-center justify-center gap-2 rounded-pill bg-primer py-3 text-[0.9rem] font-semibold text-ink">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          Call
        </a>
        <a href={site.smsHref} className="flex items-center justify-center gap-2 rounded-pill bg-primer py-3 text-[0.9rem] font-semibold text-ink">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4 4h16a2 2 0 012 2v10a2 2 0 01-2 2H8l-5 4V6a2 2 0 012-2z" />
          </svg>
          Text
        </a>
        <Link href="/contact/" className="flex items-center justify-center rounded-pill bg-bronze py-3 text-[0.9rem] font-semibold text-white">
          Free estimate
        </Link>
      </div>
    </div>
  );
}
