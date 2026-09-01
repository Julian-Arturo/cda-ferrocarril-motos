import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="como-funciona" className="bg-surface-50 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Proceso simple"
          title="Así de fácil es tu revisión"
          description="¿Necesitas tu revisión? Hazlo fácil. Te guiamos paso a paso para que no pierdas tiempo."
        />

        <div className="relative grid gap-8 md:grid-cols-3 lg:grid-cols-3">
          <div
            className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 lg:block"
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step, index) => (
            <div key={step.step} className="relative text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-xl font-bold text-white shadow-lg shadow-brand-600/30">
                {step.step}
              </div>
              <h3 className="mb-3 text-lg font-bold text-surface-900">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {step.description}
              </p>
              {index < PROCESS_STEPS.length - 1 && (
                <div
                  className="mx-auto mt-6 h-8 w-0.5 bg-brand-200 lg:hidden"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
