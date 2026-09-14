// header-1-parallax-hero.tsx
// Detail Department — Header 1: layered parallax hero (Direction B: dark / power).
// Adapted from a "Layered Parallax Hero" snippet. Typographic + geometric depth
// (no photography needed for launch). PT copy, "Both" voice, 3 services.
//
// Destination once the Next.js + shadcn project is scaffolded:
//   /components/ui/header-1-parallax-hero.tsx
// Assumes Tailwind theme tokens are mapped to our system:
//   --background #121110 · --foreground #F3F1EC · --primary #B8935A (bronze)
//   --muted-foreground #8C867C · --border rgba(184,147,90,.22)
// and font vars --font-sora (display) + --font-inter (body).
// Requires: rAF-throttled mouse handler (below). No external deps beyond cn().

"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";

const SERVICES = [
  { n: "01", title: "Detalhe Automóvel", desc: "Lavagem técnica, correção de pintura e higienização interior profunda." },
  { n: "02", title: "Proteção Cerâmica", desc: "Sela a pintura, aprofunda o brilho e protege durante anos." },
  { n: "03", title: "Restauro", desc: "Faróis, chapa e pintura — superfícies castigadas ao seu melhor." },
] as const;

export const ParallaxHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      layersRef.current.forEach((layer) => {
        const d = Number(layer.dataset.depth ?? 0);
        layer.style.transform = `translate3d(${x * -d}px, ${y * -d}px, 0)`;
      });
      rafRef.current = null;
    });
  };

  const setLayer = (i: number) => (el: HTMLDivElement | null) => {
    if (el) layersRef.current[i] = el;
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{ perspective: "1000px" }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* ambient bronze wash */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(120%_80%_at_78%_12%,rgba(184,147,90,0.10),transparent_55%)]" />

      {/* Layer 1 — furthest: bronze rings */}
      <div ref={setLayer(0)} data-depth={30} className="absolute inset-0 opacity-50 transition-transform duration-300 ease-out will-change-transform">
        <div className="absolute left-[20%] top-[22%] aspect-square w-[min(34vw,420px)] rounded-full border border-border" />
        <div className="absolute bottom-[16%] right-[18%] aspect-square w-[min(24vw,300px)] rounded-full border border-border" />
      </div>

      {/* Layer 2 — middle: blurred bronze glows */}
      <div ref={setLayer(1)} data-depth={20} className="absolute inset-0 transition-transform duration-200 ease-out will-change-transform">
        <div className="absolute right-[26%] top-[26%] aspect-square w-[min(20vw,240px)] rotate-12 rounded-lg bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[24%] left-[24%] aspect-square w-[min(24vw,300px)] -rotate-12 rounded-lg bg-primary/10 blur-3xl" />
      </div>

      {/* Layer 3 — closest: bronze dots */}
      <div ref={setLayer(2)} data-depth={10} className="absolute inset-0 transition-transform duration-100 ease-out will-change-transform">
        <span className="absolute left-[14%] top-[16%] h-[7px] w-[7px] rounded-full bg-primary/70" />
        <span className="absolute bottom-[24%] right-[20%] h-[6px] w-[6px] rounded-full bg-primary/50" />
        <span className="absolute right-[24%] top-1/2 h-[5px] w-[5px] rounded-full bg-primary/60" />
      </div>

      {/* Content */}
      <div ref={setLayer(3)} data-depth={-6} className="relative z-10 mx-auto max-w-5xl px-6 text-center transition-transform duration-100 ease-out will-change-transform">
        <div className="inline-flex items-center gap-2 rounded-[2px] border border-border bg-card/60 px-4 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/90">
            Lisboa · Estúdio de Detalhe Automóvel
          </span>
        </div>

        <h1 className="mt-8 font-[family-name:var(--font-sora)] text-6xl font-bold leading-[0.94] tracking-[-0.04em] text-foreground md:text-8xl lg:text-9xl">
          O detalhe
          <span className="block bg-gradient-to-r from-[#CBAE7E] via-primary to-[#8a6c40] bg-clip-text text-transparent">
            é tudo.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg font-light text-muted-foreground md:text-xl">
          Detalhe, proteção cerâmica e restauro ao mais alto nível. Preservamos o valor, o
          brilho e o carácter do seu automóvel — do colecionador exigente a quem simplesmente
          estima o que é seu.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="group relative overflow-hidden rounded-[2px] bg-primary px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-shadow hover:shadow-[0_20px_50px_-12px_rgba(184,147,90,0.45)]">
            <span className="relative z-10">Marcar avaliação</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </button>
          <button className="rounded-[2px] border border-border bg-card/50 px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary">
            Ver serviços
          </button>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-3.5 sm:grid-cols-3" style={{ transformStyle: "preserve-3d" }}>
          {SERVICES.map((s, i) => (
            <div
              key={s.n}
              style={{ transform: `translateZ(${20 + i * 10}px)` }}
              className={cn(
                "rounded-[2px] border border-border/50 bg-card/60 p-6 text-left backdrop-blur-sm transition-colors hover:bg-card/85"
              )}
            >
              <div className="font-[family-name:var(--font-sora)] text-xs tracking-wider text-primary">{s.n}</div>
              <div className="mt-3 font-[family-name:var(--font-sora)] text-lg font-medium text-foreground">{s.title}</div>
              <div className="mt-1.5 text-sm font-light leading-relaxed text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
