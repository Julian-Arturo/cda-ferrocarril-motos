"use client";

import { useState } from "react";
import { ShieldCheck, Lock, CheckCircle2, ArrowRight, CreditCard, ChevronDown } from "lucide-react";

interface YearOption {
  label: string;
  value: string;
  price: string;
  amount: number;
}

const YEAR_OPTIONS: YearOption[] = [
  {
    label: "2026 - 2024",
    value: "2026-2024",
    price: "$237.357 COP",
    amount: 237357,
  },
  {
    label: "2023 - 2019",
    value: "2023-2019",
    price: "$237.657 COP",
    amount: 237657,
  },
  {
    label: "2018 - 2010",
    value: "2018-2010",
    price: "$237.957 COP",
    amount: 237957,
  },
  {
    label: "2009 o menor",
    value: "2009-older",
    price: "$237.657 COP",
    amount: 237657,
  },
];

// Enlace de pasarela segura Wompi (personalizable según el comercio)
const WOMPI_CHECKOUT_URL = "https://checkout.wompi.co/l/VPOS_ferrocarril";

export function Pricing() {
  const [selectedYear, setSelectedYear] = useState<string>("2026-2024");

  const currentOption =
    YEAR_OPTIONS.find((opt) => opt.value === selectedYear) || YEAR_OPTIONS[0];

  const handlePayment = () => {
    window.open(WOMPI_CHECKOUT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="precios" className="relative bg-surface-950 py-20 lg:py-28 overflow-hidden">
      {/* Anclas de navegación compatibles */}
      <div id="cotizador" className="absolute top-0" />
      <div id="como-funciona" className="absolute top-0" />

      {/* Resplandor decorativo sutil en la paleta oscura */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-600/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Encabezado orgánico */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Pago 100% seguro</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Paga tu revisión ahora
          </h2>

          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            Selecciona el año de tu motocicleta y completa tu pago de forma segura a través de Wompi.
          </p>
        </div>

        {/* Tarjeta del Cotizador y Pago con la misma colorimetría de la sección */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-surface-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Campo 1: Tipo de vehículo */}
              <div>
                <label
                  htmlFor="vehicle-type"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-400"
                >
                  Tipo de vehículo
                </label>
                <div className="relative mt-2">
                  <select
                    id="vehicle-type"
                    disabled
                    aria-label="Tipo de vehículo"
                    className="w-full appearance-none rounded-xl border border-zinc-800 bg-surface-950/80 px-4 py-3.5 pr-10 text-sm font-medium text-zinc-300 cursor-not-allowed"
                    defaultValue="Motocicleta"
                  >
                    <option value="Motocicleta">Motocicleta</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-zinc-500">
                    <Lock className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-1.5 text-xs text-zinc-500">
                  Exclusivo para motocicletas 2T y 4T.
                </p>
              </div>

              {/* Campo 2: Año del vehículo */}
              <div>
                <label
                  htmlFor="vehicle-year"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-300"
                >
                  Año del vehículo
                </label>
                <div className="relative mt-2">
                  <select
                    id="vehicle-year"
                    value={selectedYear}
                    aria-label="Año del vehículo"
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-zinc-700 bg-surface-800/90 px-4 py-3.5 pr-10 text-sm font-semibold text-white shadow-sm transition-all focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  >
                    {YEAR_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value} className="bg-surface-900 text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-brand-400">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-1.5 text-xs text-zinc-500">
                  Tarifa oficial según el modelo de tu moto.
                </p>
              </div>
            </div>

            {/* Display del Total a pagar */}
            <div className="mt-8 rounded-2xl border border-brand-500/30 bg-gradient-to-b from-brand-600/10 to-surface-950 p-6 text-center sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                Total a pagar
              </span>
              <div className="mt-2 flex items-baseline justify-center">
                <span className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {currentOption.price}
                </span>
              </div>
              <p className="mt-2 text-xs text-zinc-400">
                Tarifa oficial reglamentada para modelo {currentOption.label}
              </p>

              {/* Botón de acción destacado */}
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={handlePayment}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-600 px-8 py-4 text-base font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-xl hover:shadow-brand-600/40 focus:outline-none focus:ring-4 focus:ring-brand-500/30 sm:w-auto"
                >
                  <CreditCard className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span>Pagar ahora</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Mensajes de confianza al pie de la tarjeta */}
            <div className="mt-8 border-t border-zinc-800/80 pt-6">
              <div className="grid gap-3 sm:grid-cols-3 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Confirmación inmediata</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Pagos por PSE, tarjetas débito y crédito</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Redirección segura a la pasarela oficial Wompi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner de financiación Sistecrédito / Fipro */}
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
