import {
  Clock,
  Users,
  Building2,
  Shield,
  Tag,
  MapPin,
} from "lucide-react";
import { WHY_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  clock: Clock,
  users: Users,
  building: Building2,
  shield: Shield,
  tag: Tag,
  map: MapPin,
};

export function WhyUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="¿Por qué elegirnos?"
          title="Confianza, rapidez y especialización en motos"
          description="No somos un CDA genérico. Nos especializamos en motocicletas para darte un servicio más rápido y preciso."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-100 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-surface-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
