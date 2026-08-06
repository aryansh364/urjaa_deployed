<<<<<<< HEAD
import Container from "../../ui/Container";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1509391366360-51590abbd4c1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
      </div>

      <Container className="relative z-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold tracking-widest uppercase text-xs sm:text-sm rounded-full mb-6 backdrop-blur-sm">
            Urjaa Solutions
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Renewable Energy Engineering
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              for Every Scale
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-medium">
            From residential rooftops to megawatt-scale industrial grids and
            defense infrastructure. Delivering turnkey EPC, hybrid wind-solar
            systems, and advanced power conditioning.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_8px_20px_rgb(5,150,105,0.35)] hover:bg-emerald-500 hover:shadow-[0_12px_30px_rgb(5,150,105,0.50)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-in-out"
            >
              Book Free Site Visit
            </a>

            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-full border border-white/50 backdrop-blur-lg hover:bg-white/30 hover:border-white/70 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-in-out"
            >
              Our Expertise
            </a>
          </div>
        </div>
      </Container>
=======
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
>>>>>>> origin/ujjwal_dev
    </section>
  );
}
