import heroImage from "../assets/images/services-hero.webp";
import Seo from "../components/Seo.jsx";
import Process from "../components/sections/Process.jsx";
import Stats from "../components/sections/Stats.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import ServiceCard from "../components/ui/ServiceCard.jsx";
import { pharmaServices, services } from "../data/services.js";
import styles from "./ServicesPage.module.css";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | Yara Global Express Ltd"
        description="International document and parcel delivery, express courier, corporate shipping, customs updates, and pharmaceutical courier support from Bangladesh."
      />
      <PageHero
        image={heroImage}
        crumb="Services"
        title="International Shipping"
        accent="Built Around Your Needs."
        text="Documents, express courier, business shipping, customs updates, and dedicated support for pharmaceutical shipments."
      />
      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            label="Services Overview"
            title="Complete Courier Solutions."
          />
          <div className={styles.grid}>
            {services.map((service, index) => (
              <Reveal key={service.id} delay={(index % 3) * 80} id={service.id}>
                <ServiceCard
                  service={service}
                  detailed
                  number={String(index + 1).padStart(2, "0")}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" aria-label="Our Support for pharmaceutical & Healthcare business">
        <div className="container">
          <SectionHeading
            label="Pharmaceutical"
            title="Our Support for pharmaceutical & Healthcare business"
            text="A dedicated service for companies sending medicines, healthcare products, temperature-sensitive consignments, samples, and related documents."
          />
          <div className={styles.grid}>
            {pharmaServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 80} id={service.id}>
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
