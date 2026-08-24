import { useState } from "react";
import Card from "../../ui/Card";
import { indianStates, highIrradianceStates } from "../../../data/indianStates";

export default function CalculatorForm({ formData, setFormData, setResults }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const nextErrors = {};
    const bill = Number(formData.bill);
    const units = Number(formData.units);

    if (!formData.state) {
      nextErrors.state = "Please select your state.";
    }

    if (!formData.propertyType) {
      nextErrors.propertyType = "Please select a property type.";
    }

    if (!formData.bill || bill <= 0) {
      nextErrors.bill = "Monthly bill must be a positive amount.";
    }

    if (!formData.units || units <= 0) {
      nextErrors.units = "Monthly units must be a positive number.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleCalculate = () => {
    try {
      if (!validate()) return;

      const bill = Number(formData.bill);
      const units = Number(formData.units);
      const stateFactor = highIrradianceStates.has(formData.state) ? 0.95 : 1;
      const propertyFactor =
        formData.propertyType === "Industrial"
          ? 1.08
          : formData.propertyType === "Commercial"
            ? 1.04
            : 1;

      const systemSize = ((units / 90) * stateFactor * propertyFactor).toFixed(1);
      const annualSavings = (bill * 12 * 0.82).toFixed(0);
      const co2Reduction = (Number(systemSize) * 1.2).toFixed(1);
      const payback = bill > 9000 ? "3 Years" : bill > 5000 ? "4 Years" : "5 Years";

      setResults({
        systemSize: `${systemSize} kW`,
        annualSavings: `₹${annualSavings}`,
        co2Reduction: `${co2Reduction} Tons`,
        payback,
      });
    } catch (err) {
      console.error("Calculation error:", err);
    }
  };

  return (
    <Card className="p-6 sm:p-8 lg:p-10">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">
        Solar Savings Calculator
      </h3>

      <p className="text-slate-600 mb-8">
        Estimate your ideal solar system based on your electricity usage.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="solar-state" className="block text-sm font-semibold text-slate-700 mb-2">
            Select State
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600">
              <svg className="h-5 w-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10.5h.01" />
              </svg>
            </span>

            <select
              id="solar-state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-12 py-4 text-slate-800 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              aria-invalid={Boolean(errors.state)}
              aria-describedby={errors.state ? "solar-state-error" : undefined}
            >
              <option value="">Select your state</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg className="h-5 w-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>

          {errors.state && (
            <p id="solar-state-error" className="text-red-500 text-sm mt-2">
              {errors.state}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="solar-bill" className="block text-sm font-semibold text-slate-700 mb-2">
            Monthly Electricity Bill (₹)
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600 font-bold">
              ₹
            </span>

            <input
              id="solar-bill"
              type="number"
              min="1"
              name="bill"
              value={formData.bill}
              onChange={handleChange}
              placeholder="Eg. 5000"
              className="w-full rounded-2xl border border-slate-200 bg-white px-12 py-4 text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              aria-invalid={Boolean(errors.bill)}
              aria-describedby={errors.bill ? "solar-bill-error" : undefined}
            />
          </div>

          {errors.bill && (
            <p id="solar-bill-error" className="text-red-500 text-sm mt-2">
              {errors.bill}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="solar-property-type" className="block text-sm font-semibold text-slate-700 mb-2">
            Property Type
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600">
              <svg className="h-5 w-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" />
              </svg>
            </span>

            <select
              id="solar-property-type"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-12 py-4 text-slate-800 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              aria-invalid={Boolean(errors.propertyType)}
              aria-describedby={errors.propertyType ? "solar-property-error" : undefined}
            >
              <option value="">Select property type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg className="h-5 w-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>

          {errors.propertyType && (
            <p id="solar-property-error" className="text-red-500 text-sm mt-2">
              {errors.propertyType}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="solar-units" className="block text-sm font-semibold text-slate-700 mb-2">
            Average Monthly Units (kWh)
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600">
              <svg className="h-5 w-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>

            <input
              id="solar-units"
              type="number"
              min="1"
              name="units"
              value={formData.units}
              onChange={handleChange}
              placeholder="Eg. 450"
              className="w-full rounded-2xl border border-slate-200 bg-white px-12 py-4 text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              aria-invalid={Boolean(errors.units)}
              aria-describedby={errors.units ? "solar-units-error" : undefined}
            />
          </div>

          {errors.units && (
            <p id="solar-units-error" className="text-red-500 text-sm mt-2">
              {errors.units}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          className="w-full rounded-2xl bg-emerald-600 py-4 font-bold text-white shadow-[0_14px_30px_rgb(5,150,105,0.28)] transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          Calculate Savings
        </button>
      </form>
    </Card>
  );
}
