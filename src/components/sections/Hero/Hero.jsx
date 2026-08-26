import Container from "../../ui/Container";
import hybridEnergyHero from "../../../assets/hybrid_energy_hero.png";
import { operationalStats } from "../../../data/operationalReach";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-36 pb-16 overflow-hidden bg-slate-900"
    >
      {/* Background Image/Glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900 z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1509391366360-51590abbd4c1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
      </div>

      <Container className="relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold tracking-widest uppercase text-xs sm:text-sm rounded-full backdrop-blur-sm">
              Urjaa Solutions
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Renewable Energy Engineering
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                for Every Scale
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">
              From residential rooftops to megawatt-scale industrial grids and
              defense infrastructure. Delivering turnkey EPC, hybrid wind-solar
              systems, and advanced power conditioning.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_8px_20px_rgb(5,150,105,0.35)] hover:bg-emerald-700 hover:shadow-[0_12px_30px_rgb(5,150,105,0.50)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-in-out"
              >
                Book Free Site Visit
              </a>

              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-bold text-sm tracking-widest uppercase rounded-full border border-white/20 backdrop-blur-lg hover:bg-white/20 hover:border-white/45 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-in-out"
              >
                Our Expertise
              </a>
            </div>
          </div>

          {/* Right Column: Premium Image Illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[450px] lg:max-w-none group">
              
              {/* Outer soft glowing background blur */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 opacity-70 blur-2xl group-hover:opacity-95 transition-opacity duration-500" />
              
              {/* Image Frame Container */}
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-2.5 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-emerald-500/30">
                <img
                  src={hybridEnergyHero}
                  alt="Hybrid Renewable Energy (Solar & Wind)"
                  className="rounded-xl w-full object-cover aspect-[4/3] sm:aspect-square lg:aspect-auto shadow-lg transform group-hover:scale-[1.01] transition-transform duration-500"
                />
                
                {/* Floating Glassmorphic Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-white/10 bg-slate-950/80 backdrop-blur-md shadow-lg flex items-center gap-3">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Smart Hybrid Grid</p>
                    <p className="text-[10px] text-slate-400 font-medium">Solar + Wind + Energy Storage Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 lg:mt-24 w-full">
          {operationalStats.map((stat) => (
            <div
              key={stat.id}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/10 p-5 sm:p-6 text-center text-white transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-emerald-500/50 hover:shadow-[0_8px_30px_rgb(16,185,129,0.15)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex justify-center mb-4 relative z-10">
                <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {iconPath(stat.iconId)}
                  </svg>
                </div>
              </div>
              <p className="text-3xl sm:text-4xl font-black tracking-tight relative z-10">{stat.value}</p>
              <h3 className="mt-2 font-bold text-slate-200 text-sm sm:text-base relative z-10">{stat.title}</h3>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-2 line-clamp-2 relative z-10">{stat.description}</p>
            </div>
          ))}
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
