// interactive-hover-button.tsx
// Detail Department — Header 4: MagicUI-style interactive hover button, reskinned
// to Direction B (bronze, sharp corners, uppercase tracked label).
// Destination (after scaffold): /components/ui/interactive-hover-button.tsx
// Deps: lucide-react (ArrowRight), cn().
// Theme tokens: --primary #B8935A (bronze) · --primary-foreground #100F0E ·
//   --foreground #F3F1EC · --border rgba(184,147,90,.30).

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-[2px] border border-primary/60 bg-transparent",
        "px-7 py-3.5 text-center font-[family-name:var(--font-inter)] text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-foreground",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className
      )}
      {...props}
    >
      <span className="relative z-[2] flex items-center justify-center gap-2">
        <span className="h-2 w-2 flex-none rounded-full bg-primary transition-transform duration-[400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[46]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-9 group-hover:opacity-0">
          {children}
        </span>
      </span>
      <span className="absolute inset-0 z-[3] flex translate-x-9 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        {children}
        <ArrowRight className="size-4" />
      </span>
    </button>
  );
});
InteractiveHoverButton.displayName = "InteractiveHoverButton";

/*
Usage:
  <InteractiveHoverButton>Marcar avaliação</InteractiveHoverButton>

Solid (starts bronze) variant — pass a className that flips the base:
  <InteractiveHoverButton className="border-primary bg-primary text-primary-foreground [&_.h-2]:bg-primary-foreground" >
    WhatsApp
  </InteractiveHoverButton>
(or make a dedicated variant; the preview shows both.)
*/
