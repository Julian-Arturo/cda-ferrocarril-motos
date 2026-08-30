import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { CONTACT, SITE } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Location() {
  return (
    <section id="ubicacion" className="py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Ubicación"
          title={`Estamos en ${CONTACT.city}`}
          description="Visítanos en nuestra sede. Fácil acceso y atención de lunes a domingo."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-surface-900">Dirección</h3>
                  <p className="mt-1 text-zinc-600">{CONTACT.address}</p>
                  <p className="text-zinc-600">
                    {CONTACT.city}, {CONTACT.department}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-surface-900">Horarios</h3>
                  <p className="mt-1 text-zinc-600">{CONTACT.schedule.weekdays}</p>
                  <p className="text-zinc-600">{CONTACT.schedule.sunday}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-surface-900">Teléfonos</h3>
                  <div className="mt-1 space-y-1">
                    {CONTACT.phones.map((phone) => (
                      <a
                        key={phone}
                        href={formatPhoneLink(phone)}
                        className="block text-zinc-600 transition-colors hover:text-brand-600"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Button
              href={CONTACT.mapDirectionsUrl}
              variant="outline"
              external
              className="w-full gap-2 sm:w-auto"
            >
              <Navigation className="h-5 w-5" />
              Cómo llegar
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-lg">
            <iframe
              title={`Mapa de ${SITE.name}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[400px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}