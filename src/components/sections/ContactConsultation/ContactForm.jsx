import { useState } from "react";
import emailjs from "@emailjs/browser";
import { indianStates } from "../../../data/indianStates";
import { siteConfig } from "../../../constants/siteConfig";

// ─── EmailJS Credentials (hardcoded for reliability) ─────────────────────────
const EMAILJS_SERVICE_ID  = "service_6vkklyi";
const EMAILJS_TEMPLATE_ID = "template_58c4owo";
const EMAILJS_PUBLIC_KEY  = "ACKb1zb5n0HrxI_iY";

// Initialise EmailJS once when the module loads
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

// ─── WhatsApp config ─────────────────────────────────────────────────────────
const WA_NUMBER = siteConfig.whatsappNumber; // e.g. "917471139234"
const WA_PRE_MESSAGE = encodeURIComponent(
  "Hello, I would like to know more about your renewable energy solutions."
);

// ─── Project requirement options ─────────────────────────────────────────────
const PROJECT_REQUIREMENT_OPTIONS = [
  "Rooftop Solar (Residential)",
  "Rooftop Solar (Commercial)",
  "Industrial / Ground-Mounted Solar",
  "Hybrid Solar + Wind System",
  "Solar Water Pump",
  "Battery Storage / BESS",
  "UPS / Power Conditioning",
  "EPC Turnkey Project",
  "Other / Not Sure",
];

// ─── Default form state ───────────────────────────────────────────────────────
const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  state: "",
  projectRequirement: "",
  preferredContact: "",
  siteVisit: false,
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors]           = useState({});
  const [loading, setLoading]         = useState(false);
  const [success, setSuccess]         = useState(false);
  const [serverError, setServerError] = useState("");

  // ─── Handle field changes ────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => {
      const nextData = { ...prev, [name]: fieldValue };

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

    // Clear error for this field on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ─── Validate ────────────────────────────────────────────────────────────
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!formData.state) {
      newErrors.state = "Please select your state.";
    }

    if (!formData.preferredContact) {
      newErrors.preferredContact = "Please select your preferred contact method.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your requirements.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ─── Submit ──────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);
    setServerError("");

    // Template parameters — must match {{placeholders}} in your EmailJS template.
    // ⚠️ The following NEW variables must also be added to the EmailJS email template:
    //    {{state}}, {{project_requirement}}, {{preferred_contact}}, {{site_visit}}
    const templateParams = {
      from_name:           formData.name,
      from_email:          formData.email,
      phone:               formData.phone,
      project_type:        formData.projectType,
      state:               formData.state,
      project_requirement: formData.projectRequirement || "Not specified",
      preferred_contact:   formData.preferredContact,
      site_visit:          formData.siteVisit ? "Yes — site visit requested" : "No",
      message:             formData.message,
      submitted_at:        new Date().toLocaleString("en-IN", {
        timeZone:  "Asia/Kolkata",
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

      setSuccess(true);
      setFormData(EMPTY_FORM);
      setErrors({});

      window.dispatchEvent(
        new CustomEvent("urjaa:contact-form-change", { detail: EMPTY_FORM }),
      );

      try { localStorage.removeItem("urjaaContactDraft"); } catch { /* best-effort */ }

    } catch (err) {
      console.error("EmailJS send failed:", err);

      const status = err?.status ?? err?.response?.status;
      if (status === 400) {
        setServerError("Email configuration error — please check the EmailJS template variables.");
      } else if (status === 401 || status === 403) {
        setServerError("Authentication error — please check the EmailJS public key.");
      } else {
        setServerError(
          "Unable to submit your request right now. Please try again or contact us directly via phone or WhatsApp.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // ─── Field class helpers ─────────────────────────────────────────────────
  const fieldClass = (hasError) =>
    `w-full px-4 py-3 rounded-xl border transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
      hasError ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
    }`;

  // ─── Success view ─────────────────────────────────────────────────────────
  if (success) {
    return (
      <div className="space-y-6 text-center py-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h4>
          <p className="text-gray-600 leading-relaxed">
            Thank you for reaching out. Our engineering team will review your requirements
            and get back to you within <strong>24 hours</strong>.
          </p>
        </div>

        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="text-sm text-green-700 font-medium mb-3">
            Need a faster response? Reach us directly on WhatsApp:
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_PRE_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl font-semibold text-sm hover:bg-green-700 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12.004 2.003C6.478 2.003 2 6.48 2 12.004c0 1.763.47 3.413 1.29 4.843L2 22l5.29-1.258A9.952 9.952 0 0012.004 22C17.527 22 22 17.522 22 12.004c0-5.523-4.473-10.001-9.996-10.001zm0 18.26a8.246 8.246 0 01-4.22-1.159l-.302-.18-3.14.748.786-3.049-.198-.313A8.221 8.221 0 013.744 12c0-4.557 3.703-8.261 8.26-8.261 4.558 0 8.261 3.704 8.261 8.261 0 4.558-3.703 8.263-8.261 8.263z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="text-sm text-gray-500 hover:text-gray-700 underline transition"
        >
          Submit another request
        </button>
      </div>
    );
  }

  // ─── Form view ────────────────────────────────────────────────────────────
  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>

      {/* ── Row: Full Name + Phone ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={fieldClass(errors.name)}
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="text-red-500 text-xs mt-1.5">{errors.name}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={fieldClass(errors.phone)}
          />
          {errors.phone && (
            <p id="contact-phone-error" role="alert" className="text-red-500 text-xs mt-1.5">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={fieldClass(errors.email)}
        />
        {errors.email && (
          <p id="contact-email-error" role="alert" className="text-red-500 text-xs mt-1.5">{errors.email}</p>
        )}
      </div>

      {/* ── Row: Project Type + State ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Project Type */}
        <div>
          <label htmlFor="contact-project-type" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Project Type <span className="text-red-500">*</span>
          </label>
          <select
            id="contact-project-type"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "contact-project-error" : undefined}
            className={fieldClass(errors.projectType)}
          >
            <option value="">Select project type</option>
            <option value="Residential Solar">Residential Solar</option>
            <option value="Commercial Solar">Commercial Solar</option>
            <option value="Industrial Solar">Industrial Solar</option>
            <option value="Hybrid System">Hybrid System</option>
            <option value="Solar Pump">Solar Pump</option>
            <option value="Other">Other</option>
          </select>
          {errors.projectType && (
            <p id="contact-project-error" role="alert" className="text-red-500 text-xs mt-1.5">{errors.projectType}</p>
          )}
        </div>

        {/* State / Location */}
        <div>
          <label htmlFor="contact-state" className="block text-sm font-semibold text-gray-700 mb-1.5">
            State / Location <span className="text-red-500">*</span>
          </label>
          <select
            id="contact-state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            aria-invalid={Boolean(errors.state)}
            aria-describedby={errors.state ? "contact-state-error" : undefined}
            className={fieldClass(errors.state)}
          >
            <option value="">Select your state</option>
            {indianStates.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.state && (
            <p id="contact-state-error" role="alert" className="text-red-500 text-xs mt-1.5">{errors.state}</p>
          )}
        </div>
      </div>

      {/* Project Requirement / Capacity */}
      <div>
        <label htmlFor="contact-project-requirement" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Project Requirement <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <select
          id="contact-project-requirement"
          name="projectRequirement"
          value={formData.projectRequirement}
          onChange={handleChange}
          className={fieldClass(false)}
        >
          <option value="">Select approximate requirement</option>
          {PROJECT_REQUIREMENT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Preferred Contact Method */}
      <div>
        <fieldset>
          <legend className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Contact Method <span className="text-red-500">*</span>
          </legend>
          <div className="flex flex-wrap gap-3">
            {[
              { value: "Email",    label: "Email"    },
              { value: "Phone",    label: "Phone"    },
              { value: "WhatsApp", label: "WhatsApp" },
            ].map(({ value, label }) => (
              <label
                key={value}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition text-sm font-medium select-none ${
                  formData.preferredContact === value
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-gray-300 bg-white text-gray-600 hover:border-green-300"
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={value}
                  checked={formData.preferredContact === value}
                  onChange={handleChange}
                  className="sr-only"
                />
                {label}
              </label>
            ))}
          </div>
          {errors.preferredContact && (
            <p role="alert" className="text-red-500 text-xs mt-1.5">{errors.preferredContact}</p>
          )}
        </fieldset>
      </div>

      {/* Site Visit */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="siteVisit"
            checked={formData.siteVisit}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
          />
          <span className="text-sm text-gray-700 leading-snug">
            I would like a <strong>free site visit</strong> from the Urjaa engineering team.
          </span>
        </label>
      </div>

      {/* Message / Requirements */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Project Requirements / Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your project — location details, approximate load, timeline, or any specific requirements..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`${fieldClass(errors.message)} resize-none`}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="text-red-500 text-xs mt-1.5">{errors.message}</p>
        )}
      </div>

      {/* Server Error */}
      {serverError && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700 text-sm font-medium">
          ⚠️ {serverError}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        aria-busy={loading}
        className={`w-full py-3.5 rounded-xl font-semibold text-white text-sm tracking-wide transition-all duration-300 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(22,163,74,0.35)] hover:shadow-[0_8px_24px_rgba(22,163,74,0.45)]"
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Submitting…
          </span>
        ) : (
          "Request Consultation"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Fields marked <span className="text-red-400">*</span> are required.
        Your information is used only to process your consultation request.
      </p>
    </form>
  );
}
