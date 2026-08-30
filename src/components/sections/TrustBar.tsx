import { Shield, Award, MapPin, Wrench } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";

const icons = [Shield, Award, Wrench, MapPin];

export function TrustBar() {
  return (
    <section className="border-b border-zinc-100 bg-white py-8">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={cert}
                className="flex items-center gap-2 text-sm font-medium text-zinc-600"
              >
                <Icon className="h-5 w-5 text-brand-600" />
                <span>{cert}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
