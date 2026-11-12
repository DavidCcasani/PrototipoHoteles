"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HotelLogo } from "./BrandSvgs";

type Phase = "entering" | "hold" | "lifting" | "hidden";

export function CurtainPreloader() {
  const pathname = usePathname();
  const router = useRouter();

  const [phase, setPhase] = useState<Phase>("hold");
  const hasCompletedInitialRef = useRef(false);
  const pendingPathRef = useRef<string | null>(null);
  const timersRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);

  const clearScheduled = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const getTimings = () => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return {
      fadeInMs: prefersReduced ? 80 : 320,
      initialHoldMs: prefersReduced ? 120 : 750,
      navHoldMs: prefersReduced ? 80 : 220,
      liftMs: prefersReduced ? 220 : 900,
    };
  };

  const scheduleLift = (delayMs: number) => {
    const { liftMs } = getTimings();
    const liftTimer = window.setTimeout(() => {
      hasCompletedInitialRef.current = true;
      setPhase("lifting");
    }, delayMs);
    const hideTimer = window.setTimeout(() => {
      setPhase("hidden");
    }, delayMs + liftMs);
    timersRef.current.push(liftTimer, hideTimer);
  };

  // Intercept internal link clicks: show curtain FIRST, then navigate
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const hrefAttr = anchor.getAttribute("href");
      if (!hrefAttr || hrefAttr.startsWith("#")) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (url.pathname === pathname) return;

      e.preventDefault();
      e.stopPropagation();

      clearScheduled();

      const targetUrl = url.pathname + url.search + url.hash;
      const { fadeInMs } = getTimings();

      // Prefetch target route right away while curtain closes
      router.prefetch(url.pathname);
      pendingPathRef.current = url.pathname;

      setPhase("entering");
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = window.requestAnimationFrame(() => {
          setPhase("hold");
        });
      });

      const navTimer = window.setTimeout(() => {
        router.push(targetUrl);
      }, fadeInMs + 40);

      // Safety fallback in case navigation redirects back to the same pathname
      const safetyTimer = window.setTimeout(() => {
        if (pendingPathRef.current !== null) {
          pendingPathRef.current = null;
          scheduleLift(0);
        }
      }, fadeInMs + 2500);

      timersRef.current = [navTimer, safetyTimer];
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, [pathname, router]);

  // Handle initial load and route completion behind the closed curtain
  useEffect(() => {
    const { fadeInMs, initialHoldMs, navHoldMs } = getTimings();

    if (!hasCompletedInitialRef.current && pendingPathRef.current === null) {
      clearScheduled();
      setPhase("hold");
      scheduleLift(initialHoldMs);
      return clearScheduled;
    }

    // If this pathname change came from our intercepted click:
    // curtain is already closed ("hold"), so lift smoothly after brief settle
    if (pendingPathRef.current !== null) {
      pendingPathRef.current = null;
      clearScheduled();
      setPhase("hold");
      scheduleLift(navHoldMs);
      return clearScheduled;
    }

    // Browser Back/Forward navigation
    clearScheduled();
    setPhase("entering");
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = window.requestAnimationFrame(() => {
        setPhase("hold");
      });
    });
    scheduleLift(fadeInMs + navHoldMs);

    return clearScheduled;
  }, [pathname]);

  const handleDismissEarly = () => {
    clearScheduled();
    pendingPathRef.current = null;
    scheduleLift(0);
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
        transitionDuration: isLifting ? "900ms" : "300ms",
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
          transitionDuration: "380ms",
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
