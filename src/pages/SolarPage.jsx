/**
 * SOLAR SOLUTIONS PAGE
 * Hub page for all solar power plant solutions.
 * Links to individual On-Grid, Off-Grid, Hybrid, and Ground-Mounted detail pages.
 */

import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

const solarSolutions = [
  {
    title: "On-Grid Solar Systems",
    description: "Grid-tied solar with net-metering. The grid acts as your virtual battery.",
    href: "/solutions/solar/on-grid",
    image: "/pdf-images/page_2_img_1.jpg",
  },
  {
    title: "Off-Grid Solar Systems",
    description: "Complete energy independence with battery storage and DG backup.",
    href: "/solutions/solar/off-grid",
    image: "/pdf-images/page_4_img_1.jpg",
  },
  {
    title: "Hybrid Solar Systems",
    description: "Grid + Battery + Backup — intelligent energy management for reliability.",
    href: "/solutions/solar/hybrid",
    image: "/pdf-images/page_4_img_1.jpg",
  },
  {
    title: "Ground-Mounted Solar Plants",
    description: "MW-scale utility solar with 10-step EPC engineering and SCADA monitoring.",
    href: "/solutions/solar/ground-mounted",
    image: "/pdf-images/page_5_img_1.jpg",
  },
];

export default function SolarPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-slate-900">
        <img
          src="/pdf-images/page_5_img_1.jpg"
          alt="Solar Power Plants"
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
            Solar Power Plants
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-lg">
            Comprehensive EPC solutions for On-Grid, Off-Grid, Hybrid, and MW-Scale Ground-Mounted solar installations.
          </p>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            subtitle="Solutions"
            title="Choose Your Solar Configuration"
            description="Each solar architecture is engineered for specific use cases — from residential cost savings to industrial energy independence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {solarSolutions.map((solution) => (
              <Link key={solution.title} to={solution.href} className="block group">
                <Card
                  className="p-0 overflow-hidden border-0 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]"
                  hoverEffect={false}
                >
                  <div className="h-52 overflow-hidden">
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
                      Learn More
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
