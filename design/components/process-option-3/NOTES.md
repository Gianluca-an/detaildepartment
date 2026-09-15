# Process / How it works — OPTION 3 (shadcn "Process1")

**Saved for: the Process section, as Option 3.** shadcn component, `process-1.tsx`
preserved verbatim.

## What it is
A 6-col grid: a **sticky left intro column** (big "Our Process" title with an
asterisk accent, lede, ghost "Get in touch" button) beside a **numbered step
list** (4 rows). Each row: a top hairline border, a square numbered chip
(01–04), a title + description, and a small corner illustration mark. The left
column stays pinned while the steps scroll — a nice editorial scroll feel.

### Deps
`lucide-react` (Asterisk, CornerDownRight) · shadcn `button` · `cn` helper.

## Reskin plan (Direction B)
- Palette → charcoal/gold: swap orange accent (asterisk, corner mark, button
  icon) for gold #C9A24B; the red SVG illustration line → gold; borders →
  rgba(201,162,75,.16); muted chip bg → #131110.
- Fonts: title → Fraunces, body → Inter.
- Content → our real process (5 steps):
  01 Avaliação · 02 Preparação · 03 Correção · 04 Proteção · 05 Entrega
  (or keep 4 by merging Preparação+Correção). PT lede + "Marcar avaliação".
- Keep the sticky-left / scrolling-steps behaviour — reads premium.

Preview: `design/components/previews/process-option-3.html` (reskinned gold, PT
steps, sticky left column via CSS position:sticky).

## Options recap
- Option 1: Solana DB — `design/references/process-page-option-1/`
- Option 2: Flowjam — `design/references/process-page-option-2/`
- Option 3: shadcn Process1 — this folder (has a live preview)

_Added 2026-09-15._
