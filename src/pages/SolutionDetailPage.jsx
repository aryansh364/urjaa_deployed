/**
 * DYNAMIC SOLUTION DETAIL PAGE
 * Reads route params (category & slug) and renders the matching technical deep-dive.
 */

import { useParams } from "react-router-dom";
import SolutionDetail from "./SolutionDetail";
import {
  solarOnGrid,
  solarOffGrid,
  solarHybrid,
  solarGroundMounted,
  windEnergy,
  windSolarHybrid,
  upsSystem,
  bessSystem,
  batterySystem,
  scvsSystem,
  solarPumping,
  hybridStreetLighting,
} from "../data/solutions";

const solutionsMap = {
  // Solar
  "solar/on-grid": solarOnGrid,
  "solar/off-grid": solarOffGrid,
  "solar/hybrid": solarHybrid,
  "solar/ground-mounted": solarGroundMounted,
  "on-grid": solarOnGrid,
  "off-grid": solarOffGrid,
  "hybrid": solarHybrid,
  "ground-mounted": solarGroundMounted,

  // Wind
  "wind/wind-energy": windEnergy,
  "wind/wind-solar-hybrid": windSolarHybrid,
  "wind-energy": windEnergy,
  "wind-solar-hybrid": windSolarHybrid,

  // Power Conditioning
  "power-conditioning/ups": upsSystem,
  "power-conditioning/battery": batterySystem,
  "power-conditioning/scvs": scvsSystem,
  "power-conditioning/bess": bessSystem,
  "ups": upsSystem,
  "battery": batterySystem,
  "scvs": scvsSystem,
  "bess": bessSystem,

  // Specialized
  "specialized/street-lights": hybridStreetLighting,
  "specialized/solar-pumping": solarPumping,
  "street-lights": hybridStreetLighting,
  "solar-pumping": solarPumping,
};

export default function SolutionDetailPage() {
  const { category, slug } = useParams();
  const key = category && slug ? `${category}/${slug}` : slug || category;
  const solution = solutionsMap[key];

  return <SolutionDetail solution={solution} />;
}
