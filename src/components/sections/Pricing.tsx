import { Check } from "lucide-react";
import { CONTACT, PRICING } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Pricing() {
  return (
    <section id="precios" className="bg-surface-950 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Precios"
          title="¿Cuánto cuesta la revisión?"
          description="Planes exclusivos para motos. Tarifas de referencia; confirma por WhatsApp al agendar."
          dark
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {PRICING.map((plan) => {
            const planWhatsApp = getWhatsAppUrl(
              CONTACT.whatsapp,
              `Hola, quiero agendar la revisión *${plan.name}* (${plan.price}).`
            );

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col overflow-hidden rounded-2xl border p-6 ${
                  plan.highlighted
                    ? "border-brand-500/40 bg-gradient-to-b from-brand-600/15 to-surface-900 shadow-lg shadow-brand-900/30"
                    : "border-zinc-800 bg-surface-900"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute right-4 top-4 rounded-full bg-brand-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    Popular
                  </span>
                )}

                <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                  {plan.name}
                </p>
                <p className="mt-3 text-3xl font-bold text-white">
                  {plan.price}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>

                <ul className="my-6 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-zinc-300"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mb-4 text-xs text-zinc-500">{plan.priceNote}</p>

                <WhatsAppButton href={planWhatsApp} fullWidth>
                  Agendar por WhatsApp
                </WhatsAppButton>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-zinc-800 bg-surface-900/50 p-6 text-center">
          <p className="font-semibold text-white">
            ¿Sin dinero para pagar la revisión?
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            Financia el 100% con{" "}
            <span className="text-brand-400">Sistecrédito</span> o{" "}
            <span className="text-brand-400">Fipro</span>. Pregunta por
            WhatsApp al agendar.
          </p>
        </div>
      </div>
    </section>
  );
}
