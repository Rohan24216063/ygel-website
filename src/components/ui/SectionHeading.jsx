import Reveal from "./Reveal.jsx";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  label,
  title,
  accent,
  text,
  align = "center",
  as: Title = "h2",
  light = false,
}) {
  return (
    <Reveal className={`${styles.heading} ${styles[align]} ${light ? styles.light : ""}`}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <Title className={styles.title}>
        {title}
        {accent ? ` ${accent}` : null}
      </Title>
      {text ? <p className={styles.text}>{text}</p> : null}
    </Reveal>
  );
}
