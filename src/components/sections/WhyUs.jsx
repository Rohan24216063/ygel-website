import { useCallback, useEffect, useState } from "react";
import careImage from "../../assets/images/why-care-v2.webp";
import experienceImage from "../../assets/images/why-experience-v2.webp";
import reachImage from "../../assets/images/why-reach.webp";
import reliabilityImage from "../../assets/images/why-reliability.webp";
import { whyUsPoints } from "../../data/company.js";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./WhyUs.module.css";

const SLIDE_MS = 5000;

const slides = [
  {
    src: experienceImage,
    alt: "Yara Global Express worker loading branded parcels into a delivery van in the warehouse",
    title: "11+",
    note: "Years of Experience",
    position: "center 58%",
  },
  {
    src: reliabilityImage,
    alt: "Staff sealing a parcel before it is shipped",
    title: "Reliability",
    position: "center 12%",
  },
  {
    src: reachImage,
    alt: "Shipping routes from Bangladesh to destinations worldwide",
    title: "International Reach",
    position: "center 42%",
  },
  {
    src: careImage,
    alt: "Smiling Yara Global Express support specialist with a headset",
    title: "Customer Care",
    position: "center 18%",
  },
];

export default function WhyUs() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAutoplay(!reduce);
  }, []);

  useEffect(() => {
    if (!autoplay || paused) return undefined;
    const timer = window.setTimeout(() => go(index + 1), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [autoplay, paused, index, go]);

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
          <div
            className={styles.stage}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {slides.map((slide, slideIndex) => {
              const active = slideIndex === index;
              return (
                <figure
                  key={slide.title}
                  className={`${styles.frame} ${active ? styles.frameActive : ""}`}
                  aria-hidden={!active}
                >
                  <img
                    src={slide.src}
                    alt={active ? slide.alt : ""}
                    width="784"
                    height="1024"
                    loading={slideIndex === 0 ? "eager" : "lazy"}
                    decoding="async"
                    style={{ objectPosition: slide.position }}
                  />
                  <figcaption className={styles.badge}>
                    <strong>{slide.title}</strong>
                    {slide.note ? <span>{slide.note}</span> : null}
                  </figcaption>
                </figure>
              );
            })}

            <div className={styles.dots} role="tablist" aria-label="Why choose us highlights">
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.title}
                  type="button"
                  role="tab"
                  className={slideIndex === index ? styles.dotActive : ""}
                  aria-label={slide.note ? `${slide.title} ${slide.note}` : slide.title}
                  aria-selected={slideIndex === index}
                  onClick={() => go(slideIndex)}
                />
              ))}
            </div>
          </div>

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
