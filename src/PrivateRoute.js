import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
// import { isLogin } from '../u/tils';

const PrivateRoute = ({ children }) => {

    const loggedIn = useContext

    return (
    localStorage.getItem('isLoggedIn') === 'true' ? children : <Navigate to="/login" />
    )
};

export default PrivateRoute;