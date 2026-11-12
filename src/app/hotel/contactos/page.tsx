"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Check,
  ArrowRight,
  ConciergeBell,
  Car,
  Users,
  Calendar,
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { useModals } from "@/components/ModalContext";
import { CIRQA_EXPLORE_DATA, CIRQA_PROPERTY_DATA } from "@/data/cirqa-data";

const CONTACT_CHANNELS = [
  {
    icon: ConciergeBell,
    title: "Recepción 24/7",
    description: "Asistencia continua antes, durante y después de tu estadía.",
  },
  {
    icon: Calendar,
    title: "Reservas Directas",
    description: "Tarifas preferenciales y confirmación inmediata por nuestro equipo.",
  },
  {
    icon: Car,
    title: "Traslados Privados",
    description: "Coordinación de recojo desde el aeropuerto y movilidad privada.",
  },
  {
    icon: Users,
    title: "Eventos y Grupos",
    description: "Cenas privadas, celebraciones íntimas y estadías corporativas.",
  },
];

export default function CirqaContactosPage() {
  const { openBooking, openPlanYourStay, openTravelAgents } = useModals();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Información general");
  const [message, setMessage] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/forms/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
          companyWebsite,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* 1. Hero */}
      <HeroSection
        image={CIRQA_EXPLORE_DATA.heroImage}
        alt="Contactos del hotel"
        title="Contactos"
      />

      {/* 2. Intro */}
      <section className="font-rooms-sans bg-white px-5 pt-16 pb-6 text-center md:px-14 md:pt-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center space-y-3">
          <p className="text-[11px] uppercase tracking-[0.26em] text-[#6e6a65]">
            ATENCIÓN PERSONALIZADA
          </p>
          <h2 className="font-rooms-stencil text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
            Ponte en Contacto
          </h2>
          <div className="flex w-28 items-center justify-center pt-1">
            <span className="h-px flex-1 bg-[#8c8781]/50" />
            <span className="mx-1.5 h-1.5 w-1.5 rotate-45 border border-[#8c8781] bg-white" />
            <span className="h-px flex-1 bg-[#8c8781]/50" />
          </div>
          <p className="pt-1 text-[15px] font-light leading-relaxed text-[#5c5955]">
            Nuestro equipo de concierge y recepción está disponible para ayudarte con reservas,
            traslados privados, experiencias gastronómicas y consultas especiales.
          </p>
        </div>
      </section>

      {/* 3. Contact Details & Form */}
      <section className="font-rooms-sans bg-white px-5 py-12 md:px-10 md:py-20 lg:px-14">
        <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: Direct Contact Details */}
          <div className="space-y-7 lg:col-span-5">
            <div className="space-y-2">
              <p className="text-[11px] font-normal uppercase tracking-[0.26em] text-[#6e6a65]">
                CANALES DIRECTOS
              </p>
              <h3 className="font-rooms-stencil text-3xl font-bold uppercase leading-none tracking-[0.06em] text-[#75706a] md:text-4xl">
                Información
              </h3>
              <p className="text-xs font-normal uppercase tracking-[0.2em] text-[#6e6a65]">
                CONCIERGE &amp; RECEPCIÓN
              </p>
            </div>

            <div className="space-y-5 border-t border-[#333333]/10 pt-6 text-sm font-light text-[#5c5955]">
              <div className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#75706a]" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#2b2a28]">
                    Dirección
                  </p>
                  <p className="mt-1">{CIRQA_PROPERTY_DATA.findUs.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#75706a]" />
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#2b2a28]">
                    Teléfonos
                  </p>
                  <p className="mt-1">
                    <a
                      href="tel:+5117005100"
                      className="underline underline-offset-4 transition hover:text-[#111111]"
                    >
                      +51 (01) 700 5100 (PER)
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+17863960310"
                      className="underline underline-offset-4 transition hover:text-[#111111]"
                    >
                      +1 (786) 396-0310 (USA)
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#75706a]" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#2b2a28]">
                    Correo electrónico
                  </p>
                  <p className="mt-1">
                    <a
                      href="mailto:concierge@andean.travel"
                      className="underline underline-offset-4 transition hover:text-[#111111]"
                    >
                      concierge@andean.travel
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#75706a]" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#2b2a28]">
                    Horario de atención
                  </p>
                  <p className="mt-1">Recepción y Concierge disponibles las 24 horas</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 border-t border-[#333333]/10 pt-6">
              <button
                type="button"
                onClick={() => openBooking()}
                className="border border-[#8c8781] bg-transparent px-8 py-3 text-xs font-normal uppercase tracking-[0.22em] text-[#6e6a65] transition hover:border-[#111111] hover:bg-[#111111] hover:text-white cursor-pointer"
              >
                RESERVAR
              </button>
              <button
                type="button"
                onClick={openPlanYourStay}
                className="inline-flex items-center gap-2.5 text-xs font-normal uppercase tracking-[0.2em] text-[#6e6a65] transition hover:text-[#111111] cursor-pointer"
              >
                <span>PLANIFICAR ESTADÍA</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={openTravelAgents}
                className="inline-flex items-center gap-2.5 text-xs font-normal uppercase tracking-[0.2em] text-[#6e6a65] transition hover:text-[#111111] cursor-pointer"
              >
                <span>AGENCIAS</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="border border-[#333333]/15 bg-[#f9f8f4] p-7 md:p-10 lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#6e6a65]">
              ESCRÍBENOS
            </p>
            <h3 className="font-rooms-stencil mt-1 text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
              Envíanos un Mensaje
            </h3>
            <p className="mt-2 text-sm font-light text-[#5c5955]">
              Completa el formulario y nuestro equipo responderá a la brevedad.
            </p>

            {status === "sent" ? (
              <div className="mt-8 border border-[#333333]/15 bg-white p-8 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#8c8781] text-[#2b2a28]">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="font-rooms-stencil mt-4 text-2xl uppercase tracking-[0.06em] text-[#75706a]">
                  Mensaje Enviado
                </h4>
                <p className="mt-2 text-sm font-light text-[#5c5955]">
                  Gracias por comunicarte con nosotros. Te responderemos muy pronto.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 border border-[#8c8781] bg-transparent px-8 py-3 text-xs uppercase tracking-[0.22em] text-[#6e6a65] transition hover:border-[#111111] hover:bg-[#111111] hover:text-white cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                {/* Honeypot */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden"
                >
                  <label htmlFor="contact-company-website">Company website</label>
                  <input
                    id="contact-company-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-[#6e6a65]"
                    >
                      Nombre completo
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-[#333333]/20 bg-white px-3.5 py-2.5 text-sm font-light text-[#111111] placeholder:text-[#9c968f] outline-none focus:border-[#2b2a28]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-[#6e6a65]"
                    >
                      Correo electrónico
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="nombre@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-[#333333]/20 bg-white px-3.5 py-2.5 text-sm font-light text-[#111111] placeholder:text-[#9c968f] outline-none focus:border-[#2b2a28]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-[#6e6a65]"
                    >
                      Teléfono (opcional)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+51 999 999 999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-[#333333]/20 bg-white px-3.5 py-2.5 text-sm font-light text-[#111111] placeholder:text-[#9c968f] outline-none focus:border-[#2b2a28]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-[#6e6a65]"
                    >
                      Motivo de contacto
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full border border-[#333333]/20 bg-white px-3.5 py-2.5 text-sm font-light text-[#111111] outline-none focus:border-[#2b2a28]"
                    >
                      <option value="Información general">Información general</option>
                      <option value="Reservas y estadías">Reservas y estadías</option>
                      <option value="Gastronomía y eventos">Gastronomía y eventos</option>
                      <option value="Agencias de viaje">Agencias de viaje</option>
                      <option value="Prensa y alianzas">Prensa y alianzas</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-[#6e6a65]"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-[#333333]/20 bg-white px-3.5 py-2.5 text-sm font-light text-[#111111] placeholder:text-[#9c968f] outline-none focus:border-[#2b2a28]"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-700">
                    No pudimos enviar tu mensaje en este momento. Inténtalo nuevamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full border border-[#8c8781] bg-transparent px-9 py-3 text-xs font-normal uppercase tracking-[0.24em] text-[#6e6a65] transition hover:border-[#111111] hover:bg-[#111111] hover:text-white sm:w-auto cursor-pointer"
                >
                  {status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. Contact Highlights Grid */}
      <section className="font-rooms-sans border-t border-[#333333]/10 bg-[#f9f8f4] px-5 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#6e6a65]">
              SIEMPRE DISPONIBLES
            </p>
            <h2 className="font-rooms-stencil mt-2 text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
              Asistencia al Huésped
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CHANNELS.map((item) => {
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

      {/* 5. Location Map */}
      <section className="font-rooms-sans border-t border-[#333333]/10 bg-white px-5 pt-16 pb-20 md:px-10 lg:px-14">
        <div className="mx-auto w-full max-w-[1800px] space-y-10">
          <div className="flex flex-col items-center text-center">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#6e6a65]">
              CÓMO LLEGAR
            </p>
            <h2 className="font-rooms-stencil mt-2 text-3xl uppercase tracking-[0.06em] text-[#75706a] md:text-4xl">
              Encuéntranos
            </h2>
            <div className="mt-3 flex w-28 items-center justify-center">
              <span className="h-px flex-1 bg-[#8c8781]/50" />
              <span className="mx-1.5 h-1.5 w-1.5 rotate-45 border border-[#8c8781] bg-white" />
              <span className="h-px flex-1 bg-[#8c8781]/50" />
            </div>
            <p className="mt-3 text-sm font-light text-[#5c5955] md:text-base">
              {CIRQA_PROPERTY_DATA.findUs.address}
            </p>
          </div>

          <div className="relative h-[420px] w-full overflow-hidden border border-[#333333]/15 md:h-[480px]">
            <iframe
              src={CIRQA_PROPERTY_DATA.findUs.mapEmbedUrl}
              title="Ubicación del hotel"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
