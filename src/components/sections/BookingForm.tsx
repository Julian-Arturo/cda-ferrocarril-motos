"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Send,
  CheckCircle2,
  Clock,
  Shield,
  Zap,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const quickSteps = [
  { icon: Zap, text: "Completa el formulario" },
  { icon: Send, text: "Enviamos por WhatsApp" },
  { icon: CheckCircle2, text: "Confirmamos tu cita" },
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleType: "motocicleta",
    message: "",
  });

  const whatsappUrl = getWhatsAppUrl(CONTACT.whatsapp, CONTACT.whatsappMessage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hola, quiero agendar una revisión técnico-mecánica.

*Nombre:* ${formData.name}
*Teléfono:* ${formData.phone}
*Tipo de vehículo:* ${formData.vehicleType}
${formData.message ? `*Mensaje:* ${formData.message}` : ""}`;

    const url = getWhatsAppUrl(CONTACT.whatsapp, message);
    window.open(url, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="agendar" className="bg-surface-50 py-20 lg:py-28">
        <div className="section-container">
          <div className="mx-auto max-w-lg rounded-2xl border border-green-200 bg-white p-8 text-center shadow-lg">
            <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
            <h3 className="mt-4 text-2xl font-bold text-surface-900">
              ¡Solicitud enviada!
            </h3>
            <p className="mt-2 text-zinc-600">
              Te redirigimos a WhatsApp para confirmar tu cita. Si no se abrió,
              contáctanos al {CONTACT.phones[0]}.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <WhatsAppButton href={whatsappUrl}>Continuar en WhatsApp</WhatsAppButton>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Enviar otra solicitud
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="agendar" className="bg-surface-50 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Agenda tu cita"
          title="Reserva tu revisión en minutos"
          description="Completa el formulario y te contactamos por WhatsApp para confirmar tu cita. Sin complicaciones."
        />

        <div className="mx-auto mb-10 flex max-w-3xl flex-wrap items-center justify-center gap-4">
          {quickSteps.map((step, i) => (
            <div key={step.text} className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <step.icon className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-zinc-700">{step.text}</span>
              {i < quickSteps.length - 1 && (
                <span className="mx-2 hidden text-zinc-300 sm:inline">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <div className="relative min-h-[340px] overflow-hidden rounded-2xl sm:min-h-[420px] lg:col-span-2 lg:min-h-[520px]">
            <Image
              src="/images/booking.jpg"
              alt="Técnico realizando revisión técnico-mecánica a motocicleta"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold">
                <Clock className="h-3.5 w-3.5" />
                Respuesta en minutos
              </div>
              <h3 className="text-xl font-bold lg:text-2xl">
                Agenda sin salir de WhatsApp
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Prefieres ir directo? Escríbenos y un asesor te atiende de inmediato.
              </p>

              <WhatsAppButton
                href={whatsappUrl}
                fullWidth
                size="lg"
                className="mt-5"
              >
                Hablar por WhatsApp
              </WhatsAppButton>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-sm">
                  <Shield className="h-4 w-4 shrink-0 text-brand-400" />
                  <span>CDA autorizado y registro RUNT</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 shrink-0 text-brand-400" />
                  <span>{CONTACT.schedule.weekdays}</span>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl lg:col-span-3 lg:p-8"
          >
            <div className="mb-6 border-b border-zinc-100 pb-6">
              <h3 className="text-lg font-bold text-surface-900">
                Datos para tu cita
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Solo lo necesario. Te respondemos por WhatsApp.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-surface-900"
                >
                  Nombre completo *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-surface-900"
                >
                  Teléfono / WhatsApp *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  placeholder="300 000 0000"
                />
              </div>

              <div>
                <label
                  htmlFor="vehicleType"
                  className="mb-1.5 block text-sm font-medium text-surface-900"
                >
                  Tipo de vehículo *
                </label>
                <select
                  id="vehicleType"
                  required
                  value={formData.vehicleType}
                  onChange={(e) =>
                    setFormData({ ...formData, vehicleType: e.target.value })
                  }
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                >
                  <option value="motocicleta">Motocicleta</option>
                  <option value="moto-2t">Moto 2T</option>
                  <option value="moto-4t">Moto 4T</option>
                  <option value="scooter">Scooter</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-surface-900"
                >
                  Mensaje (opcional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-zinc-300 px-4 py-3 text-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  placeholder="¿Alguna pregunta o preferencia de horario?"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg" className="flex-1 gap-2">
                <Calendar className="h-5 w-5" />
                Agendar mi revisión
              </Button>
              <WhatsAppButton
                href={whatsappUrl}
                size="lg"
                outline
                className="flex-1 sm:flex-initial"
              >
                WhatsApp directo
              </WhatsAppButton>
            </div>

            <p className="mt-4 text-center text-xs text-zinc-400">
              Al enviar, serás redirigido a WhatsApp para confirmar tu cita.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
