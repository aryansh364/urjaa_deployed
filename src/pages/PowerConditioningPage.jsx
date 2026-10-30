/**
 * POWER CONDITIONING & STORAGE PAGE
 * Hub page for UPS, Battery, SCVS, and BESS solutions.
 */

import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

const powerSolutions = [
  {
    title: "UPS Systems",
    subtitle: "Uninterruptible Power Supply",
    description: "Industrial-grade online double-conversion UPS systems providing zero-millisecond transfer for critical loads.",
    href: "/solutions/power-conditioning/ups",
    image: "/pdf-images/page_19_img_1.jpg",
  },
  {
    title: "Battery Solutions",
    subtitle: "Application-Specific Storage",
    description: "Engineered battery storage systems tailored to high-rate industrial duty cycles, extreme temps, and custom BMS.",
    href: "/solutions/power-conditioning/battery",
    image: "/pdf-images/page_19_img_1.jpg",
  },
  {
    title: "Servo Controlled Voltage Stabilizers",
    subtitle: "±0.5% Dynamic Precision Regulation",
    description: "Fast-acting servo voltage correction protecting CNC, medical imaging, and industrial automation equipment.",
    href: "/solutions/power-conditioning/scvs",
    image: "/pdf-images/page_19_img_1.jpg",
  },
  {
    title: "BESS — Battery Energy Storage Systems",
    subtitle: "Grid-Scale Energy Storage",
    description: "Containerized energy storage for industrial peak shaving, demand charge management, and frequency regulation.",
    href: "/solutions/power-conditioning/bess",
    image: "/pdf-images/page_4_img_1.jpg",
  },
];

export default function PowerConditioningPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-slate-900">
        <img
          src="/pdf-images/page_19_img_1.jpg"
          alt="Power Conditioning & Storage"
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
            Power Conditioning & Energy Storage
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-lg">
            Mission-critical electrical protection, precision voltage regulation, industrial UPS, and containerized utility BESS deployments.
          </p>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            subtitle="Solutions"
            title="Industrial Power Defense & Grid Storage"
            description="Protect sensitive machinery from utility disturbances, eliminate peak demand tariffs, and ensure business continuity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {powerSolutions.map((solution) => (
              <Link key={solution.title} to={solution.href} className="block group">
                <Card
                  className="p-0 overflow-hidden border-0 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]"
                  hoverEffect={false}
                >
                  <div className="h-52 overflow-hidden bg-slate-800">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                      {solution.subtitle}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-slate-500 mb-4">{solution.description}</p>
                    <span className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm">
                      Technical Specifications & Checklists
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
