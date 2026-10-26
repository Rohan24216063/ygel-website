import {
  AlertCircle, Box, Calendar, CheckCircle2, Clock, FileText, Hash, Layers,
  Loader2, X, MapPin, PackageCheck, PackageSearch, Phone, Plane, Truck,
  User, Building2, ShieldCheck, Tag,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { findShipment, stages } from "../../data/shipments.js";
import { site } from "../../data/site.js";
import styles from "../../pages/TrackingPage.module.css";
import m from "./TrackingResultModal.module.css";

const stageIcons = [Tag, PackageCheck, Plane, ShieldCheck, Truck, CheckCircle2];

/** Floating popup that looks up `awb` and shows the result / not-found card. */
export default function TrackingResultModal({ awb, onClose }) {
  const [state, setState] = useState({ status: "loading", data: null });
  const dialogRef = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!awb) return undefined;
    let active = true;
    setState({ status: "loading", data: null });
    findShipment(awb).then((data) => {
      if (active) setState({ status: data ? "found" : "notfound", data });
    });
    return () => { active = false; };
  }, [awb]);

  useEffect(() => {
    if (!awb) return undefined;
    const prevOverflow = document.body.style.overflow;
    const prevFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") closeRef.current?.(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      prevFocus?.focus?.();
    };
  }, [awb]);

  if (!awb) return null;

  return createPortal(
    <div className={m.overlay} onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div
        ref={dialogRef}
        className={m.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tracking-modal-title"
        tabIndex={-1}
      >
        <div className={m.bar}>
          <div className={m.barTitle}>
            <PackageSearch size={20} aria-hidden="true" />
            <span id="tracking-modal-title">Tracking · <strong>{awb}</strong></span>
          </div>
          <button type="button" className={m.close} onClick={onClose} aria-label="Close tracking result">
            <X size={20} />
          </button>
        </div>
        <div className={m.body}>
          {state.status === "loading" && (
            <div className={m.loading} role="status">
              <Loader2 className={styles.spin} size={34} aria-hidden="true" />
              <span>Looking up shipment {awb}…</span>
            </div>
          )}
          {state.status === "notfound" && <NotFound awb={awb} />}
          {state.status === "found" && <Result s={state.data} />}
        </div>
      </div>
    </div>,
    document.body
  );
}

function NotFound({ awb }) {
  return (
    <div className={`${styles.card} ${styles.notFound}`}>
      <div className={styles.nfIcon}><AlertCircle size={36} aria-hidden="true" /></div>
      <h2>No shipment found for <span>{awb}</span></h2>
      <p>
        Please check the number and try again. Tracking may take a few hours to appear after
        booking. Still can't find it? Contact our team.
      </p>
      <div className={styles.nfActions}>
        <a href={site.phones[0].href} className={styles.ghost}><Phone size={16} /> {site.phones[0].display}</a>
        <Link to="/contact" className={styles.solid}>Contact Support</Link>
      </div>
    </div>
  );
}

function Result({ s }) {
  const delivered = s.stage >= stages.length - 1;
  return (
    <div className={styles.card}>
      <header className={styles.summary}>
        <div className={styles.sumItem}>
          <span>Waybill No</span>
          <strong>{s.awb}</strong>
        </div>
        <div className={styles.sumItem}>
          <span>Ref No</span>
          <strong>{s.refNo}</strong>
        </div>
        <div className={styles.sumStatus}>
          <span className={`${styles.badge} ${delivered ? styles.badgeDone : ""}`}>
            {delivered ? <CheckCircle2 size={15} /> : <Clock size={15} />} {s.status}
          </span>
          <small><MapPin size={13} /> {s.currentLocation} · {s.lastUpdate}</small>
        </div>
      </header>

      <div className={styles.route}>
        <div className={styles.place}>
          <span>Origin</span>
          <strong>{s.origin.city}</strong>
          <em>{s.origin.country}</em>
        </div>
        <div className={styles.line} aria-hidden="true">
          <span className={styles.plane} style={{ left: `${(s.stage / (stages.length - 1)) * 100}%` }}>
            <Plane size={20} />
          </span>
        </div>
        <div className={`${styles.place} ${styles.placeEnd}`}>
          <span>Destination</span>
          <strong>{s.destination.city}</strong>
          <em>{s.destination.country}</em>
        </div>
      </div>

      <ol className={styles.stepper}>
        {stages.map((label, i) => {
          const Icon = stageIcons[i];
          const cls = i < s.stage ? styles.done : i === s.stage ? styles.current : "";
          return (
            <li key={label} className={cls}>
              <span className={styles.dot}><Icon size={18} /></span>
              <span className={styles.stepLabel}>{label}</span>
            </li>
          );
        })}
      </ol>

      <div className={styles.grid}>
        <section className={styles.block}>
          <h3><Clock size={18} /> Shipment History</h3>
          <ul className={styles.timeline}>
            {s.history.map((h, i) => (
              <li key={i} className={i === 0 ? styles.latest : ""}>
                <span className={styles.tlDot}>{s.history.length - i}</span>
                <div>
                  <strong>{h.status}</strong>
                  <p><MapPin size={13} /> {h.location}</p>
                  <p><Calendar size={13} /> {h.date} · {h.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.side}>
          <section className={styles.block}>
            <h3><Box size={18} /> Shipment Details</h3>
            <dl className={styles.details}>
              <div><dt><FileText size={14} /> Content</dt><dd>{s.details.content}</dd></div>
              <div><dt><Layers size={14} /> Service</dt><dd>{s.details.service}</dd></div>
              <div><dt><Hash size={14} /> Pcs</dt><dd>{s.details.pcs}</dd></div>
              <div><dt><Calendar size={14} /> Booking Date</dt><dd>{s.details.bookingDate}</dd></div>
            </dl>
          </section>
          <div className={styles.parties}>
            <Party icon={User} title="Sender" p={s.sender} />
            <Party icon={Building2} title="Receiver" p={s.receiver} />
          </div>
        </div>
      </div>

      <footer className={styles.note}>
        For any inquiry about this shipment, please call{" "}
        <a href={site.phones[0].href}>{site.phones[0].display}</a> or email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> with your waybill number.
      </footer>
    </div>
  );
}

function Party({ icon: Icon, title, p }) {
  return (
    <section className={styles.party}>
      <h4><Icon size={16} /> {title}</h4>
      <strong>{p.name}</strong>
      <p>{p.address}</p>
    </section>
  );
}
