/**
 * CLIENT DATA
 * Strictly structured per Website Details PDF — Page 1.
 * Categorized strictly into: Government Sector, Institutions, and Corporates.
 * ONLY companies/organizations explicitly listed in the PDF are included.
 * No extraneous additions or unverified parenthetical expansions.
 * Important clients marked in bold in the PDF have `featured: true`.
 */

import toyotaLogo from "../assets/clients/toyota.svg";
import arcelorMittalLogo from "../assets/clients/arcelor-mittal.png";
import suprajitLogo from "../assets/clients/suprajit.svg";
import boschLogo from "../assets/clients/bosch.svg";
import halLogo from "../assets/clients/hal.svg";
import indianNavyLogo from "../assets/clients/indian-navy.png";

export const clientCategories = [
  "All",
  "Government Sector",
  "Institutions",
  "Corporates",
];

export const clientsData = [
  // ── Government Sector (Page 1) ──
  // PDF: "Income tax department, Zilla/Gram Panchayats (Govt. of Karnataka), Coffee Board, Dept. of Posts, NREDCAP (AP Govt. undertaking), CPWD, HAL, Indian Navy"
  // Bold: HAL, Indian Navy
  {
    id: 1,
    name: "HAL",
    logo: halLogo,
    sector: "Government Sector",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 2,
    name: "Indian Navy",
    logo: indianNavyLogo,
    sector: "Government Sector",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 3,
    name: "Income tax department",
    logo: null,
    sector: "Government Sector",
    featured: false,
  },
  {
    id: 4,
    name: "Zilla/Gram Panchayats (Govt. of Karnataka)",
    logo: null,
    sector: "Government Sector",
    featured: false,
  },
  {
    id: 5,
    name: "Coffee Board",
    logo: null,
    sector: "Government Sector",
    featured: false,
  },
  {
    id: 6,
    name: "Dept. of Posts",
    logo: null,
    sector: "Government Sector",
    featured: false,
  },
  {
    id: 7,
    name: "NREDCAP (AP Govt. undertaking)",
    logo: null,
    sector: "Government Sector",
    featured: false,
  },
  {
    id: 8,
    name: "CPWD",
    logo: null,
    sector: "Government Sector",
    featured: false,
  },

  // ── Institutions (Page 1) ──
  // PDF: "SVYASA University, Christ University, DASA Trust / Karnataka University, Mangalore University, SSRDP (Art of Living Foundation), Schneider Electric Foundation, The Mythic Society, MSR Institutions, Indian Institute of World Culture, IISc, Indian Institute of Astrophysics"
  // Bold: Christ University, Schneider Electric Foundation, IISc, Indian Institute of Astrophysics
  {
    id: 9,
    name: "IISc",
    logo: null,
    sector: "Institutions",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 10,
    name: "Indian Institute of Astrophysics",
    logo: null,
    sector: "Institutions",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 11,
    name: "Christ University",
    logo: null,
    sector: "Institutions",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 12,
    name: "Schneider Electric Foundation",
    logo: null,
    sector: "Institutions",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 13,
    name: "SVYASA University",
    logo: null,
    sector: "Institutions",
    featured: false,
  },
  {
    id: 14,
    name: "DASA Trust / Karnataka University",
    logo: null,
    sector: "Institutions",
    featured: false,
  },
  {
    id: 15,
    name: "Mangalore University",
    logo: null,
    sector: "Institutions",
    featured: false,
  },
  {
    id: 16,
    name: "SSRDP (Art of Living Foundation)",
    logo: null,
    sector: "Institutions",
    featured: false,
  },
  {
    id: 17,
    name: "The Mythic Society",
    logo: null,
    sector: "Institutions",
    featured: false,
  },
  {
    id: 18,
    name: "MSR Institutions",
    logo: null,
    sector: "Institutions",
    featured: false,
  },
  {
    id: 19,
    name: "Indian Institute of World Culture",
    logo: null,
    sector: "Institutions",
    featured: false,
  },

  // ── Corporates (Page 1) ──
  // PDF: "TATA Projects, Alutop, Tab India, Pace Micro, Prerana Motors, Popuri Steel, Cicon, Abhay Marbles, Alutop, Precimeasure, RijkZwaan, Prakash Coach Builders, JSW, Suprajit Engg., Bisleri International, KFC, Karle Infra, DRI Relays (TE Connectivity), Vikram Resins and Polymers, Nandi Housing, Golden Enclave, Bosch, Toyota, Purvankara , arcelormittal"
  // Bold: TATA Projects, Prakash Coach Builders, JSW, Bisleri International, KFC, Bosch, Toyota, Purvankara, arcelormittal
  {
    id: 20,
    name: "TATA Projects",
    logo: null,
    sector: "Corporates",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 21,
    name: "Toyota",
    logo: toyotaLogo,
    sector: "Corporates",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 22,
    name: "Bosch",
    logo: boschLogo,
    sector: "Corporates",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 23,
    name: "JSW",
    logo: null,
    sector: "Corporates",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 24,
    name: "arcelormittal",
    logo: arcelorMittalLogo,
    sector: "Corporates",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 25,
    name: "Bisleri International",
    logo: null,
    sector: "Corporates",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 26,
    name: "KFC",
    logo: null,
    sector: "Corporates",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 27,
    name: "Purvankara",
    logo: null,
    sector: "Corporates",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 28,
    name: "Prakash Coach Builders",
    logo: null,
    sector: "Corporates",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 29,
    name: "Suprajit Engg.",
    logo: suprajitLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 30,
    name: "Alutop",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 31,
    name: "Tab India",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 32,
    name: "Pace Micro",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 33,
    name: "Prerana Motors",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 34,
    name: "Popuri Steel",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 35,
    name: "Cicon",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 36,
    name: "Abhay Marbles",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 37,
    name: "Precimeasure",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 38,
    name: "RijkZwaan",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 39,
    name: "Karle Infra",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 40,
    name: "DRI Relays (TE Connectivity)",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 41,
    name: "Vikram Resins and Polymers",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 42,
    name: "Nandi Housing",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 43,
    name: "Golden Enclave",
    logo: null,
    sector: "Corporates",
    featured: false,
  },
];
