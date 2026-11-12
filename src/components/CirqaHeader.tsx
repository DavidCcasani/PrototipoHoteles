"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { HotelLogo } from "./BrandSvgs";

const LEFT_LINKS = [
  { label: "Habitaciones", href: "/hotel/habitaciones" },
  { label: "Carta", href: "/hotel/carta" },
];

const RIGHT_LINKS = [
  { label: "Servicios", href: "/hotel/servicios" },
  { label: "Contactos", href: "/hotel/contactos" },
];

export function CirqaHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-black border-b border-white/10 transition-all duration-300 ${
          scrolled ? "py-3 shadow-md" : "py-4 md:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10">
          {/* Left: Mobile Menu Spacer */}
          <div className="flex items-center gap-3 md:w-48">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="p-1.5 text-white md:hidden cursor-pointer"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Center Navigation */}
          <nav
            aria-label="Hotel navigation"
            className="flex items-center gap-6 lg:gap-12"
          >
            <div className="hidden items-center gap-8 md:flex">
              {LEFT_LINKS.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-rooms-sans text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-100 ${
                      active ? "border-b border-white pb-0.5 opacity-100" : "opacity-90"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/hotel"
              aria-label="Hotel Inicio"
              className="inline-flex items-center justify-center px-2 text-white transition-transform hover:scale-[1.02]"
            >
              <HotelLogo className="h-10 w-auto md:h-12" />
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {RIGHT_LINKS.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-rooms-sans text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-100 ${
                      active ? "border-b border-white pb-0.5 opacity-100" : "opacity-90"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right: Symmetry Spacer */}
          <div className="w-8 md:w-48" aria-hidden="true" />
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="flex h-full w-72 flex-col justify-between bg-black p-6 text-[#f3eee1]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <HotelLogo className="h-10 w-auto text-white" />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-1 text-white/80 hover:text-white cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <Link href="/hotel" className="font-rooms-sans text-sm uppercase tracking-[0.2em] text-white">
                  Inicio
                </Link>
                {[...LEFT_LINKS, ...RIGHT_LINKS].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-rooms-sans text-sm uppercase tracking-[0.2em] ${
                      pathname === item.href ? "text-white underline underline-offset-4" : "text-white/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
