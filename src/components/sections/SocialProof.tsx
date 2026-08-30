import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, STATS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SocialProof() {
  return (
    <section className="bg-surface-50 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Lo que dicen nuestros clientes"
          title={`Más de ${STATS.revisions} revisiones realizadas`}
          description="La confianza de nuestros clientes es nuestro mejor respaldo."
        />

        <div className="mb-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { value: `${STATS.revisions}+`, label: "Revisiones realizadas" },
            { value: "100%", label: "CDA autorizado" },
            { value: "2T y 4T", label: "Tipos de motos" },
            { value: "Rápido", label: "Proceso ágil" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-center"
            >
              <p className="text-3xl font-bold text-brand-600">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="relative rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-100" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand-500 text-brand-500"
                  />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-zinc-700">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <footer className="text-sm font-semibold text-surface-900">
                {testimonial.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
