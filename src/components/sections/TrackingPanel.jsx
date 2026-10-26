import { PackageSearch, Search } from "lucide-react";
import { useState } from "react";
import TrackingResultModal from "../tracking/TrackingResultModal.jsx";
import styles from "./TrackingPanel.module.css";

export default function TrackingPanel() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [message, setMessage] = useState("");
  const [openAwb, setOpenAwb] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const value = trackingNumber.trim();
    if (!value) {
      setMessage("Please enter your tracking number.");
      return;
    }
    setMessage("");
    setOpenAwb(value);
  };

  return (
    <section className={styles.wrap} id="tracking" aria-labelledby="tracking-title">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.head}>
            <PackageSearch className={styles.icon} size={28} strokeWidth={1.7} aria-hidden="true" />
            <div>
              <h2 id="tracking-title">Track Your Shipment</h2>
              <p>Enter your tracking number to follow your shipment.</p>
            </div>
          </div>

          <div className={styles.body}>
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <label className="sr-only" htmlFor="trackingNumber">
                Tracking number
              </label>
              <div className={styles.field}>
                <Search size={18} aria-hidden="true" />
                <input
                  id="trackingNumber"
                  name="trackingNumber"
                  value={trackingNumber}
                  onChange={(event) => setTrackingNumber(event.target.value)}
                  placeholder="Enter AWB / Tracking Number"
                  autoComplete="off"
                />
              </div>
              <button type="submit" className={styles.submit}>
                Track Shipment
              </button>
            </form>
            {message ? (
              <p className={styles.message} role="alert">
                {message}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <TrackingResultModal awb={openAwb} onClose={() => setOpenAwb("")} />
    </section>
  );
}
