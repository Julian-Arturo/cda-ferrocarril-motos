"use client";

import { Calendar } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function MobileActionBar() {
  const whatsappUrl = getWhatsAppUrl(CONTACT.whatsapp, CONTACT.whatsappMessage);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      <div className="flex gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-semibold text-white shadow-md shadow-[#25D366]/25 transition-colors hover:bg-[#20BD5A]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href="#agendar"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-colors hover:bg-brand-700"
        >
          <Calendar className="h-5 w-5" />
          Agendar
        </a>
      </div>
    </div>
  );
}
