import { Link } from "react-router-dom";
import logoSrc from "../../assets/images/yge-logo-192.png";
import { site } from "../../data/site.js";
import styles from "./Logo.module.css";

export default function Logo({ light = false, compact = false }) {
  return (
    <Link
      to="/"
      className={`${styles.logo} ${light ? styles.light : ""} ${compact ? styles.compact : ""}`}
      aria-label={`${site.name} home`}
    >
      <img src={logoSrc} alt="" width="48" height="48" />
      <span className={styles.text}>
        <strong>{site.name}</strong>
        {compact ? null : <small>an worldwide courier service...</small>}
      </span>
    </Link>
  );
}
