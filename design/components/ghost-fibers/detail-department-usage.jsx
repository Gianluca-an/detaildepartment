// detail-department-usage.jsx — Direction B (bronze/charcoal) config for GhostFibers.
// A candidate ambient background behind the hero or a section break.
// Reskin = props only: warm bronze line/glow + kill the blue boost.
// (The shader's backdrop constant is a cool #120F17; if we want a warmer charcoal
//  ground we fork one line in the fragment shader — noted for build time.)
import GhostFibers from './GhostFibers';

export function GhostFibersBackdrop({ children }) {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '600px', background: '#120F17' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <GhostFibers
          lineColor="#3A2A16"      /* warm bronze-brown fiber ink (was deep blue) */
          glowColor="#B8935A"      /* bronze glow (was indigo) */
          blueBoost={1.0}          /* was 1.25 — keep it warm, not blue */
          speed={0.2}
          scale={2}
          rotation={0}
          rotationSpeed={0.25}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.6}
          brightness={2}
          vignette={0.8}
          grain={0.05}
          dpr={1}
        />
      </div>
      {/* content sits above the canvas */}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
