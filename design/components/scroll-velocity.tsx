// scroll-velocity.tsx
// Detail Department — Header 5: scroll-based velocity marquee (Direction B).
// Rebuilt WITHOUT framer-motion (our stack uses GSAP/rAF) — a self-contained
// requestAnimationFrame implementation. Rows drift at baseVelocity and speed
// up / shift with scroll velocity. Destination: /components/ui/scroll-velocity.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RowProps {
  children: React.ReactNode;
  baseVelocity?: number; // px/sec baseline drift
  direction?: 1 | -1;
  className?: string;
}

export function ScrollVelocityContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("relative w-full", className)}>{children}</div>;
}

export function ScrollVelocityRow({
  children,
  baseVelocity = 60,
  direction = 1,
  className,
}: RowProps) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const posRef = React.useRef(0);
  const velRef = React.useRef(0);
  const lastYRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Duplicate content until it spans > 2x viewport, so we can loop seamlessly.
    const seg = track.innerHTML;
    while (track.scrollWidth < window.innerWidth * 2) track.innerHTML += seg;
    const half = track.scrollWidth / 2;

    lastYRef.current = window.scrollY;
    const onScroll = () => {
      velRef.current += window.scrollY - lastYRef.current;
      lastYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let last = performance.now();
    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      velRef.current *= 0.9; // decay
      const boost = velRef.current * 6;
      const speed = (baseVelocity + Math.abs(boost)) * direction + boost;
      posRef.current -= speed * dt;
      if (posRef.current <= -half) posRef.current += half;
      if (posRef.current > 0) posRef.current -= half;
      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [baseVelocity, direction]);

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className={cn("flex whitespace-nowrap will-change-transform", className)}>
        {children}
      </div>
    </div>
  );
}

/*
Usage:
  <ScrollVelocityContainer className="py-16 border-y border-border">
    <ScrollVelocityRow baseVelocity={60} direction={1}>
      <span className="font-[family-name:var(--font-sora)] text-5xl font-extrabold pr-8">
        Detalhe Automóvel <span className="text-primary">/</span> Proteção Cerâmica <span className="text-primary">/</span> Restauro <span className="text-primary">/</span>&nbsp;
      </span>
    </ScrollVelocityRow>
    <ScrollVelocityRow baseVelocity={60} direction={-1} className="[&_span]:text-transparent [&_span]:[-webkit-text-stroke:1px_rgba(243,241,236,.35)]">
      ...
    </ScrollVelocityRow>
  </ScrollVelocityContainer>
  // add left/right from-background gradient fades over the container edges.
*/
