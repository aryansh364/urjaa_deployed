import { operationalStats, serviceRegions } from '../../../data/operationalReach';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

function renderIcon(iconId) {
  const baseClasses = "w-7 h-7 text-green-600";

  switch (iconId) {
    case 'map-pin':
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'check-circle':
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'zap':
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'users':
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    default:
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      );
  }
}

export default function OperationalReach() {
  return (
    <section id="operational-reach" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionTitle
          subtitle="Operational Reach"
          title="Powering Progress Across India"
          description="From our headquarters in Bengaluru, we deliver renewable energy infrastructure across multiple states and industrial corridors."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
          {operationalStats.map((stat) => (
            <div
              key={stat.id}
              className="group bg-slate-900 rounded-3xl p-6 sm:p-8 text-center text-white transition-all duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] hover:-translate-y-1 relative overflow-hidden border-t-4 border-emerald-500"
            >
              <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex justify-center mb-5">
                <div className="p-3.5 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {iconPath(stat.iconId)}
                  </svg>
                </div>
              </div>
              <p className="relative z-10 text-3xl sm:text-4xl font-black mb-2 tracking-tight">
                {stat.value}
              </p>
              <h3 className="relative z-10 text-sm sm:text-base font-bold text-slate-300 mb-1">
                {stat.title}
              </h3>
              <p className="relative z-10 text-xs text-slate-400 hidden sm:block font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Regions */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-xl font-extrabold text-slate-900 text-center mb-8 tracking-tight">
            Service Regions
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {serviceRegions.map((region) => (
              <div
                key={region.id}
                className={`rounded-2xl p-4 sm:p-5 text-center transition-all duration-300 border ${
                  region.isHQ
                    ? "bg-emerald-50/50 border-emerald-200 shadow-sm"
                    : "bg-slate-50 border-slate-100 hover:bg-emerald-50 hover:border-emerald-200"
                }`}
              >
                <div className="flex justify-center mb-2">
                  <svg className={`w-5 h-5 ${region.isHQ ? "text-emerald-600" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-slate-900">
                  {region.city}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {region.state}
                </p>
                {region.isHQ && (
                  <span className="inline-block mt-3 px-2.5 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm shadow-emerald-600/20">
                    HQ
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function iconPath(iconId) {
  switch (iconId) {
    case 'map-pin':
      return (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      );
    case 'check-circle':
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />;
    case 'zap':
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />;
    case 'users':
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />;
    default:
      return <circle cx="12" cy="12" r="10" strokeWidth="2" />;
  }
}
