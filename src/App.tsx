/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import FleetLogos from "./components/FleetLogos";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen relative font-sans">
      <Header />
      <main>
        <Hero />
        <FleetLogos />
        <About />
        <Services />
        <Stats />
        <Blog />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
