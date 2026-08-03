import { useState, useEffect } from 'react';
import Container from '../ui/Container';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle sticky navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white/95 backdrop-blur-sm py-4 md:py-6 border-b border-slate-100'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-600/30">
              U
            </div>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Urjaa<span className="text-emerald-600">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-emerald-600 uppercase tracking-wider transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-emerald-600 text-white font-bold text-sm tracking-wide uppercase rounded-full shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 hover:shadow-emerald-600/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a Quote
            </a>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
