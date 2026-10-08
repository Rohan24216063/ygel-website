import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { quotePath, site } from "../../data/site.js";
import { homeServices } from "../../data/services.js";
import Button from "../ui/Button.jsx";
import { FacebookIcon, WhatsAppIcon } from "../ui/BrandIcons.jsx";
import Logo from "../ui/Logo.jsx";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/#about" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/#process" },
  { label: "Track Shipment", to: "/#tracking" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <span className={styles.kicker}>Ready To Ship?</span>
            <h2>Let’s Get Your Shipment Moving.</h2>
            <p>Contact us today for shipping information and a personalized quotation.</p>
          </div>
          <Button to={quotePath} variant="light">
            Get a Quote
          </Button>
        </div>
      </section>

      <div className={styles.main}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.about}>
            <Logo light />
            <p>{site.tagline}</p>
            <div className={styles.social}>
              <a href={site.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href={site.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <nav className={styles.column} aria-label="Quick links">
            <h3>Quick Links</h3>
            {quickLinks.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className={`${styles.column} ${styles.services}`} aria-label="Services">
            <h3>Services</h3>
            {homeServices.map((item) => (
              <Link key={item.id} to="/services">
                {item.title}
              </Link>
            ))}
          </nav>

          <div className={styles.column}>
            <h3>Contact</h3>
            <p className={styles.contactItem}>
              <MapPin size={17} aria-hidden="true" />
              <span>{site.address}</span>
            </p>
            <div className={styles.contactItem}>
              <Phone size={17} aria-hidden="true" />
              <span className={styles.stack}>
                {site.phones.map((phone) => (
                  <a key={phone.href} href={phone.href}>
                    {phone.display}
                  </a>
                ))}
              </span>
            </div>
            <p className={styles.contactItem}>
              <Mail size={17} aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>

        <div className={`container ${styles.bottom}`}>
          <p>
            © {year} {site.name} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
