import { useTranslation } from "react-i18next";
import rio from "../../image/profile.jpeg";
import SkillDiv from "./skilldiv";

function Maincontent() {
  const { t } = useTranslation();

  const skilllists = [
    { skill: "HTML", image: "html.png", rating: "5" },
    { skill: "CSS", image: "css-3.png", rating: "5" },
    { skill: "Javascript(Node, React)", image: "js.png", rating: "3" },
    { skill: "MySQL", image: "mysql1.png", rating: "4" },
    { skill: "Swift(Xcode)", image: "swift.png", rating: "3" },
    { skill: "Git", image: "git.png", rating: "3" },
    { skill: "Next.js", image: "nextjs.jpeg", rating: "3" },
    { skill: "PHP", image: "php.png", rating: "5" }
  ];

  const skilllists2 = [
    { skill: "WordPress", image: "wordpress.jpeg", rating: "5" },
    { skill: "Elementor", image: "elementor.png", rating: "5" },
    { skill: "ACF", image: "afc.jpeg", rating: "5" },
    { skill: "Gravity Forms", image: "gf.png", rating: "5" },
    { skill: "Zapier", image: "zapier.jpeg", rating: "4" },
    { skill: t("home.webMaintenance"), image: "webmaintenance.png", rating: "5" },
  ];

  const skillElements = skilllists.map(skill => (
    <SkillDiv
      key={skill.skill}
      skill={skill.skill}
      image={skill.image}
      rating={skill.rating}
    />
  ));

  const skillElements2 = skilllists2.map(skill => (
    <SkillDiv
      key={skill.skill}
      skill={skill.skill}
      image={skill.image}
      rating={skill.rating}
    />
  ));

  return (
    <div className="main-content">
      <div className="container">
        <h1 className="main-title">{t("home.title")}</h1>

        <div className="about-section card">
          <img className="profile-image" src={rio} alt="Rio" />
          <div className="intro">
            <h3 className="section-title">{t("home.aboutTitle")}</h3>
            <p>{t("home.aboutText")}</p>
          </div>
        </div>

        <div className="skills-section card">
          <h2 className="section-title">{t("home.programmingSkills")}</h2>
          <p>{t("home.programmingSkillsDesc")}</p>
          
          <div className="skills-grid">
            {skillElements}
          </div>
        </div>

        <div className="skills-section card">
          <h2 className="section-title">{t("home.programmingSkills2")}</h2>
          <p>{t("home.programmingSkillsDesc2")}</p>
          
          <div className="skills-grid">
            {skillElements2}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Maincontent;
