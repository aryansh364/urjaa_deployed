/**
 * CLIENT DATA
 * Strictly structured per Website Details PDF — Page 1.
 * Categorized strictly into: Government Sector, Institutions, and Corporates.
 * ONLY companies/organizations explicitly listed in the PDF are included.
 * No extraneous additions or unverified parenthetical expansions.
 * Important clients marked in bold in the PDF have `featured: true`.
 */

// ── Government Sector Logos ──
import halLogo from "../assets/clients/hal.svg";
import indianNavyLogo from "../assets/clients/indian-navy.png";
import incomeTaxLogo from "../assets/clients/income-tax-dept.svg";
import zillaGramLogo from "../assets/clients/zilla-gram-panchayats.svg";
import coffeeBoardLogo from "../assets/clients/coffee-board.svg";
import deptOfPostsLogo from "../assets/clients/dept-of-posts.png";
import nredcapLogo from "../assets/clients/nredcap.png";
import cpwdLogo from "../assets/clients/cpwd.svg";

// ── Institutions Logos ──
import iiscLogo from "../assets/clients/iisc.png";
import iiaLogo from "../assets/clients/iia.svg";
import christUnivLogo from "../assets/clients/christ-university.svg";
import schneiderLogo from "../assets/clients/schneider-electric.svg";
import svyasaLogo from "../assets/clients/svyasa.png";
import dasaTrustLogo from "../assets/clients/dasa-trust.png";
import mangaloreUnivLogo from "../assets/clients/mangalore-university.png";
import artOfLivingLogo from "../assets/clients/art-of-living.png";
import mythicSocietyLogo from "../assets/clients/mythic-society.png";
import msrLogo from "../assets/clients/msr-institutions.png";
import iiwcLogo from "../assets/clients/iiwc.svg";

// ── Corporates Logos ──
import tataProjectsLogo from "../assets/clients/tata-projects.svg";
import toyotaLogo from "../assets/clients/toyota.svg";
import boschLogo from "../assets/clients/bosch.svg";
import jswLogo from "../assets/clients/jsw.png";
import arcelorMittalLogo from "../assets/clients/arcelor-mittal.png";
import bisleriLogo from "../assets/clients/bisleri.png";
import kfcLogo from "../assets/clients/kfc.png";
import puravankaraLogo from "../assets/clients/puravankara.svg";
import prakashCoachLogo from "../assets/clients/prakash-coach.svg";
import suprajitLogo from "../assets/clients/suprajit.svg";
import alutopLogo from "../assets/clients/alutop.svg";
import tabIndiaLogo from "../assets/clients/tab-india.png";
import paceMicroLogo from "../assets/clients/pace-micro.svg";
import preranaMotorsLogo from "../assets/clients/prerana-motors.png";
import popuriSteelLogo from "../assets/clients/popuri-steel.svg";
import ciconLogo from "../assets/clients/cicon.svg";
import abhayMarblesLogo from "../assets/clients/abhay-marbles.svg";
import precimeasureLogo from "../assets/clients/precimeasure.png";
import rijkzwaanLogo from "../assets/clients/rijkzwaan.svg";
import karleInfraLogo from "../assets/clients/karle-infra.png";
import teConnectivityLogo from "../assets/clients/te-connectivity.svg";
import vikramResinsLogo from "../assets/clients/vikram-resins.svg";
import nandiHousingLogo from "../assets/clients/nandi-housing.png";
import goldenEnclaveLogo from "../assets/clients/golden-enclave.svg";

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
    logo: incomeTaxLogo,
    sector: "Government Sector",
    featured: false,
  },
  {
    id: 4,
    name: "Zilla/Gram Panchayats (Govt. of Karnataka)",
    logo: zillaGramLogo,
    sector: "Government Sector",
    featured: false,
  },
  {
    id: 5,
    name: "Coffee Board",
    logo: coffeeBoardLogo,
    sector: "Government Sector",
    featured: false,
  },
  {
    id: 6,
    name: "Dept. of Posts",
    logo: deptOfPostsLogo,
    sector: "Government Sector",
    featured: false,
  },
  {
    id: 7,
    name: "NREDCAP (AP Govt. undertaking)",
    logo: nredcapLogo,
    sector: "Government Sector",
    featured: false,
  },
  {
    id: 8,
    name: "CPWD",
    logo: cpwdLogo,
    sector: "Government Sector",
    featured: false,
  },

  // ── Institutions (Page 1) ──
  // PDF: "SVYASA University, Christ University, DASA Trust / Karnataka University, Mangalore University, SSRDP (Art of Living Foundation), Schneider Electric Foundation, The Mythic Society, MSR Institutions, Indian Institute of World Culture, IISc, Indian Institute of Astrophysics"
  // Bold: Christ University, Schneider Electric Foundation, IISc, Indian Institute of Astrophysics
  {
    id: 9,
    name: "IISc",
    logo: iiscLogo,
    sector: "Institutions",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 10,
    name: "Indian Institute of Astrophysics",
    logo: iiaLogo,
    sector: "Institutions",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 11,
    name: "Christ University",
    logo: christUnivLogo,
    sector: "Institutions",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 12,
    name: "Schneider Electric Foundation",
    logo: schneiderLogo,
    sector: "Institutions",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 13,
    name: "SVYASA University",
    logo: svyasaLogo,
    sector: "Institutions",
    featured: false,
  },
  {
    id: 14,
    name: "DASA Trust / Karnataka University",
    logo: dasaTrustLogo,
    sector: "Institutions",
    featured: false,
  },
  {
    id: 15,
    name: "Mangalore University",
    logo: mangaloreUnivLogo,
    sector: "Institutions",
    featured: false,
  },
  {
    id: 16,
    name: "SSRDP (Art of Living Foundation)",
    logo: artOfLivingLogo,
    sector: "Institutions",
    featured: false,
  },
  {
    id: 17,
    name: "The Mythic Society",
    logo: mythicSocietyLogo,
    sector: "Institutions",
    featured: false,
  },
  {
    id: 18,
    name: "MSR Institutions",
    logo: msrLogo,
    sector: "Institutions",
    featured: false,
  },
  {
    id: 19,
    name: "Indian Institute of World Culture",
    logo: iiwcLogo,
    sector: "Institutions",
    featured: false,
  },

  // ── Corporates (Page 1) ──
  // PDF: "TATA Projects, Alutop, Tab India, Pace Micro, Prerana Motors, Popuri Steel, Cicon, Abhay Marbles, Alutop, Precimeasure, RijkZwaan, Prakash Coach Builders, JSW, Suprajit Engg., Bisleri International, KFC, Karle Infra, DRI Relays (TE Connectivity), Vikram Resins and Polymers, Nandi Housing, Golden Enclave, Bosch, Toyota, Purvankara , arcelormittal"
  // Bold: TATA Projects, Prakash Coach Builders, JSW, Bisleri International, KFC, Bosch, Toyota, Purvankara, arcelormittal
  {
    id: 20,
    name: "TATA Projects",
    logo: tataProjectsLogo,
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
    logo: jswLogo,
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
    logo: bisleriLogo,
    sector: "Corporates",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 26,
    name: "KFC",
    logo: kfcLogo,
    sector: "Corporates",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 27,
    name: "Purvankara",
    logo: puravankaraLogo,
    sector: "Corporates",
    featured: true, // Marked in bold in PDF
  },
  {
    id: 28,
    name: "Prakash Coach Builders",
    logo: prakashCoachLogo,
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
    logo: alutopLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 31,
    name: "Tab India",
    logo: tabIndiaLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 32,
    name: "Pace Micro",
    logo: paceMicroLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 33,
    name: "Prerana Motors",
    logo: preranaMotorsLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 34,
    name: "Popuri Steel",
    logo: popuriSteelLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 35,
    name: "Cicon",
    logo: ciconLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 36,
    name: "Abhay Marbles",
    logo: abhayMarblesLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 37,
    name: "Precimeasure",
    logo: precimeasureLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 38,
    name: "RijkZwaan",
    logo: rijkzwaanLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 39,
    name: "Karle Infra",
    logo: karleInfraLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 40,
    name: "DRI Relays (TE Connectivity)",
    logo: teConnectivityLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 41,
    name: "Vikram Resins and Polymers",
    logo: vikramResinsLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 42,
    name: "Nandi Housing",
    logo: nandiHousingLogo,
    sector: "Corporates",
    featured: false,
  },
  {
    id: 43,
    name: "Golden Enclave",
    logo: goldenEnclaveLogo,
    sector: "Corporates",
    featured: false,
  },
];
