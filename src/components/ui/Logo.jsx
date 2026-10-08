import { Link } from "react-router-dom";
import logoSrc from "../../assets/images/yara-logo-96.png";
import { site } from "../../data/site.js";
import styles from "./Logo.module.css";

export default function Logo({ light = false }) {
  return (
    <Link
      to="/"
      className={`${styles.logo} ${light ? styles.light : ""}`}
      aria-label={`${site.name} home`}
    >
      <img src={logoSrc} alt="" width="48" height="48" />
      <span className={styles.text}>
        <strong>Yara Global Express</strong>
        <small>International Courier</small>
      </span>
    </Link>
  );
}
