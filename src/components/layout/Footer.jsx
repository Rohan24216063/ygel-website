import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { quotePath, site } from "../../data/site.js";
import { homeServices } from "../../data/services.js";
import Button from "../ui/Button.jsx";
import { FacebookIcon, WhatsAppIcon } from "../ui/BrandIcons.jsx";
import Logo from "../ui/Logo.jsx";
import styles from "./Footer.module.css";

// Footer shows the IP number first; other places keep the site.js order.
const footerPhones = [...site.phones].sort(
  (a, b) => Number(b.href.includes("9611")) - Number(a.href.includes("9611")),
);

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/#about" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/#process" },
  { label: "Track Shipment", to: "/tracking" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.ctaWrap}`}>
        <div className={styles.cta}>
          <div>
            <span className={styles.kicker}>Ready To Ship?</span>
            <h2>Let’s Get Your Shipment Moving.</h2>
            <p>Contact us today for shipping information and a personalized quotation.</p>
          </div>
          <Button to={quotePath} icon={ArrowRight} variant="light">
            Get a Quote
          </Button>
        </div>
      </div>

      <div className={styles.main}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.about}>
            <Logo light />
            <p>{site.tagline}</p>
            <div className={styles.social}>
              <a href={site.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
                <span>Facebook</span>
              </a>
              <a href={site.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                <span>WhatsApp</span>
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

          <nav className={styles.column} aria-label="Services">
            <h3>Services</h3>
            {homeServices.map((item) => (
              <Link key={item.id} to="/services">
                {item.title}
              </Link>
            ))}
          </nav>

          <div className={`${styles.column} ${styles.contact}`}>
            <h3>Contact</h3>
            <p className={styles.contactItem}>
              <span className={styles.icon}>
                <MapPin size={16} aria-hidden="true" />
              </span>
              <span>{site.address}</span>
            </p>
            <div className={styles.contactItem}>
              <span className={styles.icon}>
                <Phone size={16} aria-hidden="true" />
              </span>
              <span className={styles.stack}>
                {footerPhones.map((phone) => (
                  <a key={phone.href} href={phone.href}>
                    {phone.display}
                  </a>
                ))}
              </span>
            </div>
            <p className={styles.contactItem}>
              <span className={styles.icon}>
                <Mail size={16} aria-hidden="true" />
              </span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>

        <div className={`container ${styles.bottom}`}>
          <p>
            <span>© {year} {site.name} All rights reserved.</span>
            <span className={styles.dot} aria-hidden="true" />
            <span>Dhaka, Bangladesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
