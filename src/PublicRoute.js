import React from 'react';
import { Route, Navigate } from 'react-router-dom';
// import { isLogin } from '../u/tils';

const PublicRoute = ({ children }) => {
    console.log()

    return localStorage.getItem('token') ?
        <Navigate to="/" />
        : children
};

export default PublicRoute;