import { Slide } from "react-slideshow-image";
import { useTranslation } from "react-i18next";
import OH1 from "../../image/OH1.png";
import OH2 from "../../image/OH2.png";
import OH3 from "../../image/OH3.png";
import OH4 from "../../image/OH4.png";
import OH5 from "../../image/OH5.png";
import OH6 from "../../image/OH6.png";
import OH7 from "../../image/OH7.png";
import "react-slideshow-image/dist/styles.css";

function OfficerHandbook() {
  const { t } = useTranslation();

  const slideImages = [OH1, OH2, OH3, OH4, OH5, OH6, OH7];

  return (
    <>
      <h1 className="title">{t("oh.title")}</h1>
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
          <p>{t("oh.description")}</p>
          <div className="smallh1">
            <p>{t("oh.type")}</p>
          </div>
          <div className="smallh1">
            <p>{t("oh.date")}</p>
          </div>
          <div className="smallh1">
            <p>
              Link:{" "}
              <a
                href="https://github.com/RioNagata/Officer-Handbook"
                target="_blank"
                rel="noreferrer"
              >
                {t("oh.link")}
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="backlink">
        <a href="/projects">{t("oh.back")}</a>
      </p>
    </>
  );
}

export default OfficerHandbook;
