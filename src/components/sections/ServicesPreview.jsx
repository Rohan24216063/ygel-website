import { homeServices } from "../../data/services.js";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import ServiceCard from "../ui/ServiceCard.jsx";
import styles from "./ServicesPreview.module.css";

export default function ServicesPreview() {
  return (
    <section className="section section-muted" id="services">
      <div className="container">
        <SectionHeading
          label="Our Services"
          title="Shipping Solutions"
          accent="Made Simple."
          text="From important documents to commercial shipments, we provide solutions designed around your needs."
        />
        <div className={styles.grid}>
          {homeServices.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <div className={styles.more}>
          <Button to="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
