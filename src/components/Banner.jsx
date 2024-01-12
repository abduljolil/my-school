 
 
 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
 import { Carousel } from 'react-responsive-carousel';

 import img1 from '../assets/active-boys-girls-playing-sport-fun-activities-outside_1308-32238.jpg';
import img2 from '../assets/active-kids-playing-outdoor-scene_1308-33045.jpg';
import img3 from '../assets/school-building-scene_1308-29938.jpg';

const Banner = () => {
    return (
        <div>
             <Carousel>
             <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            </Carousel>
        </div>
    );
};

export default Banner;