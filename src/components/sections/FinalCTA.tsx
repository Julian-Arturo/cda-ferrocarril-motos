import { Calendar } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl(CONTACT.whatsapp, CONTACT.whatsappMessage);

  return (
    <section className="relative overflow-hidden bg-brand-600 py-20 lg:py-28">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative text-center">
        <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          ¿Tu revisión está por vencer?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
          No esperes al último momento. Realiza hoy tu revisión técnico-mecánica
          y evita multas o inconvenientes.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#precios" variant="light" size="lg" className="min-w-[220px] gap-2">
            <Calendar className="h-5 w-5" />
            Ver precios
          </Button>
          <WhatsAppButton
            href={whatsappUrl}
            size="lg"
            className="min-w-[220px] border-2 border-white/20 bg-[#128C7E] hover:bg-[#0f7a6e]"
          >
            Hablar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
