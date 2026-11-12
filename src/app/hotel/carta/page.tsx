"use client";

import React, { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Search, UtensilsCrossed } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { CIRQA_KITCHEN_DATA } from "@/data/cirqa-data";
import { CARTA_SECTIONS, CartaCategorySection } from "@/data/carta-data";

export default function CirqaCartaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [lightboxSlides, setLightboxSlides] = useState<{ src: string; alt: string }[] | null>(null);

  const visibleSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base =
      selectedCategory === "all"
        ? CARTA_SECTIONS
        : CARTA_SECTIONS.filter((s) => s.id === selectedCategory);

    if (!q) return base;

    return base
      .map((section) => {
        const filteredGroups = section.groups
          .map((group) => ({
            ...group,
            items: group.items.filter(
              (item) =>
                item.name.toLowerCase().includes(q) ||
                item.description?.toLowerCase().includes(q) ||
                group.title?.toLowerCase().includes(q)
            ),
          }))
          .filter((group) => group.items.length > 0);

        return {
          ...section,
          groups: filteredGroups,
        };
      })
      .filter((section) => section.groups.length > 0);
  }, [selectedCategory, query]);

  const openSectionPhotos = (section: CartaCategorySection) => {
    setLightboxSlides(
      section.images.map((src, i) => ({
        src,
        alt: `${section.name} ${i + 1}`,
      }))
    );
  };

  return (
    <div>
      {/* 1. Hero */}
      <HeroSection
        image={CIRQA_KITCHEN_DATA.heroImage}
        alt="La Carta del restaurante"
        title="La Carta"
      />

      {/* 2. Restaurant Menu Container */}
      <section className="paper-texture-rice font-rooms-sans bg-[#f5f2eb] px-4 py-10 md:px-10 md:py-16 lg:px-14">
        <div className="mx-auto w-full max-w-[1800px] border border-[#333333]/20 bg-[#fcfbf8] p-3 shadow-sm md:p-5">
          {/* Inner Double-Border Frame (Classic Printed Menu Style) */}
          <div className="border border-[#333333]/15 px-5 py-10 sm:px-8 md:px-12 md:py-14">
            {/* Menu Header */}
            <header className="mx-auto max-w-2xl text-center">
              <div className="mb-3 flex items-center justify-center gap-3 text-[#75706a]">
                <span className="h-px w-10 bg-[#75706a]/50" />
                <UtensilsCrossed className="h-4 w-4" />
                <span className="h-px w-10 bg-[#75706a]/50" />
              </div>

              <p className="text-[11px] uppercase tracking-[0.28em] text-[#6e6a65]">
                SALÓN &amp; TERRAZA · RESTAURANTE
              </p>

              <h2 className="font-rooms-stencil mt-2 text-4xl uppercase tracking-[0.08em] text-[#4a4641] md:text-5xl">
                Nuestra Carta
              </h2>

              <p className="mt-3 text-sm font-light leading-relaxed text-[#5c5955] md:text-[15px]">
                Una selección meticulosa de sabores locales e internacionales, preparada al momento
                con ingredientes frescos de estación.
              </p>
            </header>

            {/* Filter Bar + Search */}
            <div className="mt-10 space-y-5 border-y border-[#333333]/15 py-6">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={`border px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] transition cursor-pointer ${
                    selectedCategory === "all"
                      ? "border-[#2b2a28] bg-[#2b2a28] text-white"
                      : "border-[#333333]/20 bg-white text-[#5c5955] hover:border-[#2b2a28]"
                  }`}
                >
                  Toda la Carta
                </button>
                {CARTA_SECTIONS.map((sec) => {
                  const active = selectedCategory === sec.id;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => setSelectedCategory(sec.id)}
                      className={`border px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] transition cursor-pointer ${
                        active
                          ? "border-[#2b2a28] bg-[#2b2a28] text-white"
                          : "border-[#333333]/20 bg-white text-[#5c5955] hover:border-[#2b2a28]"
                      }`}
                    >
                      {sec.name}
                    </button>
                  );
                })}
              </div>

              <div className="mx-auto max-w-sm">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#6e6a65]" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar plato, trago o producto..."
                    aria-label="Buscar en la carta"
                    className="w-full border border-[#333333]/20 bg-white py-2 pr-3 pl-9 text-xs tracking-wide text-[#111111] placeholder:text-[#9c968f] outline-none focus:border-[#2b2a28]"
                  />
                </div>
              </div>
            </div>

            {/* Menu Sections */}
            {visibleSections.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-sm text-[#5c5955]">
                  No se encontraron platos o bebidas que coincidan con &ldquo;{query}&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4 border border-[#8c8781] px-6 py-2 text-xs uppercase tracking-[0.18em] text-[#5c5955] hover:bg-[#111111] hover:text-white cursor-pointer"
                >
                  Ver toda la carta
                </button>
              </div>
            ) : (
              <div className="divide-y divide-[#333333]/15">
                {visibleSections.map((section) => (
                  <article
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 py-12 first:pt-10 last:pb-8"
                  >
                    {/* Section Ornament & Title */}
                    <div className="flex flex-col items-center text-center">
                      <span className="text-[11px] uppercase tracking-[0.26em] text-[#8c8781]">
                        {section.number}
                      </span>
                      <h3 className="font-rooms-stencil mt-1 text-3xl uppercase tracking-[0.07em] text-[#4a4641] md:text-4xl">
                        {section.name}
                      </h3>
                      <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-[#6e6a65]">
                        {section.tagline}
                      </p>

                      {/* Small ornament */}
                      <div className="mt-3 flex w-32 items-center justify-center">
                        <span className="h-px flex-1 bg-[#8c8781]/50" />
                        <span className="mx-1.5 h-1.5 w-1.5 rotate-45 border border-[#8c8781] bg-[#fcfbf8]" />
                        <span className="h-px flex-1 bg-[#8c8781]/50" />
                      </div>

                      <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-[#5c5955]">
                        {section.description}
                      </p>

                      {/* Small Dish Vignette Photo */}
                      <button
                        type="button"
                        onClick={() => openSectionPhotos(section)}
                        className="group mt-6 flex items-center gap-3 border border-[#333333]/15 bg-white p-1.5 pr-4 text-left transition hover:border-[#333333]/40 cursor-zoom-in"
                      >
                        <img
                          src={section.previewImage}
                          alt={section.name}
                          className="h-12 w-16 object-cover"
                        />
                        <div>
                          <span className="block text-[10px] uppercase tracking-[0.2em] text-[#8c8781]">
                            Galería
                          </span>
                          <span className="text-xs text-[#333333] group-hover:underline">
                            Ver fotos de {section.name}
                          </span>
                        </div>
                      </button>
                    </div>

                    {/* Menu Subgroups & Dishes with Dotted Leaders */}
                    <div className="mt-10 space-y-10">
                      {section.groups.map((group, gIdx) => {
                        const isSingleColumn =
                          group.items.length <= 4 &&
                          group.items.some((i) => Boolean(i.description));

                        return (
                          <div key={group.title ?? gIdx}>
                            {group.title && (
                              <h4 className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#4a4641]">
                                <span>{group.title}</span>
                                <span className="h-px flex-1 bg-[#333333]/15" />
                              </h4>
                            )}

                            <div
                              className={
                                isSingleColumn
                                  ? "mx-auto grid max-w-5xl grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2"
                                  : "grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2 xl:grid-cols-3"
                              }
                            >
                              {group.items.map((dish) => (
                                <div key={dish.name} className="flex items-start gap-3.5">
                                  {dish.image && (
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setLightboxSlides([{ src: dish.image!, alt: dish.name }])
                                      }
                                      aria-label={`Ver foto de ${dish.name}`}
                                      className="mt-0.5 h-12 w-12 shrink-0 overflow-hidden border border-[#333333]/15 bg-[#f5f2eb] transition hover:opacity-85 cursor-zoom-in"
                                    >
                                      <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="h-full w-full object-cover"
                                      />
                                    </button>
                                  )}

                                  <div className="min-w-0 flex-1 space-y-1">
                                    {/* Dish Name + Dotted Leader + Price */}
                                    <div className="flex items-baseline">
                                      <span className="text-[15px] font-medium text-[#222222]">
                                        {dish.name}
                                      </span>

                                      {!dish.variants ? (
                                        <>
                                          <span
                                            aria-hidden="true"
                                            className="mx-2.5 flex-1 border-b border-dotted border-[#8c8781]/60"
                                          />
                                          <span className="shrink-0 text-[15px] font-medium text-[#222222]">
                                            {dish.price}
                                          </span>
                                        </>
                                      ) : (
                                        <span
                                          aria-hidden="true"
                                          className="mx-2.5 flex-1 border-b border-dotted border-[#8c8781]/40"
                                        />
                                      )}
                                    </div>

                                    {/* Optional Tag */}
                                    {dish.tag && (
                                      <span className="inline-block border border-[#8c8781]/40 bg-[#f5f2eb] px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-[#5c5955]">
                                        {dish.tag}
                                      </span>
                                    )}

                                    {/* Description */}
                                    {dish.description && (
                                      <p className="text-xs font-light leading-relaxed text-[#5c5955]">
                                        {dish.description}
                                      </p>
                                    )}

                                    {/* Variants (Vaso/Jarra, Mediano/Grande) */}
                                    {dish.variants && (
                                      <div className="flex flex-wrap gap-x-5 gap-y-1 pt-0.5 text-xs text-[#5c5955]">
                                        {dish.variants.map((v) => (
                                          <span key={v.label}>
                                            {v.label}:{" "}
                                            <strong className="font-medium text-[#222222]">
                                              {v.price}
                                            </strong>
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox for section photos */}
      <Lightbox
        open={Boolean(lightboxSlides)}
        index={0}
        close={() => setLightboxSlides(null)}
        slides={lightboxSlides ?? []}
      />
    </div>
  );
}
