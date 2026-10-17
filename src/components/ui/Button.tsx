import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "bronze" | "graphite" | "white" | "ghost" | "ghost-light";

const base =
  "inline-flex items-center justify-center gap-3 rounded-pill font-display font-medium text-[0.97rem] leading-none pl-7 pr-2.5 py-2.5 transition-colors duration-200 whitespace-nowrap select-none";

const variants: Record<Variant, string> = {
  bronze: "bg-bronze text-white hover:bg-bronze-deep",
  graphite: "bg-graphite-deep text-white hover:bg-graphite",
  white: "bg-white text-ink hover:bg-primer",
  ghost: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  "ghost-light": "border-2 border-white/80 text-white hover:bg-white hover:text-ink",
};

const circle: Record<Variant, string> = {
  bronze: "bg-white text-bronze",
  graphite: "bg-white text-graphite-deep",
  white: "bg-bronze text-white",
  ghost: "bg-ink text-white group-hover:bg-white group-hover:text-ink",
  "ghost-light": "bg-white text-ink",
};

function Arrow({ variant }: { variant: Variant }) {
  return (
    <span aria-hidden="true" className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${circle[variant]}`}>
      <svg width="14" height="14" viewBox="0 0 14 14">
        <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** Pill button in the old site's style: brand brown with a white arrow circle on the right. `arrow={false}` for a plain pill. */
export function Button({
  href,
  children,
  variant = "bronze",
  arrow = true,
  className = "",
  ...rest
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
} & Record<string, unknown>) {
  const cls = `group ${base} ${variants[variant]} ${arrow ? "" : "pr-7"} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <Arrow variant={variant} />}
    </>
  );
  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("sms:");
    if (external) {
      const web = href.startsWith("http");
      return (
        <a href={href} className={cls} {...(web ? { target: "_blank", rel: "noopener" } : {})} {...rest}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="submit" className={cls} {...rest}>
      {inner}
    </button>
  );
}
