import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service, detailed = false, number }) {
  const { icon: Icon, title, summary, details, link, linkLabel } = service;

  return (
    <article className={`${styles.card} ${detailed ? styles.detailed : ""}`}>
      <span className={styles.icon}>
        <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <div className={styles.body}>
        {number ? <span className={styles.number}>{number}</span> : null}
        <h3>{title}</h3>
        <p>{detailed ? details : summary}</p>
        {detailed && !link ? null : (
          <Link to={link || "/services"} className={styles.more}>
            <span>{linkLabel || "Learn more"}</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
