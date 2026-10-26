import { ArrowUpRight, RotateCcw, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/yge-logo-192.png";
import { chatLanguages, chatText, chatTopics, whatsappLink } from "../../data/chatbot.js";
import { WhatsAppIcon } from "../ui/BrandIcons.jsx";
import styles from "./ChatWindow.module.css";

const STORAGE_KEY = "yge-chat-lang";
const topicsById = Object.fromEntries(chatTopics.map((topic) => [topic.id, topic]));

function readSavedLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return chatText[saved] ? saved : null;
  } catch {
    return null;
  }
}

function replyDelay() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 150 : 700;
}

let nextId = 0;
const message = (from, kind, topicId) => ({ id: nextId++, from, kind, topicId });

export default function ChatWindow({ open, onClose }) {
  const [lang, setLang] = useState(readSavedLanguage);
  const [messages, setMessages] = useState(() =>
    readSavedLanguage() ? [message("bot", "welcome")] : [],
  );
  const [typing, setTyping] = useState(false);
  const panelRef = useRef(null);
  const bodyRef = useRef(null);
  const timerRef = useRef(null);

  const t = chatText[lang ?? "en"];
  const asked = new Set(messages.filter((item) => item.kind === "question").map((item) => item.topicId));
  const remaining = chatTopics.filter((topic) => !asked.has(topic.id));
  const isFirstTurn = asked.size === 0 && !messages.some((item) => item.kind === "other");

  useEffect(() => () => clearTimeout(timerRef.current), []);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    const userMessages = body.querySelectorAll("[data-user]");
    const lastUser = userMessages[userMessages.length - 1];
    const top = lastUser ? lastUser.offsetTop - 16 : 0;
    body.scrollTo({ top, behavior: "smooth" });
  }, [messages, typing, lang]);

  const chooseLanguage = (id) => {
    setLang(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* storage unavailable */
    }
    if (messages.length === 0) setMessages([message("bot", "welcome")]);
  };

  const reply = (userMessage, botMessage) => {
    setMessages((list) => [...list, userMessage]);
    setTyping(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setTyping(false);
      setMessages((list) => [...list, botMessage]);
    }, replyDelay());
  };

  const ask = (topicId) => reply(message("user", "question", topicId), message("bot", "answer", topicId));
  const askOther = () => reply(message("user", "other"), message("bot", "fallback"));

  const restart = () => {
    clearTimeout(timerRef.current);
    setTyping(false);
    setMessages([message("bot", "welcome")]);
  };

  const renderMessage = (item) => {
    if (item.kind === "welcome") {
      return (
        <div key={item.id} className={styles.botGroup}>
          <p className={styles.bot}>{t.welcome}</p>
          <p className={styles.bot}>{t.welcomeHint}</p>
        </div>
      );
    }

    if (item.kind === "question" || item.kind === "other") {
      const text = item.kind === "other" ? t.otherQuestion : topicsById[item.topicId].question[lang];
      return (
        <p key={item.id} className={styles.user} data-user>
          {text}
        </p>
      );
    }

    if (item.kind === "fallback") {
      return (
        <div key={item.id} className={styles.botGroup}>
          <div className={styles.bot}>
            <p>{t.fallback}</p>
            <a
              className={styles.whatsappAction}
              href={whatsappLink(t.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              {t.whatsapp}
            </a>
          </div>
        </div>
      );
    }

    const topic = topicsById[item.topicId];
    return (
      <div key={item.id} className={styles.botGroup}>
        <div className={styles.bot}>
          <p>{topic.answer[lang]}</p>
          {topic.lines && (
            <ul className={styles.lines}>
              {topic.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )}
          {topic.actions && (
            <div className={styles.actions}>
              {topic.actions.map((action) =>
                action.type === "route" ? (
                  <Link key={action.to} to={action.to} className={styles.action} onClick={onClose}>
                    {action.label[lang]}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                ) : (
                  <a
                    key={action.href}
                    href={action.href}
                    className={styles.action}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {action.label[lang]}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      ref={panelRef}
      className={styles.panel}
      role="dialog"
      aria-label={t.title}
      tabIndex={-1}
      hidden={!open}
      lang={lang ?? "en"}
    >
      <header className={styles.header}>
        <img className={styles.avatar} src={logo} alt="" width="40" height="40" />
        <div className={styles.headerText}>
          <strong>{t.title}</strong>
          <span>
            <i className={styles.online} aria-hidden="true" />
            {t.status}
          </span>
        </div>

        {lang && (
          <div className={styles.langSwitch} role="group" aria-label={t.language}>
            {chatLanguages.map((option) => (
              <button
                key={option.id}
                type="button"
                className={option.id === lang ? styles.langActive : ""}
                aria-pressed={option.id === lang}
                onClick={() => chooseLanguage(option.id)}
              >
                {option.id === "en" ? "EN" : "বাং"}
              </button>
            ))}
          </div>
        )}

        <button type="button" className={styles.close} onClick={onClose} aria-label={t.close}>
          <X size={20} aria-hidden="true" />
        </button>
      </header>

      <div ref={bodyRef} className={styles.body} aria-live="polite">
        {!lang ? (
          <div className={styles.botGroup}>
            <p className={styles.bot}>
              Hello! Welcome to Yara Global Express. 👋
              <br />
              আসসালামু আলাইকুম! স্বাগতম।
            </p>
            <p className={styles.bot}>
              Please choose your language.
              <br />
              অনুগ্রহ করে আপনার ভাষা বেছে নিন।
            </p>
            <div className={styles.languageChoice}>
              {chatLanguages.map((option) => (
                <button key={option.id} type="button" onClick={() => chooseLanguage(option.id)}>
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map(renderMessage)}

            {typing && (
              <div className={styles.typing} aria-label="Typing">
                <span />
                <span />
                <span />
              </div>
            )}

            {!typing && (
              <div className={styles.suggestions}>
                <p className={styles.suggestionsLabel}>{isFirstTurn ? t.suggestions : t.more}</p>
                <div className={styles.chips}>
                  {remaining.map((topic) => (
                    <button key={topic.id} type="button" className={styles.chip} onClick={() => ask(topic.id)}>
                      {topic.question[lang]}
                    </button>
                  ))}
                  <button type="button" className={`${styles.chip} ${styles.chipOther}`} onClick={askOther}>
                    {t.other}
                  </button>
                  {!isFirstTurn && (
                    <button type="button" className={`${styles.chip} ${styles.chipGhost}`} onClick={restart}>
                      <RotateCcw size={14} aria-hidden="true" />
                      {t.restart}
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <a
        className={styles.footer}
        href={whatsappLink(t.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        {t.footer}
      </a>
    </section>
  );
}
