# Gallery / Trabalhos — horizontal filmstrip (client's Option 1)

Inspiration: client-supplied clip `reference-toyfight.mp4` (the **ToyFight**
studio "Featured Projects" portfolio). ~40s, interactive.

## The concept (what makes it work)
- A **single horizontal filmstrip** of work thumbnails across the middle of the
  screen — the user **scrolls / drags sideways** through the whole body of work.
- Thumbnails are **mixed media** (photos + auto-playing video clips) and
  **varying sizes/heights** — a staggered editorial strip, not a uniform grid.
- **Big label + live count** top-left: "Featured Projects (8)", "All Projects
  (23)", "Website Projects (22)" — the count updates with the filter.
- **Filter menu** top-right (Featured / UI/UX / Websites / …). Clicking a filter
  re-populates the strip and updates the label + count.
- **Hover a thumbnail** → title/caption reveals.
- Minimal chrome: nav top, "Since 2015" bottom-left, page counter top-right.

## For Detail Department (Trabalhos)
- Filmstrip of real work: before/after paint correction, ceramic-coated cars,
  headlight restores, bodywork. Mix photos + short clips (water beading, light
  passes).
- Filters = our categories: **Todos · Detalhe · Cerâmica · Restauro**.
- Label: "Trabalhos (N)" with live count. Hover → car (marca/modelo) + serviço.
- Reskin to nocturnal-gold; drag + wheel horizontal scroll; captions in PT.

## Build note
Preview `gallery-filmstrip.html` implements it in vanilla JS: horizontal
drag-scroll + wheel-to-horizontal, category filters that rebuild the strip and
update the count, staggered thumbnail sizes, hover captions. Placeholder tiles
(no fake stock) — real images/clips drop straight in. In Next.js this becomes a
component; can pair with GSAP for inertia/scroll-snap. prefers-reduced-motion
respected.

Saved as **Gallery Option 1**. Client may send an Option 2.

_Added 2026-09-15._
