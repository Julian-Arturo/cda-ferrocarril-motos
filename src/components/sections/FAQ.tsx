"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface-50 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Las respuestas a las preguntas más comunes sobre la revisión técnico-mecánica."
        />

        <div className="mx-auto max-w-3xl divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface-50"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-surface-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-200",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
