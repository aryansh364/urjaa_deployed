/**
 * CLIENT SHOWCASE — Infinite Smooth Marquee
 * Strictly displays only clients from Website Details PDF (Page 1):
 * - Government Sector
 * - Institutions
 * - Corporates
 * Bold/important clients highlighted per PDF directives.
 * Smooth continuous marquee with seamless looping for all categories.
 */

import { useState, useMemo } from "react";
import { clientsData, clientCategories } from "../../../data/clients";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

/* ────────────────────────────────────────────
   Single Client Card
   ──────────────────────────────────────────── */
function ClientCard({ client }) {
  return (
    <div
      className={`group relative flex-shrink-0 w-48 sm:w-52 bg-white rounded-2xl border p-5 flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${
        client.featured
          ? "border-emerald-300 shadow-[0_4px_16px_rgb(16,185,129,0.12)] ring-1 ring-emerald-400/30"
          : "border-slate-100 shadow-[0_2px_8px_rgb(0,0,0,0.04)]"
      }`}
    >
      {/* Featured / Important Client Indicator per PDF bold marking */}
      {client.featured && (
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Key Client
        </div>
      )}

      {/* Logo / Monogram */}
      <div className="h-16 w-full flex items-center justify-center my-2 transition-transform duration-300 group-hover:scale-105">
        {client.logo ? (
          <img
            src={client.logo}
            alt={client.name}
            className="max-w-[75%] max-h-[85%] object-contain mix-blend-multiply transition-all duration-300"
          />
        ) : (
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/70 border border-emerald-100 flex items-center justify-center shadow-xs">
            <span className="text-emerald-700 font-black text-xl">
              {client.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Name and Sector */}
      <div className="w-full mt-1">
        <h3 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug line-clamp-2 transition-colors group-hover:text-emerald-700">
          {client.name}
        </h3>
        <span className="inline-block text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1.5">
          {client.sector}
        </span>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Marquee Row (Infinite Loop)
   ──────────────────────────────────────────── */
function MarqueeRow({ clients, direction = "left", speed = 35 }) {
  if (!clients || clients.length === 0) return null;

  // Duplicate items sufficiently so the half-animation (-50%) always seamlessly covers the screen
  const minItems = 16;
  const repeatMultiplier = Math.max(2, Math.ceil(minItems / clients.length));
  const baseArray = Array.from({ length: repeatMultiplier }, () => clients).flat();
  const seamlessLoopItems = [...baseArray, ...baseArray];

  const animName = direction === "left" ? "marqueeSlideLeft" : "marqueeSlideRight";
  const duration = Math.max(20, baseArray.length * (speed / 10));

  return (
    <div className="relative overflow-hidden py-2.5">
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `${animName} ${duration}s linear infinite`,
          willChange: "transform",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {seamlessLoopItems.map((client, idx) => (
          <ClientCard key={`${client.id}-${idx}`} client={client} />
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Main Client Showcase Component
   ──────────────────────────────────────────── */
export default function ClientShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredClients = useMemo(() => {
    if (activeCategory === "All") return clientsData;
    return clientsData.filter((c) => c.sector === activeCategory);
  }, [activeCategory]);

  // Distribute into 2 distinct rows
  const row1 = useMemo(() => {
    return filteredClients.filter((_, idx) => idx % 2 === 0);
  }, [filteredClients]);

  const row2 = useMemo(() => {
    return filteredClients.filter((_, idx) => idx % 2 === 1);
  }, [filteredClients]);

  return (
    <>
      {/* Keyframe animations */}
      <style>{`
        @keyframes marqueeSlideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeSlideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <section
        id="clients"
        className="py-24 md:py-32 bg-white relative overflow-hidden"
      >
        {/* Subtle Ambient Light Decoration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-emerald-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <Container>
          <SectionTitle
            subtitle="Our Clients"
            title="Trusted Across Government, Institutions & Corporates"
            description="Exclusively delivering mission-critical energy infrastructure to India's premier government departments, distinguished educational institutions, and leading corporate powerhouses."
          />

          {/* Category Tabs per PDF Section 1 */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 mt-10 md:mt-12">
            {clientCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ease-in-out border cursor-pointer ${
                  activeCategory === category
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-[0_6px_20px_rgb(5,150,105,0.35)] scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50/60 hover:-translate-y-0.5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>

        {/* Infinite Marquee Rows with Edge Fades */}
        <div className="relative mt-12 md:mt-16">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Row 1 — Moving Left */}
          {row1.length > 0 && (
            <MarqueeRow clients={row1} direction="left" speed={28} />
          )}

          {/* Row 2 — Moving Right */}
          {row2.length > 0 && (
            <MarqueeRow clients={row2} direction="right" speed={32} />
          )}
        </div>
      </section>
    </>
  );
}
