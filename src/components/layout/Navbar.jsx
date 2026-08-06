<<<<<<< HEAD
import { useState, useEffect } from 'react';
import Container from '../ui/Container';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

=======

import { useState, useEffect } from 'react';
import Container from '../ui/Container';
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
>>>>>>> origin/ujjwal_dev
  // Handle sticky navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
<<<<<<< HEAD

  const navLinks = [
    { 
      name: 'Solar Power Plants', 
      href: '#services',
      dropdown: ['On-Grid Systems', 'Off-Grid Systems', 'Hybrid Systems', 'Rooftop Projects', 'Ground Mounted Projects']
    },
    { 
      name: 'Wind & Hybrid', 
      href: '#services',
      dropdown: ['Wind Energy Systems', 'Hybrid (Solar + Wind)', 'On-Grid / Off-Grid with DG Sync']
    },
    { 
      name: 'Power Conditioning', 
      href: '#services',
      dropdown: ['UPS Systems', 'Battery Solutions', 'Servo Controlled Voltage Stabilizers', 'BESS']
    },
    { 
      name: 'Specialized', 
=======
  const navLinks = [
    {
      name: 'Solar Power Plants',
      href: '#services',
      dropdown: ['On-Grid Systems', 'Off-Grid Systems', 'Hybrid Systems', 'Rooftop Projects', 'Ground Mounted Projects']
    },
    {
      name: 'Wind & Hybrid',
      href: '#services',
      dropdown: ['Wind Energy Systems', 'Hybrid (Solar + Wind)', 'On-Grid / Off-Grid with DG Sync']
    },
    {
      name: 'Power Conditioning',
      href: '#services',
      dropdown: ['UPS Systems', 'Battery Solutions', 'Servo Controlled Voltage Stabilizers', 'BESS']
    },
    {
      name: 'Specialized',
>>>>>>> origin/ujjwal_dev
      href: '#services',
      dropdown: ['Solar & Hybrid Street Lights', 'Solar Pumping Solutions']
    },
  ];
<<<<<<< HEAD

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
=======
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white shadow-md py-3'
>>>>>>> origin/ujjwal_dev
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
<<<<<<< HEAD

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
=======
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">

                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-emerald-600 uppercase tracking-wider transition-colors duration-200"
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
                        href="#"
                        className="block px-5 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}

              </div>
            ))}
          </nav>
          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
>>>>>>> origin/ujjwal_dev
              className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold text-sm tracking-wide uppercase rounded-full shadow-[0_8px_20px_rgb(5,150,105,0.35)] hover:bg-emerald-700 hover:shadow-[0_12px_30px_rgb(5,150,105,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-in-out"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Request Consultation
            </a>
<<<<<<< HEAD
            
            {/* Mobile Menu Button */}
            <button 
=======

            {/* Mobile Menu Button */}
            <button
>>>>>>> origin/ujjwal_dev
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors z-50 relative"
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
<<<<<<< HEAD

      {/* Mobile Menu Drawer */}
      <div 
=======
      {/* Mobile Menu Drawer */}
      <div
>>>>>>> origin/ujjwal_dev
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
<<<<<<< HEAD
        <div 
=======
        <div
>>>>>>> origin/ujjwal_dev
          className={`absolute top-0 right-0 w-3/4 max-w-sm h-screen bg-white shadow-2xl flex flex-col p-8 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside drawer
        >
          <div className="flex flex-col gap-6 mt-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 text-lg font-bold text-slate-800 hover:text-emerald-600 uppercase tracking-wider transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
<<<<<<< HEAD
            <a 
              href="#contact" 
=======
            <a
              href="#contact"
>>>>>>> origin/ujjwal_dev
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 mt-4 bg-emerald-600 text-white font-bold text-sm tracking-wide uppercase rounded-full shadow-[0_8px_20px_rgb(5,150,105,0.35)] hover:bg-emerald-700 hover:shadow-[0_12px_30px_rgb(5,150,105,0.45)] active:translate-y-0 transition-all duration-300 ease-in-out"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/ujjwal_dev
