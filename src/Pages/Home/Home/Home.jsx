import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Category/Category';
import Hero from '../ChefService/ChefService';
import ChefService from '../ChefService/ChefService';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <Catagory></Catagory>
           <ChefService></ChefService>
           <PopularMenu></PopularMenu>
           <CallUs></CallUs>
           <ChefRecommends></ChefRecommends>
           <Featured></Featured>
        </>
    );
};

export default Home;