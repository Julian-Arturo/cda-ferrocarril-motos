"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

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
          : "bg-transparent"
      )}
    >
      <nav className="section-container flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-900 transition-transform group-hover:scale-105">
            <span className="text-xs font-bold text-brand-500">CDA</span>
          </div>
          <div className="hidden sm:block">
            <p
              className={cn(
                "text-sm font-bold leading-tight transition-colors",
                scrolled ? "text-surface-900" : "text-white"
              )}
            >
              {SITE.shortName}
            </p>
            <p
              className={cn(
                "text-xs transition-colors",
                scrolled ? "text-zinc-500" : "text-white/70"
              )}
            >
              Barrancabermeja
            </p>
          </div>
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
          <Button href="#agendar" size="sm" className="gap-2">
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
            <Button href="#agendar" className="mt-4 w-full" onClick={() => setIsOpen(false)}>
              <Calendar className="h-4 w-4" />
              Agendar cita
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
