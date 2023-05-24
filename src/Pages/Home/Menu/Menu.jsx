import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg'
import PopularMenu from '../PopularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Menu | SM RESTRO SHOP
                </title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;