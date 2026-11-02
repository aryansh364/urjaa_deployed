import api from "./api";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || "/contact";
const CLIENT_EMAIL =
  import.meta.env.VITE_CLIENT_EMAIL || "info@urjasolutions.com";

export const sendContactForm = async (data) => {
  const payload = {
    ...data,
    recipient: CLIENT_EMAIL,
    source: "Urjaa website contact form",
    submittedAt: new Date().toISOString(),
  };

  const response = await api.post(CONTACT_ENDPOINT, payload);

  return response.data;
};
