# Hero composition — Grainient (THE landing hero layout)

Client's chosen hero **layout** (2026-09-17), to be paired with our **Molten Gold**
background. Reference: https://grainient.com (screenshot supplied).

## The layout (from screenshot)
- Top nav: brand/logo left · centered text nav links · right side two pills
  (a light "Sign in" + a bright accent "Get Pro Access").
- Background: near-black in the top/center, an **animated gradient glowing up from
  the bottom edges and bleeding up the left/right sides**, faint sparkles low down.
- Centered content sitting around the vertical middle:
  - a small **dark pill badge** ("Meet Grainient 2.0"),
  - a big **bold two-line headline**,
  - a muted one-line **subtitle**,
  - a single **prominent CTA button** (accent pill).

## Our interpretation (executed)
`design/components/previews/hero-grainient-molten.html`:
- Background = **Molten Gold** shader (Hero Option 3), full-screen, mouse-reactive.
- A **centre-dark scrim** (dark top + dark ellipse behind the text) so the gold
  reads as glowing up from the bottom/edges — matching Grainient — and the text
  stays legible.
- Nav: "Detail Department" left · centered glass pills (Serviços/Processo/
  Trabalhos/Contacto) · gold "Marcar avaliação" pill right.
- Content: gold-outlined pill badge (✦ Estúdio de Detalhe · Grande Lisboa),
  two-line Fraunces headline ("O carro que / merece reverência."), muted sub,
  one prominent gold "Marcar avaliação →" button + a small "Ver serviços" link.
- Faint gold sparkles low down. Grain. prefers-reduced-motion → static.

**This is THE hero for the landing-page build** (replaces the earlier hero
options as the default). The real hero video can still drop into the same slot
later; Molten Gold is the showpiece background.

_Added 2026-09-17._
