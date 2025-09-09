import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h5 className="footertitle">{t("footer.menu")}</h5>
          <ul>
            <li><a href="/">{t("footer.menu")}</a></li>
          </ul>
        </div>

        <div>
          <h5 className="footertitle">{t("footer.projects")}</h5>
          <ul>
            <li><a href="/hiraganafun">{t("footer.hiragana")}</a></li>
            <li><a href="/vehicle">{t("footer.vehicle")}</a></li>
            <li><a href="/chat">{t("footer.chat")}</a></li>
            <li><a href="/gamereport">{t("footer.gamereport")}</a></li>
          </ul>
        </div>

        <div>
          <h5 className="footertitle">{t("footer.about")}</h5>
          <ul>
            <li><a href="/contact">{t("footer.about")}</a></li>
          </ul>
        </div>

        <div>
          <h5 className="footertitle">{t("footer.contacts")}</h5>
          <ul>
            <li><a href="/contact">{t("footer.contacts")}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&#169; {year} Rio Nagata. {t("footer.rights")}</p>
      </div>
    </footer>
  );
}

export default Footer;
