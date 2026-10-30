/**
 * SERVICES DATA
 * Restructured per Website Details PDF.
 * 4 service domains with expanded technical descriptions matching PDF pages 2-22.
 * Uses real photography and schematics extracted from the PDF.
 */

export const servicesData = [
  {
    id: 1,
    title: "Solar Power Plants",
    description: "Comprehensive EPC solutions for On-Grid, Off-Grid, Hybrid, and MW-Scale Ground-Mounted solar installations.",
    iconId: "sun",
    imageUrl: "/pdf-images/page_5_img_1.jpg",
    href: "/solutions/solar",
    summaryPoints: [
      "On-Grid (Grid-Tied) systems with net-metering and anti-islanding safety",
      "Off-Grid stand-alone systems with battery storage and DG synchronization",
      "Hybrid solar systems combining grid, battery, and backup power sources",
      "MW-Scale ground-mounted utility solar with ALMM-listed PV modules",
      "Full 10-step EPC workflow from site assessment to SCADA commissioning",
      "Urja Solutions 7-Phase Execution Framework for every project",
    ],
  },
  {
    id: 2,
    title: "Wind Energy Systems",
    description: "Wind turbine installations and Wind-Solar Hybrid systems for continuous renewable energy generation.",
    iconId: "wind",
    imageUrl: "/pdf-images/page_14_img_2.jpg",
    href: "/solutions/wind",
    summaryPoints: [
      "Small-to-large scale wind turbine integration (1 kW – multi-MW)",
      "Wind & Solar Hybrid systems for complementary day-night generation",
      "Synergy of daytime solar + nighttime/monsoon wind for 24/7 output",
      "5-point feasibility checklist: wind speed, irradiance, space, regulations, grid",
      "Custom turbine selection based on wind speed, terrain, and load profiling",
      "Complete site assessment, foundation design, and grid synchronization",
    ],
  },
  {
    id: 3,
    title: "Power Conditioning",
    description: "Industrial-grade UPS, BESS, Custom Battery Solutions, and Servo Controlled Voltage Stabilizers.",
    iconId: "activity",
    imageUrl: "/pdf-images/page_19_img_1.jpg",
    href: "/solutions/power-conditioning",
    summaryPoints: [
      "Online UPS systems with millisecond-level switchover and N+1 redundancy",
      "BESS for peak shaving, energy arbitrage, and grid stabilization services",
      "Custom battery solutions with LFP, NMC, and Flow battery chemistries",
      "Servo Controlled Voltage Stabilizers (SCVS) with ±0.5% precision regulation",
      "Advanced BMS with cell balancing, thermal management, and functional safety",
      "Serving data centres, hospitals, manufacturing plants, and telecom infrastructure",
    ],
  },
  {
    id: 4,
    title: "Specialized Deployments",
    description: "Solar pumping systems and solar-wind hybrid street lighting for rural and urban infrastructure.",
    iconId: "settings",
    imageUrl: "/pdf-images/page_22_img_1.jpg",
    href: "/solutions/specialized",
    summaryPoints: [
      "Solar water pumping with MPPT VFD drives and BLDC submersible motors",
      "6-point pumping checklist: TDH, discharge rate, recharge, selection, PV oversizing, protection",
      "Solar-wind hybrid street lighting for 24/7 autonomous illumination",
      "Vertical/horizontal wind turbines + mono-perc solar + LiFePO4 battery packs",
      "PIR motion dimming, 2-3 days battery autonomy, 120-150 km/h wind load resistance",
      "PM-KUSUM scheme execution and government rural electrification projects",
    ],
  },
];
