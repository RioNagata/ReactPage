import { Slide } from "react-slideshow-image";
import { useTranslation } from "react-i18next";
import hira1 from "../../image/IMG_3669.jpg";
import hira2 from "../../image/IMG_3670.jpg";
import hira3 from "../../image/IMG_3671.jpg";
import hira4 from "../../image/IMG_3673.jpg";
import hira5 from "../../image/IMG_3674.jpg";
import "react-slideshow-image/dist/styles.css";

function Hiraganafun() {
  const { t } = useTranslation();

  const slideImages = [hira1, hira2, hira3, hira4, hira5];

  return (
    <>
      <h1 className="title">{t("hiraganafun.title")}</h1>
      <div className="maincontent neo">
        <div className="slide-container2 slide">
          <Slide>
            {slideImages.map((url, index) => (
              <div key={index}>
                <img className="image" src={url} alt={`hiragana-${index + 1}`} />
              </div>
            ))}
          </Slide>
        </div>

        <div className="smallh1">
          <p>{t("hiraganafun.description")}</p>
          <div className="smallh1">
            <p>{t("hiraganafun.type")}</p>
          </div>
          <div className="smallh1">
            <p>{t("hiraganafun.date")}</p>
          </div>
        </div>
      </div>
      <p className="backlink">
        <a href="/projects">{t("hiraganafun.back")}</a>
      </p>
    </>
  );
}

export default Hiraganafun;
