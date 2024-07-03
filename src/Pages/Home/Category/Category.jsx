import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle';
const Category = () => {
    const slideCategory = [
        { img: slide1, label: "Salads" },
        { img: slide2, label: "Pizza" },
        { img: slide3, label: "Soups" },
        { img: slide4, label: "Desserts" },
        { img: slide5, label: "Salads" },
        // Add more slides as needed
      ];
    return (
        <section>
          <SectionTitle

          subHeading ={"---From 11:00am to 10:00pm---"}
          heading={"ORDER ONLINE"}
          >
            
          </SectionTitle>
          <div className='justify-center items-center justify-items-center' >
            {/* <h1 className='text-yellow-400 text-center italic'>---From 11:00am to 10:00pm---</h1>
            <hr className="h-1 bg-gray-200 mx-auto my-4 md:w-3/4 lg:w-1/3 xl:w-1/4" />
            <h1 className='text-center md:text-xl lg:text-3xl xl:text-4xl uppercase p-1 '>ORDER ONLINE</h1>
            <hr className="h-1 bg-gray-200 mx-auto my-4 md:w-3/4 lg:w-1/3 xl:w-1/4 lg:mb-5 xl:mb-10" /> */}

             <Swiper 
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                >
                {slideCategory.map((slide, index) => (
                  <SwiperSlide key={index} className="">
                    <img src={slide.img} alt={slide.label} className="swiper-slide-image mx-auto" />
                    <p className=" md:text-xl lg:text-2xl xl:text-3xl text-center uppercase -mt-16 text-white font-serif">{slide.label}</p>
                  </SwiperSlide>
                 ))}
                
            </Swiper>
          </div>
        </section>
    );
};

export default Category;