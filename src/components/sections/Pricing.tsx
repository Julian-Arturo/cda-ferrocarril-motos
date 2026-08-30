import { Check, Calendar } from "lucide-react";
import { PRICING } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  return (
    <section id="precios" className="bg-surface-950 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Precios"
          title="¿Cuánto cuesta la revisión?"
          description="Tarifas claras y transparentes. Consulta nuestras opciones de financiación si lo necesitas."
          dark
        />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-1">
          {PRICING.map((plan) => (
            <article
              key={plan.id}
              className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-surface-900 to-surface-950 p-8 lg:p-10"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-600/10 blur-3xl" />

              <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                    {plan.name}
                  </p>
                  <p className="mt-2 text-4xl font-bold text-white lg:text-5xl">
                    {plan.price}
                  </p>
                  <p className="mt-2 text-zinc-400">{plan.description}</p>
                  <p className="mt-4 text-xs text-zinc-500">{plan.priceNote}</p>
                </div>

                <div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-zinc-300"
                      >
                        <Check className="h-5 w-5 shrink-0 text-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button href="#agendar" size="lg" className="w-full gap-2 sm:w-auto">
                    <Calendar className="h-5 w-5" />
                    Agendar ahora
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-zinc-800 bg-surface-900/50 p-6 text-center">
          <p className="font-semibold text-white">
            ¿Sin dinero para pagar la revisión?
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            Financia el 100% de tu revisión técnico-mecánica con{" "}
            <span className="text-brand-400">Sistecrédito</span> o{" "}
            <span className="text-brand-400">Fipro</span>. Consulta condiciones
            al agendar.
          </p>
        </div>
      </div>
    </section>
  );
}
