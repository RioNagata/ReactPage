import { Slide } from 'react-slideshow-image';
import hira1 from '../../image/IMG_3669.jpg'
import hira2 from '../../image/IMG_3670.jpg'
import hira3 from '../../image/IMG_3671.jpg'
import hira4 from '../../image/IMG_3673.jpg'
import hira5 from '../../image/IMG_3674.jpg'
import 'react-slideshow-image/dist/styles.css'

function hiraganafun() {
    const slideImages = [
        {
            url: hira1,
            caption: 'Image 1'
        },
        {
            url: hira2,
            caption: 'Image 2'
        },
        {
            url: hira3,
            caption: 'Image 3'
        },
        {
            url: hira4,
            caption: 'Image 4'
        },
        {
            url: hira5,
            caption: 'Image 4'
        },
    ]
    return(
        <>
        <div className="maincontent">
            <h1 className="title">Hiragana Fun</h1>
            <div className="slide-container">
                <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                        <div>
                            <img className='image' src={slideImage.url} />
                        </div>
                    </div>
                ))} 
                </Slide>
            </div>
            <p>This is an iOS application that my team member and I created during my university internship. I was the leading developer for this team. This app has no source code since the company has full authority over this application.</p>
            <div className='smallh1'>
                <div className='smallh1'>
                    <p>Project Type: iOS App</p>
                </div>
                <div className='smallh1'>
                    <p>Date Created: March 2023</p>
                </div>
            </div>
            <p className='backlink'><a href='/projects'>Back to Projects</a></p>
        </div>
        </>
    );
}
export default hiraganafun