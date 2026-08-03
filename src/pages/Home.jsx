import Hero from "../components/sections/Hero/Hero";
import Services from "../components/sections/Services/Services";
import WhyUs from "../components/sections/WhyUs/WhyUs";
import Process from "../components/sections/Process/Process";
import Projects from "../components/sections/Projects/Projects";
import { ContactConsultation } from "../components/sections/ContactConsultation";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Projects />
      <ContactConsultation />
    </>
  );
}

export default Home;
