import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import Hero from '../ChefService/ChefService';
import ChefService from '../ChefService/ChefService';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <Catagory></Catagory>
           <ChefService></ChefService>
        </>
    );
};

export default Home;