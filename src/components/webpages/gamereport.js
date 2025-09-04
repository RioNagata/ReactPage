import { Slide } from 'react-slideshow-image';
import home from '../../image/reporthome.png'
import total from '../../image/reporttotal.png'
import compare from '../../image/reportcompare.png'
import entries from '../../image/reportentries.png'
import gamevid from '../../video/gamereport.mp4'
import 'react-slideshow-image/dist/styles.css'

function hiraganafun() {
    const slideImages = [
        {
            url: home,
            caption: 'Image 1'
        },
        {
            url: total,
            caption: 'Image 2'
        },
        {
            url: compare,
            caption: 'Image 3'
        },
        {
            url: entries,
            caption: 'Image 4'
        },
    ]
    return(
        <>
        <h1 className="title">Game Report</h1>
        <div className="maincontent neo">
            <div className="slide-container slide">
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
            <div className='smallh1'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YnqhK8RXt8I?si=1FE-m62mzDUHDkcW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='smallh1'>
                <p>This website is a report website using entries submitted to Gravity Forms to display reports on table, chart, and also display entries.</p>
                <div className='smallh1'>
                    <p>Project Type: Website(HTML, CSS, PHP, Javascript, Gravity Form Database)</p>
                </div>
                <div className='smallh1'>
                    <p>Date Created: September 2025</p>
                </div>
            </div>
        </div>
        <p className='backlink'><a href='/projects'>Back to Projects</a></p>
        </>
    );
}
export default hiraganafun