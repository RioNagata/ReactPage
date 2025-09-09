import { Slide } from "react-slideshow-image";
import { useTranslation } from "react-i18next";
import vehicle1 from "../../image/vehicle1.png";
import vehicle2 from "../../image/vehicle2.png";
import vehicle3 from "../../image/vehicle3.png";
import vehicle4 from "../../image/vehicle4.png";
import vehicle5 from "../../image/vehicle5.png";
import "react-slideshow-image/dist/styles.css";

function Vehicle() {
  const { t } = useTranslation();

  const slideImages = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5];

  return (
    <>
      <h1 className="title">{t("vehicle.title")}</h1>
      <div className="maincontent neo">
        <div className="slide-container2 slide">
          <Slide>
            {slideImages.map((url, index) => (
              <div key={index}>
                <img className="image" src={url} alt={`vehicle-${index + 1}`} />
              </div>
            ))}
          </Slide>
        </div>

        <div className="smallh1">
          <p>{t("vehicle.description")}</p>
          <div className="smallh1">
            <p>{t("vehicle.type")}</p>
          </div>
          <div className="smallh1">
            <p>{t("vehicle.date")}</p>
          </div>
          <div className="smallh1">
            <p>
              Link:{" "}
              <a
                href="https://github.com/RioNagata/Laravel-Web"
                target="_blank"
                rel="noreferrer"
              >
                {t("vehicle.link")}
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="backlink">
        <a href="/projects">{t("vehicle.back")}</a>
      </p>
    </>
  );
}

export default Vehicle;
