export const sendContactForm = async (data) => {
  console.log("📨 Contact Form Submitted:", data);

  // Simulate an API request
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    success: true,
    message: "Your consultation request has been submitted successfully.",
  };
};