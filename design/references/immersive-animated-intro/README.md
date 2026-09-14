# Reference: "Immersive Animated Intro / Waves of Life Concept"

**Status:** 📚 Reference / study asset only. **Not implemented, not wired into the site, not part of any component.** Saved for potential adaptation later.
**Type:** Full-screen interactive opening sequence (animated canvas "waves" + intro reveal).
**Source:** CodePen (author/licence unknown — **verify licence before any reuse**). Original is a breathing / meditation / music web-app with six themed visual modes.

## Files
- `source.html` — markup (verbatim).
- `source.css` — styles (verbatim).
- `source.js` — the engine. The **themes, state, input model (mouse/drag/click ripples), custom-cursor smoothing, ripple spawns, text builders, and the shared `wv()` wave helper are preserved verbatim**; the remaining ~1,100 lines (the six per-mode canvas renderers, the enhanced `animateText`, `drawMouseWave`, the entire WebAudio synthesis engine, affirmations, theme apply, session start/stop, and the `render()` loop) are catalogued rather than re-pasted line-for-line — they're the parts we would *not* ship (audio/breathing) or would *rebuild* (mode renderers) anyway. Ask if you want the complete byte-for-byte JS dumped into a `full-source.js`; it's ~1,500 lines.

## Why the client saved it (their words)
- The immersive introductory experience.
- The animated visual background.
- The flowing/wave-like visual effects.
- The typography and overall atmosphere.
- The transitions and movement.
- Feels like an interactive opening sequence, not a standard hero.

## Technical breakdown (how it works)
- **Three stacked full-screen `<canvas>` layers** (`#c-bg`, `#c-fx`, `#c-top`) drawn every frame — background gradient/waves, mid FX, and top overlay (rain/wind/etc.).
- **Shared wave function `wv()`** plots sine-stacked horizontal bands; amplitude/phase are perturbed by mouse position, drag velocity, and expanding **click ripples** — that's the "waves of life" feel.
- **Custom cursor:** a small `#dot` (screen blend) + a lazily-smoothed `#ring` that grows on hover; native cursor hidden (`cursor:none`).
- **Atmosphere:** an SVG `feTurbulence` **grain** layer at ~3% opacity + a radial **vignette** (`#vig`), both theme-tinted.
- **Intro reveal sequence:** on load, `#hero` fades/slides in (`.in`), then after a beat the CTA (`#btn-wrap`), cue text, and side labels fade in — a staged "opening", not an instant hero.
- **Per-character text animation:** each letter is its own `<span>` with randomized sine phase/amp for a gentle floating headline.
- **Mode switcher** re-themes everything (bg, accent, cursor, nav, text) with a sliding thumb + a quick flash.
- **Audio (WebAudio + remote MP3s)** and the **breathing session logic** — irrelevant to us.

## What we'd reuse for Detail Department (adapt, don't copy)
- The **staged intro reveal** as an optional opening the first time someone enters (a brand "gate" → "Entrar" / "Detail Department"), then it dissolves into the real site.
- The **flowing wave canvas** as the background — **reskinned to liquid paint / polished-metal reflections in charcoal + bronze** (not the multicolour breathing themes). Our `wv()`-style bands become the sheen moving across a "just-polished" surface.
- **Grain + vignette + custom bronze cursor dot/ring** for the premium, cinematic atmosphere.
- Pairs naturally with **Header 3 (video-text)** and **Header 1 (parallax)** — the intro could hand off into either.

## What we'd drop
- Breathing/meditation app, the six modes, affirmations, the WebAudio synthesis, and the remote `archive.org` audio. Keep it purely visual.

## Cautions for when we build it
- **Performance:** three full-screen canvases at 60fps is heavy on low-end phones — gate it, simplify or disable on mobile, and pause when offscreen.
- **Accessibility:** honour `prefers-reduced-motion` (render a static frame), don't hide the real cursor on touch, keep an obvious **skip/enter** control, and never trap content behind the animation for SEO/screen-readers.
- **Licence:** confirm the original CodePen's licence/author before shipping any derived code.
