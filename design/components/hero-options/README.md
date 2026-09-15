# Hero / Landing-page options

The two hero directions we can build the landing page with. Just say **"use
Hero Option 1"** or **"Hero Option 2"** and I'll build/iterate from that one.

## Option 1 — Ghost Fibers (BUILT, current favourite)
- The hero in `design/mockups/experience-v1.html`.
- Live WebGL fiber-light background (warm charcoal-gold fork of React Bits
  GhostFibers), video-text-style sheen headline "…merece reverência," the
  interactive hover button, cursor torch, cinematic intro on load.
- Status: built + approved ("that is what I am talking about").
- Video note: the endgame is a real treated hero video dropped into the same
  slot; GhostFibers / molten-gold is the interim background.

## Option 2 — Ethereal Beams (SAVED here)
- `option-2-ethereal-beams/ethereal-beams-hero.tsx` (+ `demo.tsx`), verbatim.
- Animated 3D light **beams** raking across black (three.js + @react-three/
  fiber). Stacked planes displaced by Perlin noise, lit by one directional
  light, rotated ~43°. Original ships black-and-white with a glassmorphic
  pill navbar + shimmer buttons + stats.
- Preview: `design/components/previews/hero-option-2-ethereal-beams.html`
  (faithful vanilla-three.js port, **reskinned to gold beams** + PT copy).

### Deps (real build)
`three · @react-three/fiber · @react-three/drei · lucide-react`
Place component at `src/components/ui/ethereal-beams-hero.tsx` (shadcn default
`components/ui`). Requires a shadcn + Tailwind + TS project (we're on Next.js +
Tailwind + shadcn, so it drops straight in).

### Reskin plan (Direction B)
- `lightColor` → gold (#C9A24B / #E7CE8F), keep bg near-black.
- Replace SaaS chrome (Mysh UI brand, GitHub/Get Started, "1M+ users" stats)
  with our nav + PT hero copy + "Marcar avaliação".
- Swap system font for Fraunces display / Inter body; add our grain.
- Beams read like light raking across a dark panel — on-brand for paint.

_Option 2 added 2026-09-15._
