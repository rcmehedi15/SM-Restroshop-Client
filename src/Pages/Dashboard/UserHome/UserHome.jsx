import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../Hooks/UseAuth';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
             <Helmet>
                <title> User Dashboard</title>
            </Helmet>
            <h2 className="text-3xl m-8">Hello Dear, <span className="text-green-500">{user.displayName}</span></h2>
            
        </div>
    );
};

export default UserHome;