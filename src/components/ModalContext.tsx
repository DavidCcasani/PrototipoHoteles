"use client";

import React, { createContext, useContext, useState } from "react";
import type { RoomId } from "@/data/cirqa-data";

export type { RoomId };

interface ModalContextValue {
  bookingOpen: boolean;
  selectedRoomId: RoomId | null;
  openBooking: (roomId?: RoomId) => void;
  closeBooking: () => void;

  planYourStayOpen: boolean;
  openPlanYourStay: () => void;
  closePlanYourStay: () => void;

  travelAgentsOpen: boolean;
  openTravelAgents: () => void;
  closeTravelAgents: () => void;

  southernOpen: boolean;
  openSouthern: () => void;
  closeSouthern: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<RoomId | null>(null);
  const [planYourStayOpen, setPlanYourStayOpen] = useState(false);
  const [travelAgentsOpen, setTravelAgentsOpen] = useState(false);
  const [southernOpen, setSouthernOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        bookingOpen,
        selectedRoomId,
        openBooking: (roomId) => {
          setSelectedRoomId(roomId ?? null);
          setBookingOpen(true);
        },
        closeBooking: () => setBookingOpen(false),
        planYourStayOpen,
        openPlanYourStay: () => setPlanYourStayOpen(true),
        closePlanYourStay: () => setPlanYourStayOpen(false),
        travelAgentsOpen,
        openTravelAgents: () => setTravelAgentsOpen(true),
        closeTravelAgents: () => setTravelAgentsOpen(false),
        southernOpen,
        openSouthern: () => setSouthernOpen(true),
        closeSouthern: () => setSouthernOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModals must be used inside ModalProvider");
  return ctx;
}
