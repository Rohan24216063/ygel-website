import { ArrowRight } from "lucide-react";
import aboutImage from "../../assets/images/about-office-v2.webp";
import { aboutFeatures } from "../../data/company.js";
import { statText } from "../../data/site.js";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`section ${styles.section}`} id="about">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.media}>
          <div className={styles.frame}>
            <img
              src={aboutImage}
              alt="Yara Global Express team reviewing a shipment plan in the office"
              width="1024"
              height="768"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.badge}>
            <strong>{statText("Years of Experience")}</strong>
            <span>Years of Experience</span>
          </div>
        </Reveal>

        <div className={styles.content}>
          <SectionHeading
            align="left"
            label="About Us"
            title="Your Trusted Partner"
            accent="Beyond Borders"
          />
          <Reveal>
            <p className={styles.lead}>
              Yara Global Express Ltd. is a Bangladesh-based international courier service
              provider, dedicated to delivering documents, parcels, and business shipments to
              destinations worldwide.
            </p>
            <p className={styles.copy}>
              With a strong focus on reliability, secure shipment handling, competitive pricing,
              and personalized customer support, we strive to provide smooth, efficient, and
              dependable international shipping solutions for individuals and businesses.
            </p>

            <ul className={styles.features} aria-label="Our focus">
              {aboutFeatures.map(({ icon: Icon, title }) => (
                <li key={title}>
                  <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{title}</span>
                </li>
              ))}
            </ul>

            <p className={styles.commitment}>
              We are committed to building long-term business relationships through professional
              service, transparent communication, and customer satisfaction—
              <span className={styles.accent}>
                connecting Bangladesh with the world, one shipment at a time.
              </span>
            </p>

            <Button to="/contact" variant="dark" size="lg" icon={ArrowRight} className="cta-touch">
              Get in Touch
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
