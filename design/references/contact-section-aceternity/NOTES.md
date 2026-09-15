# Contact section — OPTION 1 (Aceternity) · client's choice

**Saved for: the Contact section, as Option 1.** Client sent a screenshot
(couldn't copy the code) and asked to reskin from it. Built — see preview.

## Source
- Aceternity UI contact block: https://ui.aceternity.com/blocks/contact-sections
- The specific variant: **two-column "Contact us"**.

## Layout (from the screenshot)
- **Left column:** small accent mail-icon chip (blue in the original) → big bold
  "Contact us" heading → muted paragraph → an inline contact row
  (email • phone • email) → a **dotted world map** with a glowing pin + a
  "We are here" tooltip and a vertical light beam at the location.
- **Right column:** a rounded dark **form card** with a faint grid texture in the
  background. Fields stacked: Full name, Email Address, Company, Message
  (textarea), then a **Submit** button. Inputs are dark with subtle borders and
  placeholder text.
- Whole thing near-black; single cool-blue accent (icon + map beam).

## Reskin (Direction B) — done in preview
- Accent blue → **gold** (#C9A24B): mail chip, map pin + beam, input focus.
- Heading → Fraunces; body → Inter; grain overlay; near-black charcoal.
- Map pin moved to **Portugal / Grande Lisboa**, tooltip → "Estamos aqui".
- Fields → PT: **Nome · Email ou telefone · Carro (marca/modelo)** (replaces
  Company) · **Mensagem** → **Enviar pedido**. Contact row → email · telefone ·
  WhatsApp.
- Preview: dotted world map is drawn in Canvas (continents approximated as a dot
  field; the real Aceternity build uses their WorldMap component with a pin on
  Portugal + animated beam — swap in at build time).

Preview: `design/components/previews/contact-option-1-aceternity.html`
The closing **Contact Orb** (`contact-orb/`) sits under this block.

_Updated 2026-09-15._
