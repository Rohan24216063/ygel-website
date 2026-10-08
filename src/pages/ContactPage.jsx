import { Mail, MapPin, Phone } from "lucide-react";
import heroImage from "../assets/images/contact-hero.webp";
import Seo from "../components/Seo.jsx";
import QuoteForm from "../components/sections/QuoteForm.jsx";
import Button from "../components/ui/Button.jsx";
import { WhatsAppIcon } from "../components/ui/BrandIcons.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import { site } from "../data/site.js";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us | Yara Global Express Ltd"
        description="Contact Yara Global Express in Hatirpool, Dhaka for international courier quotes, shipping information and support."
      />
      <PageHero
        image={heroImage}
        crumb="Contact"
        title="Have A Shipment"
        accent="In Mind?"
        text="Get in touch with our team and we will help you find the right shipping solution."
      />

      <section className="section" id="quote">
        <div className={`container ${styles.grid}`}>
          <aside className={styles.info}>
            <h2>Contact Information</h2>
            <ul className={styles.list}>
              <li>
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <h3>Office Address</h3>
                  <p>{site.address}</p>
                  <a href={site.mapLink} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </a>
                </div>
              </li>
              <li>
                <Phone size={20} aria-hidden="true" />
                <div>
                  <h3>Phone</h3>
                  {site.phones.map((phone) => (
                    <p key={phone.href}>
                      <a href={phone.href} className={styles.value}>
                        {phone.display}
                      </a>
                    </p>
                  ))}
                </div>
              </li>
              <li>
                <Mail size={20} aria-hidden="true" />
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${site.email}`} className={styles.value}>
                      {site.email}
                    </a>
                  </p>
                </div>
              </li>
            </ul>
            <Button href={site.whatsapp} variant="whatsapp" full>
              <span className={styles.waInner}>
                <WhatsAppIcon />
                Chat on WhatsApp
              </span>
            </Button>
          </aside>

          <div className={styles.formCard}>
            <h2>Request a Quote</h2>
            <p className={styles.formIntro}>
              Share your shipment details and our team will contact you shortly.
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className={styles.mapSection} aria-label="Office location map">
        <iframe
          src={site.mapEmbed}
          title="Yara Global Express location on Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
