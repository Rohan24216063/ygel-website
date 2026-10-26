import { Plane, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import poster from "../../assets/images/cargo-poster.webp";
import logo from "../../assets/images/yge-logo-320.webp";
import styles from "./BrandShowcase.module.css";

const sources = [
  { minWidth: 2400, src: "/videos/cargo-4k.mp4" },
  { minWidth: 1000, src: "/videos/cargo-1080.mp4" },
  { minWidth: 0, src: "/videos/cargo-720.mp4" },
];

function pickSource() {
  const width = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
  return sources.find((item) => width >= item.minWidth).src;
}

function prefersStill() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection?.saveData === true;
  return reducedMotion || saveData;
}

export default function BrandShowcase() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersStill()) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = pickSource();
            video.load();
          }
          video.play().catch(() => {});
        } else if (video.src) {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="brand-showcase-title">
      <div className="container">
        <div className={styles.frame}>
          <div className={styles.media}>
            <video
              ref={videoRef}
              className={styles.video}
              poster={poster}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            />
            <div className={styles.overlay} />

            <div className={styles.content}>
              <img className={styles.logo} src={logo} alt="" width="320" height="320" loading="lazy" />
              <h2 id="brand-showcase-title" className={styles.title}>
                Yara Global Express Ltd.
              </h2>
              <p className={styles.tagline}>an worldwide courier service . . .</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardTop}`}>
            <span className={styles.cardIcon}>
              <Plane size={18} strokeWidth={2} aria-hidden="true" />
            </span>
            <span>
              <strong>Worldwide</strong>
              <small>Delivery Network</small>
            </span>
          </div>

          <div className={`${styles.card} ${styles.cardBottom}`}>
            <span className={styles.cardIcon}>
              <ShieldCheck size={18} strokeWidth={2} aria-hidden="true" />
            </span>
            <span>
              <strong>Safe &amp; Secure</strong>
              <small>Your shipment matters</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
