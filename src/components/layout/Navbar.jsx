import { useState, useEffect } from 'react';
import Container from '../ui/Container';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: [
        'Solar Power Plants',
        'Wind & Hybrid',
        'Power Conditioning',
        'Specialized Systems'
      ]
    },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How We Work', href: '#process' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
    { name: 'Operational Reach', href: '#operational-reach' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle sticky navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section tracking
      const sectionIds = navLinks.map(link => link.href.substring(1));
      let current = 'home';
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on header height (~100px)
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`w-full transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white/95 backdrop-blur-sm py-4 md:py-6 border-b border-slate-100'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2 cursor-pointer shrink-0">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-600/30">
              U
            </div>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Urjaa<span className="text-emerald-600">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4 gap-3 xl:gap-5 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className={`flex items-center gap-1 text-[11px] xl:text-xs 2xl:text-sm font-bold uppercase tracking-wider transition-colors duration-200 whitespace-nowrap ${
                      isActive ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <svg
                        className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>

                  {link.dropdown && (
                    <div
                      className="
                        absolute
                        left-0
                        top-full
                        mt-3
                        w-72
                        bg-white
                        rounded-xl
                        shadow-2xl
                        border
                        border-slate-100
                        opacity-0
                        invisible
                        translate-y-2
                        group-hover:opacity-100
                        group-hover:visible
                        group-hover:translate-y-0
                        transition-all
                        duration-300
                        z-50
                      "
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#services"
                          className="block px-5 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <a 
              href="#contact" 
              className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2.5 xl:px-6 xl:py-3 bg-emerald-600 text-white font-bold text-xs xl:text-sm tracking-wide uppercase rounded-full shadow-[0_8px_20px_rgb(5,150,105,0.35)] hover:bg-emerald-700 hover:shadow-[0_12px_30px_rgb(5,150,105,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-in-out whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Request Consultation
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors z-50 relative"
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 w-3/4 max-w-sm h-screen bg-white shadow-2xl flex flex-col p-8 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex flex-col gap-6 mt-16">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 text-lg font-bold uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-emerald-600' : 'text-slate-800 hover:text-emerald-600'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 mt-4 bg-emerald-600 text-white font-bold text-sm tracking-wide uppercase rounded-full shadow-[0_8px_20px_rgb(5,150,105,0.35)] hover:bg-emerald-700 hover:shadow-[0_12px_30px_rgb(5,150,105,0.45)] active:translate-y-0 transition-all duration-300 ease-in-out"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
