import { clientsData } from '../../../data/clients';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

export default function ClientShowcase() {
  return (
    <section id="clients" className="py-20 md:py-28 bg-gray-50">
      <Container>
        <SectionTitle
          subtitle="Our Clients"
          title="Trusted by Industry Leaders"
          description="Partnering with leading organizations across government, enterprise, and the renewable energy sector."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12 md:mt-16">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="group bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:border-emerald-100"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-50 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-emerald-50">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <span className="text-emerald-600 font-bold text-lg sm:text-xl">
                    {client.name.charAt(0)}
                  </span>
                )}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
                {client.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                {client.industry}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
