import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactConsultation() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* Left */}

        <div>

          <p className="uppercase tracking-widest text-emerald-600 font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            Let's Build Your
            <br />
            Renewable Energy Project
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Our engineers will help you choose the right renewable
            energy solution for your home, business or industry.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-600 text-white p-4 rounded-full">
                <FaPhoneAlt />
              </div>

              <div>

                <h4 className="font-semibold">
                  Call Us
                </h4>

                <p className="text-gray-600">
                  +91 XXXXXXXXXX
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="bg-emerald-600 text-white p-4 rounded-full">
                <FaEnvelope />
              </div>

              <div>

                <h4 className="font-semibold">
                  Email
                </h4>

                <p className="text-gray-600">
                  info@urjaa.com
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="bg-emerald-600 text-white p-4 rounded-full">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h4 className="font-semibold">
                  Office
                </h4>

                <p className="text-gray-600">
                  Bengaluru, Karnataka
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <form className="bg-white rounded-2xl shadow-xl p-10 space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <select
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option>Solar Plant</option>
            <option>Hybrid System</option>
            <option>Wind Energy</option>
            <option>Consultation</option>
          </select>

          <textarea
            rows="5"
            placeholder="Tell us about your project..."
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg font-semibold transition"
          >
            Request Consultation
          </button>

        </form>

      </div>
    </section>
  );
}