import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { siteConfig } from "../../constants/siteConfig";

function Footer() {
  return (
    <footer id="contact" className="bg-[#0B7A3E] text-white">

      {/* CTA Section */}
      <div className="bg-[#065F46] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold">
              Schedule Your Free Site Visit Today
            </h2>

            <p className="text-green-100 mt-2">
              No Project Too Small, No Field Too Large.
            </p>
          </div>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
            Request Consultation
          </button>

        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Column 1: Solar & Wind */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-yellow-300">
            Solar & Wind
          </h4>
          <ul className="space-y-3 text-green-100 text-sm">
            <li>On-Grid Systems</li>
            <li>Off-Grid Systems</li>
            <li>Hybrid Systems</li>
            <li>Rooftop Projects</li>
            <li>Ground Mounted Projects</li>
            <li>Wind Energy Systems</li>
          </ul>
        </div>

        {/* Column 2: Power & Storage */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-yellow-300">
            Power & Storage
          </h4>
          <ul className="space-y-3 text-green-100 text-sm">
            <li>UPS Systems</li>
            <li>Battery Solutions</li>
            <li>Servo Controlled Stabilizers</li>
            <li>BESS (Battery Energy Storage)</li>
          </ul>
        </div>

        {/* Column 3: Specialized */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-yellow-300">
            Specialized
          </h4>
          <ul className="space-y-3 text-green-100 text-sm">
            <li>Solar & Hybrid Street Lights</li>
            <li>Solar Pumping Solutions</li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-yellow-300">
            Company
          </h4>
          <ul className="space-y-3 text-green-100 text-sm">
            <li>About Us</li>
            <li>Projects</li>
            <li>Technical Consulting</li>
            <li>Operation & Maintenance</li>
          </ul>
        </div>

        {/* Column 5: Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-yellow-300">
            Contact
          </h4>
          <div className="space-y-4 text-green-100 text-sm">
            <p className="flex items-center gap-3">
              <FaPhoneAlt />
              {siteConfig.phone}
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope />
              sales@urjasolutions.com
            </p>
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              Bengaluru, Karnataka (HQ)
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-green-700 py-5 text-center text-green-200 text-sm">

        © {new Date().getFullYear()} Urjaa Solutions.
        All Rights Reserved.

      </div>
    </footer>
  );
}

export default Footer;
