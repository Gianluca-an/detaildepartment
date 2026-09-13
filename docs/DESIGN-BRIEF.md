# Detail Department — Design Brief & Reference Research

> Working document. Captures the client's direction + analysis of the five reference
> sites (scraped via Firecrawl on 2026-09-13). Everything here is a **proposal held
> lightly** — palette, type, and structure are all open to tweaking with the client.

---

## 1. The business

- **What:** Premium car detailing studio, **Lisbon, Portugal**.
- **Brand name:** **Detail Department** (confirmed by client, 2026-09-13). The word
  "Frotapower" that appeared in the client's inspiration notes was not the brand — ignore it.
- **Positioning (the core idea):** We do **not** sell "washes." We sell
  **protection, preservation, value enhancement, technology, and quality** — a premium
  **workshop experience**. The goal is to read as a *benchmark in the premium segment
  from the first second*, not "a good detailing company."
- **Emotional target:** Warmer and more human than the rational/Nordic competitors.
  Automotive **appreciation & preservation**. Explicitly wants **female executives and
  mothers** to feel it's a friendly, safe, welcoming place — not just a gearhead shop.

## 2. Client's stated visual preferences

- **Contrast of dark & light:** charcoal / dark gray as the dominant dark; a **soft
  light gray** (NOT pure white — "too bright") as the light ground. Easy on the eye.
- **Accent:** a **light bronze → gold** tone, used in the typography/writing. (Held lightly.)
- Elegant, minimal, luxurious. Plenty of whitespace. Large typography.
- **Image/video-led, minimal text.** "In this business, photos sell."
- Wants (later) **cinematic video**: a classic Ferrari being polished, a Bentley entering
  the workshop, a freshly detailed Porsche — given real prominence.

## 3. Imagery status — IMPORTANT

**No images or video exist yet.** Do not fabricate or scrape stock that implies real work.
Design every image/video slot as an elegant, clearly-reserved placeholder (correct aspect
ratio, charcoal block + bronze hairline + label) so real assets drop in later with zero
layout change. Planned shots (later stage): close-ups of hands at work, happy workers,
polishing, interiors being dismantled, restorations, classic cars.

---

## 4. Reference site analysis (Firecrawl)

### 4.1 Swissvax — https://swissvax.de/en  *(the palette anchor)*
- **Likes:** elegant black/white, high-quality photography, whitespace, luxury.
- **Extracted brand:** primary **`#B8935A` (bronze/gold)**, background **`#F4F4F4` (light
  gray, not white)**, text `#000000`. Headings in **condensed display** (Termina / Oswald);
  body Acumin Pro / Montserrat / Inter. **`border-radius: 0`** (sharp, editorial). h1 ~52px.
- **Why it matters:** its real palette ≈ the client's requested palette (charcoal/black +
  light gray + bronze). Strong proof the direction works at the luxury tier.
- **Take:** the palette, the "Est. 1930 / four pillars of craftsmanship" storytelling,
  OEM-trust signals (Rolls-Royce, Bugatti, Aston Martin), sharp-cornered editorial restraint.

### 4.2 Gyeon — https://gyeon.co  *(scale & modernity)*
- **Likes:** very modern, pro photography, large typography, premium, innovation.
- **Extracted brand:** huge display type (**h1 ≈ 106px**, GT America **Compressed**),
  navy `#21314D` + blue accent `#3692C0`, white bg, full-bleed image sections, "CAR CARE
  REDEFINED" marquee.
- **Take:** oversized condensed headlines; full-bleed image-per-section rhythm; confident
  innovation tone. (Their navy/blue is *not* our palette — borrow the scale, not the color.)

### 4.3 CarPro — https://carpro.pt  *(service organization)*
- **Likes:** blends elegance + information; **excellent organization of services**; contrast.
- **Structure:** services framed as a **process → Preparar / Proteger / Manter**
  (Prepare / Protect / Maintain), each with a short description + "Ver Produtos".
- **Take:** the **process-based service taxonomy** is the reusable idea. (Visually it's a
  utilitarian Bootstrap store — take the IA clarity, not the styling.)

### 4.4 Topaz Detailing — https://topazdetailing.com  *(the visual/UX model)*
- **Likes:** exceptional automotive photography, very little text, extremely premium,
  instant trust.
- **Structure:** 4-pillar service taxonomy **ENHANCE | PROTECT | MAINTAIN | CUSTOMISE** —
  each a **big image + one sentence + a slash-label** (`/ ENHANCE`). Word marquee, short
  About, FAQs, inline **Request a Booking** form, Instagram/social grid, locations.
- **Take:** this is the closest to the client's ideal — **image-led service cards, minimal
  copy, a clean 4-step taxonomy, booking-first.** The `/ LABEL` slash motif is a nice,
  ownable structural device.

### 4.5 MrCAP — https://mrcap.com  *(the client's favorite for positioning)*
- **Likes:** doesn't sell washes — sells protection/preservation/value/technology/quality;
  instant clarity (who/what/where-to-click); strong photography; consistent identity.
- **Client critique:** too rational / "very Swedish" — explains well but **little emotion**.
  We should keep its clarity but add warmth, cinema, and exclusivity.
- **Extracted brand:** **dark theme** (`#000000` bg), Mona Sans, h1 ~54px, **pill buttons
  (radius 99px)**, yellow accent `#FFED00`, prominent **reviews (Reco: 4.8/5, 1,306)**,
  primary CTA **"Boka här" (Book here)**.
- **Take:** the backbone — hero → treatments → facilities/experience → **social proof** →
  book. Single clear CTA. (Drop the yellow + pills; we go bronze + sharp/minimal radius.)

---

## 5. Cross-cutting patterns (what the winners share)

1. **Services as a process**, not a price list: Prepare/Correct → Protect → Maintain
   (+ Enhance/Restore, Customise). Seen in Topaz *and* CarPro.
2. **Photography does the selling.** Full-bleed, one idea per section, little text.
3. **Oversized, often condensed, display type.** (Termina, GT America Compressed, Abel.)
4. **One clear primary CTA:** Book / Request a consultation.
5. **Trust signals:** OEM/marque names, reviews, "most exclusive / largest volume," heritage.
6. **Restraint:** lots of whitespace; luxury tier trends to **sharp corners**, not pills.

---

## 6. Proposed design direction (draft)

### 6.1 Palette (draft tokens — warm monochrome + bronze)
| Role | Hex (draft) | Notes |
|---|---|---|
| Ink / charcoal (dominant dark) | `#1A1917` | warm near-black charcoal |
| Charcoal deep | `#121110` | sections, footer |
| Paper (light ground, NOT white) | `#EFEDE8` | warm soft gray, "easy on the eye" |
| Paper alt | `#E6E3DC` | subtle section separation |
| Bronze (accent) | `#B8935A` | validated by Swissvax; type accents, rules, CTA |
| Champagne (accent light) | `#CBAE7E` | on dark backgrounds for contrast |
| Bronze deep | `#8C6C42` | hovers / pressed |
| Muted text on dark | `#B5B0A7` | |
| Muted text on light | `#6A655E` | |

Monochrome + bronze only. Bronze used sparingly (type highlights, hairlines, one CTA) — as
an accent, never a fill everywhere. WCAG AA contrast to be validated with the dataviz/
ui-ux-pro-max validators.

### 6.2 Typography (recommend Option A)
- **Option A — Editorial & emotional (recommended):** an elegant, slightly high-contrast
  **display serif** for headlines (warmth, appreciation, "workshop" soul, welcoming) + a
  clean **grotesque/humanist sans** for UI/body. Differentiates us from the cold, condensed-
  sans competitors and serves the "emotional, human, safe" goal.
- **Option B — Modern & confident:** an oversized **condensed grotesque** display (à la
  Gyeon/Swissvax/Topaz) + humanist sans body. More industrial/innovation-forward.
- Big type scale, <80-char line lengths, generous line-height on serif body.
- Exact families to be chosen with `ui-ux-pro-max --domain typography` + license check.

### 6.3 Layout & composition principles
- Soft-light-gray ground with charcoal sections for rhythm; bronze as the thin thread.
- Full-bleed image slots, one idea per section, heavy whitespace.
- Sharp / minimal border-radius (elegant, not playful). Hairline bronze dividers.
- The `/ LABEL` slash motif (from Topaz) as an ownable structural device for section labels.
- Mobile-first; quality floor: keyboard focus, reduced-motion, AA contrast.

### 6.4 Information architecture (proposed sections)
1. **Hero** — cinematic video slot (placeholder now) + one-line positioning + single CTA
   ("Book a consultation"). Eyebrow: *Lisbon · Automotive detailing*.
2. **Positioning strip** — "We don't wash cars. We preserve them." (protection · preservation
   · value · technology · quality).
3. **Services as process** — Enhance/Correct → Protect → Maintain (+ Restore, Customise),
   image-led cards, minimal text.
4. **Signature work / gallery** — big photography (placeholders), classic cars.
5. **The workshop / experience** — human, hands-at-work, the space; warm + welcoming.
6. **Craftsmanship pillars / why us** — heritage, expertise, materials, guarantees.
7. **Social proof** — reviews / testimonials / marque trust.
8. **Journal (optional)** — appreciation & preservation content.
9. **Contact / booking** — inline form + Lisbon location + map.
10. **Footer.**

### 6.5 Motion (GSAP — restraint)
- One orchestrated hero reveal; scroll-triggered image reveals on services/gallery;
  a single tasteful word/marque marquee; subtle hero parallax. Respect `prefers-reduced-motion`.
- Per `frontend-design`: avoid fade-up-on-every-section and hover-on-every-card (reads as AI).

---

## 7. Skills mapped to this build
- **frontend-design** — overall aesthetic direction & anti-templating discipline.
- **ui-ux-pro-max** — search palettes, font pairings, UX rules, motion presets, chart/data.
- Aesthetic style skills (pick one/blend): **power** (high-end dark, monochrome, premium),
  **refined** (elegant serif, understated), **editorial** (magazine serif), **premium** (Apple
  precision). Leading candidate: **power + refined**.
- **design-system** / **brand** — tokens, voice, consistency.
- **shadcn** + **gsap-*** — components + motion (if we build in React/Next).

## 8. Open questions / decisions needed before building
1. ~~Brand name~~ — **RESOLVED: Detail Department.** Still need: is there an existing logo/wordmark, or do we design one?
2. **Language:** Portuguese, English, or bilingual (PT/EN)? (Lisbon audience + intl.)
3. **Tech stack:** recommend **Next.js + Tailwind + shadcn/ui + GSAP** (uses our skills,
   easy to host, room for the cinematic hero). OK, or prefer plain static HTML/CSS/JS?
4. **Real services & exact names** offered (so the taxonomy is accurate).
5. **Contact details:** address, phone, hours, booking method, socials.
6. **Confirm** palette + Typography Option A vs B.
