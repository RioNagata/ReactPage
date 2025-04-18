function Test() {
    const skilllists = [
        {
            skill: 'HTML',
            image: 'html.png',
            rating: '5',
        },
        {
            skill: 'CSS',
            image: 'css-3.png',
            rating: '4',
        },
        {
            skill: 'Javascript(Node, React, Next)',
            image: 'js.png',
            rating: '4',
        },
        {
            skill: 'Database Related(MySQL, MongoDB)',
            image: 'mysql1.png',
            rating: '3',
        },
        {
            skill: 'Swift(Xcode)',
            image: 'swift.png',
            rating: '3',
        },
        {
            skill: 'Git(Version control)',
            image: '',
            rating: '3',
        },
        {
            skill: 'PHP',
            image: 'php.png',
            rating: '4',
        },
    ]
    const skillElements = skilllists.map(skill =>{
        return <SkillDiv skill={skill.skill} image={skill.image} rating={skill.rating}/>
    });
    return (
        <>
        <div className="maincontent2">
            <div className='width'>
                <h1 className='maintitle'>Rio Nagata</h1>
                <div className='neo'>
                    <img className='rioimage' src={rio} alt='Rio' />
                    <div className='intro'>
                        <h3 className='title'>About Me</h3>
                        <p>I am a 22-year-old, have 3 years of school and self-teach programming experience.
                            Since junior high school, I have been interested in programming and have created various websites and software individually and in teams.
                            I am Japanese, have lived in Australia for seven years, and can speak English, Japanese, and Tagalog at a native level.</p>
                    </div>
                </div>
                <div className='black'>
                    <div className='skills'>
                        <h2 className='title'>Programming Skills</h2>
                        <p>These are the programming-related skills that I have learned/used before. They are rated from 1-5, 5 being experienced and 1 being not.</p>
                        <div className='neo'>
                            {skillElements}
                        </div>
                    </div>
                </div>
                
                <div className='white'>
                    <div className='otherskills'>
                        <div>
                            <h2 className='title'>Other Skills</h2>
                            <h3 className='title'>These are the skills that are not related to programming.</h3>
                        </div>
                        <div className='neo'>
                            <div className='skillbox'>
                                <p>Communication</p>
                            </div>
                            <div className='skillbox'>
                                <p>Working With Teams</p>
                            </div>
                            <div className='skillbox'>
                                <p>Problem Solving</p>
                            </div>
                            <div className='skillbox'>
                                <p>Fast Learner</p>
                            </div>
                            <div className='skillbox'>
                                <p>Eager to Learn</p>
                            </div>
                            <div className='skillbox'>
                                <p>Japanese and Tagalog</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Maincontent;