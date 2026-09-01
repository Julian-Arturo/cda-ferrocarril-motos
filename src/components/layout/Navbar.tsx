"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "border-b border-white/10 bg-surface-950/40 backdrop-blur-lg"
      )}
    >
      <nav className="section-container flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="group shrink-0 transition-transform hover:scale-[1.02]">
          <Logo priority />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-600",
                scrolled ? "text-zinc-700" : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button href="#precios" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            Agendar cita
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "rounded-lg p-2 lg:hidden",
            scrolled ? "text-surface-900" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white lg:hidden">
          <div className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-lg font-medium text-surface-900 hover:bg-surface-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="#precios" className="mt-4 w-full" onClick={() => setIsOpen(false)}>
              <Calendar className="h-4 w-4" />
              Agendar cita
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
