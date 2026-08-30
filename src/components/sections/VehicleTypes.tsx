import Image from "next/image";
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
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
            >
              <div className="relative h-44 overflow-hidden bg-zinc-200">
                <Image
                  src={vehicle.image}
                  alt={vehicle.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                  {vehicle.type}
                </h3>
              </div>
              <div className="p-6">
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
