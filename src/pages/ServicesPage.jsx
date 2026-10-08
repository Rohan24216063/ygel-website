import heroImage from "../assets/images/services-hero.webp";
import Seo from "../components/Seo.jsx";
import Process from "../components/sections/Process.jsx";
import Stats from "../components/sections/Stats.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import ServiceCard from "../components/ui/ServiceCard.jsx";
import { services } from "../data/services.js";
import styles from "./ServicesPage.module.css";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | Yara Global Express Ltd"
        description="Express courier, documents, parcels, customs clearance, air freight and packaging services from Bangladesh."
      />
      <PageHero
        image={heroImage}
        crumb="Services"
        title="International Shipping"
        accent="Built Around Your Needs."
        text="From documents and samples to airport freight and customs clearance at Dhaka Airport."
      />
      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            label="Services Overview"
            title="Complete Courier &"
            accent="Logistics Solutions."
          />
          <div className={styles.grid}>
            {services.map((service, index) => (
              <Reveal key={service.id} delay={(index % 3) * 80} id={service.id}>
                <ServiceCard service={service} detailed />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Stats />
      <Process />
    </>
  );
}
