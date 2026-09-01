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
  agentName: "CDA Motos Av El Ferrocarril",
  status: "En línea · responde en minutos",
  greeting:
    "¡Hola! 👋 Somos el equipo del CDA. ¿Te ayudamos a agendar tu revisión técnico-mecánica?",
  cta: "Responder ahora",
} as const;

export const SITE = {
  name: "CDA Motos Av El Ferrocarril",
  shortName: "CDA Motos Av El Ferrocarril",
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
  /** Coordenadas aproximadas sede — pin en mapa y ruta */
  mapLat: 7.0653,
  mapLng: -73.8547,
  /** Query del mapa con el nombre del negocio en el pin */
  mapQuery:
    "CDA Motos Av El Ferrocarril, Cra. 33 #55A-96, Barrancabermeja, Santander",
  /**
   * Abre Google Maps en modo ruta (desde tu ubicación → el CDA).
   * En móvil suele pedir iniciar navegación de una vez.
   */
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=CDA+Motos+Av+El+Ferrocarril,+Cra.+33+%2355A-96,+Barrancabermeja,+Santander&travelmode=driving",
  social: {
    facebook:
      "https://www.facebook.com/p/CDA-MOTOS-AV-Ferrocarril-61553245675521/",
    instagram: "https://www.instagram.com/cdaavferrocarril/",
  },
} as const;

export const STATS = {
  revisions: 30000,
  revisionsLabel: "30.240+",
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
    image: "/images/financing/sistecredito-fipro.jpg",
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
    description: "Proceso ágil para que no pierdas tiempo. Atiéndete rápido, sin filas innecesarias.",
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
    title: "Lleva tu moto",
    description: "Visítanos en nuestra sede con los documentos de tu motocicleta y tu identificación.",
  },
  {
    step: "02",
    title: "Realizamos la revisión",
    description: "Nuestro equipo especializado inspecciona tu vehículo siguiendo los protocolos oficiales.",
  },
  {
    step: "03",
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
    description: "Atendemos motocicletas de cualquier cilindraje, desde 100cc hasta motos de alto cilindraje.",
    examples: "125cc, 150cc, 200cc, 250cc y más",
    image: "/images/vehicles/todas-cilindradas.png",
    alt: "Equipo técnico del CDA atendiendo todo tipo de motocicletas",
  },
] as const;

export const PRICING = [
  {
    id: "motos-2t",
    name: "Motos 2T",
    price: "$189.000",
    priceNote: "Precio de referencia · confirmar por WhatsApp",
    description: "Revisión técnico-mecánica para motocicletas de dos tiempos",
    features: [
      "Inspección completa 2T",
      "Luces, frenos y emisiones",
      "Registro en RUNT",
      "Resultado el mismo día",
    ],
    highlighted: false,
  },
  {
    id: "motos-4t",
    name: "Motos 4T",
    price: "$195.000",
    priceNote: "Precio de referencia · confirmar por WhatsApp",
    description: "Revisión técnico-mecánica para motocicletas de cuatro tiempos",
    features: [
      "Inspección integral 4T",
      "Sistemas mecánicos y seguridad",
      "Registro en RUNT",
      "Resultado el mismo día",
    ],
    highlighted: true,
  },
  {
    id: "scooters",
    name: "Scooters y todas las cilindradas",
    price: "$199.000",
    priceNote: "Precio de referencia · confirmar por WhatsApp",
    description: "Desde 100cc hasta alto cilindraje. Exclusivo motos",
    features: [
      "Cualquier cilindraje",
      "Scooters, naked y enduro",
      "Registro en RUNT",
      "Opción de financiación 100%",
    ],
    highlighted: false,
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
      "La revisión técnico-mecánica y de emisiones contaminantes es un proceso obligatorio de inspección a los vehículos automotores para verificar que cumplan con las condiciones óptimas de seguridad y medio ambiente establecidas en las normas técnicas del país.",
  },
  {
    question: "¿Qué documentos necesito para la revisión?",
    answer:
      "Necesitas la tarjeta de propiedad de la motocicleta y tu documento de identidad.",
  },
  {
    question: "¿Qué debo revisar antes de ir?",
    answer:
      "Verifica luces, llantas y frenos para evitar contratiempos.",
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
