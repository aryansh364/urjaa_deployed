import { useState } from "react";
import emailjs from "@emailjs/browser";

// ─── EmailJS Credentials (hardcoded for reliability) ─────────────────────────
const EMAILJS_SERVICE_ID  = "service_6vkklyi";
const EMAILJS_TEMPLATE_ID = "template_58c4owo";
const EMAILJS_PUBLIC_KEY  = "ACKb1zb5n0HrxI_iY";

// Initialise EmailJS once when the module loads
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors]           = useState({});
  const [loading, setLoading]         = useState(false);
  const [success, setSuccess]         = useState("");
  const [serverError, setServerError] = useState("");

  // ─── Handle field changes ────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const nextData = { ...prev, [name]: value };

      window.dispatchEvent(
        new CustomEvent("urjaa:contact-form-change", { detail: nextData }),
      );

      try {
        localStorage.setItem("urjaaContactDraft", JSON.stringify(nextData));
      } catch {
        // Best-effort only.
      }

      return nextData;
    });
  };

  // ─── Validate ────────────────────────────────────────────────────────────
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Full name is required.";

    if (!formData.email.trim())
      newErrors.email = "Email is required.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Please enter a valid email.";

    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required.";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be exactly 10 digits.";

    if (!formData.projectType)
      newErrors.projectType = "Please select a project type.";

    if (!formData.message.trim())
      newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ─── Submit ──────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccess("");
    setServerError("");

    // Template parameters — these variable names must match your
    // EmailJS template exactly (the {{...}} placeholders).
    const templateParams = {
      from_name:    formData.name,
      from_email:   formData.email,
      phone:        formData.phone,
      project_type: formData.projectType,
      message:      formData.message,
      submitted_at: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      console.log("EmailJS success:", response.status, response.text);

      setSuccess("Your consultation request has been submitted successfully! We will get back to you soon.");

      // Reset form
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
      setErrors({});

      window.dispatchEvent(
        new CustomEvent("urjaa:contact-form-change", {
          detail: { name: "", phone: "", projectType: "", message: "" },
        }),
      );

      try { localStorage.removeItem("urjaaContactDraft"); } catch { /* best-effort */ }

    } catch (err) {
      console.error("EmailJS send failed:", err);

      // Show a specific message if we can detect the root cause
      const status = err?.status ?? err?.response?.status;
      if (status === 400) {
        setServerError("Email configuration error — please check the EmailJS template variables.");
      } else if (status === 401 || status === 403) {
        setServerError("Authentication error — please check the EmailJS public key.");
      } else {
        setServerError(
          `Unable to submit your request (${status ?? "network error"}). Please try again or contact us directly.`,
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // ─── Render ──────────────────────────────────────────────────────────────
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>

      {/* Full Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />
        {errors.name && (
          <p id="contact-name-error" className="text-red-500 text-sm mt-2">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />
        {errors.email && (
          <p id="contact-email-error" className="text-red-500 text-sm mt-2">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />
        {errors.phone && (
          <p id="contact-phone-error" className="text-red-500 text-sm mt-2">{errors.phone}</p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="contact-project-type" className="block text-sm font-semibold text-gray-700 mb-2">
          Project Type
        </label>
        <select
          id="contact-project-type"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? "contact-project-error" : undefined}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        >
          <option value="">Select Project Type</option>
          <option value="Residential Solar">Residential Solar</option>
          <option value="Commercial Solar">Commercial Solar</option>
          <option value="Industrial Solar">Industrial Solar</option>
          <option value="Hybrid System">Hybrid System</option>
          <option value="Solar Pump">Solar Pump</option>
          <option value="Other">Other</option>
        </select>
        {errors.projectType && (
          <p id="contact-project-error" className="text-red-500 text-sm mt-2">{errors.projectType}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your project requirements..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition resize-none"
        />
        {errors.message && (
          <p id="contact-message-error" className="text-red-500 text-sm mt-2">{errors.message}</p>
        )}
      </div>

      {/* Success Message */}
      {success && (
        <div role="status" className="rounded-xl border border-green-300 bg-green-100 p-4 text-green-700 font-medium">
          ✅ {success}
        </div>
      )}

      {/* Error Message */}
      {serverError && (
        <div role="alert" className="rounded-xl border border-red-300 bg-red-100 p-4 text-red-700 font-medium">
          ⚠️ {serverError}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        aria-busy={loading}
        className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {loading ? "Submitting..." : "Request Consultation"}
      </button>
    </form>
  );
}
