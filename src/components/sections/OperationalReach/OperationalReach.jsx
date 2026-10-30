/**
 * OPERATIONAL REACH
 * Per PDF: Remove India Map & state cards.
 * Replace with PAN India & International Projects focus.
 */

import { operationalHighlights } from "../../../data/operationalReach";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Card from "../../ui/Card";

function renderIcon(iconId) {
  const baseClasses = "w-7 h-7 text-emerald-600";
  switch (iconId) {
    case "globe":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
    case "plane":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      );
    case "mountain":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 21l6-9 4 5 4-7 4 11H3z" />
        </svg>
      );
    case "zap":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
        </svg>
      );
  }
}

export default function OperationalReach() {
  return (
    <section id="operational-reach" className="py-24 md:py-32 bg-slate-50">
      <Container>
        <SectionTitle
          subtitle="Operational Reach"
          title="PAN India & International Projects"
          description="On-site engineering and project management across complex terrains, urban centres, and international locations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 md:mt-20">
          {operationalHighlights.map((item) => (
            <Card
              key={item.id}
              className="p-8 flex flex-col items-start group"
              hoverEffect={true}
            >
              <div className="mb-6 p-4 bg-emerald-50 rounded-2xl text-emerald-600 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-emerald-100">
                {renderIcon(item.iconId)}
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Capability Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            Engineering Excellence, Everywhere
          </h3>
          <p className="text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Delivering turnkey EPC solutions across diverse industrial belts, commercial hubs, defence zones, and remote terrains — with nationwide mobilization across PAN India and expanding international deployments.
          </p>
        </div>
      </Container>
    </section>
  );
}
