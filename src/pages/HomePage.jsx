import Seo from "../components/Seo.jsx";
import About from "../components/sections/About.jsx";
import BrandShowcase from "../components/sections/BrandShowcase.jsx";
import Destinations from "../components/sections/Destinations.jsx";
import Faq from "../components/sections/Faq.jsx";
import HeroSlider from "../components/sections/HeroSlider.jsx";
import Process from "../components/sections/Process.jsx";
import ServicesPreview from "../components/sections/ServicesPreview.jsx";
import Stats from "../components/sections/Stats.jsx";
import TrackingPanel from "../components/sections/TrackingPanel.jsx";
import WhyUs from "../components/sections/WhyUs.jsx";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Yara Global Express Ltd | International Courier Service"
        description="Reliable international courier and delivery services from Bangladesh to destinations worldwide."
      />
      <HeroSlider />
      <TrackingPanel />
      <BrandShowcase />
      <About />
      <ServicesPreview />
      <WhyUs />
      <Stats />
      <Process />
      <Destinations />
      <Faq />
    </>
  );
}
