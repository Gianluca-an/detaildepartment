// Detail Department gold config for MoltenMetal — the landing hero background.
// Molten gold flowing over near-black charcoal, mouse-reactive.
import MoltenMetal from './MoltenMetal';

export function MoltenGoldHeroBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <MoltenMetal
        colorMode="molten"
        color1="#241A0D"   /* dark bronze shadow */
        color2="#C9A24B"   /* gold */
        color3="#F3E1B0"   /* lit gold highlight */
        backgroundColor="#060605"  /* charcoal ground (used in lightMode only) */
        speed={0.3}
        scale={4}
        detail={3}
        glow={1.6}
        coreSize={0.1}
        swirl={1}
        fold={-0.2}
        blackPoint={0.05}
        brightness={1.3}
        grain={true}
        grainIntensity={0.05}
        mouseInteraction={true}
        mouseStrength={0.3}
        opacity={1}
        lightMode={false}
      />
    </div>
  );
}
// Deps: `ogl`. Place MoltenMetal.tsx + MoltenMetal.css under components/ui/.
// The hero content (badge / headline / buttons) sits above with a charcoal scrim
// for legibility. This is the INITIAL landing hero (Hero Option 3).
