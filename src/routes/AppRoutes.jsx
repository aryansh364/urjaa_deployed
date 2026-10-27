import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SolarPage from "../pages/SolarPage";
import WindPage from "../pages/WindPage";
import PowerConditioningPage from "../pages/PowerConditioningPage";
import SpecializedPage from "../pages/SpecializedPage";
import SolutionDetailPage from "../pages/SolutionDetailPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Solar Solutions */}
      <Route path="/solutions/solar" element={<SolarPage />} />
      <Route path="/solutions/solar/:slug" element={<SolutionDetailPage />} />

      {/* Wind Energy Systems */}
      <Route path="/solutions/wind" element={<WindPage />} />
      <Route path="/solutions/wind/:slug" element={<SolutionDetailPage />} />

      {/* Power Conditioning */}
      <Route path="/solutions/power-conditioning" element={<PowerConditioningPage />} />
      <Route path="/solutions/power-conditioning/:slug" element={<SolutionDetailPage />} />

      {/* Specialized */}
      <Route path="/solutions/specialized" element={<SpecializedPage />} />
      <Route path="/solutions/specialized/:slug" element={<SolutionDetailPage />} />

      {/* Catch-all fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}