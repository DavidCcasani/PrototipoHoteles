export type RoomId =
  | "suite-principal"
  | "suite-presidencial"
  | "suite-junior"
  | "estandar-terraza"
  | "estandar-panoramica";

export interface RoomCategory {
  id: RoomId;
  number: string;
  name: string;
  tagline: string;
  description: string;
  previewImage: string;
  images: string[];
  amenities: string[];
  includes: string[];
  ratePen: number;
}

export interface ExcursionItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  bullets: string[];
  includes: string;
  duration: string;
  frequency: string;
  highlights: string[];
}

export const CIRQA_HOME_DATA = {
  heroImage: "/images/hotel/portada.webp",
  heroTitle: "Tu santuario de descanso, confort y hospitalidad",
  travesia: {
    title: "Experiencia Completa",
    subtitle: "Descubre nuestras suites, gastronomía y servicios exclusivos.",
    ctaLabel: "Ver Servicios",
    popupTitle: "ESTADÍA A MEDIDA",
    popupHeading: "Planifica tu visita",
    popupDescription:
      "Coordina traslados privados, cenas especiales y alojamiento en nuestras suites con vista panorámica.",
    popupImage: "/images/hotel/01.webp",
    popupCta: "Ver Habitaciones",
    popupUrl: "/hotel/habitaciones",
  },
  parador: {
    title: "HOSPITALIDAD Y CALMA",
    description:
      "Un hotel pensado para el descanso y la privacidad. Espacios luminosos, arquitectura acogedora y atención personalizada las 24 horas.",
    ctaLabel: "Ver la Carta",
    ctaHref: "/hotel/carta",
    largeImage: "/images/hotel/01.webp",
    smallImage: "/images/hotel/02.webp",
  },
  slowerRhythm: {
    image: "/images/hotel/05.webp",
    title: "DESCANSO ABSOLUTO",
    description:
      "Suites amplias con vista panorámica, terraza privada y equipamiento contemporáneo para disfrutar de una estancia sin preocupaciones.",
  },
  roomsSection: {
    image: "/images/habitaciones/suite-principal.webp",
    title: "HABITACIONES & SUITES",
    description:
      "Cinco categorías diseñadas para tu comodidad, con desayuno incluido, Wi-Fi de alta velocidad, acceso a piscina y cochera privada.",
    categories: [
      { label: "Suite Principal", href: "/hotel/habitaciones#suite-principal" },
      { label: "Suite Presidencial", href: "/hotel/habitaciones#suite-presidencial" },
      { label: "Suite Junior", href: "/hotel/habitaciones#suite-junior" },
    ],
    ctaLabel: "Ver Habitaciones",
    ctaHref: "/hotel/habitaciones",
    largeImage: "/images/habitaciones/portada.webp",
    smallImage: "/images/habitaciones/suite-presidencial.webp",
  },
  flavoursIntro: {
    title: "NUESTRA CARTA",
    description:
      "Una selección meticulosa de sabores locales e internacionales: desayunos artesanales, entradas, almuerzos a la carta, cenas, tablas y coctelería.",
    ctaLabel: "Servicios",
    ctaHref: "/hotel/servicios",
    triptychImages: [
      "/images/carta/portada.webp",
      "/images/carta/almuerzo/cuy-chactado.webp",
      "/images/carta/entradas/rocoto-relleno.webp",
    ],
  },
  flavoursBanner: {
    image: "/images/carta/almuerzo/lomo-fino-parrilla.webp",
    title: "SABORES DE LA CASA",
    subtitle: "Cocina tradicional a fuego lento, parrillas y coctelería en un entorno sereno",
  },
  beyondWalls: {
    title: "SERVICIOS EXCLUSIVOS",
    description:
      "Cada estadía cuenta con instalaciones y atención pensadas para tu bienestar, combinando descanso, gastronomía y movilidad privada.",
    ctaLabel: "Contactos",
    ctaHref: "/hotel/contactos",
    tabs: [
      {
        id: "gastronomia",
        label: "GASTRONOMÍA & DESAYUNO",
        description:
          "Desayuno incluido cada mañana y carta variada con platos tradicionales, carnes a la parrilla, pescados, cenas y coctelería.",
        image: "/images/carta/almuerzo/chicharron-tradicional.webp",
      },
      {
        id: "bienestar",
        label: "PISCINA & RECREACIÓN",
        description:
          "Acceso a piscina templada, gimnasio equipado, terrazas con vista panorámica y zonas de descanso al aire libre.",
        image: "/images/servicios/01.webp",
      },
      {
        id: "atencion",
        label: "CONCIERGE & COCHERA",
        description:
          "Recepción disponible las 24 horas, traslados privados coordinados, Wi-Fi de alta velocidad y estacionamiento privado.",
        image: "/images/servicios/02.webp",
      },
    ],
  },
  homeGallery: [
    { src: "/images/galeria/01.webp", alt: "Galería del hotel 1" },
    { src: "/images/galeria/02.webp", alt: "Galería del hotel 2" },
    { src: "/images/galeria/03.webp", alt: "Galería del hotel 3" },
    { src: "/images/galeria/04.webp", alt: "Galería del hotel 4" },
    { src: "/images/galeria/05.webp", alt: "Galería del hotel 5" },
    { src: "/images/galeria/06.webp", alt: "Galería del hotel 6" },
  ],
  furtherSouth: {
    image: "/images/hotel/04.webp",
    title: "PLANIFICA TU ESTADÍA",
    lead: "Nuestro equipo está disponible las 24 horas para coordinar tu reserva y requerimientos especiales.",
    subtitle: "Habitaciones cómodas, gastronomía regional y atención personalizada.",
    ctaLabel: "Ir a Contactos",
    ctaHref: "/hotel/contactos",
  },
};

export const CIRQA_PROPERTY_DATA = {
  heroImage: "/images/hotel/01.webp",
  heroTitle: "El Hotel",
  findUs: {
    title: "ENCUÉNTRANOS",
    address: "C. Sucre 104, Arequipa 04001",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=C.+Sucre+104,+Arequipa+04001,+Peru&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
};

export const CIRQA_ROOMS_DATA = {
  heroImage: "/images/habitaciones/portada.webp",
  heroTitle: "Habitaciones",
  intro: {
    title: "DESCANSO ABSOLUTO",
    description:
      "Espacios diseñados meticulosamente para ofrecer el máximo confort, privacidad y vistas panorámicas del valle.",
  },
  interpretationsTitle: "Nuestras Habitaciones",
  interpretationsSubtitle: "Cinco categorías diseñadas para tu descanso",
  rooms: [
    {
      id: "suite-principal",
      number: "01",
      name: "Suite Principal",
      tagline: "SUITE DOBLE · AMPLITUD Y CONFORT SUPERIOR",
      description:
        "Habitaciones amplias con vista panorámica, 2 camas King, baño privado con duchas españolas (agua fría y caliente), 3 Smart TV de 55\", Wi-Fi, Netflix, sala de estar, walking closet, área de oficina, secadora de cabello, frigobar, hervidora y cafetera.",
      previewImage: "/images/habitaciones/suite-principal.webp",
      images: [
        "/images/habitaciones/suite-principal.webp",
        "/images/hotel/03.webp",
        "/images/galeria/02.webp",
      ],
      amenities: [
        "2 camas King",
        "Vista panorámica",
        "Baño con duchas españolas",
        "3 Smart TV 55\" & Netflix",
        "Sala de estar & walking closet",
        "Área de oficina",
        "Frigobar, hervidora & cafetera",
        "Secadora de cabello",
      ],
      includes: [
        "Wi-Fi Alta Velocidad",
        "Desayuno Incluido",
        "Acceso a Piscina",
        "Cochera Privada",
      ],
      ratePen: 400,
    },
    {
      id: "suite-presidencial",
      number: "02",
      name: "Suite Presidencial",
      tagline: "TERRAZA PRIVADA Y JACUZZI",
      description:
        "Amplias habitaciones con vista panorámica y acceso a terraza privada. Dispone de 1 cama King (con opción a cama adicional), baño privado con jacuzzi, cocina equipada, duchas españolas, 2 Smart TV de 55\", Wi-Fi, Netflix, sala de estar, walking closet, área de oficina, frigobar, hervidora y cafetera.",
      previewImage: "/images/habitaciones/suite-presidencial.webp",
      images: [
        "/images/habitaciones/suite-presidencial.webp",
        "/images/hotel/04.webp",
        "/images/galeria/03.webp",
      ],
      amenities: [
        "1 cama King (cama adicional opcional)",
        "Terraza privada con vista panorámica",
        "Baño privado con jacuzzi",
        "Cocina equipada & sala de estar",
        "2 Smart TV 55\" & Netflix",
        "Walking closet & área de oficina",
        "Frigobar, hervidora & cafetera",
        "Secadora de cabello",
      ],
      includes: [
        "Wi-Fi Alta Velocidad",
        "Desayuno Incluido",
        "Acceso a todas las instalaciones",
      ],
      ratePen: 350,
    },
    {
      id: "suite-junior",
      number: "03",
      name: "Suite Junior",
      tagline: "UNA ESTANCIA CON ENCANTO",
      description:
        "Habitaciones amplias con vista panorámica, cama Queen, baño privado con duchas españolas, walking closet, Smart TV de 55\", Wi-Fi, Netflix, hervidora, frigobar, cafetera, kit de aseo y secadora de cabello.",
      previewImage: "/images/habitaciones/suite-junior.webp",
      images: [
        "/images/habitaciones/suite-junior.webp",
        "/images/hotel/02.webp",
        "/images/galeria/04.webp",
      ],
      amenities: [
        "Cama Queen",
        "Vista panorámica",
        "Baño con duchas españolas",
        "Walking closet",
        "Smart TV 55\" & Netflix",
        "Frigobar, hervidora & cafetera",
        "Kit de aseo & secadora",
      ],
      includes: [
        "Wi-Fi Alta Velocidad",
        "Desayuno Incluido",
        "Cochera Privada",
        "Zonas Recreativas",
      ],
      ratePen: 220,
    },
    {
      id: "estandar-terraza",
      number: "04",
      name: "Estándar con Terraza",
      tagline: "ESTÁNDAR SIMPLE · TERRAZA PRIVADA EXCLUSIVA",
      description:
        "Habitaciones amplias con vista panorámica y terraza privada exclusiva. Equipadas con cama Queen, baño privado con duchas españolas, walking closet, Smart TV de 55\", Wi-Fi, Netflix, hervidora y kit de aseo.",
      previewImage: "/images/habitaciones/estandar-terraza.webp",
      images: [
        "/images/habitaciones/estandar-terraza.webp",
        "/images/galeria/05.webp",
      ],
      amenities: [
        "Cama Queen",
        "Terraza privada exclusiva",
        "Vista panorámica",
        "Baño con duchas españolas",
        "Walking closet",
        "Smart TV 55\" & Netflix",
        "Hervidora & kit de aseo",
      ],
      includes: [
        "Wi-Fi Alta Velocidad",
        "Desayuno Incluido",
        "Acceso a Piscina",
        "Gimnasio y Área de Vóley",
      ],
      ratePen: 160,
    },
    {
      id: "estandar-panoramica",
      number: "05",
      name: "Estándar Vista Panorámica",
      tagline: "ESTÁNDAR SIMPLE · DESCANSO Y VISTA AL VALLE",
      description:
        "Habitación luminosa con vista panorámica, cama Queen, baño privado con duchas españolas, Smart TV de 55\", Wi-Fi, Netflix, hervidora y kit de aseo. Incluye acceso a terraza común y áreas recreativas.",
      previewImage: "/images/habitaciones/estandar-panoramica.webp",
      images: [
        "/images/habitaciones/estandar-panoramica.webp",
        "/images/galeria/06.webp",
      ],
      amenities: [
        "Cama Queen",
        "Vista panorámica",
        "Baño con duchas españolas",
        "Smart TV 55\" & Netflix",
        "Hervidora & kit de aseo",
        "Acceso a terraza común",
      ],
      includes: [
        "Wi-Fi Alta Velocidad",
        "Desayuno Incluido",
        "Acceso a Piscina",
        "Cochera Privada",
      ],
      ratePen: 140,
    },
  ] as RoomCategory[],
};

export const CIRQA_KITCHEN_DATA = {
  heroImage: "/images/carta/portada.webp",
  heroTitle: "La Carta",
};

export const CIRQA_EXPLORE_DATA = {
  heroImage: "/images/hotel/05.webp",
  heroTitle: "Contactos",
};
