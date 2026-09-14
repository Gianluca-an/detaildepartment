// header-3-video-text-demo.tsx
// Detail Department — Header 3 usage: brand name filled by cinematic video (Direction B).
// Drop the real footage into `videoSrc` and (recommended) a `poster` still.
// Destination (after scaffold): a homepage/hero section that renders this.
"use client";

import { VideoText } from "@/components/ui/video-text";

// TODO: replace with the client's cinematic loop (e.g. /media/hero.mp4) + a poster frame.
const videoSrc = "/media/hero-placeholder.mp4";

export function VideoTextHero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#0B0A09] px-5 py-16 text-center">
      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-primary">
        Lisboa · Estúdio de Detalhe Automóvel
      </p>

      <div className="h-[min(52vh,420px)] w-full max-w-6xl">
        {/* Two stacked words for impact; tune fontSize per line if needed */}
        <VideoText
          src={videoSrc}
          fontFamily="Sora, sans-serif"
          fontWeight={800}
          fontSize={16}
          className="uppercase"
        >
          DETAIL DEPARTMENT
        </VideoText>
      </div>

      <p className="max-w-xl font-light text-muted-foreground">
        O nome preenchido pelo movimento — o seu vídeo cinematográfico corre dentro das letras.
      </p>
    </section>
  );
}
