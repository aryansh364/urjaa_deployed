import { useState } from "react";
import IndiaMap from "./indiamap";
import {
  operationalStats,
  serviceRegions,
} from "../../../data/operationalReach";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

export default function OperationalReach() {
  const [hoveredCity, setHoveredCity] = useState(null);

  return (
    <section id="operational-reach" className="py-24 md:py-32 bg-white">
      <Container>
        <SectionTitle
          subtitle="Operational Reach"
          title="Powering Progress Across India"
          description="On-site engineering and project management across complex terrains and urban centers."
        />

        {/* Stats Grid */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
          {operationalStats.map((stat) => (
            <div
              key={stat.id}
              className="group bg-slate-900 rounded-3xl p-6 sm:p-8 text-center text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-emerald-500"
            >
              <div className="flex justify-center mb-5">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <svg
                    className="w-7 h-7 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {iconPath(stat.iconId)}
                  </svg>
                </div>
              </div>

              <p className="text-4xl font-black">{stat.value}</p>

              <h3 className="mt-2 font-bold text-slate-200">{stat.title}</h3>

              <p className="text-xs text-slate-400 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Regions + Map */}

        <div className="mt-20 md:mt-24 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
          {/* LEFT */}

          <div className="order-2 lg:order-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-8">
              Service Regions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceRegions.map((region) => {
                const isHovered = hoveredCity === region.id;
                
                return (
                  <button
                    type="button"
                    key={region.id}
                    onMouseEnter={() => setHoveredCity(region.id)}
                    onMouseLeave={() => setHoveredCity(null)}
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/${encodeURIComponent(
                          `${region.city} ${region.state}`,
                        )}`,
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                    className={`group text-left cursor-pointer rounded-2xl border p-5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 hover:shadow-xl hover:-translate-y-1 ${
                      isHovered
                        ? "bg-emerald-50 border-emerald-400 shadow-[0_14px_35px_rgb(16,185,129,0.2)] -translate-y-1 scale-[1.02]"
                        : region.isHQ
                        ? "bg-emerald-50/50 border-emerald-300 shadow-[0_14px_35px_rgb(16,185,129,0.12)]"
                        : "bg-white border-slate-200 hover:border-emerald-300"
                    }`}
                    aria-label={`Open ${region.city}, ${region.state} in Google Maps`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className={`font-bold transition-colors ${isHovered ? "text-emerald-700" : "text-slate-900 group-hover:text-emerald-700"}`}>
                          {region.city}
                        </h4>

                        <p className={`text-sm ${isHovered ? "text-slate-600" : "text-slate-500"}`}>{region.state}</p>
                      </div>

                      {region.isHQ && (
                        <span className="shrink-0 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                          Head Office
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}

          <div className="order-1 lg:order-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 text-center mb-8">
              Interactive India Map
            </h3>

            <IndiaMap hoveredCity={hoveredCity} setHoveredCity={setHoveredCity} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function iconPath(iconId) {
  switch (iconId) {
    case "map-pin":
      return (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </>
      );

    case "check-circle":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      );

    case "zap":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      );

    case "users":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      );

    default:
      return <circle cx="12" cy="12" r="10" strokeWidth="2" />;
  }
}
