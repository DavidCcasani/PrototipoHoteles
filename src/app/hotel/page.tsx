"use client";

import React, { useState } from "react";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { useModals } from "@/components/ModalContext";
import { CIRQA_HOME_DATA, CIRQA_ROOMS_DATA } from "@/data/cirqa-data";

const SERVICE_HIGHLIGHTS = [
  {
    id: "gastronomia",
    label: "GASTRONOMÍA & DESAYUNO",
    description:
      "Desayuno incluido cada mañana y carta variada con platos tradicionales, carnes a la parrilla, pescados, cenas y coctelería.",
    image: CIRQA_HOME_DATA.beyondWalls.tabs[0].image,
  },
  {
    id: "bienestar",
    label: "PISCINA & RECREACIÓN",
    description:
      "Acceso a piscina templada, gimnasio equipado, terrazas con vista panorámica y zonas de descanso al aire libre.",
    image: CIRQA_HOME_DATA.beyondWalls.tabs[1].image,
  },
  {
    id: "atencion",
    label: "CONCIERGE & COCHERA",
    description:
      "Recepción disponible las 24 horas, traslados privados coordinados, Wi-Fi de alta velocidad y estacionamiento privado.",
    image: CIRQA_HOME_DATA.beyondWalls.tabs[2].image,
  },
];

export default function CirqaHomePage() {
  const { openBooking, openPlanYourStay } = useModals();
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const galleryRef = React.useRef<HTMLDivElement>(null);

  const activeTab = SERVICE_HIGHLIGHTS[activeTabIdx];

  const scrollGallery = (dir: -1 | 1) => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <div className="font-rooms-sans">
      {/* 1. Hero */}
      <HeroSection
        image={CIRQA_HOME_DATA.heroImage}
        alt="Portada principal del hotel"
        title={CIRQA_HOME_DATA.heroTitle}
      />

      {/* 2. La Experiencia */}
      <section className="paper-texture-rice flex flex-col justify-center bg-white px-5 py-16 md:px-14 md:py-28 xl:px-24 2xl:px-40">
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#6e6a65]">
              LA EXPERIENCIA
            </p>
            <h2 className="font-rooms-stencil text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl lg:text-[2.75rem]">
              Hospitalidad y Calma
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[#6e6a65]">
              CONFORT EN CADA DETALLE
            </p>
            <p className="pt-1 text-[15px] font-light leading-relaxed text-[#5c5955]">
              Un hotel pensado para el descanso y la privacidad. Espacios luminosos,
              arquitectura acogedora, gastronomía regional e internacional y atención
              personalizada las 24 horas para hacer de tu visita una experiencia memorable.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="/hotel/servicios"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#6e6a65] transition hover:text-[#111111]"
              >
                <span>VER SERVICIOS</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => openBooking()}
                className="border border-[#8c8781] bg-transparent px-8 py-3 text-xs uppercase tracking-[0.22em] text-[#6e6a65] transition hover:border-[#111111] hover:bg-[#111111] hover:text-white cursor-pointer"
              >
                RESERVAR
              </button>
            </div>
          </div>

          <div className="relative grid grid-cols-12 items-end gap-4 lg:col-span-7">
            <div className="col-span-8 overflow-hidden">
              <img
                src={CIRQA_HOME_DATA.parador.largeImage}
                alt="Espacios interiores del hotel"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="col-span-4 -ml-8 mb-6 overflow-hidden shadow-xl">
              <img
                src={CIRQA_HOME_DATA.parador.smallImage}
                alt="Detalle arquitectónico del hotel"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Descanso Absoluto Banner */}
      <section className="relative z-0 flex h-[60vh] items-center justify-center overflow-hidden md:h-[80vh]">
        <img
          src={CIRQA_HOME_DATA.slowerRhythm.image}
          alt="Descanso absoluto en nuestras suites"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center text-white">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/80">
            EL SANTUARIO
          </p>
          <h2 className="font-rooms-stencil mt-2 text-3xl uppercase tracking-[0.08em] md:text-5xl">
            Descanso Absoluto
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-white/90 md:text-lg">
            Suites amplias con vista panorámica, terraza privada y equipamiento contemporáneo
            para disfrutar de una estancia sin preocupaciones.
          </p>
        </div>
      </section>

      {/* 4. Nuestras Habitaciones */}
      <section className="bg-[#f9f8f4] px-6 py-16 md:px-14 md:py-28 xl:px-24">
        <div className="mx-auto max-w-[1320px] space-y-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="overflow-hidden lg:col-span-7">
              <img
                src={CIRQA_HOME_DATA.roomsSection.image}
                alt="Suite Principal del hotel"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            <div className="space-y-4 lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[#6e6a65]">
                LAS HABITACIONES
              </p>
              <h2 className="font-rooms-stencil text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
                Habitaciones &amp; Suites
              </h2>
              <p className="text-[15px] font-light leading-relaxed text-[#5c5955]">
                Cinco categorías diseñadas para tu comodidad, con desayuno incluido, Wi-Fi de alta
                velocidad, acceso a piscina y cochera privada:
              </p>

              <ul className="divide-y divide-[#333333]/10 border-y border-[#333333]/15 py-1 text-sm">
                {CIRQA_ROOMS_DATA.rooms.map((room) => (
                  <li key={room.id}>
                    <Link
                      href={`/hotel/habitaciones#${room.id}`}
                      className="flex items-center justify-between py-2.5 text-[#333333] transition hover:text-[#111111]"
                    >
                      <span className="font-medium tracking-wide">{room.name}</span>
                      <span className="text-xs tracking-wider text-[#6e6a65]">
                        S/ {room.ratePen.toFixed(2)} / noche
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-6 pt-3">
                <Link
                  href="/hotel/habitaciones"
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#6e6a65] transition hover:text-[#111111]"
                >
                  <span>VER HABITACIONES</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="border border-[#8c8781] bg-transparent px-8 py-3 text-xs uppercase tracking-[0.22em] text-[#6e6a65] transition hover:border-[#111111] hover:bg-[#111111] hover:text-white cursor-pointer"
                >
                  RESERVAR
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
            <div className="overflow-hidden md:col-span-7">
              <img
                src={CIRQA_HOME_DATA.roomsSection.largeImage}
                alt="Interior de habitación del hotel"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden md:col-span-5">
              <img
                src={CIRQA_HOME_DATA.roomsSection.smallImage}
                alt="Detalle de suite del hotel"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Nuestra Carta */}
      <section className="bg-white px-5 py-16 md:px-14 md:py-28 xl:px-24">
        <div className="mx-auto max-w-[1320px] space-y-12">
          <div className="mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#6e6a65]">
              SALÓN &amp; TERRAZA
            </p>
            <h2 className="font-rooms-stencil text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
              Nuestra Carta
            </h2>
            <div className="flex w-28 items-center justify-center">
              <span className="h-px flex-1 bg-[#8c8781]/50" />
              <span className="mx-1.5 h-1.5 w-1.5 rotate-45 border border-[#8c8781] bg-white" />
              <span className="h-px flex-1 bg-[#8c8781]/50" />
            </div>
            <p className="text-[15px] font-light leading-relaxed text-[#5c5955]">
              Una propuesta culinaria que reúne desayunos artesanales, entradas, platos
              tradicionales a la carta, parrillas, truchas, cenas, tablas y coctelería.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-3">
              <Link
                href="/hotel/carta"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#6e6a65] transition hover:text-[#111111]"
              >
                <span>VER LA CARTA</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <button
                type="button"
                onClick={openPlanYourStay}
                className="border border-[#8c8781] bg-transparent px-8 py-3 text-xs uppercase tracking-[0.22em] text-[#6e6a65] transition hover:border-[#111111] hover:bg-[#111111] hover:text-white cursor-pointer"
              >
                RESERVAR MESA
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
            <div className="overflow-hidden md:col-span-6">
              <img
                src={CIRQA_HOME_DATA.flavoursIntro.triptychImages[0]}
                alt="Gastronomía del hotel 1"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden md:col-span-3">
              <img
                src={CIRQA_HOME_DATA.flavoursIntro.triptychImages[1]}
                alt="Gastronomía del hotel 2"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="overflow-hidden md:col-span-3">
              <img
                src={CIRQA_HOME_DATA.flavoursIntro.triptychImages[2]}
                alt="Gastronomía del hotel 3"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Sabores de la Casa Banner */}
      <section className="relative z-0 flex h-[60vh] items-center justify-center overflow-hidden md:h-[80vh]">
        <img
          src={CIRQA_HOME_DATA.flavoursBanner.image}
          alt="Sabores de la casa"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center text-white">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/80">
            MESA Y TRADICIÓN
          </p>
          <h2 className="font-rooms-stencil mt-2 text-3xl uppercase tracking-[0.08em] md:text-5xl">
            Sabores de la Casa
          </h2>
          <p className="mt-4 text-base font-light text-white/90 md:text-lg">
            Cocina regional a fuego lento, cortes a la parrilla y coctelería en un entorno sereno.
          </p>
        </div>
      </section>

      {/* 7. Servicios Exclusivos (Interactive Tabs) */}
      <section className="paper-texture-gray bg-[#f8f7f4] px-5 py-16 md:px-14 md:py-28 xl:px-24">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#6e6a65]">
              HOSPITALIDAD A TU MEDIDA
            </p>
            <h2 className="font-rooms-stencil text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
              Servicios Exclusivos
            </h2>
            <p className="text-[15px] font-light leading-relaxed text-[#5c5955]">
              Cada estadía cuenta con instalaciones y atención pensadas para tu bienestar,
              combinando descanso, gastronomía y movilidad privada.
            </p>

            <div className="space-y-3 pt-2">
              {SERVICE_HIGHLIGHTS.map((tab, i) => {
                const active = i === activeTabIdx;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabIdx(i)}
                    className={`w-full border-l-2 py-3.5 pl-5 text-left transition-all cursor-pointer ${
                      active
                        ? "border-[#75706a] bg-white"
                        : "border-[#333333]/20 opacity-65 hover:opacity-100"
                    }`}
                  >
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#2b2a28]">
                      {tab.label}
                    </div>
                    <p className="mt-1 text-sm font-light leading-relaxed text-[#5c5955]">
                      {tab.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="pt-3">
              <Link
                href="/hotel/servicios"
                className="inline-flex items-center gap-3 border border-[#8c8781] bg-transparent px-8 py-3 text-xs uppercase tracking-[0.22em] text-[#6e6a65] transition hover:border-[#111111] hover:bg-[#111111] hover:text-white"
              >
                <span>EXPLORAR SERVICIOS</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden lg:col-span-6">
            <img
              key={activeTab.id}
              src={activeTab.image}
              alt={activeTab.label}
              className="aspect-[4/5] w-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>
      </section>

      {/* 8. Gallery Carousel */}
      <section className="overflow-x-clip bg-white px-5 py-16 md:px-14 md:py-24 xl:px-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-[#6e6a65]">
                ESPACIOS Y DETALLES
              </p>
              <h2 className="font-rooms-stencil mt-1 text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
                Galería
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollGallery(-1)}
                aria-label="Desplazar galería a la izquierda"
                className="border border-[#8c8781] p-2.5 text-[#5c5955] transition hover:border-[#111111] hover:bg-[#111111] hover:text-white cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollGallery(1)}
                aria-label="Desplazar galería a la derecha"
                className="border border-[#8c8781] p-2.5 text-[#5c5955] transition hover:border-[#111111] hover:bg-[#111111] hover:text-white cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            ref={galleryRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-none"
          >
            {CIRQA_HOME_DATA.homeGallery.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightboxIdx(idx)}
                className="group relative w-72 shrink-0 overflow-hidden sm:w-80 md:w-96 cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Planifica tu Estadía / Contactos */}
      <section className="relative isolate z-0 flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-[#111111] px-5 py-20 text-center text-white md:min-h-[70vh]">
        <img
          src={CIRQA_HOME_DATA.furtherSouth.image}
          alt="Reserva tu estadía"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto max-w-3xl space-y-5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/80">
            ATENCIÓN 24 HORAS
          </p>
          <h2 className="font-rooms-stencil text-3xl uppercase tracking-[0.08em] md:text-5xl">
            Planifica tu Estadía
          </h2>
          <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-white/90 md:text-lg">
            Nuestro equipo está disponible para coordinar tu reserva, traslados privados,
            experiencias en mesa y requerimientos especiales.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => openBooking()}
              className="border border-white bg-white px-8 py-3 text-xs uppercase tracking-[0.22em] text-[#111111] transition hover:bg-transparent hover:text-white cursor-pointer"
            >
              RESERVAR AHORA
            </button>
            <Link
              href="/hotel/contactos"
              className="border border-white/80 bg-transparent px-8 py-3 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-[#111111]"
            >
              IR A CONTACTOS
            </Link>
          </div>
        </div>
      </section>

      <Lightbox
        open={lightboxIdx !== null}
        index={lightboxIdx ?? 0}
        close={() => setLightboxIdx(null)}
        slides={CIRQA_HOME_DATA.homeGallery.map((g) => ({ src: g.src, alt: g.alt }))}
      />
    </div>
  );
}
