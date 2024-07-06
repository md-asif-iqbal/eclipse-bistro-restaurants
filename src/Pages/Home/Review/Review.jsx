import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaComments } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Review = () => {
    const [reviews, setReviews]=useState([]);
    useEffect( ()=>{
        fetch('reviews.json').then(res => res.json()).then(data => setReviews(data))
    },[])
    return (
        <div>
            <section className="my-20 ">
                <SectionTitle subHeading="What our client say...!"
                heading="Testimonials"/>

                <div className="lg:mx-[10%]">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        
                        {
                            reviews.map(reviews => <SwiperSlide key={reviews._id}
                            >
                                <div className="my-16 mx-24 flex flex-col items-center ">
                                <FaComments size={70} className="mb-5"/>
                                <Rating
                                style={{ maxWidth: 180 }}
                                value={reviews.rating}
                                readOnly
                                />

                                    <p className="py-10">{reviews.details}</p>
                                    <h3 className="text-2xl text-orange-500">{reviews.name}</h3>
                                </div>
                            </SwiperSlide> )
                        }
                </Swiper>
                </div>
            </section>
            
        </div>
    );
};

export default Review;