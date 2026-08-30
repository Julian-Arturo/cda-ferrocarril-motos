import { Bike } from "lucide-react";
import { VEHICLE_TYPES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VehicleTypes() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Tipos de vehículos"
          title="Atendemos todo tipo de motocicletas"
          description="Realizamos revisión técnico-mecánica para motos 2T y 4T de cualquier cilindraje."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {VEHICLE_TYPES.map((vehicle) => (
            <article
              key={vehicle.type}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:border-brand-200 hover:shadow-xl"
            >
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100 transition-colors group-hover:from-brand-100 group-hover:to-brand-200">
                <Bike className="h-16 w-16 text-brand-600" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-surface-900">
                  {vehicle.type}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-600">
                  {vehicle.description}
                </p>
                <p className="text-xs font-medium text-brand-600">
                  {vehicle.examples}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
