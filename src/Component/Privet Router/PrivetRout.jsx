import React, { useContext } from 'react';
import { dragonContext } from '../../Firebase Setup/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const location = useLocation()
    const {user,loader} = useContext(dragonContext)
    if(loader) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to="/auth/login" state={location.pathname}></Navigate>
        </div>
    );
};

export default PrivetRout;