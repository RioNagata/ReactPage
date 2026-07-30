import hiraganaFun from '../../image/IMG_3669.jpg'
import gamereport from "../../image/reporthome.png";
import habitquest from "../../image/habi2.png";
import officerhandbook from "../../image/OH2.png";
import portalapp from "../../image/portal-app1.jpg";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Projects(){
    const { t } = useTranslation();

    return (
    <>
        <div className="maincontent">
            <h1 className="title">{t("projects.title")}</h1>
            <h3 className=''>{t("projects.subtitle")}</h3>
            <div className='projects'>
                <div className='pbox'>
                    <Link to='/portal-app'>
                        <img className='pimage' src={portalapp} alt="portal-app"/>
                        <h4>{t("projects.portal-app")}</h4>
                    </Link>
                </div>

                <div className='pbox'>
                    <Link to='/officer-handbook'>
                        <img className='pimage' src={officerhandbook} alt="officer-handbook"/>
                        <h4>{t("projects.oh")}</h4>
                    </Link>
                </div>

                <div className='pbox'>
                    <Link to='/habitquest'>
                        <img className='pimage' src={habitquest} alt="Habitquest"/>
                        <h4>{t("projects.habitquest")}</h4>
                    </Link>
                </div>

                <div className='pbox'>
                    <Link to='/gamereport'>
                        <img className='pimage' src={gamereport} alt="Game Report"/>
                        <h4>{t("projects.gamereport")}</h4>
                    </Link>
                </div>

                <div className='pbox'>
                    <Link to='/hiraganafun'>
                        <img className='pimage' src={hiraganaFun} alt="Hiragana fun"/>
                        <h4>{t("projects.hiragana")}</h4>
                    </Link>
                </div>

            </div>
        </div>
    </>
    );
}
export default Projects;
