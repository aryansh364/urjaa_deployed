import { useState } from "react";
import IndiaMap from "./indiamap";
import { serviceRegions } from "../../../data/operationalReach";
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
