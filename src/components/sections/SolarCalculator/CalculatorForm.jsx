import Card from "../../ui/Card";

export default function CalculatorForm({ formData, setFormData, setResults }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCalculate = () => {
    const bill = Number(formData.bill);
    const units = Number(formData.units);

    // Validation
    if (!bill || !units) {
      alert("Please enter both Monthly Bill and Monthly Units.");
      return;
    }

    // Simple demo calculations
    const systemSize = (units / 90).toFixed(1);
    const annualSavings = (bill * 12 * 0.8).toFixed(0);
    const co2Reduction = (systemSize * 1.2).toFixed(1);
    const payback = bill > 7000 ? "3 Years" : "4 Years";

    setResults({
      systemSize: `${systemSize} kW`,
      annualSavings: `₹${annualSavings}`,
      co2Reduction: `${co2Reduction} Tons`,
      payback,
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

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleCalculate();
        }}
      >
        {/* Monthly Bill */}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Monthly Electricity Bill (₹)
          </label>

          <input
            type="number"
            name="bill"
            value={formData.bill}
            onChange={handleChange}
            placeholder="Eg. 5000"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        {/* Property Type */}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Property Type
          </label>

          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>

        {/* Units */}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Average Monthly Units (kWh)
          </label>

          <input
            type="number"
            name="units"
            value={formData.units}
            onChange={handleChange}
            placeholder="Eg. 450"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
        >
          Calculate Savings
        </button>
      </form>
    </Card>
  );
}
