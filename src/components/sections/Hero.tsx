import Image from "next/image";
import {
  CheckCircle2,
  MapPin,
  Calendar,
  Shield,
} from "lucide-react";
import { CONTACT, TRUST_ITEMS, STATS, IMAGES } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  const whatsappUrl = getWhatsAppUrl(CONTACT.whatsapp, CONTACT.whatsappMessage);

  return (
    <section className="relative overflow-hidden bg-surface-950">
      <div className="relative h-16 shrink-0 lg:h-20" aria-hidden="true" />

      <div className="relative min-h-[calc(92svh-4rem)] lg:min-h-[calc(88vh-5rem)]">
        {/* Imagen + gradiente a ancho completo — sin línea en el centro */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-[center_35%]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/70 to-surface-950/40 lg:bg-gradient-to-r lg:from-surface-950 lg:from-35% lg:via-surface-950/75 lg:via-50% lg:to-surface-950/15 lg:to-100%"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8 lg:py-16 xl:px-12">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-600/15 px-4 py-1.5 text-sm font-medium text-brand-400 backdrop-blur-md">
                <Shield className="h-4 w-4" />
                CDA autorizado · Exclusivo motos
              </div>

              <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[3.25rem]">
                Tu revisión técnico-mecánica,{" "}
                <span className="text-brand-500">rápida y segura</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                Realiza la revisión de tu motocicleta de forma ágil, segura y
                confiable en {CONTACT.city}. Atendemos motos 2T y 4T.
              </p>

              <p className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                <MapPin className="h-4 w-4 shrink-0 text-brand-500" />
                {CONTACT.fullAddress}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#agendar" size="lg" className="gap-2">
                  <Calendar className="h-5 w-5" />
                  Agendar mi revisión
                </Button>
                <WhatsAppButton href={whatsappUrl} size="lg">
                  Hablar por WhatsApp
                </WhatsAppButton>
              </div>

              <ul className="mt-10 grid grid-cols-2 gap-2">
                {TRUST_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm lg:hidden">
                <div>
                  <p className="text-3xl font-bold text-brand-500">
                    {STATS.revisionsLabel}
                  </p>
                  <p className="text-sm text-zinc-400">Revisiones realizadas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[45vh] lg:block lg:min-h-0">
            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/15 bg-surface-950/60 px-6 py-4 backdrop-blur-md">
              <p className="text-4xl font-bold text-brand-500">{STATS.revisionsLabel}</p>
              <p className="text-sm text-zinc-300">Revisiones realizadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
