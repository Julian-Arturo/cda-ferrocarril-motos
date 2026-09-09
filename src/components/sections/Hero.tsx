import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { CONTACT, STATS, IMAGES, SITE } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  const whatsappUrl = getWhatsAppUrl(CONTACT.whatsapp, CONTACT.whatsappMessage);

  return (
    <section className="relative overflow-hidden bg-surface-950">
      <div className="relative h-16 shrink-0 lg:h-20" aria-hidden="true" />

      <div className="relative min-h-[calc(100svh-4rem)] lg:min-h-[calc(92svh-5rem)]">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt={`Fachada de ${SITE.name} en Barrancabermeja`}
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-[75%_38%]"
          />
          {/* Texto legible a la izquierda; fachada visible a la derecha */}
          <div
            className="absolute inset-0 bg-[linear-gradient(105deg,rgba(9,9,11,0.94)_0%,rgba(9,9,11,0.88)_28%,rgba(9,9,11,0.45)_55%,rgba(9,9,11,0.22)_78%,rgba(9,9,11,0.35)_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.35)_0%,transparent_30%,transparent_62%,rgba(9,9,11,0.72)_100%)]"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-end px-4 pb-12 pt-10 sm:px-6 sm:pb-16 lg:min-h-[calc(92svh-5rem)] lg:justify-center lg:px-10 lg:pb-20 xl:px-16">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-2xl lg:max-w-3xl">
              <p className="hero-rise text-xs font-medium uppercase tracking-[0.28em] text-zinc-400">
                Barrancabermeja · Santander
              </p>

              <h1 className="hero-rise hero-rise-delay-1 mt-4 font-display text-[2.35rem] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                CDA Motos Av El Ferrocarril
              </h1>

              <div className="hero-rise hero-rise-delay-1 mt-4 flex items-center gap-3">
                <span
                  className="h-px w-10 shrink-0 bg-brand-500"
                  aria-hidden="true"
                />
                <p className="font-display text-lg font-medium uppercase tracking-[0.12em] text-zinc-100 sm:text-xl lg:text-2xl">
                  Solo para motos
                </p>
              </div>

              <p className="hero-rise hero-rise-delay-2 mt-6 max-w-lg text-base leading-relaxed text-zinc-300 sm:text-lg">
                Técnico-mecánica 2T y 4T en el CDA Av. Ferrocarril. Autorizado, ágil y certificado por el RUNT.
              </p>

              <div className="hero-rise hero-rise-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href="#precios"
                  size="lg"
                  className="rounded-lg font-display text-sm uppercase tracking-wider"
                >
                  <Calendar className="h-5 w-5" />
                  Agendar revisión
                </Button>
                <WhatsAppButton
                  href={whatsappUrl}
                  size="lg"
                  className="rounded-lg border-2 border-white/70 bg-transparent font-display text-sm uppercase tracking-wider text-white shadow-none hover:border-white hover:bg-white/10 hover:shadow-none focus-visible:ring-white/50"
                >
                  WhatsApp
                </WhatsAppButton>
              </div>

              <div className="hero-rise hero-rise-delay-4 mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
                <p className="flex items-center gap-2 text-sm text-zinc-400">
                  <MapPin className="h-4 w-4 shrink-0 text-brand-500" />
                  {CONTACT.fullAddress}
                </p>
                <span
                  className="hidden h-3 w-px bg-white/15 sm:block"
                  aria-hidden="true"
                />
                <p className="text-sm text-zinc-400">
                  <span className="font-semibold text-white">
                    {STATS.revisionsLabel}
                  </span>{" "}
                  revisiones
                </p>
                <span
                  className="hidden h-3 w-px bg-white/15 sm:block"
                  aria-hidden="true"
                />
                <p className="text-sm text-zinc-400">CDA autorizado · RUNT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
