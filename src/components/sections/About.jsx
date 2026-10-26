import { ArrowRight } from "lucide-react";
import aboutImage from "../../assets/images/about-office-v2.webp";
import { aboutFeatures } from "../../data/company.js";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className="section" id="about">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.media}>
          <img
            src={aboutImage}
            alt="Yara Global Express team reviewing a shipment plan in the office"
            width="1024"
            height="768"
            loading="lazy"
            decoding="async"
          />
          <div className={styles.badge}>
            <strong>11+</strong>
            <span>Years of Experience</span>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            label="About Us"
            title="Your Trusted Partner"
            accent="Beyond Borders."
          />
          <Reveal>
            <p className={styles.lead}>
              Yara Global Express is a professional international courier service helping
              individuals and businesses send documents and parcels safely around the world.
            </p>
            <p className={styles.copy}>
              We focus on dependable service, secure handling, competitive pricing and customer
              satisfaction.
            </p>
            <ul className={styles.features}>
              {aboutFeatures.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button to="/contact" variant="dark" size="lg" icon={ArrowRight} className="cta-touch">
              Get in Touch
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
