import { stats } from "../../data/site.js";
import Counter from "../ui/Counter.jsx";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.band} aria-label="Company highlights">
      <dl className={`container ${styles.grid}`}>
        {stats.map((item) => (
          <div key={item.label} className={styles.item}>
            <dt>{item.label}</dt>
            <dd>
              <Counter value={item.value} suffix={item.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
