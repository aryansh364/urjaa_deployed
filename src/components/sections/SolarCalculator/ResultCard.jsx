import { useState, useEffect } from "react";
import Card from "../../ui/Card";

// ─── Disclaimer wording ───────────────────────────────────────────────────────
// Edit this text when the client approves final legal wording.
const DISCLAIMER_TEXT =
  "Disclaimer: The results shown are indicative estimates based on the information " +
  "provided. Actual system capacity, savings, CO₂ reduction and payback period may vary " +
  "depending on location, electricity tariff, solar irradiation, site conditions, system " +
  "configuration, applicable government policies/subsidies and other site-specific factors. " +
  "Please contact Urjaa Solutions for a detailed site assessment and final proposal.";

function AnimatedNumber({ end, decimals }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 2000;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);
      setValue(end * ease);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end]);

  return <>{value.toFixed(decimals)}</>;
}

const resultItems = [
  {
    label: "Recommended System",
    key: "systemSize",
    iconId: "bolt",
    unit: " kW",
    prefix: "",
    animated: true,
  },
  {
    label: "Annual Savings",
    key: "annualSavings",
    iconId: "rupee",
    unit: "",
    prefix: "₹",
    animated: true,
  },
  {
    label: "CO₂ Reduction",
    key: "co2Reduction",
    iconId: "leaf",
    unit: " Tons",
    prefix: "",
    animated: true,
  },
  {
    label: "Payback Period",
    key: "payback",
    iconId: "clock",
    animated: false,
  },
];

export default function ResultCard({ results }) {
  const hasResults = results.systemSize !== "--";

  return (
    <Card className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 text-slate-800 border border-emerald-100 shadow-[0_24px_70px_rgba(5,150,105,0.10)]">
      <h3 className="text-2xl font-bold mb-2 text-emerald-800">
        Estimated Results
      </h3>

      <p className="text-emerald-700/70 mb-8 font-medium">
        Your estimated solar investment analysis.
      </p>

      <div className="space-y-5">
        {resultItems.map((item) => {
          const raw = results[item.key];

          const numericValue = parseFloat(String(raw).replace(/[^\d.]/g, ""));

          return (
            <div
              key={item.key}
              className="flex items-center justify-between p-5 rounded-2xl border border-emerald-100 bg-emerald-50/80 transition duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-100 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-[0_4px_14px_rgba(5,150,105,0.35)]">
                  <ResultIcon iconId={item.iconId} />
                </div>

                <div>
                  <p className="text-emerald-700/70 text-sm font-semibold">{item.label}</p>

                  <h4 className="text-xl sm:text-2xl font-black text-emerald-700">
                    {!hasResults ? (
                      "--"
                    ) : item.animated ? (
                      <>
                        {item.prefix}
                        <AnimatedNumber
                          end={isNaN(numericValue) || numericValue === null ? 0 : numericValue}
                          decimals={
                            item.key === "systemSize" ||
                            item.key === "co2Reduction"
                              ? 1
                              : 0
                          }
                        />
                        {item.unit}
                      </>
                    ) : (
                      raw
                    )}
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!hasResults && (
        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-100/60 p-4 text-center text-emerald-800">
          Fill the form and click{" "}
          <span className="text-emerald-600 font-bold underline underline-offset-2">
            Calculate Savings
          </span>
        </div>
      )}

      {/* Disclaimer — shown once results are displayed */}
      {hasResults && (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 flex gap-3">
          <div className="shrink-0 mt-0.5">
            <svg className="h-4 w-4 text-amber-500" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
          </div>
          <p className="text-xs text-amber-700 leading-relaxed">
            {DISCLAIMER_TEXT}
          </p>
        </div>
      )}
    </Card>
  );
}

function ResultIcon({ iconId }) {
  switch (iconId) {
    case "bolt":
      return (
        <svg className="h-6 w-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );

    case "rupee":
      return (
        <svg className="h-6 w-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5h12M6 9h12M9 5c5.5 0 5.5 8 0 8h-2l8 6" />
        </svg>
      );

    case "leaf":
      return (
        <svg className="h-6 w-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19c3-5 7-8 14-14" />
        </svg>
      );

    default:
      return (
        <svg className="h-6 w-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      );
  }
}
