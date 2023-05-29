import React, { useContext } from 'react';
import Logo from '../../../assets/Logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
const NavBar = () => {
    const { user,logOut } = useContext(AuthContext);
    const handleLogOut =  () => {
        logOut()
        .then(() => {})
        .catch((error => console.log(error)));

    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>

        {
            user ? <>
            <button className='btn btn-ghost' onClick={handleLogOut}>Logout</button>
            </>

                :

                <>
                    <li><Link to="/login">Login</Link></li>
                </>
        }

    </>

    return (
        <>
            <div className=" navbar z-10 fixed bg-opacity-20 text-white bg-black">
                <div className="navbar-start md:mx-10">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-opacity-20 text-white bg-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img src={Logo} alt="" className=" w-24 " />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end md:mx-10">
                    <a className="btn bg-[#332FD0] border-none text-white">Book Now</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;