import React from "react";
import { Sparkles, Utensils, Car, ConciergeBell, Compass } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";

const SERVICES = [
  {
    id: "concierge",
    icon: ConciergeBell,
    subtitle: "Atención 24 horas",
    title: "Concierge & Recepción Privada",
    description:
      "Asistencia personalizada desde antes de tu llegada. Coordinamos reservas en restaurantes, entradas culturales, check-in privado y requerimientos especiales durante toda tu estadía.",
    highlights: [
      "Atención continua las 24 horas",
      "Check-in y check-out personalizado",
      "Planificación de itinerarios a medida",
    ],
    image: "/images/servicios/01.webp",
  },
  {
    id: "dining",
    icon: Utensils,
    subtitle: "Salón & Terraza",
    title: "Gastronomía & Desayuno Gourmet",
    description:
      "Cocina regional e internacional preparada al momento, desayuno diario incluido, almuerzos a la carta, cenas y coctelería en nuestro salón o en habitación.",
    highlights: [
      "Desayuno diario incluido",
      "Carta regional e internacional",
      "Room service bajo solicitud",
    ],
    image: "/images/carta/portada.webp",
  },
  {
    id: "transfers",
    icon: Car,
    subtitle: "Movilidad y cochera",
    title: "Estacionamiento Privado & Traslados",
    description:
      "Cochera privada y segura para huéspedes sin costo adicional, además de traslados privados coordinados con chofer para recorridos dentro de la ciudad o aeropuerto.",
    highlights: [
      "Cochera privada incluida",
      "Traslados privados al aeropuerto",
      "Coordinación de equipaje y horarios",
    ],
    image: "/images/servicios/02.webp",
  },
  {
    id: "wellness",
    icon: Sparkles,
    subtitle: "Descanso & Bienestar",
    title: "Piscina Templada & Gimnasio",
    description:
      "Espacios pensados para el bienestar: piscina templada al aire libre, gimnasio equipado, área recreativa de vóley, lavandería express y amenidades orgánicas en habitación.",
    highlights: [
      "Acceso a piscina templada",
      "Gimnasio equipado y área de vóley",
      "Lavandería y amenidades en habitación",
    ],
    image: "/images/servicios/03.webp",
  },
  {
    id: "experiences",
    icon: Compass,
    subtitle: "Experiencias",
    title: "Recorridos Privados & Cultura Local",
    description:
      "Visitas guiadas, rutas paisajísticas y experiencias diseñadas según el ritmo de cada huésped para descubrir lo mejor del destino.",
    highlights: [
      "Guías especialistas privados",
      "Rutas culturales y gastronómicas",
      "Experiencias personalizadas por temporada",
    ],
    image: "/images/experiencia/01.webp",
  },
];

export default function CirqaServiciosPage() {
  return (
    <div>
      {/* 1. Hero */}
      <HeroSection
        image="/images/servicios/portada.webp"
        alt="Servicios del hotel"
        title="Servicios"
      />

      {/* 2. Intro */}
      <section className="font-rooms-sans bg-white px-5 pt-16 pb-10 text-center md:px-14 md:pt-24">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="text-[11px] uppercase tracking-[0.26em] text-[#6e6a65]">
            HOSPITALIDAD A TU RITMO
          </p>
          <h2 className="font-rooms-stencil text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
            Servicios Exclusivos
          </h2>
          <p className="text-[15px] font-light leading-relaxed text-[#5c5955]">
            Cada detalle de tu visita es atendido con discreción y calidez, combinando
            comodidad contemporánea, gastronomía local y atención personalizada las 24 horas.
          </p>
        </div>
      </section>

      {/* 3. Services List */}
      <div className="font-rooms-sans divide-y divide-[#333333]/10 bg-white">
        {SERVICES.map((service, idx) => {
          const Icon = service.icon;
          const imageFirst = idx % 2 === 1;

          return (
            <section
              key={service.id}
              className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-5 py-14 md:grid-cols-12 md:gap-14 md:px-14 md:py-20"
            >
              <div className={`space-y-4 md:col-span-6 ${imageFirst ? "md:order-2" : ""}`}>
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#6e6a65]">
                  <Icon className="h-4 w-4 text-[#75706a]" />
                  <span>{service.subtitle}</span>
                </div>

                <h3 className="font-rooms-stencil text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
                  {service.title}
                </h3>

                <p className="text-[15px] font-light leading-relaxed text-[#5c5955]">
                  {service.description}
                </p>

                <ul className="space-y-2 border-l border-[#8c8781]/50 pl-4 text-sm font-light text-[#5c5955]">
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={`overflow-hidden md:col-span-6 ${imageFirst ? "md:order-1" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

