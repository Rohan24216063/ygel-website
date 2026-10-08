import whyUsImage from "../../assets/images/why-warehouse.webp";
import { whyUsPoints } from "../../data/company.js";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
  return (
    <section className="section" id="why-us">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeading
            align="left"
            label="Why Choose Us"
            title="More Than Delivery."
            accent="We Deliver Trust."
            text="We understand that every shipment matters. That is why we focus on reliability, security and customer service at every step."
          />
          <ul className={styles.list}>
            {whyUsPoints.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 60} className={styles.item}>
                <span className={styles.icon}>
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className={styles.media}>
          <img
            src={whyUsImage}
            alt="Warehouse aisle stocked with packed shipments"
            width="760"
            height="1013"
            loading="lazy"
            decoding="async"
          />
          <dl className={styles.stats}>
            <div>
              <dt>Customer Satisfaction</dt>
              <dd>98%</dd>
            </div>
            <div>
              <dt>Global Destinations</dt>
              <dd>200+</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
