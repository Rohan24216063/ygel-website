import { processSteps } from "../../data/process.js";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHeading label="How It Works" title="Send Your Shipment" accent="In 4 Easy Steps." />
        <ol className={styles.steps}>
          {processSteps.map(({ number, icon: Icon, title, text }, i) => (
            <Reveal as="li" key={number} delay={i * 80} className={styles.step}>
              <span className={styles.icon}>
                <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <span className={styles.number}>Step {number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
