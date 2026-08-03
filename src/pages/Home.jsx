import Services from '../components/sections/Services/Services';
import WhyUs from '../components/sections/WhyUs/WhyUs';
import Process from '../components/sections/Process/Process';
import Projects from '../components/sections/Projects/Projects';
import ClientShowcase from '../components/sections/ClientShowcase';
import OperationalReach from '../components/sections/OperationalReach';

function Home() {
  return (
    <>
      <section className="min-h-screen bg-green-600 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">
          HERO
        </h1>
      </section>
      <Services />
      <WhyUs />
      <Process />
      <Projects />
      <ClientShowcase />
      <OperationalReach />
    </>
  );
}

export default Home;