import React from 'react';
import Logo from '../../../assets/Logo.png'
import { Link } from 'react-router-dom';
const NavBar = () => {
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>

    </>

    return (
        <>
            <div className=" navbar z-10 fixed bg-opacity-20 text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-opacity-20 text-white bg-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img src={Logo} alt="" className="w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" />
        
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#332FD0] border-none text-white">Book Now</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;