import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setloading] = useState(true);

    const createuser = (email,password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) => {
        setloading(true);
        return signInWithEmailAndPassword(email,password)
    }
    const logOut = (email,password) => {
        setloading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
           setUser(currentUser);
            console.log('current user',currentUser);
            setloading(false)
        });
        return unsubscribe();
    },[])
    const authInfo = {
        user,
        loading,
        createuser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;