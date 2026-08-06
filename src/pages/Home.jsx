import { lazy, Suspense } from "react";
import PageLoader from "../components/ui/PageLoader";

const Hero = lazy(() => import("../components/sections/Hero/Hero"));
const Services = lazy(() => import("../components/sections/Services/Services"));
const WhyUs = lazy(() => import("../components/sections/WhyUs/WhyUs"));
const Process = lazy(() => import("../components/sections/Process/Process"));
const Projects = lazy(() => import("../components/sections/Projects/Projects"));

const ClientShowcase = lazy(
  () => import("../components/sections/ClientShowcase"),
);

const OperationalReach = lazy(
  () => import("../components/sections/OperationalReach"),
);

const ContactConsultation = lazy(() =>
  import("../components/sections/ContactConsultation").then((module) => ({
    default: module.ContactConsultation,
  })),
);

const SolarCalculator = lazy(() =>
  import("../components/sections/SolarCalculator").then((module) => ({
    default: module.SolarCalculator,
  })),
);

function Home() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Projects />
      <ClientShowcase />
      <OperationalReach />
      <ContactConsultation />
      <SolarCalculator />
    </Suspense>
  );
}

export default Home;
