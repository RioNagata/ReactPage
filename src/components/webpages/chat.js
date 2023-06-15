import { Slide } from 'react-slideshow-image';
import chat1 from '../../image/chat1.png'
import chat2 from '../../image/chat2.png'
import chat3 from '../../image/chat3.png'
import chat4 from '../../image/chat4.png'
import 'react-slideshow-image/dist/styles.css'

function chat() {
    const slideImages = [
        {
            url: chat1,
            caption: 'Image 1'
        },
        {
            url: chat2,
            caption: 'Image 2'
        },
        {
            url: chat3,
            caption: 'Image 3'
        },
        {
            url: chat4,
            caption: 'Image 4'
        },
    ]
    return(
        <>
        <div className="maincontent">
            <h1 className="title">Chat Channel</h1>
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
            <p>This webpage has a login form, chat feature, and CRUD for users. The languages used are HTML, CSS, Angular(TypeScript), Node.js(JavaScript), and MongoDB.</p>
            <div className='smallh1'>
                <div className='smallh1'>
                    <p>Project Type: Website</p>
                </div>
                <div className='smallh1'>
                    <p>Date Created: March 2023</p>
                </div>
                <div className='smallh1'>
                    <p>Link: <a href='https://github.com/RioNagata/website' target="_blank">Github Link</a></p>
                </div>
            </div>
            <p className='backlink'><a href='/projects'>Back to Projects</a></p>
        </div>
        </>
    );
}
export default chat