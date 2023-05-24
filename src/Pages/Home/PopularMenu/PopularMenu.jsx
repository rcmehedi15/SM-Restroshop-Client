import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {

    // data loaded
    const [menu, SetMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                SetMenu(popularItems)
            })
    })
    console.log(menu);
    return (
        <section className='mb-12'>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>

            <div className='container mx-auto grid md:grid-cols-2 gap-4'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
                <hr className='mx-auto w-20 mt-12' />
            <button className="my-8 btn bg-[#332FD0] justify-center border-none text-white border-b-4 mx-auto flex items-center">See More View</button>

        </section>
    );
};

export default PopularMenu;