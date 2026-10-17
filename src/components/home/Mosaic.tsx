import Image from "next/image";
import Link from "next/link";
import { photo as getPhoto } from "@/content/photos";
import { Stamp } from "@/components/Photo";
import { Section } from "@/components/ui/Section";

/** The old site's intro: two-tone centered headline and a photo collage with liquid-glass captions. */
const tiles = [
  { id: "south-philadelphia-stairs-landing-after", href: "/stairs-and-railings/", text: "A staircase sets the tone for the whole house. We rebuild them tread by tread, railing by railing." },
  { id: "deck-white-vinyl-railings", href: "/decks-and-porches/", text: "Your porch is the first handshake of your home. It should feel welcoming, strong, and built to last." },
  { id: "south-philadelphia-kitchen-white-shaker-after", href: "/kitchen-remodeling/", text: "Your kitchen is more than a workspace. It is where family gathers, conversations start, and memories are made." },
  { id: "south-philadelphia-bathroom-shower-sink-after", href: "/bathroom-remodeling/", text: "Your day starts here. That is why we build bathrooms made for comfort, light, and calm." },
];

function Tile({ id, href, text, className = "", sizes }: { id: string; href: string; text: string; className?: string; sizes: string }) {
  const p = getPhoto(id);
  return (
    <Link href={href} className={`group relative block overflow-hidden rounded-card bg-primer-deep ${className}`}>
      <Image src={p.src} alt={p.alt} fill sizes={sizes} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
      <Stamp p={p} className="absolute left-4 top-4" />
      <p className="glass absolute bottom-4 left-4 right-4 rounded-2xl px-5 py-4 text-[0.95rem] font-semibold leading-snug sm:max-w-md">{text}</p>
    </Link>
  );
}

export function Mosaic() {
  return (
    <Section tone="paper" tight id="intro">
      <div className="reveal mx-auto max-w-4xl text-center">
        <h2>
          At Amazing Builders, <span className="text-steel">one Myerstown crew remodels kitchens, bathrooms, basements and stairs</span> for homes across Lebanon and Lancaster County.
        </h2>
      </div>
      <div className="reveal mt-12 grid gap-5 md:grid-cols-12">
        <Tile {...tiles[0]} className="aspect-[3/4] md:col-span-5 md:aspect-auto md:min-h-[560px]" sizes="(min-width: 768px) 40vw, 100vw" />
        <div className="grid gap-5 md:col-span-7">
          <Tile {...tiles[1]} className="aspect-[16/9]" sizes="(min-width: 768px) 55vw, 100vw" />
          <div className="grid grid-cols-2 gap-5">
            <Tile {...tiles[2]} className="aspect-square" sizes="(min-width: 768px) 27vw, 50vw" />
            <Tile {...tiles[3]} className="aspect-square" sizes="(min-width: 768px) 27vw, 50vw" />
          </div>
        </div>
      </div>
    </Section>
  );
}
