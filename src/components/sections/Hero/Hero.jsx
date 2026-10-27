import { useState, useEffect, useCallback } from "react";
import Container from "../../ui/Container";
import { heroMetrics } from "../../../data/operationalReach";

const heroSlides = [
  {
    image: "/pdf-images/page_5_img_1.jpg",
    alt: "100+ MW Utility-Scale Ground-Mounted Solar Plant",
    caption: "100+ MW Utility Ground-Mounted Solar Plant",
  },
  {
    image: "/pdf-images/page_14_img_1.jpg",
    alt: "MW Scale Turnkey Solar EPC Infrastructure",
    caption: "MW Scale Turnkey Solar EPC Infrastructure",
  },
  {
    image: "/pdf-images/page_14_img_2.jpg",
    alt: "Turnkey Renewable Energy & Hybrid Power Systems",
    caption: "Turnkey Renewable Energy & Hybrid Systems",
  },
  {
    image: "/pdf-images/page_2_img_1.jpg",
    alt: "On-Grid Net-Metered Commercial Solar Installation",
    caption: "On-Grid Commercial Net-Metered Solar",
  },
  {
    image: "/pdf-images/page_4_img_1.jpg",
    alt: "Hybrid & Off-Grid Battery Storage Energy Systems",
    caption: "Hybrid & Off-Grid Battery Energy Systems",
  },
  {
    image: "/pdf-images/page_22_img_1.jpg",
    alt: "Autonomous Solar-Wind Hybrid Infrastructure",
    caption: "Autonomous Solar-Wind Hybrid Infrastructure",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-900"
    >
      {/* Background Slideshow */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            zIndex: currentSlide === index ? 1 : 0,
          }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80 z-[2]" />

      {/* Slideshow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-400 ${
              currentSlide === index
                ? "w-8 h-2.5 bg-emerald-500 shadow-[0_0_12px_rgb(16,185,129,0.6)]"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <Container className="relative z-20 w-full">
        <div className="max-w-4xl mx-auto text-center pt-28 pb-8">
          <span className="inline-block px-5 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold tracking-widest uppercase text-xs rounded-full backdrop-blur-sm mb-6">
            Urjaa Solutions
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            Renewable Energy
            <br className="hidden sm:block" />
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              for Every Scale
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium mb-8">
            Renewable energy engineering from kW to MW. Delivering turnkey Solar EPC, Wind Energy Systems, and Advanced Power Conditioning across PAN India and international projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
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

        {/* PDF-Mandated 1-Liner Metrics Banner */}
        <div className="mt-12 lg:mt-16 w-full">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {heroMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 md:px-10 py-5 text-center sm:text-left w-full sm:w-auto justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgb(16,185,129,0.6)]" />
                  <span className="text-white font-bold text-sm md:text-base tracking-wide">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
