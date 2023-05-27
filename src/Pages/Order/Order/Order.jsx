import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import orderCoverImg from '../../../assets/shop/order.jpg';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Components/SectionTitle/FoodCard/FoodCard';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    //  all items filter 
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Cover title="Order Food" img={orderCoverImg}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>

                </TabList>
                <TabPanel>
                    <div className='container mx-auto grid md:grid-cols-3 gap-10 my-8'>
                        {
                            salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;