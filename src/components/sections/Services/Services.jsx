import { servicesData } from '../../../data/services';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';

// Helper function to map iconIds from services.js to inline SVGs
function renderIcon(iconId) {
  const baseClasses = "w-6 h-6 text-white";

  switch (iconId) {
    case 'wind':
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A4 4 0 002 9.259V12m0 0l3.197 2.132A4 4 0 0015 14.741V12m0 0l-3.197-2.132M2 12l3.197 2.132" />
        </svg>
      );
    case 'layers':
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case 'activity':
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'settings':
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50">
      <Container>
        <SectionTitle
          subtitle="Our Services"
          title="Detailed Service Domains"
          description="Delivering expertise across wind & micro wind systems, hybrid energy solutions, power conditioning, and specialized deployments engineered for reliable and efficient energy infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 md:mt-16">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              className="p-0 overflow-hidden flex flex-col group border-0 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]"
              hoverEffect={false}
            >
              {/* Image Section */}
              <div className="relative h-52 overflow-hidden">
                {service.imageUrl ? (
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-emerald-100" />
                )}
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 p-3 bg-emerald-600/90 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 group-hover:bg-emerald-500 group-hover:scale-110">
                  {renderIcon(service.iconId)}
                </div>
              </div>

              {/* Text Section */}
              <div className="p-6 flex flex-col flex-1 bg-white">
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium flex-1">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
