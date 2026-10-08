import { useCallback, useEffect, useState } from "react";
import { banners } from "../../data/banners.js";
import { quotePath } from "../../data/site.js";
import Button from "../ui/Button.jsx";
import styles from "./HeroSlider.module.css";

const INTERVAL = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const go = useCallback((next) => {
    setIndex((next + banners.length) % banners.length);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAutoplay(!reduce && banners.length > 1);
  }, []);

  useEffect(() => {
    if (!autoplay) return undefined;
    const timer = window.setTimeout(() => go(index + 1), INTERVAL);
    return () => window.clearTimeout(timer);
  }, [autoplay, index, go]);

  return (
    <section className={styles.hero} id="home" aria-label="Yara Global Express">
      {banners.map((slide, slideIndex) => (
        <img
          key={slide.caption}
          className={`${styles.slide} ${slideIndex === index ? styles.active : ""}`}
          src={slide.src}
          alt={slideIndex === index ? slide.alt : ""}
          aria-hidden={slideIndex !== index}
          width="1600"
          height="900"
          loading={slideIndex === 0 ? "eager" : "lazy"}
          fetchPriority={slideIndex === 0 ? "high" : "low"}
          decoding="async"
        />
      ))}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <p className={styles.caption} aria-live="polite">
          {banners[index].caption}
        </p>
        <h1>Connecting Bangladesh To The World.</h1>
        <p className={styles.lead}>
          Fast, secure and reliable international courier solutions for documents, parcels
          and businesses.
        </p>
        <div className={styles.actions}>
          <Button to={quotePath} size="lg">
            Get a Quote
          </Button>
          <Button to="/services" size="lg" variant="ghost">
            Explore Services
          </Button>
        </div>

        <div className={styles.dots}>
          {banners.map((slide, slideIndex) => (
            <button
              key={slide.caption}
              type="button"
              className={slideIndex === index ? styles.dotActive : ""}
              aria-label={`Show slide ${slideIndex + 1}: ${slide.caption}`}
              aria-current={slideIndex === index}
              onClick={() => go(slideIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
