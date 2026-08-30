import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE, CONTACT } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Revisión Técnico-Mecánica Motos en Barrancabermeja`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "revisión técnico mecánica",
    "CDA motos Barrancabermeja",
    "revisión motos Santander",
    "CDA autorizado motos",
    "revisión técnico mecánica motocicletas",
    "CDA Av Ferrocarril",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Revisión Técnico-Mecánica para Motos`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: CONTACT.phones.map((p) => `+57${p.replace(/\s/g, "")}`),
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address,
    addressLocality: CONTACT.city,
    addressRegion: CONTACT.department,
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 7.0653,
    longitude: -73.8547,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Barrancabermeja",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans pb-20 md:pb-0">
        {children}
      </body>
    </html>
  );
}
