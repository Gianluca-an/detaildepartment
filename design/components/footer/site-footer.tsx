// site-footer.tsx — Detail Department, Direction B footer (footer "9").
// PT-only v1. All contact/legal values are PLACEHOLDERS — replace at build time
// with the detailer's real NIF, morada, phone, WhatsApp number and social URLs.
// Reskin origin: Dribbble refs 27701451 (ZayaanInk) + 24674170 (Amish Riaz) —
// see NOTES.md. Original build in our charcoal/bronze system, not a pixel copy.
import { Instagram, MessageCircle, Phone, MapPin } from "lucide-react";

const services = [
  { pt: "Detalhe Automóvel", href: "#detalhe" },
  { pt: "Proteção Cerâmica", href: "#ceramica" },
  { pt: "Restauro", href: "#restauro", note: "faróis · chapa e pintura" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0B0A09] text-[#F3F1EC]">
      {/* top bronze hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B8935A]/40 to-transparent" />

      {/* CTA band */}
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-[#CBAE7E]">
            / Grande Lisboa
          </p>
          <p className="mt-3 max-w-md font-light text-[#cfc9bf]">
            Marque uma avaliação presencial. Vemos o carro, ouvimos o objetivo e
            propomos o tratamento certo.
          </p>
        </div>
        <a
          href="#marcar"
          className="group inline-flex items-center gap-3 rounded-[2px] border border-[#B8935A] px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-[#B8935A] hover:text-[#100f0e]"
        >
          Marcar avaliação
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#B8935A] transition-transform group-hover:translate-x-1 group-hover:bg-[#100f0e]" />
        </a>
      </div>

      <div className="h-px w-full bg-[#B8935A]/15" />

      {/* main columns */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* services */}
        <div>
          <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-[#8C867C]">
            Serviços
          </h3>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.pt}>
                <a
                  href={s.href}
                  className="font-[var(--font-sora)] text-lg font-semibold tracking-tight text-[#F3F1EC] transition-colors hover:text-[#CBAE7E]"
                >
                  {s.pt}
                </a>
                {s.note && (
                  <span className="ml-2 text-xs font-light text-[#8C867C]">
                    {s.note}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div>
          <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-[#8C867C]">
            Contacto
          </h3>
          <ul className="mt-5 space-y-4 text-sm font-light text-[#cfc9bf]">
            <li>
              <a
                href="https://wa.me/351000000000"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-[#CBAE7E]"
              >
                <MessageCircle className="h-4 w-4 text-[#B8935A]" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="tel:+351000000000"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-[#CBAE7E]"
              >
                <Phone className="h-4 w-4 text-[#B8935A]" />
                +351 000 000 000
              </a>
            </li>
            <li className="inline-flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B8935A]" />
              <span>
                Morada do estúdio
                <br />
                Grande Lisboa
              </span>
            </li>
          </ul>
        </div>

        {/* hours + social */}
        <div>
          <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-[#8C867C]">
            Horário
          </h3>
          <ul className="mt-5 space-y-2 text-sm font-light text-[#cfc9bf]">
            <li className="flex justify-between gap-4">
              <span>Seg – Sex</span>
              <span className="text-[#8C867C]">09h – 19h</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sábado</span>
              <span className="text-[#8C867C]">Por marcação</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Domingo</span>
              <span className="text-[#8C867C]">Fechado</span>
            </li>
          </ul>
          <a
            href="https://instagram.com/"
            className="mt-6 inline-flex items-center gap-2.5 text-sm font-light text-[#cfc9bf] transition-colors hover:text-[#CBAE7E]"
          >
            <Instagram className="h-4 w-4 text-[#B8935A]" />
            @detaildepartment
          </a>
        </div>
      </div>

      {/* oversized wordmark with edge fade */}
      <div className="relative select-none overflow-hidden px-6 pb-6">
        <div
          className="bg-gradient-to-b from-[#F3F1EC]/[0.06] to-[#F3F1EC]/[0.02] bg-clip-text text-center font-[var(--font-sora)] font-extrabold uppercase leading-none tracking-tight text-transparent"
          style={{ fontSize: "clamp(2.5rem, 13vw, 12rem)" }}
        >
          Detail Department
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-transparent to-[#0B0A09]" />
      </div>

      <div className="h-px w-full bg-[#B8935A]/15" />

      {/* legal / PT compliance row */}
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs font-light text-[#8C867C] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Detail Department · NIF 000 000 000</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#privacidade" className="transition-colors hover:text-[#CBAE7E]">
            Política de Privacidade
          </a>
          <a href="#cookies" className="transition-colors hover:text-[#CBAE7E]">
            Cookies
          </a>
          <a
            href="https://www.livroreclamacoes.pt/"
            className="transition-colors hover:text-[#CBAE7E]"
          >
            Livro de Reclamações
          </a>
        </nav>
      </div>
    </footer>
  );
}
