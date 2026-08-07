import Card from "../../ui/Card";
import CountUp from "react-countup";

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
    <Card className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-950 to-slate-800 text-white border-slate-800 shadow-[0_24px_70px_rgb(15,23,42,0.22)]">
      <h3 className="text-2xl font-bold mb-2">
        Estimated Results
      </h3>

      <p className="text-slate-300 mb-8">
        Your estimated solar investment analysis.
      </p>

      <div className="space-y-5">
        {resultItems.map((item) => {
          const raw = results[item.key];

          const numericValue = parseFloat(String(raw).replace(/[^\d.]/g, ""));

          return (
            <div
              key={item.key}
              className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/[0.06] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-400/15 text-emerald-300 flex items-center justify-center">
                  <ResultIcon iconId={item.iconId} />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">{item.label}</p>

                  <h4 className="text-xl sm:text-2xl font-black text-emerald-300">
                    {!hasResults ? (
                      "--"
                    ) : item.animated ? (
                      <>
                        {item.prefix}

                        <CountUp
                          key={numericValue}
                          end={isNaN(numericValue) || numericValue === null ? 0 : numericValue}
                          duration={2}
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
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center text-slate-300">
          Fill the form and click{" "}
          <span className="text-emerald-300 font-semibold">
            Calculate Savings
          </span>
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
