"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Utensils,
  Waves,
  Dumbbell,
  Car,
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { useModals } from "@/components/ModalContext";
import { CIRQA_ROOMS_DATA, RoomCategory } from "@/data/cirqa-data";

const EXCLUSIVE_SERVICES = [
  {
    icon: Utensils,
    title: "Desayuno Gourmet",
    description: "Desayuno diario incluido preparado al momento con productos regionales.",
  },
  {
    icon: Waves,
    title: "Piscina Templada",
    description: "Acceso a nuestra piscina y zonas de descanso al aire libre.",
  },
  {
    icon: Dumbbell,
    title: "Gimnasio Equipado",
    description: "Espacio fitness disponible y área recreativa de vóley.",
  },
  {
    icon: Car,
    title: "Estacionamiento Privado",
    description: "Cochera privada y segura sin costo adicional para huéspedes.",
  },
];

export default function CirqaHabitacionesPage() {
  const { openBooking } = useModals();
  const rooms = CIRQA_ROOMS_DATA.rooms;
  const [detailRoom, setDetailRoom] = useState<RoomCategory | null>(null);
  const [detailSlide, setDetailSlide] = useState(0);
  const [lightboxRoom, setLightboxRoom] = useState<RoomCategory | null>(null);

  const openRoomDetails = (room: RoomCategory) => {
    setDetailSlide(0);
    setDetailRoom(room);
  };

  return (
    <div>
      {/* 1. Hero */}
      <HeroSection
        image={CIRQA_ROOMS_DATA.heroImage}
        alt="Habitaciones del hotel"
        title="Habitaciones"
      />

      {/* 2. Intro */}
      <section className="font-rooms-sans bg-white px-5 pt-16 pb-6 text-center md:px-10 md:pt-20 lg:px-14">
        <div className="mx-auto max-w-3xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.26em] text-[#6e6a65]">
            {CIRQA_ROOMS_DATA.intro.title}
          </p>
          <h2 className="font-rooms-stencil text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
            {CIRQA_ROOMS_DATA.interpretationsTitle}
          </h2>
          <p className="text-[15px] font-light leading-relaxed text-[#5c5955]">
            {CIRQA_ROOMS_DATA.intro.description}
          </p>
        </div>
      </section>

      {/* 3. Stacked Editorial Rooms List */}
      <div className="font-rooms-sans divide-y divide-[#333333]/10 bg-white">
        {rooms.map((room, idx) => (
          <section
            key={room.id}
            id={room.id}
            className="scroll-mt-24 px-5 py-14 md:px-10 md:py-20 lg:px-14"
          >
            <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Left: Image with diagonal index indicator */}
              <div className="relative pl-8 sm:pl-11 lg:col-span-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-1/2 z-10 flex -translate-y-1/2 items-start font-rooms-sans leading-none text-[#5c5955] select-none"
                >
                  <span className="-translate-y-0.5 text-sm font-normal">
                    {idx + 1}
                  </span>
                  <span className="mx-0.5 text-xl font-light text-[#9c968f]">
                    /
                  </span>
                  <span className="translate-y-2.5 text-xs font-light text-[#9c968f]">
                    {rooms.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxRoom(room)}
                  aria-label={`Ampliar fotos de ${room.name}`}
                  className="group block w-full overflow-hidden bg-[#f5f3f0] cursor-zoom-in"
                >
                  <img
                    src={room.previewImage}
                    alt={room.name}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </button>
              </div>

              {/* Right: Editorial Details, Rate, Included Perks & Actions */}
              <div className="space-y-4 lg:col-span-5 lg:pl-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-[11px] font-normal uppercase tracking-[0.26em] text-[#6e6a65]">
                    LAS HABITACIONES
                  </p>
                  <p className="text-sm tracking-[0.08em] text-[#333333]">
                    <span className="font-medium text-[#111111]">
                      S/ {room.ratePen.toFixed(2)}
                    </span>{" "}
                    <span className="text-xs font-light text-[#6e6a65]">
                      / Noche
                    </span>
                  </p>
                </div>

                <h2 className="font-rooms-stencil pt-1 text-3xl font-bold uppercase leading-none tracking-[0.06em] text-[#75706a] md:text-4xl lg:text-[2.85rem]">
                  {room.name}
                </h2>

                <p className="text-xs font-normal uppercase tracking-[0.2em] text-[#6e6a65] md:text-[13px]">
                  {room.tagline}
                </p>

                <p className="pt-1 text-[15px] font-light leading-relaxed text-[#5c5955]">
                  {room.description}
                </p>

                {/* Included Perks */}
                <ul className="grid grid-cols-1 gap-x-4 gap-y-2 border-t border-[#333333]/10 pt-4 text-xs tracking-wide text-[#5c5955] sm:grid-cols-2">
                  {room.includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 shrink-0 text-[#75706a]" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-7 pt-4">
                  <button
                    type="button"
                    onClick={() => openRoomDetails(room)}
                    className="inline-flex items-center gap-3 text-xs font-normal uppercase tracking-[0.22em] text-[#6e6a65] transition hover:text-[#111111] cursor-pointer"
                  >
                    <span>VER HABITACIÓN</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openBooking(room.id)}
                    className="border border-[#8c8781] bg-transparent px-9 py-3 text-xs font-normal uppercase tracking-[0.24em] text-[#6e6a65] transition hover:border-[#111111] hover:bg-[#111111] hover:text-white cursor-pointer"
                  >
                    RESERVAR
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 4. Servicios Exclusivos */}
      <section className="font-rooms-sans border-t border-[#333333]/10 bg-[#f9f8f4] px-5 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#6e6a65]">
              INCLUIDOS EN TU ESTADÍA
            </p>
            <h2 className="font-rooms-stencil mt-2 text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
              Servicios Exclusivos
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXCLUSIVE_SERVICES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="border border-[#333333]/15 bg-white p-7 text-center"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#8c8781]/50 text-[#6e6a65]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#2b2a28]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-[#5c5955]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Room Detail Modal ("VER HABITACIÓN →") */}
      {detailRoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#222222]/85 p-4 backdrop-blur-xs"
          onClick={() => setDetailRoom(null)}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-y-auto bg-[#f9f8f4] text-[#333333] shadow-2xl md:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setDetailRoom(null)}
              aria-label="Cerrar detalles de habitación"
              className="absolute right-4 top-4 z-10 bg-white/90 p-1.5 text-[#111111] hover:bg-white cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative bg-[#111111] md:col-span-6">
              <img
                src={detailRoom.images[detailSlide]}
                alt={`${detailRoom.name} foto ${detailSlide + 1}`}
                className="h-72 w-full object-cover md:h-full"
              />
              {detailRoom.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setDetailSlide(
                        (s) =>
                          (s - 1 + detailRoom.images.length) %
                          detailRoom.images.length
                      )
                    }
                    aria-label="Foto anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white hover:bg-black/80 cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setDetailSlide((s) => (s + 1) % detailRoom.images.length)
                    }
                    aria-label="Foto siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white hover:bg-black/80 cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {detailRoom.images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setDetailSlide(i)}
                        aria-label={`Foto ${i + 1}`}
                        className={`h-1.5 transition-all cursor-pointer ${
                          i === detailSlide ? "w-5 bg-white" : "w-2 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="font-rooms-sans space-y-5 p-7 md:col-span-6 md:p-9">
              <span className="text-xs uppercase tracking-[0.22em] text-[#333333]/65">
                Categoría {detailRoom.number}
              </span>
              <h3 className="font-rooms-stencil text-3xl font-bold uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
                {detailRoom.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.18em] text-[#6e6a65]">
                {detailRoom.tagline}
              </p>
              <p className="text-sm font-light leading-relaxed text-[#333333]/85">
                {detailRoom.description}
              </p>

              <div className="border-t border-[#333333]/15 pt-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#333333]/65">
                  Equipamiento y Comodidades
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-2 text-sm font-light text-[#333333]/85 sm:grid-cols-2">
                  {detailRoom.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[#333333]" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#333333]/15 pt-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#333333]/65">
                  Incluye
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-[#333333]/85">
                  {detailRoom.includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-[#75706a]" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between border-t border-[#333333]/15 pt-4">
                <div>
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-[#333333]/60">
                    Tarifa por noche
                  </span>
                  <span className="text-2xl font-medium text-[#111111]">
                    S/ {detailRoom.ratePen.toFixed(2)}{" "}
                    <span className="text-xs font-light text-[#333333]/70">
                      / noche
                    </span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const id = detailRoom.id;
                    setDetailRoom(null);
                    openBooking(id);
                  }}
                  className="border border-[#8c8781] bg-[#111111] px-7 py-2.5 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#333333] cursor-pointer"
                >
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for clicking any room image */}
      <Lightbox
        open={Boolean(lightboxRoom)}
        index={0}
        close={() => setLightboxRoom(null)}
        slides={(lightboxRoom?.images ?? []).map((src, i) => ({
          src,
          alt: `${lightboxRoom?.name ?? "Habitación"} ${i + 1}`,
        }))}
      />
    </div>
  );
}
