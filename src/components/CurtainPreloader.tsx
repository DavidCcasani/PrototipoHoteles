"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { HotelLogo } from "./BrandSvgs";

type Phase = "entering" | "hold" | "lifting" | "hidden";

export function CurtainPreloader() {
  const pathname = usePathname();
  const lastCompletedPathRef = useRef<string | null>(null);
  const timersRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);
  const [phase, setPhase] = useState<Phase>("hold");

  const clearScheduled = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  useEffect(() => {
    clearScheduled();

    const isInitialLoad = lastCompletedPathRef.current === null;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const fadeInMs = prefersReduced ? 80 : 280;
    const holdMs = prefersReduced ? 120 : isInitialLoad ? 800 : 320;
    const liftMs = prefersReduced ? 240 : 950;

    const startLift = () => {
      lastCompletedPathRef.current = pathname;
      setPhase("lifting");
    };

    if (isInitialLoad) {
      setPhase("hold");
      const liftTimer = window.setTimeout(startLift, holdMs);
      const hideTimer = window.setTimeout(
        () => setPhase("hidden"),
        holdMs + liftMs
      );
      timersRef.current = [liftTimer, hideTimer];
    } else {
      setPhase("entering");
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = window.requestAnimationFrame(() => {
          setPhase("hold");
        });
      });

      const liftTimer = window.setTimeout(startLift, fadeInMs + holdMs);
      const hideTimer = window.setTimeout(
        () => setPhase("hidden"),
        fadeInMs + holdMs + liftMs
      );
      timersRef.current = [liftTimer, hideTimer];
    }

    return clearScheduled;
  }, [pathname]);

  const handleDismissEarly = () => {
    clearScheduled();
    lastCompletedPathRef.current = pathname;
    setPhase("lifting");
    const hideTimer = window.setTimeout(() => setPhase("hidden"), 950);
    timersRef.current = [hideTimer];
  };

  if (phase === "hidden") return null;

  const isEntering = phase === "entering";
  const isLifting = phase === "lifting";

  return (
    <div
      onClick={handleDismissEarly}
      aria-hidden="true"
      style={{
        transform: isLifting ? "translate3d(0, -100%, 0)" : "translate3d(0, 0, 0)",
        opacity: isEntering ? 0 : 1,
        transitionProperty: "transform, opacity",
        transitionDuration: isLifting ? "950ms" : "280ms",
        transitionTimingFunction: isLifting
          ? "cubic-bezier(0.65, 0, 0.35, 1)"
          : "ease-out",
      }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white will-change-[transform,opacity] ${
        isLifting ? "pointer-events-none" : ""
      }`}
    >
      <div
        style={{
          transform: isEntering ? "scale(0.95)" : "scale(1)",
          opacity: isEntering ? 0 : 1,
          transitionProperty: "transform, opacity",
          transitionDuration: "450ms",
          transitionTimingFunction: "ease-out",
        }}
        className="flex flex-col items-center"
      >
        <HotelLogo className="h-24 w-auto text-white md:h-32" />
        <div className="mt-5 flex w-28 items-center justify-center">
          <span className="h-px flex-1 bg-white/35" />
          <span className="mx-1.5 h-1.5 w-1.5 rotate-45 border border-white/60 bg-black" />
          <span className="h-px flex-1 bg-white/35" />
        </div>
      </div>
    </div>
  );
}
