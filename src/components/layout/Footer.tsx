import Link from "next/link";
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { CONTACT, SITE, CERTIFICATIONS } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-950 text-zinc-400">
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="mb-4 h-14 brightness-110" />
            <h3 className="mb-2 text-lg font-bold text-white">{SITE.name}</h3>
            <p className="text-sm leading-relaxed">
              Centro de Diagnóstico Automotor autorizado. Especialistas en revisión
              técnico-mecánica para motocicletas en Barrancabermeja.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>{CONTACT.fullAddress}</span>
              </li>
              {CONTACT.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-brand-500" />
                  <a
                    href={formatPhoneLink(phone)}
                    className="transition-colors hover:text-white"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <div>
                  <p>{CONTACT.schedule.weekdays}</p>
                  <p>{CONTACT.schedule.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#servicios" className="transition-colors hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#precios" className="transition-colors hover:text-white">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="transition-colors hover:text-white">
                  ¿Cómo funciona?
                </Link>
              </li>
              <li>
                <Link href="#faq" className="transition-colors hover:text-white">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href={CONTACT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-800 transition-colors hover:bg-brand-600"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-800 transition-colors hover:bg-brand-600"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="mb-2 text-xs uppercase tracking-wider text-zinc-500">
                Certificaciones
              </p>
              <div className="flex flex-wrap gap-2">
                {CERTIFICATIONS.map((cert) => (
                  <span
                    key={cert.name}
                    className="rounded-full bg-surface-800 px-2.5 py-1 text-xs"
                  >
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-surface-800 pt-8 text-center text-sm">
          <p>
            © {currentYear} {SITE.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
