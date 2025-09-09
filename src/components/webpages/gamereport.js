import { Slide } from "react-slideshow-image";
import { useTranslation } from "react-i18next";
import home from "../../image/reporthome.png";
import total from "../../image/reporttotal.png";
import compare from "../../image/reportcompare.png";
import entries from "../../image/reportentries.png";
import "react-slideshow-image/dist/styles.css";

function Hiraganafun() {
  const { t } = useTranslation();

  const slideImages = [home, total, compare, entries];

  return (
    <>
      <h1 className="title">{t("gamereport.title")}</h1>
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
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YnqhK8RXt8I?si=1FE-m62mzDUHDkcW"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="smallh1">
          <p>{t("gamereport.description")}</p>
          <div className="smallh1">
            <p>{t("gamereport.type")}</p>
          </div>
          <div className="smallh1">
            <p>{t("gamereport.date")}</p>
          </div>
        </div>
      </div>
      <p className="backlink">
        <a href="/projects">{t("gamereport.back")}</a>
      </p>
    </>
  );
}

export default Hiraganafun;
