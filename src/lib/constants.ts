export const IMAGES = {
  hero: "/images/hero-fachada.jpg",
  logo: "/images/logo.png",
  booking: "/images/booking.png",
} as const;

export const R5 = {
  bookingUrl: "https://www.grupor5.com/tecnomecanica",
  label: "Agendar en R5",
  tooltip: "Agenda tu tecno en R5",
  logo: "/images/r5-logo.png",
} as const;

export const WHATSAPP_CHAT = {
  storageKey: "cda-wa-chat-dismissed",
  showDelayMs: 3500,
  typingDurationMs: 2600,
  agentName: "CDA Av. Ferrocarril",
  status: "En línea · responde en minutos",
  greeting:
    "¡Hola! 👋 Somos el equipo del CDA. ¿Te ayudamos a agendar tu revisión técnico-mecánica?",
  cta: "Responder ahora",
} as const;

export const SITE = {
  name: "CDA Av. Ferrocarril Motos",
  shortName: "CDA Ferrocarril Motos",
  tagline: "Revisión técnico-mecánica para motocicletas",
  description:
    "Centro de Diagnóstico Automotor autorizado en Barrancabermeja. Revisión técnico-mecánica para motos 2T y 4T. Atención rápida, segura y confiable.",
  url: "https://cdaferrocarrilmotos.com",
  locale: "es_CO",
} as const;

export const PAGE_TITLE =
  `${SITE.name} | Revisión Técnico-Mecánica Motos en Barrancabermeja`;

export const CONTACT = {
  address: "Cra. 33 #55A-96",
  city: "Barrancabermeja",
  department: "Santander",
  country: "Colombia",
  fullAddress: "Cra. 33 #55A-96, Barrancabermeja, Santander",
  phones: ["300 222 5280", "300 222 9094"],
  whatsapp: "573002225280",
  whatsappMessage:
    "Hola, me gustaría agendar una revisión técnico-mecánica para mi motocicleta.",
  email: "contacto@cdaferrocarrilmotos.com",
  schedule: {
    weekdays: "Lunes – Sábado: 8:00 a.m. – 6:00 p.m.",
    sunday: "Domingos: 8:00 a.m. – 12:00 p.m.",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.5!2d-73.85!3d7.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNy4wNiwtNzMuODU!5e0!3m2!1ses!2sco!4v1",
  mapDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cra.+33+%2355A-96+Barrancabermeja+Santander",
  social: {
    facebook:
      "https://www.facebook.com/p/CDA-MOTOS-AV-Ferrocarril-61553245675521/",
    instagram: "https://www.instagram.com/cdaavferrocarril/",
  },
} as const;

export const STATS = {
  revisions: 30000,
  revisionsLabel: "30.000+",
  yearsExperience: 5,
} as const;

export const FINANCING = {
  partnersImage: "/images/financing/sistecredito-fipro.jpg",
  partnersAlt: "Sistecrédito y Fipro Crédito",
  whatsappMessage:
    "Hola, me gustaría consultar la financiación del 100% de mi revisión técnico-mecánica con Sistecrédito o Fipro.",
} as const;

export const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "¿Cómo funciona?" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "Preguntas frecuentes" },
] as const;

export const TRUST_ITEMS = [
  "CDA autorizado",
  "Registro RUNT",
  "Atención especializada",
  "Barrancabermeja, Santander",
] as const;

export const SERVICES = [
  {
    id: "motos",
    title: "Revisión técnico-mecánica para motos",
    description:
      "La revisión obligatoria para verificar las condiciones mecánicas y de seguridad de tu motocicleta. Atendemos motos 2T y 4T.",
    features: ["Inspección completa", "Registro RUNT", "Resultado el mismo día"],
    cta: "Agendar revisión",
    icon: "bike" as const,
    image: "/images/services/motos.png",
    highlighted: true,
  },
  {
    id: "financiacion",
    title: "Financiación 100%",
    description:
      "¿Sin dinero para pagar la revisión? Financia el 100% con nuestros aliados Sistecrédito y Fipro Crédito. Sin cuota inicial y aprobación rápida.",
    features: ["Sin cuota inicial", "Aprobación rápida", "Pagos flexibles"],
    cta: "Consultar financiación",
    icon: "credit" as const,
    image: "/images/services/financiacion.png",
    highlighted: false,
  },
  {
    id: "asesoria",
    title: "Asesoría y acompañamiento",
    description:
      "Te guiamos en todo el proceso para que tu revisión sea rápida, clara y sin complicaciones.",
    features: ["Atención personalizada", "Proceso transparente", "Soporte por WhatsApp"],
    cta: "Hablar con un asesor",
    icon: "support" as const,
    image: "/images/services/asesoria.png",
    highlighted: false,
  },
] as const;

export const WHY_US = [
  {
    title: "Atención rápida",
    description: "Proceso ágil para que no pierdas tiempo. Agenda y realiza tu revisión sin filas innecesarias.",
    icon: "clock" as const,
  },
  {
    title: "Personal especializado",
    description: "Técnicos capacitados exclusivamente en revisión técnico-mecánica de motocicletas.",
    icon: "users" as const,
  },
  {
    title: "Instalaciones adecuadas",
    description: "Centro equipado con la tecnología necesaria para un diagnóstico confiable y preciso.",
    icon: "building" as const,
  },
  {
    title: "Proceso confiable",
    description: "Cumplimos con la normativa vigente y registramos tu revisión correctamente en el RUNT.",
    icon: "shield" as const,
  },
  {
    title: "Precios competitivos",
    description: "Tarifas claras y opciones de financiación para que accedas a tu revisión sin preocupaciones.",
    icon: "tag" as const,
  },
  {
    title: "Ubicación conveniente",
    description: "Estamos en el corazón de Barrancabermeja, fácil acceso y estacionamiento disponible.",
    icon: "map" as const,
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Agenda",
    description: "Contáctanos por WhatsApp o agenda tu cita en línea. Elige el horario que más te convenga.",
  },
  {
    step: "02",
    title: "Lleva tu moto",
    description: "Visítanos en nuestra sede con los documentos de tu motocicleta y tu identificación.",
  },
  {
    step: "03",
    title: "Realizamos la revisión",
    description: "Nuestro equipo especializado inspecciona tu vehículo siguiendo los protocolos oficiales.",
  },
  {
    step: "04",
    title: "Recibe tu resultado",
    description: "Te entregamos el resultado de tu revisión y el registro correspondiente en el RUNT.",
  },
] as const;

export const VEHICLE_TYPES = [
  {
    type: "Motos 2T",
    description: "Motocicletas de dos tiempos. Revisión completa de motor, frenos, luces y emisiones.",
    examples: "Ciclomotores, motos de trabajo, scooters 2T",
    image: "/images/vehicles/motos-2t.png",
    alt: "Revisión técnico-mecánica de moto 2T en CDA Av. Ferrocarril",
  },
  {
    type: "Motos 4T",
    description: "Motocicletas de cuatro tiempos. Inspección integral de sistemas mecánicos y de seguridad.",
    examples: "Motos deportivas, Naked, Scooters 4T, Enduro",
    image: "/images/vehicles/motos-4t.png",
    alt: "Inspección de luces y revisión sensorial en moto 4T",
  },
  {
    type: "Todas las cilindradas",
    description: "Atendemos motocicletas de cualquier cilindraje, desde 50cc hasta motos de alto cilindraje.",
    examples: "125cc, 150cc, 200cc, 250cc y más",
    image: "/images/vehicles/todas-cilindradas.png",
    alt: "Equipo técnico del CDA atendiendo todo tipo de motocicletas",
  },
] as const;

export const PRICING = [
  {
    id: "motos",
    name: "Motocicletas",
    price: "Consultar tarifa",
    priceNote: "Precios sujetos a tarifas vigentes del Ministerio de Transporte",
    description: "Revisión técnico-mecánica completa",
    features: [
      "Inspección mecánica y de seguridad",
      "Verificación de luces y frenos",
      "Registro en RUNT",
      "Resultado de la revisión",
      "Atención especializada en motos",
    ],
    highlighted: true,
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Carlos M.",
    text: "Excelente atención, muy rápidos y profesionales. Saqué mi revisión sin complicaciones y el trato fue muy amable.",
    rating: 5,
  },
  {
    name: "Laura P.",
    text: "Llevé mi moto y en poco tiempo ya tenía el resultado. Recomendado para quienes necesitan la revisión en Barrancabermeja.",
    rating: 5,
  },
  {
    name: "Andrés R.",
    text: "Me ayudaron con la financiación y pude hacer la revisión sin problema. Muy buen servicio y precios justos.",
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "¿Qué es la revisión técnico-mecánica?",
    answer:
      "Es un examen obligatorio que verifica que tu motocicleta cumpla con las condiciones mecánicas, de seguridad y ambientales exigidas por la ley colombiana. Debe realizarse periódicamente según la normativa vigente.",
  },
  {
    question: "¿Qué documentos necesito para la revisión?",
    answer:
      "Generalmente necesitas la tarjeta de propiedad de la motocicleta, tu documento de identidad y el SOAT vigente. Te recomendamos confirmar los requisitos al agendar tu cita.",
  },
  {
    question: "¿Cuánto demora el proceso?",
    answer:
      "El tiempo puede variar según la demanda, pero nuestro objetivo es atenderte de forma ágil. Agenda tu cita para reducir tiempos de espera.",
  },
  {
    question: "¿Atienden motos de cualquier cilindraje?",
    answer:
      "Sí, realizamos revisión técnico-mecánica para motocicletas 2T y 4T de todas las cilindradas.",
  },
  {
    question: "¿Puedo financiar la revisión?",
    answer:
      "Sí, ofrecemos financiación del 100% a través de Sistecrédito y Fipro. Consulta las condiciones con nuestro equipo.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      "Estamos en Cra. 33 #55A-96, Barrancabermeja, Santander. Atendemos de lunes a sábado de 8:00 a.m. a 6:00 p.m. y domingos de 8:00 a.m. a 12:00 p.m.",
  },
] as const;

export const CERTIFICATIONS = [
  {
    name: "Ministerio de Transporte",
    src: "/images/certifications/mintransporte.png",
    alt: "Ministerio de Transporte de Colombia",
    height: 110,
    maxWidth: 200,
    scale: 1.45,
  },
  {
    name: "RUNT",
    src: "/images/certifications/runt.jpeg",
    alt: "Registro Único Nacional de Tránsito - RUNT",
    height: 80,
    maxWidth: 340,
  },
  {
    name: "Federación Colombiana de Municipios",
    src: "/images/certifications/fcm.jpeg",
    alt: "Federación Colombiana de Municipios",
    height: 88,
    maxWidth: 360,
  },
  {
    name: "CAS",
    src: "/images/certifications/cas.jpg",
    alt: "Corporación Autónoma Regional de Santander - CAS",
    height: 110,
    maxWidth: 110,
  },
] as const;
