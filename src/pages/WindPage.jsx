/**
 * WIND ENERGY SOLUTIONS PAGE
 * Hub page for Wind Energy & Hybrid Systems.
 * Links to Wind Energy Systems and Wind & Solar Hybrid Systems detail pages.
 */

import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

const windSolutions = [
  {
    title: "Wind Energy Systems",
    description: "Aerodynamic wind turbine power generation from kW to MW scale with low cut-in speeds.",
    href: "/solutions/wind/wind-energy",
    image: "/pdf-images/page_14_img_2.jpg",
  },
  {
    title: "Wind & Solar Hybrid Systems",
    description: "24/7 complementary energy mechanics combining daytime solar with night/monsoon wind generation.",
    href: "/solutions/wind/wind-solar-hybrid",
    image: "/pdf-images/page_14_img_2.jpg",
  },
];

export default function WindPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-slate-900">
        <img
          src="/pdf-images/page_14_img_2.jpg"
          alt="Wind Energy Systems"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/30" />
        <Container className="relative z-10 h-full flex flex-col justify-end pb-12">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm mb-4 hover:text-emerald-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Wind Energy Systems
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-lg">
            High-efficiency wind turbines and complementary wind-solar hybrid power plants engineered for continuous 24/7 industrial baseload.
          </p>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            subtitle="Solutions"
            title="Explore Wind & Hybrid Systems"
            description="Eliminate weather dependency and achieve year-round energy stability with synergistic renewable power generation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            {windSolutions.map((solution) => (
              <Link key={solution.title} to={solution.href} className="block group">
                <Card
                  className="p-0 overflow-hidden border-0 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]"
                  hoverEffect={false}
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-slate-500 mb-4">{solution.description}</p>
                    <span className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm">
                      Explore Technical Deep-Dive
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
