import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerIMG1 from "../../../assets/home/01.jpg"
import bannerIMG2 from "../../../assets/home/02.jpg"
import bannerIMG3 from "../../../assets/home/03.png"
import bannerIMG4 from "../../../assets/home/04.jpg"
import bannerIMG5 from "../../../assets/home/05.png"
import bannerIMG6 from "../../../assets/home/06.png"

const Banner = () => {
    const bannersImage = [
        { img: bannerIMG1, legend: "Legend 1" },
        { img: bannerIMG2, legend: "Legend 2" },
        { img: bannerIMG3, legend: "Legend 3" },
        { img: bannerIMG4, legend: "Legend 4" },
        { img: bannerIMG5, legend: "Legend 5" },
        { img: bannerIMG6, legend: "Legend 6" },
      ];
 
    return (
        <div>
           <Carousel autoPlay
                    infiniteLoop
                    showThumbs={true}
                    
                    showStatus={false}
                    dynamicHeight
                    stopOnHover
                    interval={3000} // Adjust interval between automatic slides
                    transitionTime={1500} // Slow transition time for smooth effect
                    swipeable={true}
                    emulateTouch={true}>
                 {bannersImage.map((banner, index) => (
                    <div key={index}>
                        <img src={banner.img} alt={banner.legend} />
                        <p className="legend">{banner.legend}</p>
                    </div>
                ))}
            </Carousel>
                
        </div>
    );
};

export default Banner;