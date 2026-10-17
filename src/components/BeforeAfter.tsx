"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { Photo } from "@/content/photos";

export function BeforeAfter({ before, after, className = "", sizes = "(min-width: 1024px) 60vw, 100vw" }: { before: Photo; after: Photo; className?: string; sizes?: string }) {
  const [pos, setPos] = useState(55);
  const id = useId();
  return (
    <figure className={`relative select-none ${className}`}>
      <div className="relative overflow-hidden rounded-card bg-graphite-soft" style={{ aspectRatio: `${after.w} / ${after.h}` }}>
        <Image src={after.src} alt={after.alt} fill sizes={sizes} className="object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div className="relative h-full" style={{ width: `${10000 / pos}%` }}>
            <Image src={before.src} alt={before.alt} fill sizes={sizes} className="object-cover" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `calc(${pos}% - 1px)` }} aria-hidden="true">
          <div className="h-full w-[2px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.3)]" />
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bronze text-white shadow-[var(--shadow-frame)]">
            <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true">
              <path d="M7 1L1 7l6 6M15 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <span className="stamp is-before absolute left-3 top-3">
          <span>Before</span>
          <i aria-hidden="true" />
          <span>{before.month}</span>
        </span>
        <span className="stamp absolute right-3 top-3">
          <span>After</span>
          <i aria-hidden="true" />
          <span>{after.month}</span>
        </span>
        <input
          id={id}
          type="range"
          min={2}
          max={98}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Compare before and after"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-[0.9rem] text-ink-mute">
        Drag to compare. {after.place}, {before.month} to {after.month}.
      </figcaption>
    </figure>
  );
}
