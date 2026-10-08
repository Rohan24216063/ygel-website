import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer = 0;

    const scroll = () => {
      const node = document.getElementById(id);
      if (node) {
        node.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        return;
      }
      if (attempts++ < 20) timer = window.setTimeout(scroll, 60);
    };

    timer = window.setTimeout(scroll, 30);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
