import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then((res) => res.json())
            .then((data) => setReviews(data))

    })
    return (
        <section>
            {/* title  */}
            <SectionTitle
                heading="Testimonials"
                subHeading="What our client say"
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(reviews => <SwiperSlide key={reviews._id}>

                        <div className='flex flex-col items-center m-24 '>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={reviews.rating}
                                readOnly
                            />
                            <p className='py-8'>{reviews.details}</p>
                            <h3 className='text-2xl text-[#332FD0]'>{reviews.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    );
};

export default Testimonials;