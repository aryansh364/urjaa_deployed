import { whyUsData } from "../../../data/whyUs";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Card from "../../ui/Card";

function renderIcon(iconId) {
  const baseClasses = "w-6 h-6 text-emerald-600";

  switch (iconId) {
    case "tool":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "grid":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      );
    case "zap":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "briefcase":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-emerald-50/50 blur-3xl" />
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

          <div className="lg:w-2/5 flex-shrink-0">
            <SectionTitle
              subtitle="Why Choose Us"
              title="Renewable Energy Engineering the Power Grids"
              description="Urjaa Solutions brings multi-domain expertise and full-cycle project delivery to every renewable energy challenge — from rooftop to industrial scale."
              alignment="left"
            />
          </div>

          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUsData.map((item) => (
                <Card key={item.id} className="p-8 flex flex-col items-start group" hoverEffect={true}>
                  <div className="mb-5 p-3.5 bg-emerald-50 rounded-2xl text-emerald-600 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-emerald-100">
                    {renderIcon(item.iconId)}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
