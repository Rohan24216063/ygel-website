import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({
  to,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  full = false,
  icon: Icon,
  children,
  className = "",
  ...rest
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    full ? styles.full : "",
    className,
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon className={styles.icon} size={18} strokeWidth={2.2} aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
