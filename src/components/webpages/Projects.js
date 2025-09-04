import hiraganaFun from '../../image/IMG_3669.jpg'
import vehicle from '../../image/vehicle1.png'
import chat from '../../image/chat1.png'
import { Link } from 'react-router-dom';
function Projects(){
    return (
    <>
        <div className="maincontent">
            <h1 className="title">Projects</h1>
            <h3 className='title'>Welcome to my portfolio. Here you’ll find a selection of my work. Explore my projects to learn more about what I do.</h3>
            <div className='projects'>
                <div className='pbox'>
                    <Link to='/hiraganafun'>
                        <img className='pimage' src={hiraganaFun} alt="Hiragana fun"/>
                        <h4>Hiragana fun</h4>
                    </Link>
                </div>

                <div className='pbox'>
                    <Link to='/vehicle'>
                        <img className='pimage' src={vehicle} alt="Hiragana fun"/>
                        <h4>Vehicle booking Page</h4>
                    </Link>
                </div>

                <div className='pbox'>
                    <Link to='/chat'>
                        <img className='pimage' src={chat} alt="Hiragana fun"/>
                        <h4>ChatChannel</h4>
                    </Link>
                </div>
                <div className='pbox'>
                    <Link to='/gamereport'>
                        <img className='pimage' src={chat} alt="Game Report"/>
                        <h4>Game Report</h4>
                    </Link>
                </div>
            </div>
        </div>
    </>
    );
}
export default Projects;