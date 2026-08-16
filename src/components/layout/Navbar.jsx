import { useState, useEffect } from "react";
import Container from "../ui/Container";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: "Solar Power Plants",
      href: "#services",
      dropdown: [
        "On-Grid Systems",
        "Off-Grid Systems",
        "Hybrid Systems",
        "Rooftop Projects",
        "Ground Mounted Projects",
      ],
    },
    {
      name: "Wind & Hybrid",
      href: "#services",
      dropdown: [
        "Wind Energy Systems",
        "Hybrid (Solar + Wind)",
        "On-Grid / Off-Grid with DG Sync",
      ],
    },
    {
      name: "Power Conditioning",
      href: "#services",
      dropdown: [
        "UPS Systems",
        "Battery Solutions",
        "Servo Controlled Voltage Stabilizers",
        "BESS",
      ],
    },
    {
      name: "Specialized",
      href: "#services",
      dropdown: [
        "Solar & Hybrid Street Lights",
        "Solar Pumping Solutions",
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-white/95 backdrop-blur-sm py-4 md:py-5 border-b border-slate-100"
      }`}
    >
      {/* Main Navbar */}
      <div className="max-w-[1400px] mx-auto pl-0 pr-3 sm:pr-4 lg:pr-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 cursor-pointer"
            aria-label="Urjaa Solutions Home"
          >
            <div className="w-11 h-11 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/50">
              U
            </div>

            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Urjaa<span className="text-emerald-500">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-emerald-600 uppercase tracking-wide transition-colors duration-200 py-4"
                >
                  {link.name}

                  {link.dropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === link.name
                          ? "rotate-180"
                          : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>

                {/* Dropdown */}
                {link.dropdown && openDropdown === link.name && (
                  <div className="absolute left-0 top-full w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-3 overflow-hidden">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href="#services"
                        className="block px-5 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Button */}
          <div className="flex items-center gap-4">

            {/* Consultation Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold text-sm tracking-wide uppercase rounded-full shadow-[0_8px_20px_rgb(16,185,129,0.35)] hover:bg-emerald-600 hover:shadow-[0_12px_30px_rgb(16,185,129,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>

              Request Consultation
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className="lg:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-3/4 max-w-sm h-screen bg-white shadow-2xl p-8 transition-transform duration-300 ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-5 mt-16">

            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-lg font-bold text-slate-800 hover:text-emerald-600 uppercase tracking-wide"
                >
                  {link.name}
                </a>

                {link.dropdown && (
                  <div className="ml-4 mt-1 border-l-2 border-emerald-100">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href="#services"
                        onClick={() =>
                          setIsMobileMenuOpen(false)
                        }
                        className="block px-4 py-2 text-sm text-slate-500 hover:text-emerald-600"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 mt-3 bg-emerald-500 text-white font-bold text-sm uppercase rounded-full shadow-lg"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}