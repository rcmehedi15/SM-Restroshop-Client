import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Home | SM RESTRO SHOP
                </title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;