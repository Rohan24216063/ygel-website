import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./PageHero.module.css";

export default function PageHero({ image, title, accent, text, crumb }) {
  return (
    <section className={styles.hero}>
      <img
        className={styles.bg}
        src={image}
        alt=""
        width="1600"
        height="900"
        fetchPriority="high"
        decoding="async"
      />
      <div className={`container ${styles.inner}`}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1>
          {title}
          {accent ? ` ${accent}` : null}
        </h1>
        {text ? <p>{text}</p> : null}
      </div>
    </section>
  );
}
