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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 md:mt-16">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="group bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-emerald-100"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-50 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-inner overflow-hidden">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain p-2 mix-blend-multiply grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <span className="text-slate-400 font-extrabold text-2xl sm:text-3xl group-hover:text-emerald-600 transition-colors duration-500">
                    {client.name.charAt(0)}
                  </span>
                )}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 transition-colors duration-300 group-hover:text-emerald-700">
                {client.name}
              </h3>
              <p className="text-xs text-slate-400 font-semibold tracking-widest uppercase">
                {client.industry}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
