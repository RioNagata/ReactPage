import { Slide } from "react-slideshow-image";
import { useTranslation } from "react-i18next";
import habi1 from "../../image/habi1.png";
import habi2 from "../../image/habi2.png";
import habi3 from "../../image/habi3.png";
import habi4 from "../../image/habi4.png";
import "react-slideshow-image/dist/styles.css";

function Habitquest() {
  const { t } = useTranslation();

  const slideImages = [habi1, habi2, habi3, habi4];

  return (
    <>
      <h1 className="title">{t("habitquest.title")}</h1>
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
          <p>{t("habitquest.description")}</p>
          <div className="smallh1">
            <p>{t("habitquest.type")}</p>
          </div>
          <div className="smallh1">
            <p>{t("habitquest.date")}</p>
          </div>
          <div className="smallh1">
            <p>
              Link:{" "}
              <a
                href="https://github.com/RioNagata/habitquest"
                target="_blank"
                rel="noreferrer"
              >
                {t("habitquest.link")}
              </a>
            </p>
            <p>
              Link:{" "}
              <a
                href="https://habitquest-brown.vercel.app/login"
                target="_blank"
                rel="noreferrer"
              >
                {t("habitquest.link2")}
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="backlink">
        <a href="/projects">{t("habitquest.back")}</a>
      </p>
    </>
  );
}

export default Habitquest;
