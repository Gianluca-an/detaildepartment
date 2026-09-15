# Contact Orb — interactive eclipse (bottom of landing page)

Inspiration: client-supplied clip `53f2a96b-unicorn-studio.mp4` (the
**Unicorn Studio** site footer). ~21s, interactive.

## What the reference does
- A large **dark sphere rises from the bottom edge** of the page (only the top
  arc is visible — like a rising planet / eclipse).
- A **bright corona ring** hugs the sphere's edge; a soft outer **bloom** bleeds
  upward into the dark section.
- Faint **volumetric light plumes / rays** rise from behind the sphere.
- **Interactive:** the brightest point of the corona and the light follow the
  cursor; subtle parallax on the orb. Slow, hypnotic, premium.
- Content (CTA "Start exploring", email field, footer links) floats **above**
  the orb.

## How we incorporate it (Detail Department)
- Placement: the **final section of the landing page**, sitting **within /
  underneath the contact section** — the closing "moment" before the legal
  footer strip.
- Reskin: corona + bloom in our **gold** (#C9A24B → #E7CE8F), sphere in
  near-black charcoal, over the void. Grain on top.
- Content floating above the orb: a closing line + the "Marcar avaliação"
  interactive-hover-button, then the compliance footer row beneath.
- Why it fits: an eclipse of warm light on a dark curved surface reads like
  light wrapping polished paint — on-brand, not sci-fi.

## Build note
Preview `contact-orb.html` implements it in Canvas 2D (no dependency) — corona
ring + rotating cursor-tracked hotspot + rising plumes + bloom. In the real
Next.js build this becomes a component; the effect can be upgraded to WebGL or
swapped for a Unicorn Studio embed if we license one. prefers-reduced-motion →
static bloom.

_Added 2026-09-15._
