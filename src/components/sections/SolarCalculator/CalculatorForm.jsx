import Card from "../../ui/Card";

export default function CalculatorForm({ setResults }) {
  const handleCalculate = () => {
    setResults({
      systemSize: "4 kW",
      annualSavings: "₹60,000",
      co2Reduction: "4.5 Tons",
      payback: "4 Years",
    });
  };

  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Solar Savings Calculator
      </h3>

      <p className="text-gray-600 mb-8">
        Estimate your ideal solar system based on your electricity usage.
      </p>

      <form className="space-y-6">
        {/* Monthly Bill */}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Monthly Electricity Bill (₹)
          </label>

          <input
            type="number"
            placeholder="Eg. 5000"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        {/* Property Type */}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Property Type
          </label>

          <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition">
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>
        </div>

        {/* Units */}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Average Monthly Units (kWh)
          </label>

          <input
            type="number"
            placeholder="Eg. 450"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
        >
          Calculate Savings
        </button>
      </form>
    </Card>
  );
}
