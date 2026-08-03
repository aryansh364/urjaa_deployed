import Container from '../../ui/Container';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900"
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1509391366360-51590abbd4c1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
      </div>

      <Container className="relative z-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold tracking-widest uppercase text-xs sm:text-sm rounded-full mb-6 backdrop-blur-sm">
            Empowering the Future
          </span>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Clean Energy for a <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              Sustainable World
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-medium">
            Urjaa Solutions is a premier EPC provider driving industrial and commercial sustainability through cutting-edge solar, wind, and hybrid energy infrastructure.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#services" 
              className="px-8 py-3.5 bg-emerald-600 text-white font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_8px_30px_rgb(5,150,105,0.3)] hover:bg-emerald-500 hover:shadow-[0_12px_40px_rgb(5,150,105,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Explore Solutions
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-white/10 text-white font-bold text-sm tracking-widest uppercase rounded-full border border-white/20 backdrop-blur-md hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              Talk to Experts
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}