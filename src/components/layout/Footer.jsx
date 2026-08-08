import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

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
              No Project Too Small, No Grid Too Large.
            </p>
          </div>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
            Request Consultation
          </button>

        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Urjaa Solutions
          </h3>

          <p className="text-green-100 leading-7">
            Delivering turnkey renewable energy engineering
            solutions across residential, commercial,
            industrial and government sectors.
          </p>
        </div>

        {/* Services */}
        <div>

          <h4 className="font-semibold text-lg mb-4">
            Services
          </h4>

          <ul className="space-y-3 text-green-100">

            <li>Solar Power Plants</li>

            <li>Wind & Hybrid</li>

            <li>Power Conditioning</li>

            <li>Solar Pumping</li>

            <li>Street Lighting</li>

          </ul>

        </div>

        {/* Company */}

        <div>

          <h4 className="font-semibold text-lg mb-4">
            Company
          </h4>

          <ul className="space-y-3 text-green-100">

            <li>About Us</li>

            <li>Projects</li>

            <li>Technical Consulting</li>

            <li>Operation & Maintenance</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h4 className="font-semibold text-lg mb-4">
            Contact
          </h4>

          <div className="space-y-4 text-green-100">

            <p className="flex items-center gap-3">
              <FaPhoneAlt />
              +91 XXXXXXXXXX
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope />
              info@urjasolutions.com
            </p>

            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              Bengaluru, Karnataka
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