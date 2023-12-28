import "./index.css";

import { Header } from "./components/Header";
import { EventShirtSurvey } from "./components/EventShirtSurvey";
import { Sponsors } from "./components/Sponsors";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";

import bg from "./assets/bg.png"
import { BannerSection } from "./components/BannerSection";

export function App() {
  return (
    <>
      <Header />
      <BannerSection />
      <EventShirtSurvey />
      <Sponsors />
      <AboutUs />

      <div id="galeria" className="relative bg-cover" style={{ backgroundImage: `url(${bg})` }}>
        <Gallery />
        <Footer />    
      </div>
    </>
  );
}
