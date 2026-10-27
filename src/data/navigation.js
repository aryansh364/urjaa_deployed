/**
 * NAVIGATION DATA
 * Restructured per Website Details PDF — Page 1 directives.
 * - "Rooftop" removed from Solar Power Plants
 * - "Wind & Hybrid" renamed to "Wind Energy Systems"; "On-Grid / Off-Grid with DG Sync" removed
 * - Power Conditioning and Specialized kept with PDF-accurate items
 */

export const navigation = [
  {
    title: "Solar Power Plants",
    href: "/solutions/solar",
    submenu: [
      { label: "On-Grid Systems", href: "/solutions/solar/on-grid" },
      { label: "Off-Grid Systems", href: "/solutions/solar/off-grid" },
      { label: "Hybrid Systems", href: "/solutions/solar/hybrid" },
      { label: "Ground Mounted Projects", href: "/solutions/solar/ground-mounted" },
    ],
  },
  {
    title: "Wind Energy Systems",
    href: "/solutions/wind",
    submenu: [
      { label: "Wind Energy Systems", href: "/solutions/wind/wind-energy" },
      { label: "Wind & Solar Hybrid Systems", href: "/solutions/wind/wind-solar-hybrid" },
    ],
  },
  {
    title: "Power Conditioning",
    href: "/solutions/power-conditioning",
    submenu: [
      { label: "UPS Systems", href: "/solutions/power-conditioning/ups" },
      { label: "Battery Solutions", href: "/solutions/power-conditioning/battery" },
      { label: "Servo Controlled Voltage Stabilizers", href: "/solutions/power-conditioning/scvs" },
      { label: "BESS", href: "/solutions/power-conditioning/bess" },
    ],
  },
  {
    title: "Specialized",
    href: "/solutions/specialized",
    submenu: [
      { label: "Solar & Wind Hybrid Street Lights", href: "/solutions/specialized/street-lights" },
      { label: "Solar Pumping Solutions", href: "/solutions/specialized/solar-pumping" },
    ],
  },
];