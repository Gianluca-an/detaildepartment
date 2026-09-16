# Closing Orb — locked spec for future landing-page mockups

Client instruction (2026-09-16). Use this EXACTLY when building the next landing
page mockup's closing orb. Supersedes the shrunk orb in the current landing-v3.

## Size
- **BIG orb** — the size it was in the FIRST landing-v3 build (the tall version,
  ~42vh / `height:clamp(300px,42vh,420px)`), NOT the shrunk ~26vh one.
- Client explicitly likes the big orb.

## Copy inside the orb
- **Remove** the current lit copy: no "Lisboa · Grande Lisboa" eyebrow, no lit
  (mist-coloured) "Detail Department".
- Instead, put **"Detail Department" WITHIN the orb**, at the bottom of the orb
  area, as the ONLY text.
- Style = the barely-visible wordmark from the most recent mockup's footer:
  - **Stacked**: "Detail" on top, "Department" directly below.
  - **Dark charcoal, transparent/near-invisible** (e.g. gradient clip
    `linear-gradient(180deg,#1a160f,#0c0a07)` → `color:transparent`), just barely
    readable against the near-black orb.
  - Fraunces, uppercase, tight leading.
- So: the big eclipse orb, and the dark barely-visible stacked wordmark sitting
  low inside it. Nothing else. No lit text.

## Everything else
- Keep the interactive gold corona + cursor-tracked hotspot + rising plumes +
  bloom (the eclipse behaviour). prefers-reduced-motion → static.

_Noted 2026-09-16 — apply on the next landing mockup._
