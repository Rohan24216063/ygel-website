import { Mail, Phone } from "lucide-react";
import { site } from "../../data/site.js";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.group}>
          <a href={`mailto:${site.email}`}>
            <Mail size={14} aria-hidden="true" />
            {site.email}
          </a>
          {site.phones.slice(0, 2).map((phone) => (
            <a key={phone.href} href={phone.href}>
              <Phone size={14} aria-hidden="true" />
              {phone.display}
            </a>
          ))}
        </div>
        <div className={styles.group}>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
