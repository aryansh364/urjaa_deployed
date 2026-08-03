import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Card from "../../ui/Card";
import ContactForm from "./ContactForm";
import ContactInfoItem from "./ContactInfoItem";

export default function ContactConsultation() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <Container>
        <SectionTitle
          subtitle="Contact Us"
          title="Book Your Free Consultation"
          description="Planning a rooftop solar plant, industrial solution, or hybrid energy system? Our experts are here to help you choose the right solution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* LEFT CARD */}

          <Card className="p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's Build Your Renewable Energy Project
            </h3>

            <p className="text-gray-600 leading-relaxed mb-10">
              Get in touch with our engineering team for a free consultation,
              technical guidance, and site assessment.
            </p>

            <div className="space-y-8">
              <ContactInfoItem
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a2 2 0 011.95 1.55l.57 2.3a2 2 0 01-.45 1.83l-1.27 1.27a16 16 0 006.36 6.36l1.27-1.27a2 2 0 011.83-.45l2.3.57A2 2 0 0121 18.72V22a2 2 0 01-2 2h-1C9.163 24 0 14.837 0 4V3z"
                    />
                  </svg>
                }
                title="Phone"
                value="+91 XXXXX XXXXX"
              />

              <ContactInfoItem
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
                title="Email"
                value="contact@urjaa.com"
              />

              <ContactInfoItem
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z"
                    />
                  </svg>
                }
                title="Working Hours"
                value="Monday - Saturday | 9:00 AM - 6:00 PM"
              />

              <ContactInfoItem
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                }
                title="Free Site Visit"
                value="Book a free engineering assessment for your property."
              />

              <ContactInfoItem
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6l4 2"
                    />
                  </svg>
                }
                title="Response Time"
                value="Our experts typically respond within 24 hours."
              />
            </div>
          </Card>

          {/* RIGHT CARD */}

          <Card className="p-10">
            <ContactForm />
          </Card>
        </div>
      </Container>
    </section>
  );
}
