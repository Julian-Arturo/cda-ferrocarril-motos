# CDA Motos Av. Ferrocarril - Landing Page Oficial y Cotizador en Producción

Plataforma web especializada para la revisión técnico-mecánica de motocicletas en Barrancabermeja, con módulo interactivo de cotización por modelo/año y pago seguro a través de Wompi.

---

## Stack Tecnológico

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía y UI**: [Lucide Icons](https://lucide.dev/)
- **Despliegue**: [Vercel](https://vercel.com/)

---

## Principales Características y Entregables

- **Hero & Acreditaciones Oficiales**: Encabezado de alta conversión respaldado por las entidades regulatorias vigilantes (ONAC, Vigilado SuperTransporte, RUNT y CAS).
- **Beneficios Operativos**: Sección informativa destacando la agilidad del servicio (revisión en 20 minutos), equipos de diagnóstico de precisión y ubicación estratégica frente a la Ferretería Ar&San.
- **Cotizador y Pasarela Wompi**: Selector dinámico de tarifas reglamentadas con redirección directa y segura al checkout de Wompi según el rango del modelo:
  - **2026 - 2024**: `$237.357 COP` ([Wompi Checkout](https://checkout.wompi.co/l/DDYJBX))
  - **2023 - 2019**: `$237.657 COP` ([Wompi Checkout](https://checkout.wompi.co/l/xHdWMa))
  - **2018 - 2010**: `$237.957 COP` ([Wompi Checkout](https://checkout.wompi.co/l/956wjD))
  - **2009 o menor**: `$237.657 COP` ([Wompi Checkout](https://checkout.wompi.co/l/BCTssA))
- **Canales Directos de Atención**: Integración de widget flotante, barra móvil persistente y llamadas directas:
  - **Líneas telefónicas**: `300 222 5280` · `300 222 9094` · `304 295 0489`
  - **Atención inmediata**: WhatsApp con mensaje preconfigurado y agendamiento R5.

---

## Comandos de Desarrollo Local

Instalación de dependencias:

```bash
npm install
```

Iniciar entorno de desarrollo:

```bash
npm run dev
```

Servidor local disponible en [http://localhost:3000](http://localhost:3000).

Compilación para producción:

```bash
npm run build
```

---

## Criterios de Despliegue

El proyecto cuenta con integración continua vinculada a **Vercel**, ejecutando despliegues automáticos ante cada _push_ a la rama principal previa verificación de tipos en TypeScript y compilación estática.
