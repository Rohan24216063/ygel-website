import { PackageSearch, Search } from "lucide-react";
import { useState } from "react";
import { dhlTrackingUrl } from "../../data/site.js";
import styles from "./TrackingPanel.module.css";

export default function TrackingPanel() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const value = trackingNumber.trim();
    if (!value) {
      setMessage("Please enter your DHL Air Waybill or tracking number.");
      return;
    }
    const popup = window.open(dhlTrackingUrl(value), "_blank", "noopener,noreferrer");
    if (!popup) {
      setMessage("Your browser blocked the new tab. Use the DHL link below.");
      return;
    }
    setMessage("");
  };

  const previewUrl = trackingNumber.trim()
    ? dhlTrackingUrl(trackingNumber.trim())
    : "https://www.dhl.com/global-en/home/tracking.html";

  return (
    <section className={styles.wrap} id="tracking" aria-labelledby="tracking-title">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.head}>
            <PackageSearch className={styles.icon} size={28} strokeWidth={1.7} aria-hidden="true" />
            <div>
              <h2 id="tracking-title">Track Your Shipment</h2>
              <p>
                Enter your DHL Air Waybill or tracking number. Tracking opens on DHL’s official
                page.
              </p>
            </div>
          </div>

          <div className={styles.body}>
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <label className="sr-only" htmlFor="trackingNumber">
                DHL tracking number
              </label>
              <div className={styles.field}>
                <Search size={18} aria-hidden="true" />
                <input
                  id="trackingNumber"
                  name="trackingNumber"
                  value={trackingNumber}
                  onChange={(event) => setTrackingNumber(event.target.value)}
                  placeholder="Enter DHL AWB / Tracking Number"
                  autoComplete="off"
                />
              </div>
              <button type="submit" className={styles.submit}>
                Track on DHL
              </button>
            </form>
            {message ? (
              <p className={styles.message} role="alert">
                {message}
              </p>
            ) : null}
            <p className={styles.note}>
              Yara shipments that move with DHL can be followed on DHL.com.{" "}
              <a href={previewUrl} target="_blank" rel="noopener noreferrer">
                Open DHL tracking
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
