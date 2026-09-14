// header-2-pillars.tsx
// Detail Department — Header 2: "why us" pillars grid (Direction B: dark / power).
// Adapted from a shadcn "features-2" block (grid-masked icon decorator).
// PT copy, "Both" voice. Bronze icons + faint bronze decorator grid, sharp corners.
//
// Destination (after scaffold): /components/ui/header-2-pillars.tsx
// Deps: shadcn Card (components/ui/card), lucide-react.
// Theme tokens expected: --background #121110 · --card #191715 ·
//   --primary #B8935A (bronze) · --muted-foreground #8C867C · --border rgba(184,147,90,.14).

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Crosshair, Droplets, ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

const PILLARS = [
  { icon: Crosshair, title: "Avaliação presencial", desc: "Cada automóvel é avaliado individualmente antes de qualquer trabalho. Sem surpresas, sem atalhos." },
  { icon: Droplets, title: "Produtos profissionais", desc: "Trabalhamos apenas com gama profissional e técnica rigorosa em cada etapa do processo." },
  { icon: ShieldCheck, title: "Proteção duradoura", desc: "Da correção à proteção cerâmica, resultados feitos para preservar o valor durante anos." },
] as const;

export function Pillars() {
  return (
    <section className="bg-background py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-primary">
            O padrão Detail Department
          </p>
          <h2 className="mt-4 text-balance font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Construído à volta do seu automóvel.
          </h2>
          <p className="mt-4 font-light text-muted-foreground">
            Três razões pelas quais o seu carro fica em boas mãos — do primeiro contacto à entrega.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-sm gap-5 md:mt-16 md:max-w-full md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="rounded-[2px] border-border/60 bg-card text-center shadow-none">
              <CardHeader className="pb-3">
                <CardDecorator>
                  <Icon className="size-5 text-primary" aria-hidden />
                </CardDecorator>
                <h3 className="mt-6 font-[family-name:var(--font-sora)] font-medium text-foreground">{title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] bg-[size:24px_24px] opacity-15" />
    <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t border-border bg-background">
      {children}
    </div>
  </div>
);
