import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import cardImg from '../../../assets/home/slide1.jpg'
const ChefRecommends = () => {
    const CardItems = <>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={cardImg} className="w-96 "/></figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">Caeser Salad</h2>
                <p>Letttuce,Eggs,Permesan ,Chesase ,Chiken ,Brease Filiects</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-[#332FD0] border-none text-white">ADD TO CART</button>
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <section>
                <SectionTitle
                    heading="CHEF RECOMMENDS"
                    subHeading="Should Try"
                ></SectionTitle>
                <div className='container mx-auto flex flex-col justify-center  gap-4 sm:flex-row md:flex-wrap lg:flex-nowrap xl:flex-wrap'>
                    {CardItems}
                    {CardItems}
                    {CardItems}
                </div>
            </section>
        </>
    );
};

export default ChefRecommends;