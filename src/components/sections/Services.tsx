import Image from "next/image";
import { Check, ArrowRight, Calendar } from "lucide-react";
import { SERVICES, CONTACT, FINANCING } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Services() {
  const whatsappUrl = getWhatsAppUrl(CONTACT.whatsapp, CONTACT.whatsappMessage);
  const financingWhatsappUrl = getWhatsAppUrl(
    CONTACT.whatsapp,
    FINANCING.whatsappMessage
  );

  return (
    <section id="servicios" className="bg-surface-50 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="Todo lo que necesitas para tu revisión"
          description="Servicios especializados para que cumplas con la normativa de forma rápida, segura y sin complicaciones."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const isFinancing = service.id === "financiacion";

            return (
              <article
                key={service.id}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.highlighted
                    ? "border-brand-300 shadow-lg shadow-brand-100/60 ring-2 ring-brand-500/20"
                    : "border-zinc-200 hover:border-brand-200"
                }`}
              >
                {service.highlighted && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                    Más solicitado
                  </span>
                )}

                <div
                  className={`relative h-48 overflow-hidden ${
                    isFinancing ? "bg-white" : "bg-zinc-200"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={
                      isFinancing
                        ? FINANCING.partnersAlt
                        : service.title
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={
                      isFinancing
                        ? "object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        : "object-cover transition-transform duration-500 group-hover:scale-105"
                    }
                  />
                  {!isFinancing && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  )}
                  {isFinancing ? (
                    <div className="absolute inset-x-0 bottom-0 border-t border-zinc-100 bg-white/95 px-4 py-3 backdrop-blur-sm">
                      <h3 className="text-lg font-bold leading-tight text-surface-900">
                        {service.title}
                      </h3>
                    </div>
                  ) : (
                    <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold leading-tight text-white">
                      {service.title}
                    </h3>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-600">
                    {service.description}
                  </p>

                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-zinc-700"
                      >
                        <Check className="h-4 w-4 shrink-0 text-brand-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {isFinancing || service.id === "asesoria" ? (
                    <WhatsAppButton
                      href={
                        isFinancing ? financingWhatsappUrl : whatsappUrl
                      }
                      fullWidth
                      outline={!service.highlighted}
                      className={service.highlighted ? "" : "mt-auto"}
                    >
                      {service.cta}
                    </WhatsAppButton>
                  ) : (
                    <Button
                      href="#precios"
                      variant="primary"
                      className="w-full gap-2 shadow-lg shadow-brand-600/30"
                    >
                      <Calendar className="h-4 w-4" />
                      {service.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
