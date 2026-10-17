import Image from "next/image";
import { photo as getPhoto, type Photo as PhotoData } from "@/content/photos";

export function Stamp({ p, className = "" }: { p: PhotoData; className?: string }) {
  const parts = [p.place || "Pennsylvania", p.month, p.stage].filter(Boolean);
  return (
    <span className={`stamp ${p.stage === "before" ? "is-before" : ""} ${className}`}>
      {parts.map((t, i) => (
        <span key={i} className="inline-flex items-center gap-[0.6em]">
          {i > 0 && <i aria-hidden="true" />}
          {t}
        </span>
      ))}
    </span>
  );
}

/**
 * A client photo with its EXIF stamp, 20px corners like every image on the old site.
 * Every image on the site goes through here so the place and month are always shown.
 */
export function Photo({
  id,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
  ratio,
  caption,
}: {
  id: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Kept for call-site compatibility. */
  frame?: boolean;
  ratio?: string; // e.g. "4 / 3"
  caption?: string;
}) {
  const p = getPhoto(id);
  return (
    <figure className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-card bg-primer-deep" style={{ aspectRatio: ratio ?? `${p.w} / ${p.h}` }}>
        <Image src={p.src} alt={p.alt} fill sizes={sizes} priority={priority} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        <Stamp p={p} className="absolute bottom-3 left-3" />
      </div>
      {caption && <figcaption className="mt-2 text-[0.9rem] text-ink-mute">{caption}</figcaption>}
    </figure>
  );
}
