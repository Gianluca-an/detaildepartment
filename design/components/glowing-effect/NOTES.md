# Glowing Effect (Aceternity) — site-wide accent

Cursor-reactive **border glow**: a gold arc rides the border of a card and points
toward the cursor when it's within `proximity`; calm (invisible) until you
interact. Chosen over React Bits BorderGlow because it reacts to the user and
stays restrained — the classier choice for repeated elements.

## Files
- `glowing-effect.tsx` — the component, **original TypeScript** (client sent the
  demo, not this source). Gold-tuned default gradient; `variant="white"` for
  neutral. Props: blur, inactiveZone, proximity, spread, variant, glow,
  className, disabled, movementDuration, borderWidth.
- `glowing-effect-demo.tsx` — client's demo, verbatim (bento grid).
- Dep: `lucide-react`, `cn` from `@/lib/utils`. Place component at
  `components/ui/glowing-effect.tsx` (shadcn default).

## Where we'll use it (client: "for the entire website mockup build")
Wrap it inside any bordered card, absolutely positioned, e.g.:
```tsx
<div className="relative rounded-2xl border p-2">
  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} />
  <div className="relative ...card content...">…</div>
</div>
```
Apply to: service cards, the contact form card, gallery/work cards, About
portrait frame, pricing/feature tiles — any premium bordered surface across the
landing page and the Serviços / Sobre / Trabalhos / Contacto pages.

Preview: `design/components/previews/glowing-effect.html` (vanilla port on a
Direction-B bento grid). prefers-reduced-motion → static (no follow).

_Added 2026-09-17._
