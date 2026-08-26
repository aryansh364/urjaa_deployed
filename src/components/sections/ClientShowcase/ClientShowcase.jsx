import { clientsData } from '../../../data/clients';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

export default function ClientShowcase() {
  return (
    <section id="clients" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl -z-10" />
      
      <Container>
        <SectionTitle
          subtitle="Our Clients"
          title="Trusted by Industry Leaders & Government Powerhouses"
          description="Delivering mission-critical energy infrastructure to India's most demanding sectors."
        />

        <div className="mt-12 md:mt-16 relative flex overflow-hidden py-4">
          {/* Fading edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee hover-pause gap-6 lg:gap-8 pr-6 lg:pr-8">
            {[...clientsData, ...clientsData].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="w-64 flex-shrink-0 group bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-emerald-100"
              >
                <div className="h-24 sm:h-32 w-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-[85%] max-h-[85%] object-contain mix-blend-multiply transition-all duration-500"
                    />
                  ) : (
                    <span className="text-slate-300 font-extrabold text-4xl sm:text-5xl group-hover:text-emerald-600 transition-colors duration-500">
                      {client.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
                  {client.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
