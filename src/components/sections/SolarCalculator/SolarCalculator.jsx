import { useState } from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import CalculatorForm from "./CalculatorForm";
import ResultCard from "./ResultCard";

export default function SolarCalculator() {
  // Form Data
  const [formData, setFormData] = useState({
    bill: "",
    state: "",
    propertyType: "",
    units: "",
  });

  // Results
  const [results, setResults] = useState({
    systemSize: "--",
    annualSavings: "--",
    co2Reduction: "--",
    payback: "--",
  });

  return (
    <section id="solar-calculator" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionTitle
          subtitle="Solar Calculator"
          title="Estimate Your Solar Savings"
          description="Calculate your recommended solar system size, annual savings, payback period, and environmental impact in just a few seconds."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          <CalculatorForm
            formData={formData}
            setFormData={setFormData}
            setResults={setResults}
          />

          <ResultCard results={results} />
        </div>
      </Container>
    </section>
  );
}
