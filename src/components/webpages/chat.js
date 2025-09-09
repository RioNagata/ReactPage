import { Slide } from "react-slideshow-image";
import { useTranslation } from "react-i18next";
import chat1 from "../../image/chat1.png";
import chat2 from "../../image/chat2.png";
import chat3 from "../../image/chat3.png";
import chat4 from "../../image/chat4.png";
import "react-slideshow-image/dist/styles.css";

function Chat() {
  const { t } = useTranslation();

  const slideImages = [chat1, chat2, chat3, chat4];

  return (
    <>
      <h1 className="title">{t("chat.title")}</h1>
      <div className="maincontent neo">
        <div className="slide-container slide">
          <Slide>
            {slideImages.map((url, index) => (
              <div key={index}>
                <img className="image" src={url} alt={`chat-${index + 1}`} />
              </div>
            ))}
          </Slide>
        </div>
        <div className="smallh1">
          <p>{t("chat.description")}</p>
          <div className="smallh1">
            <p>{t("chat.type")}</p>
          </div>
          <div className="smallh1">
            <p>{t("chat.date")}</p>
          </div>
          <div className="smallh1">
            <p>
              Link:{" "}
              <a href="https://github.com/RioNagata/website" target="_blank" rel="noreferrer">
                {t("chat.linkText")}
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="backlink">
        <a href="/projects">{t("chat.back")}</a>
      </p>
    </>
  );
}

export default Chat;
