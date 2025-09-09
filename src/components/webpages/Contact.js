import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <div className="maincontent2">
          <h1 className="title">{t("contact.title")}</h1>
          <p>{t("contact.email")}</p>
          <p>{t("contact.phone")}</p>
        </div>
      </main>
    </>
  );
}

export default Contact;
