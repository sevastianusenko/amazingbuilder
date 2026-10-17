import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/** The client's own logo (raster from the old site). Rendered on white surfaces only. */
export function Logo({ className = "" }: { tone?: "dark" | "light"; compact?: boolean; className?: string }) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image src="/brand/logo-old.png" alt={site.fullName} width={196} height={56} priority className="h-[46px] w-auto sm:h-[52px]" />
    </Link>
  );
}
