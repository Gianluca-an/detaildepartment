# Services — OPTION 3 (color-change image cards)

**Saved for: the Services section on the landing page, as Option 3.**
Source: 21st.dev "color-change-card" (`color-change-card.tsx` + `demo.tsx`),
preserved verbatim.

## What it is
A grid of large **image cards** (2×2 in the demo). Each card:
- Starts **grayscale/desaturated**, then **blooms to full colour** on hover
  (with a slow image zoom).
- An **arrow** (top-right) that **rotates -45°** on hover.
- A **heading whose letters roll up** on hover (each letter has two stacked
  copies; the column slides -50%), staggered per letter.
- A short description under the heading.

Perfect for real work photos — a black car goes from moody grayscale to full
gloss colour as you hover. Strong, tactile, premium.

### Deps (real build)
`framer-motion · react-icons`. Place at `components/ui/color-change-card.tsx`
(shadcn default). Needs shadcn + Tailwind + TS (we're set).

## Reskin / real-build plan (Direction B)
- Cards = our services with **real photos**: Detalhe Automóvel · Proteção
  Cerâmica · Restauro · Higienização Interior (4 → clean 2×2), or 3 services.
- Grayscale→colour reads great on dark car imagery; keep the arrow + letter-roll.
- Add a gold hairline border, our type (Inter-600 headings), PT copy, and a
  price/"a partir de" line if wanted.
- Respect prefers-reduced-motion: skip the zoom/roll, keep colour on hover.

## Preview
`design/components/previews/services-colorcards.html` — vanilla-CSS/JS port:
grayscale→gold placeholder gradients (real photos drop in), arrow rotate,
letter-roll headings, PT service copy.

_Added 2026-09-16._
