/**
 * SOLUTION DETAIL PAGE
 * Renders a comprehensive technical deep-dive view for each solution.
 * Shows: hero image, overview, key components, operating behavior tables,
 * checklists, advantages, EPC steps, and execution framework.
 */

import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

function SectionBlock({ title, children }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function SolutionDetail({ solution }) {
  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-28">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Solution Not Found</h1>
          <p className="text-slate-500 mb-8">The requested solution page does not exist.</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden bg-slate-900">
        <img
          src={solution.heroImage}
          alt={solution.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
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
          {solution.subtitle && (
            <span className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold tracking-widest uppercase text-xs rounded-full backdrop-blur-sm mb-4 self-start">
              {solution.subtitle}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {solution.title}
          </h1>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <SectionBlock title="Overview">
              <p className="text-slate-600 leading-relaxed text-lg">{solution.overview}</p>
            </SectionBlock>

            {/* Technical Diagram from PDF */}
            {solution.diagramImage && (
              <SectionBlock title="Technical Architecture & System Diagram">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={solution.diagramImage}
                    alt={`${solution.title} Technical Architecture Diagram`}
                    className="w-full h-auto rounded-xl object-contain max-h-[500px] mx-auto"
                  />
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-medium px-2">
                    <span>Engineering Schematic & Operational Architecture</span>
                    <span className="text-emerald-600 font-semibold">Urja Solutions Technical Documentation</span>
                  </div>
                </div>
              </SectionBlock>
            )}

            {/* Project Gallery from PDF */}
            {solution.gallery && (
              <SectionBlock title="Project Execution Photography">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {solution.gallery.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <img
                        src={imgUrl}
                        alt={`${solution.title} Project Execution ${idx + 1}`}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white text-xs font-bold tracking-wide">
                          MW Scale Utility Execution
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* Key Components */}
            {solution.keyComponents && (
              <SectionBlock title="Key Components">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {solution.keyComponents.map((component, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span className="text-slate-700 font-medium">{component}</span>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* Key Features */}
            {solution.keyFeatures && (
              <SectionBlock title="Key Features">
                <div className="grid grid-cols-1 gap-4">
                  {solution.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* Operating Behavior Table */}
            {solution.operatingBehavior && (
              <SectionBlock title="Operating Behavior">
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Condition</th>
                        <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">System Behavior</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {solution.operatingBehavior.map((row, idx) => (
                        <tr key={idx} className="hover:bg-emerald-50/50 transition-colors">
                          <td className="px-6 py-5 font-bold text-slate-900 align-top whitespace-nowrap">
                            {row.condition}
                          </td>
                          <td className="px-6 py-5 text-slate-600 leading-relaxed">
                            {row.behavior}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SectionBlock>
            )}

            {/* Synergy Table (Wind-Solar Hybrid) */}
            {solution.synergy && (
              <SectionBlock title={solution.synergy.title}>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        <th className="px-5 py-4 font-bold text-sm uppercase tracking-wider">Period</th>
                        <th className="px-5 py-4 font-bold text-sm uppercase tracking-wider">Solar</th>
                        <th className="px-5 py-4 font-bold text-sm uppercase tracking-wider">Wind</th>
                        <th className="px-5 py-4 font-bold text-sm uppercase tracking-wider">Combined Output</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {solution.synergy.points.map((row, idx) => (
                        <tr key={idx} className="hover:bg-emerald-50/50 transition-colors">
                          <td className="px-5 py-4 font-bold text-slate-900">{row.period}</td>
                          <td className="px-5 py-4 text-slate-600">{row.solar}</td>
                          <td className="px-5 py-4 text-slate-600">{row.wind}</td>
                          <td className="px-5 py-4 text-slate-600">{row.combined}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SectionBlock>
            )}

            {/* EPC Steps (Ground-Mounted) */}
            {solution.epcSteps && (
              <SectionBlock title="10-Step EPC Engineering Workflow">
                <div className="space-y-6">
                  {solution.epcSteps.map((step) => (
                    <div
                      key={step.step}
                      className="relative pl-16 pb-6 border-l-2 border-emerald-200 last:border-l-0"
                    >
                      <div className="absolute left-0 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* Execution Framework */}
            {solution.executionFramework && (
              <SectionBlock title="Urja Solutions 7-Phase Execution Framework">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {solution.executionFramework.map((phase) => (
                    <div
                      key={phase.phase}
                      className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100"
                    >
                      <span className="text-4xl font-black text-emerald-500/20">{phase.phase}</span>
                      <h4 className="text-base font-extrabold text-slate-900 mt-1 mb-1">
                        {phase.title}
                      </h4>
                      <p className="text-slate-500 text-sm">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* Quality Matters */}
            {solution.qualityMatters && (
              <SectionBlock title={solution.qualityMatters.title}>
                <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
                  <ul className="space-y-3">
                    {solution.qualityMatters.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="text-slate-700 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionBlock>
            )}

            {/* Generation Analysis */}
            {solution.generationAnalysis && (
              <SectionBlock title={solution.generationAnalysis.title}>
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                  <p className="text-slate-700 leading-relaxed">{solution.generationAnalysis.description}</p>
                </div>
              </SectionBlock>
            )}

            {/* BESS Applications */}
            {solution.applications && (
              <SectionBlock title="Applications">
                <div className="space-y-3">
                  {solution.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* BESS Chemistries */}
            {solution.chemistries && (
              <SectionBlock title="Battery Chemistries">
                <div className="grid grid-cols-1 gap-4">
                  {solution.chemistries.map((chem, idx) => (
                    <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white">
                      <h4 className="font-extrabold text-slate-900 mb-3">{chem.type}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Advantages</span>
                          <p className="text-slate-700 text-sm mt-1">{chem.pros}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-amber-50 border border-amber-100">
                          <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Considerations</span>
                          <p className="text-slate-700 text-sm mt-1">{chem.cons}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* Feasibility Checklist */}
            {solution.feasibilityChecklist && (
              <SectionBlock title="Feasibility Checklist">
                <div className="space-y-3">
                  {solution.feasibilityChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                      <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* Checklist */}
            {solution.checklist && (
              <SectionBlock title="Engineering Checklist">
                <div className="space-y-3">
                  {solution.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                      <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* Advantages */}
            {solution.advantages && (
              <SectionBlock title="Advantages">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {solution.advantages.map((adv, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100"
                    >
                      <svg className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 font-medium">{adv}</span>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* Ideal For */}
            {solution.idealFor && (
              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                <h3 className="text-xl font-extrabold mb-3">Ideal For</h3>
                <p className="text-emerald-100 leading-relaxed">{solution.idealFor}</p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
