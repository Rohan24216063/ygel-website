import { Menu, Phone, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, quotePath, site } from "../../data/site.js";
import Button from "../ui/Button.jsx";
import Logo from "../ui/Logo.jsx";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Logo compact />

        <nav
          id="primary-nav"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Primary"
        >
          {navLinks.map((item) =>
            item.to.includes("#") ? (
              <Link key={item.to} to={item.to} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `${styles.link} ${isActive && !location.hash ? styles.active : ""}`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
          <div className={styles.drawerFooter}>
            <Button to={quotePath} icon={ArrowRight} full>
              Get a Quote
            </Button>
            {site.phones.map((phone) => (
              <a key={phone.href} href={phone.href} className={styles.drawerPhone}>
                <Phone size={16} aria-hidden="true" />
                {phone.display}
              </a>
            ))}
          </div>
        </nav>

        <div className={styles.actions}>
          <Button to={quotePath} icon={ArrowRight} size="sm" className={styles.quote}>
            Get a Quote
          </Button>
          <button
            className={styles.toggle}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
