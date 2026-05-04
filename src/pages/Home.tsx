import Hero from "../components/Hero";
import FleetLogos from "../components/FleetLogos";
import About from "../components/About";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FleetLogos />
      <div id="sobre"><About /></div>
      <Services />
      <Stats />
      <div id="blog"><Blog /></div>
      <Testimonials />
    </>
  );
}
