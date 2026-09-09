import { STATS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SocialProof() {
  return (
    <section className="bg-surface-50 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Respaldo comprobado"
          title={`Más de ${STATS.revisionsLabel} revisiones realizadas`}
          description="La confianza de nuestros clientes y años de experiencia son nuestro mejor respaldo."
        />

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { value: STATS.revisionsLabel, label: "Revisiones realizadas" },
            { value: "100%", label: "CDA autorizado" },
            { value: "2T y 4T", label: "Tipos de motos" },
            { value: "Rápido", label: "Proceso ágil" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all hover:border-brand-200 hover:shadow-md"
            >
              <p className="text-3xl font-bold text-brand-600">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
