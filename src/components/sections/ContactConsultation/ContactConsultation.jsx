import ContactForm from "./ContactForm";

function ContactConsultation() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Contact Consultation
          </h2>

          <p className="mt-4 text-gray-600">
            Let's discuss your renewable energy requirements. Fill out the form
            below and our experts will contact you shortly.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactConsultation;
