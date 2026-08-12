import Container from "../../ui/Container";
import hybridEnergyHero from "../../../assets/hybrid_energy_hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-36 pb-16 overflow-hidden bg-slate-900"
    >
      {/* Background Image/Glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900 z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1509391366360-51590abbd4c1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
      </div>

      <Container className="relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold tracking-widest uppercase text-xs sm:text-sm rounded-full backdrop-blur-sm">
              Urjaa Solutions
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Renewable Energy Engineering
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                for Every Scale
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">
              From residential rooftops to megawatt-scale industrial grids and
              defense infrastructure. Delivering turnkey EPC, hybrid wind-solar
              systems, and advanced power conditioning.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_8px_20px_rgb(5,150,105,0.35)] hover:bg-emerald-700 hover:shadow-[0_12px_30px_rgb(5,150,105,0.50)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-in-out"
              >
                Book Free Site Visit
              </a>

              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-bold text-sm tracking-widest uppercase rounded-full border border-white/20 backdrop-blur-lg hover:bg-white/20 hover:border-white/45 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-in-out"
              >
                Our Expertise
              </a>
            </div>
          </div>

          {/* Right Column: Premium Image Illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[450px] lg:max-w-none group">
              
              {/* Outer soft glowing background blur */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 opacity-70 blur-2xl group-hover:opacity-95 transition-opacity duration-500" />
              
              {/* Image Frame Container */}
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-2.5 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-emerald-500/30">
                <img
                  src={hybridEnergyHero}
                  alt="Hybrid Renewable Energy (Solar & Wind)"
                  className="rounded-xl w-full object-cover aspect-[4/3] sm:aspect-square lg:aspect-auto shadow-lg transform group-hover:scale-[1.01] transition-transform duration-500"
                />
                
                {/* Floating Glassmorphic Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-white/10 bg-slate-950/80 backdrop-blur-md shadow-lg flex items-center gap-3">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Smart Hybrid Grid</p>
                    <p className="text-[10px] text-slate-400 font-medium">Solar + Wind + Energy Storage Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
