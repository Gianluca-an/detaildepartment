# Services page — feature grid (client's favourite)

**Saved for: the Services page.** Client: "I like this most."
Source: Hirael **Feature-08** (MIT, Mohammad Shehadeh) —
https://hirael.com/blocks/features/feature-08

## What it is
A centered header (badge + serif H2 + lede) over a responsive card grid
(1 / 2 / 3 cols). Each card has:
- **Corner crosshairs** drawn half-outside the edge, like survey marks.
- **Hairline borders** that extend slightly past the card (the ±inset lines).
- A **pointer-follow spotlight** (radial glow tracking `--mx/--my` on hover) +
  a static top-left warm glow.
- Icon chip (lucide) whose border warms on hover, then title + description.

It's already **warm/gold-leaning and has a dark palette** — closest of all the
references to our Direction B, so the reskin is light.

## Files here (verbatim)
- `feature-08.tsx` — the component (upstream demo content kept as-is).
- `badge.tsx` — shadcn Badge dependency.
- `theme-tokens.css` — upstream Tailwind-4 `@theme` tokens.

### Deps (real build)
`lucide-react · class-variance-authority` · shadcn `badge` · `cn` from
`@/lib/utils`. Tailwind 4 (`@theme inline`) — we're on that.

## Reskin plan (Direction B)
- Map the token palette to ours: `--background`→#060605, `--foreground`→#F2EFE9,
  `--border`→rgba(201,162,75,.14), `--muted-foreground`→#857F75, and
  **`--warm`/`--warm-glow`→ our gold** (#C9A24B). Use the `.dark` palette.
- Fonts: serif header → **Fraunces**, body → **Inter**.
- Content = detailing, not SaaS. Draft cards (6) mapped to our 3 services'
  capabilities:
  1. Correção de pintura (paint correction)
  2. Proteção cerâmica (ceramic coating)
  3. Restauro de faróis (headlight restoration)
  4. Chapa e pintura (bodywork & respray)
  5. Lavagem de detalhe (detail wash / decon)
  6. Higienização interior (interior deep-clean)
  …or 3 hero service cards + 3 "porquê nós" cards — decide at build.
- Keep the crosshairs + hairlines + pointer spotlight; they read like precision
  survey marks → on-brand for a meticulous studio.

Preview: `design/components/previews/services-feature-grid.html`
(reskinned gold, PT content, pointer spotlight ported to vanilla JS).

_Added 2026-09-15._
