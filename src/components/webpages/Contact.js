import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    emailjs
      .send(
        "service_bjjiein",   // ← replace with your EmailJS Service ID
        "template_kl8p9qa",  // ← replace with your EmailJS Template ID
        formData,
        "tuAVCXiUmHK9_TceA"    // ← replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error.text);
          setError("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <main>
      <div className="maincontent2">
        <h1 className="title">{t("contact.title")}</h1>
        <p>{t("contact.email")}</p>
        <p>{t("contact.phone")}</p>

        <div className="contact-form">
          <h2>{t("contact.formTitle") || "Send a Message"}</h2>
          {submitted && (
            <p className="success-message">
              {t("contact.success") || "Thank you! Your message has been sent."}
            </p>
          )}
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <label>
              {t("contact.name") || "Name"}:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              {t("contact.emailLabel") || "Email"}:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              {t("contact.message") || "Message"}:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit">{t("contact.submit") || "Send"}</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
