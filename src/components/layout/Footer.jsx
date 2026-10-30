import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FACEBOOK_URL = "PASTE_CONFIRMED_FACEBOOK_URL_HERE";

const LINKEDIN_URL =
  "https://www.linkedin.com/company/urja-solutions/";

function Footer() {
  return (
    <footer id="contact" className="bg-emerald-800 text-white">

      {/* CTA Section */}
      <div className="bg-emerald-900 py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Schedule Your Free Site Visit Today
          </h2>

          <p className="text-lg text-emerald-100 mb-8">
            No Project Too Small, No Grid Too Large.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-full hover:bg-yellow-300 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            Request Consultation
          </a>

        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-block mb-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-lg"
              aria-label="Urjaa Solutions Home"
            >
              <img
                src="/logos/urja-logo-white.png"
                alt="Urjaa Solutions"
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-emerald-100 leading-8 max-w-xl">
              Delivering turnkey renewable energy engineering
              solutions across residential, commercial,
              industrial and government sectors.
            </p>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-emerald-100">
              <li>
                <Link
                  to="/solutions/solar"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Solar Power Plants
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/wind"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Wind Energy Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/power-conditioning"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Power Conditioning & BESS
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/specialized"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Specialized Deployments
                </Link>
              </li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-emerald-100">

              {/* Phone */}
              <a
                href="tel:+918867309617"
                className="flex items-center gap-3 hover:text-yellow-300 transition-colors"
              >
                <FaPhoneAlt className="shrink-0" />
                <span>+91 8867309617</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@urjasolutions.com"
                className="flex items-center gap-3 hover:text-yellow-300 transition-colors"
              >
                <FaEnvelope className="shrink-0" />
                <span>info@urjasolutions.com</span>
              </a>

              {/* Raj Email */}
              <a
                href="mailto:raj@urjasolutions.com"
                className="flex items-center gap-3 hover:text-yellow-300 transition-colors"
              >
                <FaEnvelope className="shrink-0" />
                <span>raj@urjasolutions.com</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0" />
                <span>Bengaluru, Karnataka</span>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">

              {/* Facebook */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Urja Solutions on Facebook"
                className="w-11 h-11 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              {/* Instagram - intentionally left unlinked */}
              <a
                href="#"
                aria-label="Instagram"
                title="Instagram"
                className="w-11 h-11 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="Urja Solutions on LinkedIn"
                className="w-11 h-11 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-emerald-600 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-emerald-200">

          <p>
            © {new Date().getFullYear()} Urjaa Solutions. All rights reserved.
          </p>

          <p>
            Renewable Energy Engineering Solutions
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;