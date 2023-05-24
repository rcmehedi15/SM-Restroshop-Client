import React from 'react';
import BackgroundImg from '../../../assets/home/chef-service.jpg'
const Hero = () => {
    return (
        <>
            <div className="my-12 hero min-h-screen" style={{ backgroundImage: `url(${BackgroundImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
                        <div className="max-w-md mx-auto">
                            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#393950]">SM RESTRO SHOP</h1>
                            <p className="mb-4 text-base sm:text-lg md:text-xl text-[#393950]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Hero;