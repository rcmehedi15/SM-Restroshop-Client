import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendar, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#B71375] text-base-content">
                    {
                        isAdmin ? <>

                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/mangagebook"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/home"> <FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"> <FaCalendar></FaCalendar>Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/history"> <FaWallet></FaWallet>Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/mycart"> <FaShoppingCart></FaShoppingCart>My Cart
                                    <span className="bg-amber-400 badge badge-secondary">{cart?.length || 0}</span>
                                </NavLink></li>
                            </>
                    }


                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;