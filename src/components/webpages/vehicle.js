import { Slide } from 'react-slideshow-image';
import vehicle1 from '../../image/vehicle1.png'
import vehicle2 from '../../image/vehicle2.png'
import vehicle3 from '../../image/vehicle3.png'
import vehicle4 from '../../image/vehicle4.png'
import vehicle5 from '../../image/vehicle5.png'
import 'react-slideshow-image/dist/styles.css'

function vehicle() {
    const slideImages = [
        {
            url: vehicle1,
            caption: 'Image 1'
        },
        {
            url: vehicle2,
            caption: 'Image 2'
        },
        {
            url: vehicle3,
            caption: 'Image 3'
        },
        {
            url: vehicle4,
            caption: 'Image 4'
        },
        {
            url: vehicle5,
            caption: 'Image 5'
        },
    ]
    return(
        <>
        <div className="maincontent">
            <h1 className="title">Vehicle Booking Page</h1>
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
            <p>This webpage consists of a Booking feature and CRUD for users. The languages used are HTML、CSS, Laravel(PHP), and MySQL. </p>
            <div className='smallh1'>
                <div className='smallh1'>
                    <p>Project Type: Website</p>
                </div>
                <div className='smallh1'>
                    <p>Date Created: March 2023</p>
                </div>
                <div className='smallh1'>
                    <p>Link: <a href='https://github.com/RioNagata/Laravel-Web' target="_blank">Github Link</a></p>
                </div>
            </div>
            <p className='backlink'><a href='/projects'>Back to Projects</a></p>
        </div>
        </>
    );
}
export default vehicle