import Card from "../../ui/Card";

export default function ResultCard({ results }) {
  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        Estimated Results
      </h3>

      <div className="space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <span className="text-gray-600">Recommended System</span>

          <span className="text-xl font-bold text-green-600">
            {results.systemSize}
          </span>
        </div>

        <div className="flex justify-between items-center border-b pb-4">
          <span className="text-gray-600">Annual Savings</span>

          <span className="text-xl font-bold text-green-600">
            {results.annualSavings}
          </span>
        </div>

        <div className="flex justify-between items-center border-b pb-4">
          <span className="text-gray-600">CO₂ Reduction</span>

          <span className="text-xl font-bold text-green-600">
            {results.co2Reduction}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Payback Period</span>

          <span className="text-xl font-bold text-green-600">
            {results.payback}
          </span>
        </div>
      </div>
    </Card>
  );
}
