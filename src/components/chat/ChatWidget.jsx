import { MessageCircle, X } from "lucide-react";
import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import styles from "./ChatWidget.module.css";

const loadWindow = () => import("./ChatWindow.jsx");
const ChatWindow = lazy(loadWindow);

const MOBILE_QUERY = "(max-width: 640px)";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const launcherRef = useRef(null);

  const close = useCallback(() => {
    setOpen(false);
    launcherRef.current?.focus();
  }, []);

  const toggle = () => {
    setMounted(true);
    setOpen((value) => !value);
  };

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    const lockScroll = window.matchMedia(MOBILE_QUERY).matches;
    if (lockScroll) document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      if (lockScroll) document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      {mounted && (
        <Suspense fallback={null}>
          <ChatWindow open={open} onClose={close} />
        </Suspense>
      )}

      <button
        ref={launcherRef}
        type="button"
        className={`${styles.launcher} ${open ? styles.launcherOpen : ""}`}
        onClick={toggle}
        onPointerEnter={loadWindow}
        onFocus={loadWindow}
        aria-label={open ? "Close chat" : "Open chat — ask us a question"}
        aria-expanded={open}
      >
        {open ? <X size={24} aria-hidden="true" /> : <MessageCircle size={26} aria-hidden="true" />}
      </button>
    </>
  );
}
