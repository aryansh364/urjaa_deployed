/**
 * SOLUTIONS DATA — Technical Deep-Dive Content
 * Based on Website Details PDF Pages 2–22.
 * Each solution has full technical descriptions, operating behavior tables,
 * checklists, and phase frameworks exactly as specified in the PDF.
 * Uses real engineering diagrams and project photography extracted from the PDF.
 */

// ═══════════════════════════════════════════════════
// SOLAR POWER PLANTS (Pages 2–14)
// ═══════════════════════════════════════════════════

export const solarOnGrid = {
  slug: "on-grid",
  title: "On-Grid (Grid-Tied) Solar System",
  subtitle: "Net-Metered Solar Power with Grid Synchronization",
  heroImage: "/pdf-images/page_2_img_1.jpg",
  diagramImage: "/pdf-images/page_2_img_1.jpg",
  overview: `An on-grid (or grid-tied) solar system operates in direct synchronization with the local utility grid, allowing a facility to generate its own renewable power while relying on the grid for backup and banking excess energy. This is the most cost-effective architecture for both kW-scale residential setups and MW-scale commercial power plants. The grid itself acts as your virtual battery with bi-directional net metering.`,
  keyComponents: [
    "Solar PV Array (Mono-PERC / Bifacial high-efficiency modules)",
    "Grid-Tied String or Central Inverter with MPPT",
    "AC Distribution Board (ACDB) with protection switchgear",
    "Bi-directional Net Meter (records import & export credits)",
    "Smart Monitoring System (Wi-Fi / GPRS real-time telemetry)",
  ],
  operatingBehavior: [
    {
      condition: "Peak Sun (Surplus Power)",
      behavior: "The solar plant generates more power than the facility is consuming. The inverter feeds this excess energy back into the utility grid. The bi-directional 'Net Meter' spins backward, banking credits for the facility.",
    },
    {
      condition: "Low Sun (Deficit Power)",
      behavior: "During heavy cloud cover or nighttime, the solar arrays underproduce or stop generating. The facility seamlessly draws the required power from the utility grid, utilizing the banked credits.",
    },
    {
      condition: "Grid Outage (Anti-Islanding)",
      behavior: "For safety reasons, the inverter features 'Anti-Islanding' protection. If the utility grid fails, the solar system automatically shuts down to prevent back-feeding live electricity into the grid while linesmen are working on repairs.",
    },
  ],
  advantages: [
    "Lowest cost per watt — eliminates expensive battery bank replacement costs",
    "Bi-directional net-metering credits reduce facility electricity bills by up to 90%",
    "Minimal maintenance — solid-state components with 25-year module performance warranty",
    "Highly scalable architecture from 3 kW rooftop setups to multi-MW commercial plants",
  ],
  idealFor: "Commercial buildings, factories, institutions, offices, and residences with reliable grid connectivity and high daytime energy consumption.",
};

export const solarOffGrid = {
  slug: "off-grid",
  title: "Off-Grid (Stand-Alone) Solar System",
  subtitle: "Energy Independence with Battery Storage",
  heroImage: "/pdf-images/page_4_img_1.jpg",
  diagramImage: "/pdf-images/page_4_img_1.jpg",
  overview: `The defining characteristic of an off-grid system is its self-reliance, achieved through a robust energy storage system. Without the ability to bank excess energy with the grid, an off-grid system requires batteries to store solar energy generated during the day for use at night or during cloudy weather. This offers complete autonomy from utility providers and power outages.`,
  keyComponents: [
    "Solar PV Array (Mono-PERC high-yield modules)",
    "Solar Charge Controller (Advanced MPPT tracking)",
    "Deep-Cycle Battery Bank (Lithium-Ion LiFePO4 / VRLA / Tubular)",
    "Off-Grid Inverter / Pure Sine Wave Inverter",
    "Optional Backup Fuel Generator (DG Set) with Auto-Transfer Switch (ATS)",
  ],
  operatingBehavior: [
    {
      condition: "Peak Sun (Generation & Storage)",
      behavior: "Solar panels generate DC electricity. A Charge Controller manages power flow: 1) powering active direct loads, 2) charging the battery bank, and 3) supplying the inverter to power AC loads.",
    },
    {
      condition: "Nighttime / Low Sun (Discharging)",
      behavior: "When solar generation is insufficient, the system automatically draws stored DC electricity from the battery bank. The Off-Grid Inverter converts this into AC electricity for the facility.",
    },
    {
      condition: "Backup / Supplementary Power",
      behavior: "To ensure reliability during extended low sun, most off-grid systems incorporate a backup fuel generator (DG). The off-grid inverter can start the generator automatically to power loads and recharge batteries.",
    },
  ],
  advantages: [
    "100% complete energy independence — zero vulnerability to utility grid outages",
    "Essential power infrastructure for remote, rural, defence, and off-grid locations",
    "Uninterrupted 24/7 power availability with intelligent battery + DG backup",
    "Eliminates monthly electricity utility bills and tariff escalations entirely",
  ],
  idealFor: "Remote agricultural setups, defence outposts, telecommunication towers, farmhouses, and facilities in regions without reliable grid access.",
};

export const solarHybrid = {
  slug: "hybrid",
  title: "Hybrid Solar System",
  subtitle: "Grid + Battery + Backup — Intelligent Energy Management",
  heroImage: "/pdf-images/page_4_img_1.jpg",
  diagramImage: "/pdf-images/page_4_img_1.jpg",
  overview: `A hybrid solar system connects to the utility grid but also includes a battery bank to store excess energy. This architecture ensures that the energy produced during the day is available during nighttime or grid outages, offering greater energy independence. Because it remains connected to the grid, it does not require adding an oversized solar array for full autonomy, making it significantly more cost-effective than a purely off-grid system.`,
  keyComponents: [
    "Solar PV Array (Mono-PERC / Bifacial modules)",
    "Central Multi-Mode Hybrid Inverter with integrated MPPT",
    "High-Cycle Battery Bank (Lithium Iron Phosphate / Advanced AGM)",
    "Bi-directional Net Meter for Grid Interconnection",
    "Smart Energy Management & Automatic Transfer Unit",
    "Optional DG Synchronization Interface",
  ],
  operatingBehavior: [
    {
      condition: "Peak Generation",
      behavior: "Solar panels generate DC electricity. The central hybrid inverter routes this power to run the facility's active loads first.",
    },
    {
      condition: "Energy Storage",
      behavior: "Once the facility's immediate power needs are met, excess DC power is directed to charge the battery bank for later use.",
    },
    {
      condition: "Grid Export",
      behavior: "If the batteries reach full capacity and the system is still producing excess power, the surplus is exported to the utility grid for electricity credits.",
    },
    {
      condition: "Grid Outage",
      behavior: "During power cuts, the system instantly draws from the stored battery backup, ensuring an uninterrupted power supply with millisecond transfer.",
    },
  ],
  advantages: [
    "Combines the economic savings of net-metering with round-the-clock battery resilience",
    "Guaranteed power continuity during utility outages and voltage sags",
    "Maximizes self-consumption of clean solar energy generated on-site",
    "Protects against rising peak-hour commercial demand tariffs",
  ],
  idealFor: "Hospitals, universities, corporate campuses, research facilities, and industries where power outages carry high operational or financial costs.",
};

export const solarGroundMounted = {
  slug: "ground-mounted",
  title: "Ground-Mounted Solar Power Plants",
  subtitle: "Engineering Large-Scale Solar Power Plants for Reliable, Long-Term Energy Generation",
  heroImage: "/pdf-images/page_5_img_1.jpg",
  gallery: [
    "/pdf-images/page_5_img_1.jpg",
    "/pdf-images/page_14_img_1.jpg",
    "/pdf-images/page_14_img_2.jpg",
  ],
  overview: `Ground-mounted solar power plants are utility-scale photovoltaic systems designed to generate electricity on open land and supply power to industries, commercial facilities, institutions, utilities or the grid. At MW scale, a solar plant is much more than an installation of solar modules. It is a complete electrical and civil infrastructure project involving site engineering, solar resource assessment, module selection, mounting structures, DC and AC systems, inverters, transformers, protection systems, evacuation infrastructure, SCADA and monitoring, testing and commissioning. At Urja Solutions, our approach is to engineer every part of the plant with long-term performance, safety, reliability and maintainability in mind.`,

  epcSteps: [
    {
      step: "01",
      title: "Site Assessment & Solar Resource Analysis",
      description: "Evaluating land availability, solar irradiation, topography, contouring, soil conditions, geotechnical characteristics, flood risk, drainage requirements, access roads, transmission-line proximity, grid connectivity, shadow analysis, wind loading, and cleaning water availability.",
    },
    {
      step: "02",
      title: "Solar PV Module Selection (ALMM Compliant)",
      description: "Evaluating module technology, efficiency, temperature coefficient, bifacial performance, degradation curves, mechanical load rating, PID/LID resistance, and ALMM (Approved Models and Manufacturers) compliance for Indian grid mandates.",
    },
    {
      step: "03",
      title: "Module Mounting Structure & Wind Loading",
      description: "Mounting structure engineered as the plant backbone, designed to withstand wind loading, seismic forces, corrosion, and soil movement over 25+ years with hot-dip galvanization and precise tilt optimization.",
    },
    {
      step: "04",
      title: "DC Side Engineering & Protection",
      description: "Correct string sizing, voltage-drop control, cable routing, connector compatibility, polarity verification, insulation testing, earthing, DC surge protection, and string combiner arrangements.",
    },
    {
      step: "05",
      title: "Inverters – Converting DC into AC",
      description: "String, central, or distributed inverter architecture selected based on plant capacity, topology, and grid codes to maximize conversion efficiency and reliability.",
    },
    {
      step: "06",
      title: "AC Collection & Distribution System",
      description: "AC output collection from inverters through ACDB / collection panels, LT/HT switchgear, circuit breakers, protection relays, CT/PT coordination, and auxiliary earthing systems.",
    },
    {
      step: "07",
      title: "Transformer & Voltage Step-Up",
      description: "Stepping up inverter AC voltage (e.g. to 11 kV, 33 kV, or 66 kV) via oil-immersed or dry-type step-up transformers with temperature and Buchholz protection.",
    },
    {
      step: "08",
      title: "HT Switchgear, Substation & Grid Evacuation",
      description: "HT switchgear, protection relays, metering, CT/PT systems, lightning protection, earthing grid, switchyard, and transmission line built to strict DISCOM/CEA interconnection standards.",
    },
    {
      step: "09",
      title: "SCADA & Real-Time Monitoring",
      description: "Continuous telemetry monitoring generation, inverter status, voltage, current, frequency, power factor, plant availability, historical yield trends, and predictive fault alarms.",
    },
    {
      step: "10",
      title: "Testing, Commissioning & Handover",
      description: "Systematic pre-commissioning testing: inverter testing, AC testing, protection testing, transformer testing, HT testing, SCADA verification, and grid synchronization.",
    },
  ],

  executionFramework: [
    { phase: "01", title: "Site Assessment", description: "Land topography, geotechnical investigation, solar resource mapping, and grid feasibility" },
    { phase: "02", title: "System Design", description: "Detailed electrical SLD, civil foundation calculations, string sizing, and 3D shadow modeling" },
    { phase: "03", title: "Regulatory Approvals", description: "State DISCOM evacuation approvals, CEIG clearances, and environmental compliance" },
    { phase: "04", title: "Procurement", description: "ALMM tier-1 modules, Tier-1 inverters, heavy duty structures, and certified BOS components" },
    { phase: "05", title: "Civil & Structural", description: "Ground grading, foundation piling, drainage trenches, and structure erection" },
    { phase: "06", title: "Electrical & Commissioning", description: "DC/AC cabling, transformer installation, protection testing, and grid synchronization" },
    { phase: "07", title: "Long-Term O&M", description: "Scheduled robotic/manual cleaning, thermographic drone audits, and 24/7 SCADA monitoring" },
  ],

  qualityMatters: {
    title: "Why Quality Matters in a MW Solar Plant",
    points: [
      "Poor connector installation → Higher resistance, heating, electrical losses, and fire failure risk",
      "Poor cable management → Mechanical abrasion, water ingress, insulation failure, and extended downtime",
      "Poor structure quality → Structural misalignment, rapid corrosion, mechanical instability, and storm damage",
      "Poor drainage design → Soil waterlogging, foundation subsidence, and site access difficulties",
      "Poor module selection → Accelerated degradation, lower long-term generation, and severe revenue loss",
      "Poor SCADA monitoring → Undetected string faults, delayed maintenance response, and lost kilowatt-hours",
    ],
  },

  generationAnalysis: {
    title: "Real-World Generation Depends on More Than Module Wattage",
    description: "A 640 W or 650 W module does not automatically mean the plant will generate a certain number of units every day. Actual real-world generation depends on: Solar irradiation, module degradation, ambient temperature, soiling losses, shading, DC cable losses, inverter efficiency, transformer losses, grid availability, and O&M quality. This is why Urja Solutions engineers system-level performance rather than simply selling high-wattage modules.",
  },
};


// ═══════════════════════════════════════════════════
// WIND ENERGY SYSTEMS (Pages 14–16)
// ═══════════════════════════════════════════════════

export const windEnergy = {
  slug: "wind-energy",
  title: "Wind Energy Systems",
  subtitle: "Harnessing Aerodynamic Kinetic Power from kW to MW Scale",
  heroImage: "/pdf-images/page_14_img_2.jpg",
  diagramImage: "/pdf-images/page_14_img_2.jpg",
  overview: `Wind energy systems convert kinetic aerodynamic energy from wind into clean electricity. From micro-wind turbine deployments for off-grid and telecom infrastructure to utility-scale wind turbine generators, Urja Solutions provides comprehensive wind resource assessment, mast structural design, turbine erection, power electronics, and grid evacuation.`,
  keyComponents: [
    "Aerodynamic Turbine Rotor Blades (optimized for site-specific wind profiles)",
    "Engineered Galvanized Tower / Mast Structure",
    "Permanent Magnet Synchronous Generator (PMSG) / DFIG",
    "Intelligent Power Converter & Pitch/Yaw Control Mechanism",
    "Grid Synchronization Switchgear & HT Protection",
    "SCADA Real-Time Wind Speed & Generation Telemetry",
  ],
  advantages: [
    "Generates clean electricity during nighttime, monsoons, and overcast conditions — perfectly complementing solar",
    "High capacity utilization factor in designated wind corridors",
    "Proven engineering lifespan of 20 to 25 years with predictable O&M cycles",
    "Minimal land footprint beneath turbines, preserving ground for agriculture or solar co-location",
  ],
  idealFor: "Coastal corridors, open elevated terrains, industrial campuses, and rural electrification microgrids.",
};

export const windSolarHybrid = {
  slug: "wind-solar-hybrid",
  title: "Wind & Solar Hybrid Systems",
  subtitle: "Complementary Generation for Continuous & Dependable Renewable Power",
  heroImage: "/pdf-images/page_14_img_2.jpg",
  diagramImage: "/pdf-images/page_14_img_2.jpg",
  overview: `Standalone solar and wind systems are subject to weather variability. A Wind-Solar Hybrid System combines the best of both worlds, offering a consistent and dependable power supply. Solar panels generate electricity during sunny days, and wind turbines generate electricity during windy nights or cloudy, overcast days, optimizing total energy production and stabilizing grid delivery round-the-clock.`,
  synergy: {
    title: "Complementary Energy Mechanics",
    points: [
      { period: "Sunny Daytime", solar: "Peak generation", wind: "Moderate generation", combined: "Maximum daytime plant output" },
      { period: "Nighttime", solar: "Zero generation", wind: "Strong diurnal breezes", combined: "Continuous overnight power supply" },
      { period: "Monsoon / Overcast", solar: "Reduced irradiation", wind: "High velocity monsoon winds", combined: "Wind offsets solar dip completely" },
      { period: "Winter Months", solar: "Consistent clear skies", wind: "Steady seasonal winds", combined: "Balanced round-the-clock baseload" },
    ],
  },
  feasibilityChecklist: [
    "Wind Regime Analysis: Verify annual average wind speed at hub height (minimum 4.5–5.5 m/s)",
    "Solar Resource Assessment: Ensure Global Horizontal Irradiation (GHI) exceeds 4.5 kWh/m²/day",
    "Load Profile Audit: Analyze facility peak demand vs. continuous base load to size turbine and PV ratio",
    "Topography & Wake Loss Modeling: Ensure optimal distance between wind turbines and solar array to prevent shading",
    "Grid Interconnection Capability: Evaluate local DISCOM substation evacuation capacity and synchronization protocols",
  ],
  idealFor: "Heavy industrial manufacturing, mining plants, remote commercial campuses, and microgrids requiring 24/7 green power.",
};


// ═══════════════════════════════════════════════════
// POWER CONDITIONING (Pages 16–19)
// ═══════════════════════════════════════════════════

export const upsSystem = {
  slug: "ups",
  title: "UPS Systems (Uninterruptible Power Supply)",
  subtitle: "Ensure Business Continuity with Industrial-Grade Power Defense",
  heroImage: "/pdf-images/page_19_img_1.jpg",
  diagramImage: "/pdf-images/page_19_img_1.jpg",
  overview: `In today's digital landscape, power reliability is non-negotiable. Whether it's a critical IT data center or industrial automation, a sudden utility outage can cause catastrophic data loss, equipment damage, and costly downtime. An Uninterruptible Power Supply (UPS) system acts as your primary electrical firewall, providing instantaneous, clean backup power when the utility grid fails.`,
  keyFeatures: [
    "Instantaneous Power Backup: Provides seamless, millisecond-level transition to battery power during outages (zero downtime)",
    "Voltage Regulation & Power Conditioning: Filters utility harmonics, voltage sags, surges, and electrical spikes",
    "True Online Double-Conversion Topology: Isolates connected critical equipment entirely from dirty raw utility power",
    "N+1 and 2N Redundancy Configurations for mission-critical industrial and IT loads",
    "Remote Telemetry & SNMP Integration for predictive health monitoring",
  ],
  checklist: [
    "Calculate Total Connected Load (kVA) including motor starting inrush currents",
    "Define Required Backup Runtime (autonomy minutes/hours) at full rated load",
    "Determine Redundancy Level (Single module, N+1 parallel redundant, or Dual Bus 2N)",
    "Select Battery Chemistry (Lithium-Ion LiFePO4 vs. High-Rate VRLA)",
    "Verify Electrical Room Environmental Conditions (HVAC cooling, floor loading capacity, and ventilation)",
  ],
  idealFor: "IT data centers, automated manufacturing, pharmaceutical production, hospitals, and financial institutions.",
};

export const bessSystem = {
  slug: "bess",
  title: "BESS (Battery Energy Storage Systems)",
  subtitle: "Grid-Scale Energy Storage for Peak Shaving, Arbitrage & Resilience",
  heroImage: "/pdf-images/page_19_img_1.jpg",
  diagramImage: "/pdf-images/page_19_img_1.jpg",
  overview: `A Battery Energy Storage System (BESS) captures electricity from generation sources (solar, wind, or the utility grid) and stores it for deployment when needed. For utilities, it is an essential tool for peak shaving and frequency regulation; for businesses, it offers a path to energy cost arbitrage, maximum demand charge reduction, and true operational resilience.`,
  applications: [
    "Load Shifting & Tariff Arbitrage: Store low-cost off-peak electricity or surplus midday solar, deploy during peak-tariff hours",
    "Peak Shaving & Demand Charge Management: Cap maximum kVA demand from the utility grid, slashing monthly industrial utility bills",
    "Grid Services & Ancillary Support: Provide ultra-fast frequency response, synthetic inertia, and reactive power compensation",
    "Renewable Generation Firming: Smooth intermittent solar and wind fluctuations to guarantee steady dispatch to the grid",
    "Islanded Microgrid Operation: Seamless backup power during extended blackout scenarios",
  ],
  chemistries: [
    {
      type: "Lithium Iron Phosphate (LFP)",
      pros: "Extremely safe thermal runaway threshold, long cycle life (6,000–8,000 cycles at 80% DoD), non-toxic, competitive Capex",
      cons: "Moderate gravimetric energy density compared to NMC",
    },
    {
      type: "Nickel Manganese Cobalt (NMC)",
      pros: "Highest energy density, compact footprint ideal for space-constrained urban installations",
      cons: "Requires advanced liquid cooling and stringent thermal management systems",
    },
    {
      type: "Vanadium Redox Flow (VRFB)",
      pros: "Virtually infinite electrochemical cycle life (20,000+ cycles), energy capacity scalable independently of power rating",
      cons: "Lower round-trip efficiency (~70-75%) and larger physical footprint",
    },
  ],
  checklist: [
    "Load Profile Audit: Continuous kW demand, peak spikes, and daily kWh consumption cycles",
    "Target Application Priority: Peak shaving vs. arbitrage vs. backup duration",
    "Containerized vs. Indoor Architecture: Sizing footprint, liquid cooling, and NFPA 855 fire suppression",
    "BMS & PCS Coordination: Bidirectional power conversion system integration with plant SCADA",
  ],
};

export const batterySystem = {
  slug: "battery",
  title: "Custom Battery Solutions",
  subtitle: "Application-Specific Energy Storage Tailored to Extreme Duty Cycles",
  heroImage: "/pdf-images/page_19_img_1.jpg",
  diagramImage: "/pdf-images/page_19_img_1.jpg",
  overview: `Urja Solutions engineers custom battery storage systems tailored to precise operating conditions, load characteristics, and space limitations. Rather than off-the-shelf compromises, we integrate high-performance cells with intelligent Battery Management Systems (BMS), active thermal dissipation, and industrial communication protocols.`,
  keyFeatures: [
    "Chemistry Specificity: Selection from LFP, Advanced Lead-Carbon, Gel, and Flow chemistries matched to your thermal and cycle requirements",
    "Integrated Battery Management Systems (BMS): Cell-level active balancing, SoC/SoH diagnostics, and multi-tier protection thresholds",
    "Engineered Enclosures: NEMA/IP rated enclosures engineered for harsh industrial environments, vibration, and temperature extremes",
    "Scalable Modular Architecture: Seamless parallel expansion for growing industrial capacity needs",
  ],
  checklist: [
    "Detailed Load Profile: Constant power (W), constant current (A), peak inrush duration, and expected Depth of Discharge (DoD)",
    "Operating Environment: Ambient temperature range, humidity, ventilation, and exposure to corrosive industrial contaminants",
    "Cycle Life Expectancy: Target operating lifespan (e.g. 3,000 vs 6,000+ cycles at specified DoD)",
    "Safety & Certification Mandates: Compliance with IEC 62619, UL 1973, and UN 38.3 transport standards",
  ],
};

export const scvsSystem = {
  slug: "scvs",
  title: "Servo Controlled Voltage Stabilizers (SCVS)",
  subtitle: "Dynamic ±0.5% Precision Voltage Regulation for Sensitive Industrial Loads",
  heroImage: "/pdf-images/page_19_img_1.jpg",
  diagramImage: "/pdf-images/page_19_img_1.jpg",
  overview: `Unstable utility voltage causes catastrophic motor burnouts, erratic CNC machining errors, and premature electronic equipment failures. A Servo Controlled Voltage Stabilizer (SCVS) continuously monitors fluctuating incoming utility voltage and dynamically regulates it to a steady, precise output voltage (typically ±0.5% to ±1.0%) using a rugged servo motor, variable autotransformer, and buck-boost transformer circuit.`,
  keyFeatures: [
    "High Precision Output: Regulates voltage within ±0.5% of setpoint, eliminating equipment stress",
    "Pure Sine Waveform: Zero waveform distortion or harmonic injection",
    "Wide Input Voltage Correction: Handles extreme fluctuations (e.g. 300V–470V 3-phase or custom ranges)",
    "Fast Correction Response: High-speed servo drive corrects voltage at 25V–50V per second",
    "Heavy-Duty Industrial Construction: Available in air-cooled and oil-cooled configurations with manual bypass switch",
  ],
  checklist: [
    "Input Voltage Fluctuation Range: Accurately map site voltage swings (e.g. ±15%, ±20%, or ±25%)",
    "Output Voltage Precision Required: Define required accuracy (±0.5% to ±1% for CNC/medical imaging)",
    "kVA Capacity & Inrush Headroom: Calculate total continuous load with 25-30% headroom for large motor startup currents",
    "Cooling Medium Selection: Air-cooled for clean indoor environments; oil-cooled for heavy industrial, outdoor, or dusty environments",
  ],
  idealFor: "CNC machinery, medical imaging (MRI/CT), printing presses, textile mills, and industrial automation facilities.",
};


// ═══════════════════════════════════════════════════
// SPECIALIZED DEPLOYMENTS (Pages 20–22)
// ═══════════════════════════════════════════════════

export const solarPumping = {
  slug: "solar-pumping",
  title: "Solar Pumping Systems",
  subtitle: "High-Efficiency Solar Water Pumping Solutions for Agriculture & Water Infrastructure",
  heroImage: "/pdf-images/page_21_img_1.jpg",
  diagramImage: "/pdf-images/page_21_img_1.jpg",
  overview: `Unreliable grid electricity and fluctuating diesel costs make continuous water supply a constant challenge for agriculture, livestock, rural drinking projects, and industrial setups. Solar Water Pumping Systems offer a clean, reliable, and maintenance-free alternative by directly converting sunlight into hydraulic power. Utilizing high-efficiency Variable Frequency Drives (VFDs) or Solar Pump Controllers, these systems adjust motor speed in real time based on solar irradiance, ensuring consistent water delivery from morning till evening without recurring fuel expenses.`,
  keyComponents: [
    "Solar PV Array: Sized 1.25x–1.35x of pump rating to ensure optimal MPPT operation in low-sun conditions",
    "MPPT Variable Frequency Drive (VFD) Controller: Dynamically tracks solar curve and modulates pump speed",
    "Submersible / Surface Pump: High-efficiency AC motor or Brushless DC (BLDC) permanent magnet pump",
    "Engineered Heavy-Duty Structure: Hot-dip galvanized mounting structures engineered for high wind resistance",
    "Integrated Multi-Tier Protection: Dry-run sensors (water probes), tank-full float switches, and surge arrestors",
  ],
  checklist: [
    "Total Dynamic Head (TDH) Calculation: Accurately compute static water level, drawdown, elevation rise, and pipe friction losses",
    "Daily Water Discharge Demand: Define required daily water volume (m³/day or liters/day) across seasons",
    "Water Source Yield & Recharge Rate: Ensure borewell sustainable yield to avoid dry-run tripping",
    "Pump Topology Selection: Submersible deep-well pump vs. surface centrifugal pump based on static head",
    "PV Array Oversizing Ratio: Maintain 1.25x–1.35x array wattage to pump rating for consistent morning and evening pumping",
    "Sensors & Automated Protections: Water level probes for dry-run prevention, tank float switch, and lightning SPD",
  ],
  advantages: [
    "Zero recurring diesel fuel costs and complete elimination of electricity utility bills",
    "Smart flow modulation via MPPT ensures pumping even during overcast or low-light hours",
    "Eligible for Government subsidy programs including the PM-KUSUM scheme",
    "Long operational life of 25+ years with minimal maintenance requirement",
  ],
  idealFor: "Agricultural irrigation, livestock watering, village drinking water projects, community tanks, and remote industrial setups.",
};

export const hybridStreetLighting = {
  slug: "street-lights",
  title: "Solar & Wind Hybrid Street Lighting Systems",
  subtitle: "24/7 Autonomous Outdoor Illumination Engineered for Year-Round Reliability",
  heroImage: "/pdf-images/page_22_img_1.jpg",
  diagramImage: "/pdf-images/page_22_img_1.jpg",
  overview: `While standalone solar street lights are effective, prolonged monsoon seasons, fog, and overcast days can lead to depleted batteries and blackouts. A Solar and Wind Hybrid Street Light integrates a compact, high-efficiency vertical or horizontal wind turbine with a monocrystalline solar panel and an intelligent lithium battery pack on a single mast. By harnessing daytime solar radiation and diurnal/nocturnal breezes, the system ensures autonomous, uninterrupted illumination all year round without grid trenches or utility wiring.`,
  keyComponents: [
    "Micro Wind Turbine: Low cut-in speed (1.5–2.5 m/s) Vertical Axis (VAWT) or Horizontal Axis (HAWT)",
    "High-Efficiency Solar Panel: Monocrystalline PERC solar module engineered for diffuse light capture",
    "Intelligent Lithium Battery Pack: LiFePO4 battery pack integrated into mast enclosure with 3-day autonomy",
    "Hybrid Charge Controller: Microprocessor-based dual-input MPPT controller with electronic dump load",
    "High-Lumen LED Luminaire: Optical grade LED fixture with PIR motion sensor and multi-stage dimming",
    "Engineered Octagonal Mast: Hot-dip galvanized mast designed to resist aerodynamic drag and wind gusts up to 150 km/h",
  ],
  checklist: [
    "Wind Regime & Cut-in Speed: Micro-turbine cut-in speed must be 1.5–2.5 m/s to harvest ambient breezes",
    "Mast & Foundation Engineering: Civil footing and anchor bolts designed to withstand dynamic gusts up to 120–150 km/h",
    "Turbine Type Selection: VAWT for omnidirectional turbulent urban winds; HAWT for unobstructed highway corridors",
    "Battery Autonomy Sizing: Lithium LiFePO4 pack sized for 2 to 3 days of autonomy during zero-sun monsoon periods",
    "PIR Motion & Smart Dimming: Dusk-to-dawn automated controller dimming to 30% standby, ramping to 100% on motion detection",
  ],
  advantages: [
    "100% off-grid operation — completely eliminates costly cable trenching, road cutting, and transformer costs",
    "Uninterrupted 365-night illumination — wind generation compensates for solar dips during winter and monsoons",
    "Smart dimming profiles prolong LED lifespan and preserve battery autonomy",
    "Zero recurring utility power bills and minimal municipal maintenance cycles",
  ],
  idealFor: "National highways, coastal roads, hill stations, municipal parks, industrial campuses, and rural corridors.",
};
