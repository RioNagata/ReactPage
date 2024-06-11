import rio from '../../image/profile.jpeg'
import SkillDiv from './skilldiv';

function Maincontent() {
    const skilllists = [
        {
            skill: 'HTML',
            image: 'Image 1',
            rating: '5',
        },
        {
            skill: 'CSS',
            image: 'Image 1',
            rating: '4',
        },
        {
            skill: 'Javascript(Node, React, Next)',
            image: 'Image 1',
            rating: '4',
        },
        {
            skill: 'Database Related(MySQL, MongoDB)',
            image: 'Image 1',
            rating: '3',
        },
        {
            skill: 'Swift(Xcode)',
            image: 'Image 1',
            rating: '3',
        },
        {
            skill: 'Git(Version control)',
            image: 'Image 1',
            rating: '3',
        },
    ]
    const skillElements = skilllists.map(skill =>{
        return <SkillDiv skill={skill.skill} image={skill.image} rating={skill.rating}/>
    });
    return (
        <>
            <main>
            <h1 className='maintitle'>Rio Nagata</h1>
                <div className="maincontent2">
                    <div className='neo'>
                        <img className='rioimage' src={rio} alt='Rio' />
                        <div className='intro'>
                            <h3 className='title'>About Me</h3>
                            <h4>Hello. My name is Rio Nagata. I am a 22-year-old, have 3 years of school and self-teach programming experience.
                                Since junior high school, I have been interested in programming and have created various websites and software individually and in teams.
                                I am Japanese, have lived in Australia for seven years, and can speak English, Japanese, and Tagalog at a native level.</h4>
                        </div>
                    </div>
                    <div className='skills'>
                        <h2 className='title'>Programming Skills</h2>
                        <h3 className='title'>These are the programming-related skills that I have learned/used before. They are rated from 1-5, 5 being experienced and 1 being not.</h3>
                        <div className='neo'>
                            {skillElements}
                        </div>
                    </div>

                    <div className='otherskills'>
                        <div>
                            <h2 className='title'>Other Skills</h2>
                            <h3 className='title'>These are the skills that are not related to programming.</h3>
                        </div>
                        <div className='neo'>
                            <div className='skillbox'>
                                <h4>Communication</h4>
                            </div>
                            <div className='skillbox'>
                                <h4>Working With Teams</h4>
                            </div>
                            <div className='skillbox'>
                                <h4>Problem Solving</h4>
                            </div>
                            <div className='skillbox'>
                                <h4>Fast Learner</h4>
                            </div>
                            <div className='skillbox'>
                                <h4>Eager to Learn</h4>
                            </div>
                            <div className='skillbox'>
                                <h4>Japanese and Tagalog</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Maincontent;