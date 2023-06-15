import rio from '../../image/profile.jpeg'

function Maincontent(){
    return(
        <>
        <main>
            <img className='image' src={rio} alt='Rio'/>
            <div className="maincontent">
                <h2 className='title'>Rio Nagata</h2>
                <h3 className='title'>About Me</h3>
                <p>Hello. My name is Rio Nagata. I am a 21-year-old fresh graduate with 7 years of school and self-teach programming experience. 
                Since junior high school, I have been interested in programming and have created various websites and software individually and in teams. 
                I am Japanese, have lived in Australia for seven years, and can speak English at a native level. 
                I dream of improving my programming skills and creating software/websites.</p>

                <h2 className='title'>Programming Skills</h2>
                <h3 className='title'>These are the programming-related skills that I have learned/used before. They are rated from 1-5, 5 being experienced and 1 being not.</h3>
                <div className='skills'>
                    <div className='skillbox'>
                        <h4>HTML</h4>
                        <p>Rating: 5</p>
                    </div>

                    <div className='skillbox'>
                        <h4>CSS</h4>
                        <p>Rating: 4</p>
                    </div>

                    <div className='skillbox'>
                        <h4>Javascript</h4>
                        <h4>(NodeJS, React)</h4>
                        <p>Rating: 3</p>
                    </div>

                    <div className='skillbox'>
                        <h4>Database Related</h4>
                        <h4>(MySQL, MongoDB)</h4>
                        <p>Rating: 3</p>
                    </div>

                    <div className='skillbox'>
                        <h4>Swift</h4>
                        <h4>(Xcode)</h4>
                        <p>Rating: 3</p>
                    </div>

                    <div className='skillbox'>
                        <h4>Git</h4>
                        <h4>(Version Control)</h4>
                        <p>Rating: 3</p>
                    </div>
                </div>

                <h2 className='title'>Other Skills</h2>
                <h3 className='title'>These are the skills that are not related to programming.</h3>

                <div className='skills'>
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

                <h5 className='smallh1'>This website is created by using React</h5>
            </div>
        </main>
        </>
    );
}
export default Maincontent;