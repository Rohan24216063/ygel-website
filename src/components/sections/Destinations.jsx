import { useState } from "react";
import { destinations, flagUrl } from "../../data/destinations.js";
import Button from "../ui/Button.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./Destinations.module.css";

export default function Destinations() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? destinations : destinations.filter((item) => item.featured);

  return (
    <section className="section section-muted" id="destinations">
      <div className="container">
        <SectionHeading
          label="Global Coverage"
          title="From Bangladesh"
          accent="To The World."
          text="We connect Bangladesh with major destinations around the globe."
        />
        <ul className={styles.grid} id="destination-list">
          {visible.map((item) => (
            <li key={item.id} className={styles.card}>
              <img
                className={styles.flag}
                src={flagUrl(item.id)}
                alt=""
                width="40"
                height="30"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h3>{item.name}</h3>
                <p>{item.region}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.toggle}>
          <Button
            type="button"
            variant="outline"
            aria-expanded={expanded}
            aria-controls="destination-list"
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Show Fewer Destinations" : "More Destinations"}
          </Button>
        </div>
      </div>
    </section>
  );
}
