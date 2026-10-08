import { CircleAlert, CircleCheck } from "lucide-react";
import { useState } from "react";
import { site } from "../../data/site.js";
import Button from "../ui/Button.jsx";
import styles from "./QuoteForm.module.css";

const initial = {
  name: "",
  phone: "",
  email: "",
  company: "",
  origin: "Bangladesh",
  destination: "",
  service: "International Express",
  packageType: "Documents",
  weight: "",
  message: "",
};

export default function QuoteForm() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", text: "" });

    if (!values.name.trim() || !values.phone.trim() || !values.destination.trim()) {
      setStatus({ type: "error", text: "Please fill in name, phone and destination." });
      return;
    }

    setSending(true);
    try {
      const response = await fetch(site.quoteEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Quote Request - Yara Global Express",
          Name: values.name.trim(),
          Phone: values.phone.trim(),
          Email: values.email.trim(),
          Company: values.company.trim(),
          From: values.origin.trim(),
          To: values.destination.trim(),
          Service: values.service,
          "Package Type": values.packageType,
          "Weight (KG)": values.weight,
          Message: values.message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to submit request.");
      }

      setStatus({
        type: "success",
        text: "Thank you. Your request has been submitted. Our team will contact you shortly.",
      });
      setValues(initial);
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error.message ||
          `Unable to submit online. Email ${site.email} or call ${site.phones[0].display}.`,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="quoteName">Full Name *</label>
          <input id="quoteName" name="name" value={values.name} onChange={update} required />
        </div>
        <div className={styles.group}>
          <label htmlFor="quotePhone">Phone Number *</label>
          <input
            id="quotePhone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={update}
            placeholder="01XXXXXXXXX"
            required
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="quoteEmail">Email</label>
          <input
            id="quoteEmail"
            name="email"
            type="email"
            value={values.email}
            onChange={update}
            placeholder="you@example.com"
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="quoteCompany">Company</label>
          <input id="quoteCompany" name="company" value={values.company} onChange={update} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="quoteOrigin">From</label>
          <input id="quoteOrigin" name="origin" value={values.origin} onChange={update} />
        </div>
        <div className={styles.group}>
          <label htmlFor="quoteDestination">To *</label>
          <input
            id="quoteDestination"
            name="destination"
            value={values.destination}
            onChange={update}
            placeholder="United Kingdom"
            required
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="quoteService">Service</label>
          <select id="quoteService" name="service" value={values.service} onChange={update}>
            <option>International Express</option>
            <option>Economy Courier</option>
            <option>Document Delivery</option>
            <option>Parcel Delivery</option>
          </select>
        </div>
        <div className={styles.group}>
          <label htmlFor="quotePackage">Package Type</label>
          <select
            id="quotePackage"
            name="packageType"
            value={values.packageType}
            onChange={update}
          >
            <option>Documents</option>
            <option>Parcel</option>
            <option>Box</option>
          </select>
        </div>
      </div>
      <div className={styles.group}>
        <label htmlFor="quoteWeight">Weight (KG)</label>
        <input
          id="quoteWeight"
          name="weight"
          type="number"
          min="0.01"
          step="0.01"
          value={values.weight}
          onChange={update}
          placeholder="e.g. 2.5"
        />
      </div>
      <div className={styles.group}>
        <label htmlFor="quoteMessage">Message</label>
        <textarea
          id="quoteMessage"
          name="message"
          rows="5"
          value={values.message}
          onChange={update}
          placeholder="Tell us about your shipment..."
        />
      </div>
      {status.text ? (
        <p
          className={`${styles.message} ${status.type === "success" ? styles.success : styles.error}`}
          role={status.type === "success" ? "status" : "alert"}
        >
          {status.type === "success" ? (
            <CircleCheck size={20} aria-hidden="true" />
          ) : (
            <CircleAlert size={20} aria-hidden="true" />
          )}
          {status.text}
        </p>
      ) : null}
      <Button type="submit" size="lg" full disabled={sending}>
        {sending ? "Sending..." : "Request a Quote"}
      </Button>
    </form>
  );
}
