import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title}></Cover>}

            <div className='container mx-auto grid md:grid-cols-2 gap-10 my-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='container text-center'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline hover:bg-[#332FD0] mt-4">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;