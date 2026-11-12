import React from "react";

interface HeroSectionProps {
  image: string;
  alt: string;
  title: string;
}

export function HeroSection({ image, alt, title }: HeroSectionProps) {
  return (
    <section className="relative flex h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-[#111111]">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/45" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-rooms-stencil text-3xl uppercase leading-[1.15] tracking-[0.06em] text-white drop-shadow-sm sm:text-5xl md:text-[3.1rem] lg:text-[3.5rem]">
          {title}
        </h1>
      </div>
    </section>
  );
}
