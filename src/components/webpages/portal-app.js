import { Slide } from "react-slideshow-image";
import { useTranslation } from "react-i18next";
import portalapp1 from "../../image/portal-app1.jpg";
import portalapp2 from "../../image/portal-app2.jpg";
import portalapp3 from "../../image/portal-app3.jpg";
import portalapp4 from "../../image/portal-app4.jpg";
import portalapp5 from "../../image/portal-app5.jpg";
import portalapp6 from "../../image/portal-app6.jpg";
import portalapp7 from "../../image/portal-app7.jpg";
import "react-slideshow-image/dist/styles.css";

function PortalApp() {
  const { t } = useTranslation();

  const slideImages = [portalapp1, portalapp2, portalapp3, portalapp4, portalapp5, portalapp6, portalapp7];

  return (
    <>
      <h1 className="title">{t("portal-app.title")}</h1>
      <div className="maincontent neo">
        <div className="slide-container slide">
          <Slide>
            {slideImages.map((url, index) => (
              <div key={index}>
                <img className="image" src={url} alt={`game-report-${index + 1}`} />
              </div>
            ))}
          </Slide>
        </div>

        <div className="smallh1">
          <p>{t("portal-app.description")}</p>
          <div className="smallh1">
            <p>{t("portal-app.type")}</p>
          </div>
          <div className="smallh1">
            <p>{t("portal-app.date")}</p>
          </div>
          <div className="smallh1">
            <p>
              Link:{" "}
              <a
                href="https://github.com/RioNagata/portal-app"
                target="_blank"
                rel="noreferrer"
              >
                {t("portal-app.link")}
              </a>
            </p>
          </div>
          <div className="smallh1">
            <p>
              Link:{" "}
              <a
                href="https://portal-app-pi.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                {t("portal-app.link2")}
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="backlink">
        <a href="/projects">{t("portal-app.back")}</a>
      </p>
    </>
  );
}

export default PortalApp;
