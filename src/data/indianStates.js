/**
 * INDIAN STATES DATA
 * Shared list of Indian states and union territories used across
 * the Solar Calculator and Consultation form.
 *
 * High-irradiance states have better solar resource availability.
 * This flag is used by the calculator for indicative estimates.
 */

export const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Puducherry",
];

/**
 * States with higher solar irradiance — used by the calculator
 * to apply a slight efficiency factor (indicative only).
 */
export const highIrradianceStates = new Set([
  "Gujarat",
  "Rajasthan",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Telangana",
  "Andhra Pradesh",
]);
