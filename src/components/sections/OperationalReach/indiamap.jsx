import indiaMap from "../../../assets/maps/india.svg";
import { serviceRegions } from "../../../data/operationalReach";

export default function IndiaMap({ hoveredCity, setHoveredCity }) {
  const openMaps = (city, state) => {
    window.open(
      `https://www.google.com/maps/search/${encodeURIComponent(`${city} ${state}`)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/70 to-slate-50 p-5 sm:p-8 shadow-[0_24px_80px_rgb(15,23,42,0.12)] overflow-hidden">
      <div className="absolute inset-x-8 top-8 h-32 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative rounded-[1.5rem] bg-white/80 p-4 sm:p-6 ring-1 ring-slate-200/70">
        <div className="relative w-full">
          <img
            src={indiaMap}
            alt="Map of India showing Urjaa service locations"
            loading="lazy"
            decoding="async"
            className="w-full block select-none drop-shadow-[0_20px_30px_rgb(15,23,42,0.16)]"
          />

          {serviceRegions.map((location) => {
            const isHovered = hoveredCity === location.id;
            return (
              <button
                key={location.id}
                type="button"
                onClick={() => openMaps(location.city, location.state)}
                onMouseEnter={() => setHoveredCity && setHoveredCity(location.id)}
                onMouseLeave={() => setHoveredCity && setHoveredCity(null)}
                className={`absolute group -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4 ${isHovered ? 'z-30' : 'z-10'}`}
                style={{
                  top: location.mapPosition.top,
                  left: location.mapPosition.left,
                }}
                aria-label={`Open ${location.city}, ${location.state} in Google Maps`}
              >
                <span className="relative flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center">
                  <span className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 transition-all duration-300 ${isHovered ? 'animate-none scale-150 opacity-40' : 'animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]'}`} />

                  <span
                    className={`relative inline-flex h-4 w-4 sm:h-5 sm:w-5 rounded-full border-2 border-white shadow-[0_0_0_6px_rgb(16,185,129,0.18),0_8px_18px_rgb(15,23,42,0.18)] transition-all duration-300 group-hover:scale-125 ${
                      isHovered ? 'scale-125 ring-4 ring-emerald-500/30' : ''
                    } ${location.isHQ ? "bg-amber-400" : "bg-emerald-600"}`}
                  />
                </span>

                <span className={`pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-max max-w-[11rem] -translate-x-1/2 translate-y-1 rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-left text-white shadow-2xl transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100'}`}>
                  <span className="block text-sm font-bold leading-tight">
                    {location.city}
                  </span>

                  <span className="mt-0.5 block text-xs text-slate-300">
                    {location.state}
                  </span>

                  {location.isHQ && (
                    <span className="mt-2 inline-flex rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                      Head Office
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-500">
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          Bengaluru HQ
        </span>

        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
          Active service regions
        </span>
      </div>
    </div>
  );
}
