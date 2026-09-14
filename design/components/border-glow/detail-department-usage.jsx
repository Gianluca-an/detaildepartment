// detail-department-usage.jsx — Direction B (bronze/charcoal) config for BorderGlow.
// Great around a service card, a featured testimonial, or the booking CTA panel.
import BorderGlow from './BorderGlow';

export function ServiceGlowCard() {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="38 58 66"                          // champagne-bronze glow (H S L)
      backgroundColor="#141210"                     // charcoal card
      borderRadius={8}                              // near-sharp, on-brand for Direction B
      glowRadius={40}
      glowIntensity={1.0}
      coneSpread={25}
      animated={false}                              // set true for a one-time intro sweep
      colors={['#CBAE7E', '#B8935A', '#E7D8BE']}    // champagne / bronze / warm highlight
    >
      <div style={{ padding: '2.4em' }}>
        <p style={{ letterSpacing: '.28em', textTransform: 'uppercase', fontSize: '.7rem', color: '#B8935A' }}>
          / Serviço
        </p>
        <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.6rem', margin: '.6rem 0 .5rem' }}>
          Proteção Cerâmica
        </h3>
        <p style={{ color: '#8C867C', fontWeight: 300 }}>
          Sela a pintura, aprofunda o brilho e protege durante anos.
        </p>
      </div>
    </BorderGlow>
  );
}
