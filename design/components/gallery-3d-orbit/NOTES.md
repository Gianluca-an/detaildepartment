# Gallery — STANDALONE page (3D orbit sphere)

**Where it goes:** the **standalone Trabalhos / Gallery page** — NOT the landing
page. The landing page keeps the **ToyFight filmstrip** (`gallery-filmstrip/`).

Source: 21st.dev "3d-orbit-gallery" (`3d-orbit-gallery.tsx` + `demo.tsx`),
preserved verbatim.

## What it is
A `@react-three/fiber` scene: a **sphere of ~1500 glowing particles** (the
demo's particle colors are already warm gold/amber HSL — on-brand), with **24
image planes orbiting** around the equator, all slowly rotating. `OrbitControls`
let the viewer **drag to rotate, scroll to zoom, pan**. Camera starts at
`[-10, 1.5, 10]`, fov 50, black background.

### Deps (real build)
`three · @react-three/fiber · @react-three/drei`. Place at
`components/ui/3d-orbit-gallery.tsx` (shadcn default). Needs shadcn + Tailwind +
TS (we're set).

## Reskin / real-build plan (Direction B)
- **Swap the 22 demo image URLs** (cdn.21st.dev) for **our own work**: before/
  after paint correction, ceramic-coated cars, restores. Same count (24 planes).
- Particles: keep gold/amber (already there); maybe tighten to our #C9A24B →
  #E7CE8F range. Background near-black charcoal.
- Add PT chrome around the canvas: "Trabalhos (N)", a hint ("arraste · scroll"),
  and on click of a plane → open that project (car + serviço).
- Respect prefers-reduced-motion: reduce/stop auto-rotation.

## Preview
`design/components/previews/gallery-3d-orbit.html` — faithful vanilla-three.js
port (particle sphere + orbiting planes + custom drag/zoom orbit). Uses
**placeholder gold-gradient textures with car labels** (no real images yet); the
real photos drop straight into the plane textures.

_Added 2026-09-16._
