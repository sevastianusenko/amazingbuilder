# Amazing Builders design system: the client's own look

Rewritten 2026-10-07. The visual system is the one the user designed for the 2025 WordPress site (Blocksy + GreenShift) and asked to keep. This rebuild changes structure, content, speed and SEO, not the face. Tokens live in `src/app/globals.css` (`@theme`). Source of the original values: `../../amazing-builders/audit/visual-design-kit.md` and `blocksy-global.css`.

## What the look is

- A **white pill-shaped header bar** floating over the page, sticky on scroll, with the raster logo, uppercase 12px menu and a brand-brown "Call" pill on the right.
- A **dark photo hero**: full-bleed photo under a dark overlay, white headline on the left, two stacked brown pill buttons, the owner's quote in a translucent rounded card on the right, and a brown strip of service links underneath (the old icon row).
- **Brand brown pill buttons** with a white circle holding an arrow. Every primary button looks like this.
- **Cream cards** (`#f8f4f0`) with **20px corners** for anything boxed: service cards, FAQ rows, callouts, contact chips. Images also get 20px corners.
- **Rubik** for everything, 400 to 700.
- **Mid-grey dark sections** (`#4b5156`) for one or two full-width bands per page, white text.
- A **white footer**: logo and menu on top, three cream contact chips with brown icon circles, link columns, legal line.
- Two-tone headlines: a brown highlight on a phrase (`.hl`), or a grey one (`text-steel`) in the intro.
- **Liquid glass** everywhere text sits on a photo: translucent grey, 16px blur, hairline white border (`glass` utility). Used for the hero quote card, photo captions in the intro collage, every EXIF stamp chip and the before/after labels.

## Color

| Token | Hex | Role |
|---|---|---|
| bronze | #8f6839 | brand brown. The logo value is #936b3d; one step darker so white text on it passes AA (4.67:1). Buttons, icon circles, table headers, stamps' dot |
| bronze-deep | #7d582f | hover, eyebrow text, links in prose |
| bronze-light | #e2c49a | eyebrows and labels on dark (4.8:1 on graphite) |
| bronze-tint | #f1e7d9 | rare chips |
| primer | #f8f4f0 | cream ground for cards and alternate sections |
| primer-deep | #efe9e2 | image placeholders |
| paper | #ffffff | page, header bar, footer |
| ink | #2a3034 | headings, nav |
| ink-soft | #454d51 | body |
| ink-mute | #6b7378 | captions, labels |
| graphite | #4b5156 | dark sections |
| graphite-deep | #2a3034 | hero overlay base, dark buttons |
| tape | #2f6fb3 | the "before" dot on stamps only |
| line | #e3ded8 | hairlines, input borders |

## Type

Rubik. H1 700 at `clamp(2.2rem, 1.4rem + 3.2vw, 4.1rem)`, H2 700 at `clamp(1.7rem, 1.2rem + 1.8vw, 2.6rem)`, H3 600. Body 17px / 1.6 in ink-soft. Eyebrow: 600, uppercase, 0.74rem, 0.1em tracking, bronze-deep. Nav: 600, uppercase, 0.76rem, 0.08em. Pull quotes in posts: Georgia italic on a cream card (the old kit's `wp:pullquote`).

## Shapes

`--radius-card: 20px` on cards, images, FAQ rows, callouts, the dropdown and the form. `--radius-pill: 100px` on buttons, chips, stamps and the header bar. Inputs 12px.

## Components

- `Button`: pill, brand brown, white arrow circle on the right (`arrow={false}` for a plain pill). Variants bronze, graphite, white, ghost, ghost-light.
- `Photo`: 20px corners plus the EXIF stamp chip bottom-left (place, month, before/during/after). Every client photo goes through it.
- `BeforeAfter`: rounded slider, brown round handle, Before/After chips.
- `Section`: paper / primer / graphite / bronze tones, flat edges.
- `Faq`: cream rounded rows with a brown plus circle.
- `Process`: five numbered cream cards with brown number circles.
- `CtaBand`: full-bleed photo under a dark overlay with the headline and a white rounded form card.
- Header, Footer, MobileBar as described above.

## Motion

Hero copy rises in three beats on load. Sections fade and rise once on scroll (`.reveal`). Hover changes color only. Reduced motion turns everything off.

## Photos

Processed from `../photo/` by `research/process-photos.py` into `public/photos/` and `src/content/photos.ts` with place, month and stage from EXIF. Hero and page-hero images get `priority`. No stock photography. Photos without an EXIF place are stamped "Pennsylvania" until the client confirms the town.

## Copy

Plain, first person plural, sentence case, no em dashes. Nothing claimed that the client has not confirmed (no project counts, no years, no HIC until `site.hic` is set).

## Checks before shipping a page

1. Does every boxed thing use the cream card with 20px corners, and every primary button the brown pill with the arrow circle?
2. Is the header bar readable over whatever sits under it on scroll?
3. Every photo has its stamp and 20px corners.
4. 390px: no horizontal scroll, buttons full width, stamps wrap inside the frame.
5. Lighthouse mobile 90+ warm, accessibility 100 (white-on-brown passes only with `--color-bronze: #8f6839`, do not lighten it).
