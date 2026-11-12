"use client";

import React, { useEffect, useState } from "react";
import { X, Calendar, Users, Check, Sparkles } from "lucide-react";
import { useModals, RoomId } from "./ModalContext";
import { CIRQA_HOME_DATA, CIRQA_ROOMS_DATA } from "@/data/cirqa-data";

export function SiteModals() {
  const {
    bookingOpen,
    selectedRoomId,
    closeBooking,
    planYourStayOpen,
    closePlanYourStay,
    travelAgentsOpen,
    closeTravelAgents,
    southernOpen,
    closeSouthern,
  } = useModals();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBooking();
        closePlanYourStay();
        closeTravelAgents();
        closeSouthern();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeBooking, closePlanYourStay, closeTravelAgents, closeSouthern]);

  return (
    <>
      {bookingOpen && (
        <BookingModal initialRoom={selectedRoomId} onClose={closeBooking} />
      )}
      {planYourStayOpen && <PlanYourStayModal onClose={closePlanYourStay} />}
      {travelAgentsOpen && <TravelAgentsModal onClose={closeTravelAgents} />}
      {southernOpen && <SouthernTravesiaModal onClose={closeSouthern} />}
    </>
  );
}

function BookingModal({
  initialRoom,
  onClose,
}: {
  initialRoom: RoomId | null;
  onClose: () => void;
}) {
  const [roomId, setRoomId] = useState<RoomId>(initialRoom || "suite-principal");
  const [board, setBoard] = useState<"half" | "full">("half");
  const [checkIn, setCheckIn] = useState("2026-06-14");
  const [checkOut, setCheckOut] = useState("2026-06-17");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (initialRoom) setRoomId(initialRoom);
  }, [initialRoom]);

  const room =
    CIRQA_ROOMS_DATA.rooms.find((r) => r.id === roomId) ||
    CIRQA_ROOMS_DATA.rooms[0];

  const nights = Math.max(
    1,
    Math.round(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    ) || 3
  );
  const nightlyRate =
    room.ratePen + (board === "full" ? 120 * adults : 0);
  const total = nightlyRate * nights;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/85 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto bg-[#f9f8f4] p-6 text-[#333333] shadow-2xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close booking dialog"
          className="absolute right-5 top-5 p-2 text-[#333333]/70 transition hover:text-[#111111] cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="text-xs uppercase tracking-[0.25em] text-[#333333]/65">
          CIRQA · Arequipa, Peru
        </p>
        <h2 className="mt-1 font-cirqa-arnopro text-3xl text-[#111111] md:text-4xl">
          Book Your Stay
        </h2>

        {confirmed ? (
          <div className="mt-6 border border-[#333333]/20 bg-white p-6 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#333333] text-white">
              <Check className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-cirqa-arnopro text-2xl text-[#111111]">
              Reservation Request Received
            </h3>
            <p className="mt-2 text-sm text-[#333333]/80">
              {room.name} · {nights} nights ({checkIn} → {checkOut}) ·{" "}
              {adults} Adult(s)
              {children > 0 ? `, ${children} Child(ren)` : ""} ·{" "}
              {board === "full" ? "Full Board" : "Half Board"}
            </p>
            <p className="mt-2 font-cirqa-arnopro text-lg text-[#111111]">
              Total estimado: S/ {total.toFixed(2)}
            </p>
            <p className="mt-3 text-xs text-[#333333]/70">
              Our concierge team at concierge@andean.travel will confirm
              availability shortly.
            </p>
            <button onClick={onClose} className="btn-cirqa-dark mt-6">
              Return to CIRQA
            </button>
          </div>
        ) : (
          <form
            className="mt-6 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setConfirmed(true);
            }}
          >
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#333333]/70">
                Room Category
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {CIRQA_ROOMS_DATA.rooms.map((r) => {
                  const active = r.id === roomId;
                  return (
                    <button
                      type="button"
                      key={r.id}
                      onClick={() => setRoomId(r.id)}
                      className={`border p-3 text-left transition cursor-pointer ${
                        active
                          ? "border-[#222222] bg-[#222222] text-white"
                          : "border-[#333333]/25 bg-white text-[#333333] hover:border-[#333333]"
                      }`}
                    >
                      <div className="text-[11px] opacity-70">{r.number}</div>
                      <div className="font-cirqa-arnopro text-lg leading-tight">{r.name}</div>
                      <div className="mt-1 text-xs opacity-80">
                        S/ {r.ratePen.toFixed(2)} / noche
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#333333]/70">
                  <Calendar className="h-3.5 w-3.5" /> Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  required
                  className="w-full border border-[#333333]/25 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]"
                />
              </div>
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#333333]/70">
                  <Calendar className="h-3.5 w-3.5" /> Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                  className="w-full border border-[#333333]/25 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#333333]/70">
                  <Users className="h-3.5 w-3.5" /> Adults
                </label>
                <select
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full border border-[#333333]/25 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Adult" : "Adults"}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-[#333333]/70">
                  Children
                </label>
                <select
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="w-full border border-[#333333]/25 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]"
                >
                  {[0, 1, 2].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Child" : "Children"}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-[#333333]/70">
                  Board Basis
                </label>
                <select
                  value={board}
                  onChange={(e) => setBoard(e.target.value as "half" | "full")}
                  className="w-full border border-[#333333]/25 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]"
                >
                  <option value="half">Half Board</option>
                  <option value="full">Full Board</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <input
                type="text"
                placeholder="Full name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                className="border border-[#333333]/25 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]"
              />
              <input
                type="email"
                placeholder="Email address"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                required
                className="border border-[#333333]/25 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]"
              />
              <input
                type="text"
                placeholder="Promo code (optional)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="border border-[#333333]/25 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]"
              />
            </div>

            <div className="flex flex-col justify-between gap-4 border-t border-[#333333]/15 pt-4 sm:flex-row sm:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-[#333333]/65">
                  {nights} nights · {room.name} ·{" "}
                  {board === "full" ? "Full Board" : "Half Board"}
                </div>
                <div className="font-cirqa-arnopro text-2xl text-[#111111]">
                  S/ {total.toFixed(2)}
                </div>
              </div>
              <button type="submit" className="btn-cirqa-dark">
                Confirm Reservation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function PlanYourStayModal({ onClose }: { onClose: () => void }) {
  const properties = [
    "CIRQA",
    "PUQIO",
    "TINAJANI",
    "TITILAKA",
    "ATEMPORAL",
    "FAUSTO",
  ];
  const [selectedProps, setSelectedProps] = useState<string[]>(["CIRQA"]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const toggleProp = (p: string) => {
    setSelectedProps((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await fetch("/api/forms/plan-your-stay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        properties: selectedProps,
        name,
        email,
        checkIn,
        checkOut,
        notes,
      }),
    });
    setStatus("sent");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#222222]/85 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto bg-[#f9f8f4] p-7 text-[#3d3d3c] shadow-2xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Plan Your Stay"
          className="absolute right-5 top-5 p-2 opacity-70 hover:opacity-100 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="font-cirqa-arnopro text-3xl text-[#111111]">
          Plan Your Stay
        </h2>
        <p className="mt-1 text-sm text-[#3d3d3c]/80">
          Share your preferred dates and Andean properties, and our concierge
          will craft a tailored journey.
        </p>

        {status === "sent" ? (
          <div className="mt-6 border border-[#333333]/20 bg-white p-6 text-center">
            <p className="font-cirqa-arnopro text-2xl text-[#111111]">
              Thank you, {name}
            </p>
            <p className="mt-2 text-sm text-[#3d3d3c]/80">
              Our travel specialists will reach out to {email} shortly.
            </p>
            <button onClick={onClose} className="btn-cirqa-dark mt-5">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.16em] opacity-75">
                Properties of Interest
              </label>
              <div className="flex flex-wrap gap-2">
                {properties.map((p) => {
                  const active = selectedProps.includes(p);
                  return (
                    <button
                      type="button"
                      key={p}
                      onClick={() => toggleProp(p)}
                      className={`border px-3 py-1.5 text-xs tracking-wider transition cursor-pointer ${
                        active
                          ? "border-[#222222] bg-[#222222] text-white"
                          : "border-[#3d3d3c]/30 bg-white hover:bg-[#dcd7cf]"
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="border border-[#3d3d3c]/25 bg-white px-3 py-2.5 text-sm outline-none"
                aria-label="Check in date"
              />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="border border-[#3d3d3c]/25 bg-white px-3 py-2.5 text-sm outline-none"
                aria-label="Check out date"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-[#3d3d3c]/25 bg-white px-3 py-2.5 text-sm outline-none"
              />
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-[#3d3d3c]/25 bg-white px-3 py-2.5 text-sm outline-none"
              />
            </div>

            <textarea
              rows={3}
              placeholder="Tell us about your interests, pace, or special requests..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border border-[#3d3d3c]/25 bg-white px-3 py-2.5 text-sm outline-none"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-cirqa-dark w-full"
            >
              {status === "sending" ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function TravelAgentsModal({ onClose }: { onClose: () => void }) {
  const [agency, setAgency] = useState("");
  const [advisor, setAdvisor] = useState("");
  const [email, setEmail] = useState("");
  const [help, setHelp] = useState("Rates & Availability");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/forms/travel-agents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ agency, advisor, email, help, message }),
    });
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#222222]/85 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#333333] p-7 text-[#f9f4ea] shadow-2xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Travel Agents modal"
          className="absolute right-5 top-5 p-2 text-white/70 hover:text-white cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="font-cirqa-arnopro text-3xl text-white">
          Travel Agents &amp; Advisors
        </h2>
        <p className="mt-1 text-sm text-[#f9f4ea]/80">
          Direct trade assistance for bespoke itineraries across Arequipa and
          southern Peru.
        </p>

        {sent ? (
          <div className="mt-6 border border-white/20 p-6 text-center">
            <p className="font-cirqa-arnopro text-2xl">Inquiry Sent</p>
            <p className="mt-2 text-sm text-white/80">
              Our trade desk will reply to {email}.
            </p>
            <button onClick={onClose} className="btn-cirqa-light mt-5">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              required
              placeholder="Agency / Company name"
              value={agency}
              onChange={(e) => setAgency(e.target.value)}
              className="w-full border border-white/25 bg-[#222222] px-3 py-2.5 text-sm text-white placeholder:text-white/50 outline-none"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Advisor name"
                value={advisor}
                onChange={(e) => setAdvisor(e.target.value)}
                className="border border-white/25 bg-[#222222] px-3 py-2.5 text-sm text-white placeholder:text-white/50 outline-none"
              />
              <input
                type="email"
                required
                placeholder="Advisor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-white/25 bg-[#222222] px-3 py-2.5 text-sm text-white placeholder:text-white/50 outline-none"
              />
            </div>
            <select
              value={help}
              onChange={(e) => setHelp(e.target.value)}
              className="w-full border border-white/25 bg-[#222222] px-3 py-2.5 text-sm text-white outline-none"
            >
              <option>Rates &amp; Availability</option>
              <option>FIT &amp; Multi-Property Travesía</option>
              <option>Full Property Buyout (11 Rooms)</option>
              <option>Press &amp; Media Kit</option>
            </select>
            <textarea
              rows={3}
              placeholder="Details or dates..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-white/25 bg-[#222222] px-3 py-2.5 text-sm text-white placeholder:text-white/50 outline-none"
            />
            <button type="submit" className="btn-cirqa-light w-full">
              Submit Trade Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function SouthernTravesiaModal({ onClose }: { onClose: () => void }) {
  const { travesia } = CIRQA_HOME_DATA;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#222222]/85 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-2xl grid-cols-1 overflow-hidden bg-[#f9f8f4] text-[#333333] shadow-2xl md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Travesía modal"
          className="absolute right-4 top-4 z-10 bg-white/80 p-1.5 text-[#111111] hover:bg-white cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative h-64 md:h-auto">
          <img
            src={travesia.popupImage}
            alt="PUQIO Colca Valley"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-7 md:p-9">
          <span className="flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-[#333333]/65">
            <Sparkles className="h-3.5 w-3.5" /> {travesia.popupTitle}
          </span>
          <h3 className="mt-2 font-cirqa-arnopro text-3xl text-[#111111]">
            {travesia.popupHeading}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#333333]/85">
            {travesia.popupDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={travesia.popupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cirqa-dark text-xs tracking-[0.18em]"
            >
              {travesia.popupCta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
