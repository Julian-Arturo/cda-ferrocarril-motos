"use client";

import { CONTACT } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function WhatsAppFloat() {
  const whatsappUrl = getWhatsAppUrl(CONTACT.whatsapp, CONTACT.whatsappMessage);

  return (
    <div className="group/float fixed bottom-6 right-6 z-40 hidden md:block">
      <div className="pointer-events-none absolute bottom-full right-0 mb-3 translate-y-1 opacity-0 transition-all duration-200 group-hover/float:translate-y-0 group-hover/float:opacity-100">
        <div className="whitespace-nowrap rounded-xl bg-surface-900 px-4 py-2.5 text-sm font-medium text-white shadow-xl">
          ¿Cómo podemos ayudarte?
          <div className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 bg-surface-900" />
        </div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-all hover:scale-105 hover:bg-[#20BD5A] hover:shadow-xl hover:shadow-[#25D366]/50"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
    </div>
  );
}
