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
              className="bg-green-600 rounded-2xl p-6 sm:p-8 text-center text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {iconPath(stat.iconId)}
                  </svg>
                </div>
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold mb-2">
                {stat.value}
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-green-100 mb-1">
                {stat.title}
              </h3>
              <p className="text-xs text-green-200 hidden sm:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Regions */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            Service Regions
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {serviceRegions.map((region) => (
              <div
                key={region.id}
                className={`rounded-xl p-4 sm:p-5 text-center transition-all duration-300 border ${
                  region.isHQ
                    ? "bg-green-50 border-green-200 shadow-sm"
                    : "bg-gray-50 border-gray-100 hover:bg-green-50 hover:border-green-200"
                }`}
              >
                <div className="flex justify-center mb-2">
                  <svg className={`w-5 h-5 ${region.isHQ ? "text-green-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-gray-900">
                  {region.city}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {region.state}
                </p>
                {region.isHQ && (
                  <span className="inline-block mt-2 px-2 py-0.5 bg-green-600 text-white text-[10px] font-semibold rounded-full uppercase tracking-wider">
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
