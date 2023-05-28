import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import orderCoverImg from '../../../assets/shop/order.jpg';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf((category));
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    //  all items filter 
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>SM RESTRO SHOP | ORDER</title>
            </Helmet>
            <Cover title="Order Food" img={orderCoverImg}></Cover>
            <div className='text-center my-8'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>
                    <TabPanel>
                      <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                      <OrderTab items={pizza}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                      <OrderTab items={soup}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                      <OrderTab items={desserts}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                      <OrderTab items={drinks}></OrderTab>

                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;