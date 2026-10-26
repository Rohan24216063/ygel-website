import { useCallback, useEffect, useState } from "react";
import { Check, Mail, MapPin, Package, Phone, Plane } from "lucide-react";
import { processSteps } from "../../data/process.js";
import { site } from "../../data/site.js";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./Process.module.css";

const STEP_MS = 4600;

const bookingRows = ["Shipment details", "Destination", "Pricing"];

function ContactScene() {
  return (
    <div className={styles.contact}>
      <article className={styles.action}>
        <span className={styles.actionIcon}>
          <span className={styles.ring} aria-hidden="true" />
          <Phone size={20} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <div>
          <strong>Call</strong>
          <span>{site.phones[0].display}</span>
        </div>
      </article>
      <span className={styles.or}>or</span>
      <article className={`${styles.action} ${styles.actionLate}`}>
        <span className={`${styles.actionIcon} ${styles.mailIcon}`}>
          <Mail size={20} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <div>
          <strong>Email</strong>
          <span>{site.email}</span>
        </div>
      </article>
    </div>
  );
}

function BookingScene() {
  return (
    <div className={styles.sheet}>
      <p>Booking</p>
      <ul>
        {bookingRows.map((row) => (
          <li key={row}>
            <span>{row}</span>
            <span className={styles.tick}>
              <Check size={14} strokeWidth={2.4} aria-hidden="true" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PickupScene() {
  return (
    <div className={styles.route}>
      <div className={styles.stop}>
        <span className={styles.stopIcon}>
          <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span>Pickup</span>
      </div>
      <div className={styles.track}>
        <span className={styles.trackFill} />
        <span className={styles.parcel}>
          <Package size={18} strokeWidth={1.8} aria-hidden="true" />
        </span>
      </div>
      <div className={styles.stop}>
        <span className={styles.stopIcon}>
          <Plane size={18} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span>In transit</span>
      </div>
    </div>
  );
}

function DeliveryScene() {
  return (
    <div className={styles.success}>
      <span className={styles.successMark}>
        <Check size={28} strokeWidth={2.2} aria-hidden="true" />
      </span>
      <strong>Delivered</strong>
      <span>Your shipment has arrived safely.</span>
    </div>
  );
}

const scenes = [ContactScene, BookingScene, PickupScene, DeliveryScene];

export default function Process() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next) => {
    setIndex((next + processSteps.length) % processSteps.length);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAutoplay(!reduce);
  }, []);

  useEffect(() => {
    if (!autoplay || paused) return undefined;
    const timer = window.setTimeout(() => go(index + 1), STEP_MS);
    return () => window.clearTimeout(timer);
  }, [autoplay, paused, index, go]);

  const step = processSteps[index];

  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHeading label="How It Works" title="Send Your Shipment" accent="In 4 Easy Steps." />

        <div
          className={styles.board}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className={styles.stage}>
            <div className={styles.stageTop}>
              <p>
                <span>Step {step.number}</span>
                {step.title}
              </p>
              <p className={styles.count}>
                {index + 1} / {processSteps.length}
              </p>
            </div>
            <div className={styles.well}>
              {scenes.map((Scene, sceneIndex) => (
                <div
                  key={processSteps[sceneIndex].number}
                  className={`${styles.scene} ${sceneIndex === index ? styles.sceneActive : ""}`}
                >
                  {sceneIndex === index ? <Scene /> : null}
                </div>
              ))}
            </div>
            <p className="sr-only" aria-live="polite">
              {`Step ${step.number}. ${step.title}. ${step.text}`}
            </p>
          </div>

          <div className={styles.timeline} style={{ "--progress": index / (processSteps.length - 1) }}>
            <span className={styles.rail} aria-hidden="true">
              <span className={styles.railFill} />
            </span>
            <ol className={styles.steps}>
            {processSteps.map(({ number, icon: Icon, title, text }, i) => (
              <Reveal as="li" key={number} delay={i * 80} className={`${styles.step} ${i === index ? styles.stepActive : ""}`}>
                <button type="button" aria-current={i === index ? "step" : undefined} onClick={() => go(i)}>
                  <span className={styles.icon}>
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span>
                    <span className={styles.number}>Step {number}</span>
                    <h3 className={styles.stepTitle}>{title}</h3>
                    <span className={styles.stepText}>{text}</span>
                  </span>
                </button>
              </Reveal>
            ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
