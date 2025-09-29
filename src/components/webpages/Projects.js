import hiraganaFun from '../../image/IMG_3669.jpg'
import vehicle from '../../image/vehicle1.png'
import chat from '../../image/chat1.png'
import gamereport from "../../image/reporthome.png";
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
                    <Link to='/habitquest'>
                        <img className='pimage' src={gamereport} alt="Habitquest"/>
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

                <div className='pbox'>
                    <Link to='/vehicle'>
                        <img className='pimage' src={vehicle} alt="Vehicle booking"/>
                        <h4>{t("projects.vehicle")}</h4>
                    </Link>
                </div>

                <div className='pbox'>
                    <Link to='/chat'>
                        <img className='pimage' src={chat} alt="ChatChannel"/>
                        <h4>{t("projects.chat")}</h4>
                    </Link>
                </div>

            </div>
        </div>
    </>
    );
}
export default Projects;
