import Button from "../../ui/Button";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">

        <h1 className="text-5xl font-bold mb-6">
          Renewable Energy Engineering
          <br />
          For Every Scale
        </h1>

        <p className="text-gray-600 mb-8">
          From residential rooftops to megawatt-scale
          industrial projects.
        </p>

        <div className="flex gap-4 justify-center">

          <Button>
            Request Consultation
          </Button>

          <Button variant="outline">
            Our Expertise
          </Button>

        </div>

      </div>
    </section>
  );
}

export default Hero;