# CDA Av. Ferrocarril Motos — Landing Page

Landing page de conversión para CDA (Centro de Diagnóstico Automotor) especializado en revisión técnico-mecánica de motocicletas en Barrancabermeja, Santander.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Lucide Icons**

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Estructura

```
src/
├── app/              # Layout, página principal, estilos globales
├── components/
│   ├── layout/       # Navbar, Footer, barra móvil
│   ├── sections/     # Secciones de la landing
│   └── ui/           # Botones, headings reutilizables
└── lib/
    ├── constants.ts  # Contenido, contacto, SEO
    └── utils.ts      # Helpers
```

## Secciones

1. **Hero** — Propuesta de valor + CTAs principales
2. **Barra de confianza** — Certificaciones
3. **Servicios** — Tarjetas de servicios
4. **¿Por qué elegirnos?** — Diferenciales
5. **Precios** — Tarifas y financiación
6. **Proceso** — 4 pasos
7. **Tipos de vehículos** — Motos 2T, 4T, cilindradas
8. **Prueba social** — Testimonios y stats
9. **Ubicación** — Dirección, horarios, mapa
10. **FAQ** — Preguntas frecuentes
11. **Formulario de agenda** — Conversión vía WhatsApp
12. **CTA final** — Cierre de conversión

## Personalización

Edita `src/lib/constants.ts` para actualizar:

- Teléfonos y WhatsApp
- Dirección y horarios
- Precios reales
- Testimonios
- Redes sociales
- URL del sitio

## Producción

```bash
npm run build
npm start
```

## SEO incluido

- Meta tags (title, description, Open Graph)
- Schema.org LocalBusiness
- Keywords locales
- HTML semántico

## Pendiente de confirmar

- [ ] Tarifas reales de revisión
- [ ] URLs de redes sociales
- [ ] Fotos reales del CDA (reemplazar imagen del hero)
- [ ] Google Analytics ID
- [ ] Dominio final
