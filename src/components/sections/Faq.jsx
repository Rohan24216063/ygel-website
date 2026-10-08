import { Minus, Phone, Plus } from "lucide-react";
import { useId, useState } from "react";
import { faqs } from "../../data/company.js";
import { site } from "../../data/site.js";
import Button from "../ui/Button.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./Faq.module.css";

export default function Faq() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section className="section" id="faq">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <SectionHeading
            align="left"
            label="FAQ"
            title="Frequently Asked Questions"
            text="Everything you need to know before sending your shipment with us."
          />
          <div className={styles.help}>
            <h3>Still have questions?</h3>
            <p>Our team will help you find the right shipping solution.</p>
            <Button href={site.phones[0].href} variant="dark" icon={Phone}>
              {site.phones[0].display}
            </Button>
          </div>
        </div>

        <div className={styles.list}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;
            return (
              <div key={item.question} className={styles.item}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.question}</span>
                    {isOpen ? (
                      <Minus size={18} aria-hidden="true" />
                    ) : (
                      <Plus size={18} aria-hidden="true" />
                    )}
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                >
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
