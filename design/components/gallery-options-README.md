# Gallery / Trabalhos — options

Two distinct gallery treatments, for two different places:

## Landing page → ToyFight filmstrip (Option 1) — BUILT
- Files: `design/components/gallery-filmstrip/` · preview `previews/gallery-filmstrip.html`
- Horizontal drag/scroll filmstrip with category filters + live count.
- **This stays on the landing page.**

## Standalone Gallery/Trabalhos page → 3D Orbit sphere — SAVED + preview built
- Files: `design/components/gallery-3d-orbit/` (3d-orbit-gallery.tsx + demo.tsx)
- Preview: `previews/gallery-3d-orbit.html`
- 3D particle sphere (gold) with 24 image planes orbiting; drag to rotate, scroll
  to zoom. `@react-three/fiber` + `drei`.
- **This is the standalone Gallery page** — the immersive "room" of work.

So: landing teases with the filmstrip → clicking through to Trabalhos opens the
3D orbit experience. Real photos/clips replace placeholders in both.

_Updated 2026-09-16._
