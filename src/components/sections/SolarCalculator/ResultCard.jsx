import Card from "../../ui/Card";
import CountUp from "react-countup";

const resultItems = [
  {
    label: "Recommended System",
    key: "systemSize",
    icon: "⚡",
    unit: " kW",
    numeric: true,
  },
  {
    label: "Annual Savings",
    key: "annualSavings",
    icon: "💰",
    prefix: "₹",
    numeric: true,
  },
  {
    label: "CO₂ Reduction",
    key: "co2Reduction",
    icon: "🌱",
    unit: " Tons",
    numeric: true,
  },
  {
    label: "Payback Period",
    key: "payback",
    icon: "⏳",
    unit: " Years",
    numeric: true,
  },
];

export default function ResultCard({ results }) {
  const hasResults = results.systemSize !== "--";

  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Estimated Results
      </h3>

      <p className="text-gray-600 mb-8">
        Your estimated solar investment analysis.
      </p>

      <div className="space-y-5">
        {resultItems.map((item) => {
          const value = parseFloat(results[item.key]);

          return (
            <div
              key={item.key}
              className="flex items-center justify-between p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-green-50 transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <div>
                  <p className="text-gray-500 text-sm">{item.label}</p>

                  <h4 className="text-xl font-bold text-green-600">
                    {hasResults ? (
                      <>
                        {item.prefix}

                        <CountUp
                          end={isNaN(value) ? 0 : value}
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
                      "--"
                    )}
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!hasResults && (
        <div className="mt-8 text-center text-gray-500">
          Fill the form and click
          <span className="text-green-600 font-semibold">
            {" "}
            Calculate Savings
          </span>
          .
        </div>
      )}
    </Card>
  );
}
