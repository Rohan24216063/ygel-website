import { PackageSearch, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import TrackingResultModal from "../components/tracking/TrackingResultModal.jsx";
import styles from "./TrackingPage.module.css";

export default function TrackingPage() {
  const [params, setParams] = useSearchParams();
  const awb = (params.get("awb") || "").trim();
  const [input, setInput] = useState(awb);
  const [error, setError] = useState("");

  useEffect(() => { if (awb) setInput(awb); }, [awb]);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) { setError("Please enter your AWB / tracking number."); return; }
    setError("");
    setParams({ awb: value });
  };

  return (
    <>
      <Seo
        title="Track Shipment | Yara Global Express Ltd"
        description="Track your Yara Global Express shipment with your AWB / tracking number."
      />
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <PackageSearch size={34} strokeWidth={1.6} aria-hidden="true" />
            <h1>Track Your Shipment</h1>
            <p>Real-time status of your Yara Global Express parcel, anywhere in the world.</p>
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <label className="sr-only" htmlFor="awb">AWB / Tracking Number</label>
              <div className={styles.field}>
                <Search size={18} aria-hidden="true" />
                <input id="awb" value={input} onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter AWB / Tracking Number" autoComplete="off" />
              </div>
              <button type="submit" className={styles.submit}>Track</button>
            </form>
            {error ? <p className={styles.error} role="alert">{error}</p> : null}
          </div>
        </div>
      </section>
      <section className={styles.results}>
        <div className="container">
          <p className={styles.idle}>Enter your waybill number above — your result opens in a popup.</p>
        </div>
      </section>
      <TrackingResultModal awb={awb} onClose={() => setParams({}, { replace: true })} />
    </>
  );
}
