import { servicesData } from '../../../data/services';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';

// Helper function to map iconIds from services.js to inline SVGs 
// This avoids installing third-party icon libraries while maintaining visual distinction.
function renderIcon(iconId) {
  const baseClasses = "w-7 h-7 text-emerald-600";
  
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
            <Card key={service.id} className="p-8 flex flex-col items-start text-left group">
              <div className="mb-6 p-4 bg-emerald-50 rounded-2xl text-emerald-600 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-emerald-100">
                {renderIcon(service.iconId)}
              </div>
              
              <h3 className="text-lg font-extrabold text-slate-900 mb-3 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
