"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import {
  CONTACT,
  IMAGES,
  PAGE_TITLE,
  R5,
  SITE,
  WHATSAPP_CHAT,
} from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type ChatPhase = "hidden" | "typing" | "message";

const NOTIFY_FAVICON = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#25D366"/><path d="M16 6c-5.5 0-10 4-10 9 0 2 .7 3.8 2 5.2L7 26l5.8-1.5c1.3.7 2.8 1.1 4.2 1.1 5.5 0 10-4 10-9s-4.5-9-10-9z" fill="#fff" opacity=".9"/><circle cx="25" cy="7" r="6.5" fill="#ef4444"/><text x="25" y="10" text-anchor="middle" fill="#fff" font-size="8" font-weight="700" font-family="sans-serif">1</text></svg>'
)}`;

function TypingDots() {
  return (
    <div className="inline-flex items-center gap-1 rounded-2xl rounded-tl-md bg-[#f0f2f5] px-4 py-3">
      <span className="wa-typing-dot" />
      <span className="wa-typing-dot wa-typing-dot-delay-1" />
      <span className="wa-typing-dot wa-typing-dot-delay-2" />
    </div>
  );
}

export function WhatsAppFloat() {
  const whatsappUrl = getWhatsAppUrl(CONTACT.whatsapp, CONTACT.whatsappMessage);
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState<ChatPhase>("hidden");
  const [hasUnread, setHasUnread] = useState(false);
  const originalTitle = useRef(PAGE_TITLE);
  const originalFavicon = useRef<string | null>(null);

  const clearNotification = useCallback(() => {
    setHasUnread(false);
    document.title = originalTitle.current;

    const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (favicon && originalFavicon.current) {
      favicon.href = originalFavicon.current;
    }
  }, []);

  const dismiss = useCallback(() => {
    setIsOpen(false);
    setPhase("hidden");
    clearNotification();
    sessionStorage.setItem(WHATSAPP_CHAT.storageKey, "1");
  }, [clearNotification]);

  const openChat = useCallback(() => {
    setIsOpen(true);
    setPhase((current) =>
      current === "hidden" ? "message" : current
    );
  }, []);

  const handleWhatsAppButtonClick = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    if (
      !sessionStorage.getItem(WHATSAPP_CHAT.storageKey) &&
      (hasUnread || phase !== "hidden")
    ) {
      openChat();
      return;
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    clearNotification();
  };

  useEffect(() => {
    if (sessionStorage.getItem(WHATSAPP_CHAT.storageKey)) return;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      setHasUnread(true);
      setPhase("typing");
    }, WHATSAPP_CHAT.showDelayMs);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;

    const timer = window.setTimeout(
      () => setPhase("message"),
      WHATSAPP_CHAT.typingDurationMs
    );

    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (!hasUnread) return;

    const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (favicon && !originalFavicon.current) {
      originalFavicon.current = favicon.href;
    }

    document.title = `(1) Nuevo mensaje · ${SITE.shortName}`;
    if (favicon) favicon.href = NOTIFY_FAVICON;

    let blink = false;
    const interval = window.setInterval(() => {
      if (document.hidden) {
        blink = !blink;
        document.title = blink
          ? `(1) 💬 ${WHATSAPP_CHAT.agentName} te escribió...`
          : `(1) Nuevo mensaje · ${SITE.shortName}`;
      }
    }, 2500);

    const onVisibility = () => {
      if (!document.hidden && hasUnread) {
        document.title = `(1) Nuevo mensaje · ${SITE.shortName}`;
      }
    };

    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [hasUnread]);

  const handleWhatsAppClick = () => {
    clearNotification();
    dismiss();
  };

  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {isOpen && (
        <div className="wa-chat-enter w-[min(100vw-2rem,18.5rem)] overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
          <div className="relative bg-[#075E54] px-4 pb-4 pt-3 text-white">
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-3 top-3 rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Cerrar chat"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3 pr-8">
              <div className="relative shrink-0">
                <div className="relative h-11 w-11 overflow-hidden rounded-full bg-white ring-2 ring-white/30">
                  <Image
                    src={IMAGES.logo}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#075E54] bg-[#25D366]" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {WHATSAPP_CHAT.agentName}
                </p>
                <p className="truncate text-xs text-white/75">
                  {WHATSAPP_CHAT.status}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 bg-[#e5ddd5] px-3 py-4">
            <div className="flex items-end gap-2">
              <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-white">
                <Image
                  src={IMAGES.logo}
                  alt=""
                  fill
                  sizes="28px"
                  className="object-contain p-0.5"
                />
              </div>

              <div className="max-w-[85%]">
                {phase === "typing" ? (
                  <TypingDots />
                ) : (
                  <div className="wa-message-enter rounded-2xl rounded-tl-md bg-white px-3.5 py-2.5 text-sm leading-relaxed text-zinc-800 shadow-sm">
                    {WHATSAPP_CHAT.greeting}
                  </div>
                )}
              </div>
            </div>

            {phase === "message" && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="wa-message-enter flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#20BD5A]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {WHATSAPP_CHAT.cta}
              </a>
            )}
          </div>
        </div>
      )}

      <div className="group/r5 relative">
        <div className="pointer-events-none absolute bottom-full right-0 mb-3 translate-y-1 opacity-0 transition-all duration-200 group-hover/r5:translate-y-0 group-hover/r5:opacity-100">
          <div className="whitespace-nowrap rounded-xl bg-surface-900 px-4 py-2.5 text-sm font-medium text-white shadow-xl">
            {R5.tooltip}
            <div className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 bg-surface-900" />
          </div>
        </div>

        <a
          href={R5.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-14 w-14 overflow-hidden rounded-full shadow-lg shadow-black/20 ring-2 ring-white/90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-black/25"
          aria-label={R5.label}
        >
          <Image
            src={R5.logo}
            alt="R5"
            fill
            sizes="56px"
            className="object-cover"
          />
        </a>
      </div>

      <div className="group/wa relative">
        {!isOpen && (
          <div className="pointer-events-none absolute bottom-full right-0 mb-3 translate-y-1 opacity-0 transition-all duration-200 group-hover/wa:translate-y-0 group-hover/wa:opacity-100">
            <div className="whitespace-nowrap rounded-xl bg-surface-900 px-4 py-2.5 text-sm font-medium text-white shadow-xl">
              ¿Cómo podemos ayudarte?
              <div className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 bg-surface-900" />
            </div>
          </div>
        )}

        {hasUnread && (
          <span className="absolute -right-1 -top-1 z-10 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold text-white shadow-md ring-2 ring-white">
            1
          </span>
        )}

        <button
          type="button"
          onClick={handleWhatsAppButtonClick}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-all hover:scale-105 hover:bg-[#20BD5A] hover:shadow-xl hover:shadow-[#25D366]/50"
          aria-label={isOpen ? "Minimizar chat" : "Abrir chat de WhatsApp"}
        >
          {hasUnread && !isOpen && (
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
          )}
          <WhatsAppIcon className="relative h-7 w-7" />
        </button>
      </div>
    </div>
  );
}
