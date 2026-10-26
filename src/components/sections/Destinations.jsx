import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { continents, flagUrl } from "../../data/destinations.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./Destinations.module.css";

export default function Destinations() {
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  function openContinent(id) {
    setOpenId(id);
    window.requestAnimationFrame(() => {
      document.getElementById(`coverage-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <section className="section section-muted" id="destinations">
      <div className="container">
        <SectionHeading
          label="Global Coverage"
          title="From Bangladesh"
          accent="To The World."
          text="We connect Bangladesh with major destinations around the globe."
        />

        <div className={styles.jumps} role="group" aria-label="Continents">
          {continents.map((continent) => {
            const open = openId === continent.id;
            return (
              <button
                key={continent.id}
                type="button"
                aria-expanded={open}
                onClick={() => openContinent(continent.id)}
              >
                {continent.name}
              </button>
            );
          })}
        </div>

        <div className={styles.groups}>
          {continents.map((continent) => {
            const open = openId === continent.id;
            const panelId = `coverage-panel-${continent.id}`;
            return (
              <section key={continent.id} id={`coverage-${continent.id}`} className={styles.group}>
                <h3>
                  <button
                    type="button"
                    className={styles.toggle}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggle(continent.id)}
                  >
                    <span className={styles.name}>{continent.name}</span>
                    <span className={styles.meta}>
                      <span className={styles.count}>{continent.countries.length} countries</span>
                      <span className={styles.action}>{open ? "Hide" : "See countries"}</span>
                      <ChevronDown size={18} aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                {open ? (
                  <ul className={styles.grid} id={panelId}>
                    {continent.countries.map((country) => (
                      <li key={country.id} className={styles.card}>
                        <img
                          className={styles.flag}
                          src={flagUrl(country.id)}
                          alt=""
                          width="28"
                          height="20"
                          loading="lazy"
                          decoding="async"
                        />
                        <span>{country.name}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
