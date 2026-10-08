import { FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { quotePath, site } from "../../data/site.js";
import ChatWidget from "../chat/ChatWidget.jsx";
import { WhatsAppIcon } from "../ui/BrandIcons.jsx";
import styles from "./FloatingActions.module.css";

export default function FloatingActions() {
  return (
    <>
      <ChatWidget />

      <nav className={styles.mobileBar} aria-label="Quick contact">
        <a href={site.phones[0].href}>
          <Phone size={19} aria-hidden="true" />
          Call
        </a>
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className={styles.waIcon} />
          WhatsApp
        </a>
        <Link to={quotePath} className={styles.quote}>
          <FileText size={19} aria-hidden="true" />
          Get a Quote
        </Link>
      </nav>
    </>
  );
}
