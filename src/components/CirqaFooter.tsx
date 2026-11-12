"use client";

import React from "react";
import Link from "next/link";
import { HotelLogo } from "./BrandSvgs";
import { useModals } from "./ModalContext";
import { CIRQA_PROPERTY_DATA } from "@/data/cirqa-data";

export function CirqaFooter() {
  const { openBooking, openPlanYourStay, openTravelAgents } = useModals();

  return (
    <footer className="font-rooms-sans bg-[#222222] pt-14 pb-10 text-[#f3eee1] sm:pt-16">
      <div className="mx-auto w-full max-w-[1800px] px-5 md:px-10 lg:px-14">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="/hotel"
              aria-label="Hotel Inicio"
              className="inline-block w-fit text-white transition-opacity hover:opacity-80"
            >
              <HotelLogo className="h-12 w-auto" />
            </Link>
            <p className="text-xs font-light leading-relaxed text-[#f3eee1]/70">
              Un refugio de descanso, arquitectura y alta gastronomía diseñado para una estadía
              serena y personalizada.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-white">
              Explorar
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-light text-[#f3eee1]/80">
              <li>
                <Link href="/hotel" className="transition-colors hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/hotel/habitaciones" className="transition-colors hover:text-white">
                  Habitaciones
                </Link>
              </li>
              <li>
                <Link href="/hotel/carta" className="transition-colors hover:text-white">
                  Nuestra Carta
                </Link>
              </li>
              <li>
                <Link href="/hotel/servicios" className="transition-colors hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/hotel/contactos" className="transition-colors hover:text-white">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-white">
              Contacto y Reservas
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-light text-[#f3eee1]/80">
              <li>{CIRQA_PROPERTY_DATA.findUs.address}</li>
              <li>
                <a href="tel:+5117005100" className="transition-colors hover:text-white">
                  +51 (01) 700 5100 (PER)
                </a>
              </li>
              <li>
                <a href="tel:+17863960310" className="transition-colors hover:text-white">
                  +1 (786) 396-0310 (USA)
                </a>
              </li>
              <li>
                <a
                  href="mailto:concierge@andean.travel"
                  className="transition-colors hover:text-white"
                >
                  concierge@andean.travel
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="underline underline-offset-4 transition-colors hover:text-white cursor-pointer"
                >
                  Reservar Habitación
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-white">
              Atención al Huésped
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-light text-[#f3eee1]/80">
              <li>Recepción &amp; Concierge 24 horas</li>
              <li>Desayuno incluido cada mañana</li>
              <li>Piscina templada &amp; cochera privada</li>
              <li>
                <button
                  type="button"
                  onClick={openPlanYourStay}
                  className="underline underline-offset-4 transition-colors hover:text-white cursor-pointer"
                >
                  Planificar Estadía
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openTravelAgents}
                  className="underline underline-offset-4 transition-colors hover:text-white cursor-pointer"
                >
                  Agencias de Viaje
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#f3eee1]/15 pt-8 text-xs font-light text-[#f3eee1]/60 sm:flex-row">
          <p>© 2026 Hotel. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/hotel/habitaciones" className="transition-colors hover:text-white">
              Habitaciones
            </Link>
            <Link href="/hotel/carta" className="transition-colors hover:text-white">
              Carta
            </Link>
            <Link href="/hotel/servicios" className="transition-colors hover:text-white">
              Servicios
            </Link>
            <Link href="/hotel/contactos" className="transition-colors hover:text-white">
              Contactos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
