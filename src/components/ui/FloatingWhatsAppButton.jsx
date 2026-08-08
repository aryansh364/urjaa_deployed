import { useEffect, useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../../constants/siteConfig";

const emptyDraft = {
  name: "",
  phone: "",
  projectType: "",
  message: "",
};

function buildWhatsAppMessage(draft) {
  return [
    "Hello,",
    "",
    `Name: ${draft.name || ""}`,
    `Phone: ${draft.phone || ""}`,
    `Project Type: ${draft.projectType || ""}`,
    `Message: ${draft.message || ""}`,
  ].join("\n");
}

export default function FloatingWhatsAppButton() {
  const [draft, setDraft] = useState(() => {
    try {
      const savedDraft = JSON.parse(localStorage.getItem("urjaaContactDraft"));

      if (savedDraft && typeof savedDraft === "object") {
        return { ...emptyDraft, ...savedDraft };
      }
    } catch {
      // Draft persistence is best-effort only.
    }

    return emptyDraft;
  });

  useEffect(() => {
    const handleDraftChange = (event) => {
      setDraft((prev) => ({ ...prev, ...event.detail }));
    };

    window.addEventListener("urjaa:contact-form-change", handleDraftChange);

    return () => {
      window.removeEventListener("urjaa:contact-form-change", handleDraftChange);
    };
  }, []);

  const whatsappHref = useMemo(() => {
    const number = String(siteConfig.whatsappNumber || "").replace(/\D/g, "");
    const message = encodeURIComponent(buildWhatsAppMessage(draft));

    return `https://wa.me/${number}?text=${message}`;
  }, [draft]);

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Urjaa on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_35px_rgb(37,211,102,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_20px_45px_rgb(37,211,102,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20" />
      <FaWhatsapp className="relative h-8 w-8 sm:h-9 sm:w-9" aria-hidden="true" />
    </a>
  );
}
