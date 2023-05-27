import React from 'react';
import FoodCard from '../../Components/SectionTitle/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='container mx-auto grid md:grid-cols-3 gap-10 my-8'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;