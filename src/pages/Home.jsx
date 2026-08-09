import { lazy, Suspense } from "react";
import PageLoader from "../components/ui/PageLoader";
import ScrollReveal from "../components/ui/ScrollReveal";

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
      {/* Hero gets a simple fade - no slide to avoid layout shift */}
      <ScrollReveal variant="fade" duration={0.8}>
        <Hero />
      </ScrollReveal>

      {/* Services slides up with slight delay */}
      <ScrollReveal variant="fadeUp" delay={0.1}>
        <Services />
      </ScrollReveal>

      {/* Why Us slides from left for visual variety */}
      <ScrollReveal variant="fadeUp" delay={0.1}>
        <WhyUs />
      </ScrollReveal>

      {/* Process fades up */}
      <ScrollReveal variant="fadeUp" delay={0.1}>
        <Process />
      </ScrollReveal>

      {/* Projects scales in */}
      <ScrollReveal variant="scale" delay={0.1}>
        <Projects />
      </ScrollReveal>

      {/* Client showcase fades up */}
      <ScrollReveal variant="fadeUp" delay={0.1}>
        <ClientShowcase />
      </ScrollReveal>

      {/* Operational Reach - map slides from right */}
      <ScrollReveal variant="fadeUp" delay={0.1}>
        <OperationalReach />
      </ScrollReveal>

      {/* Contact slides up */}
      <ScrollReveal variant="fadeUp" delay={0.1}>
        <ContactConsultation />
      </ScrollReveal>

      {/* Solar Calculator scales in */}
      <ScrollReveal variant="scale" delay={0.1}>
        <SolarCalculator />
      </ScrollReveal>
    </Suspense>
  );
}

export default Home;
