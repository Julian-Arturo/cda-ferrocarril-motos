import {
  CheckCircle2,
  MapPin,
  MessageCircle,
  Calendar,
  Shield,
} from "lucide-react";
import { CONTACT, TRUST_ITEMS, STATS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const whatsappUrl = getWhatsAppUrl(CONTACT.whatsapp, CONTACT.whatsappMessage);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-surface-950">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(9,9,11,0.92) 0%, rgba(9,9,11,0.75) 50%, rgba(9,9,11,0.5) 100%), url('https://images.unsplash.com/photo-1558981403-c5f9899a28cb?w=1920&q=80&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent" />

      <div className="section-container relative flex min-h-[90vh] flex-col justify-center pb-24 pt-28 lg:pb-32 lg:pt-36">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400 backdrop-blur-sm">
            <Shield className="h-4 w-4" />
            CDA autorizado · Especialistas en motos
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tu revisión técnico-mecánica,{" "}
            <span className="text-brand-500">rápida y segura</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            Realiza la revisión de tu motocicleta de forma ágil, segura y confiable
            en {CONTACT.city}, {CONTACT.department}. Atendemos motos 2T y 4T.
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
            <MapPin className="h-4 w-4 text-brand-500" />
            {CONTACT.fullAddress}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#agendar" size="lg" className="gap-2">
              <Calendar className="h-5 w-5" />
              Agendar mi revisión
            </Button>
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="lg"
              external
              className="gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Hablar por WhatsApp
            </Button>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
        </div>

        <div className="absolute bottom-8 right-4 hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:block">
          <p className="text-4xl font-bold text-brand-500">{STATS.revisions}+</p>
          <p className="mt-1 text-sm text-zinc-400">Revisiones realizadas</p>
        </div>
      </div>
    </section>
  );
}
