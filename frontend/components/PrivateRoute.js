import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return (
            <Navigate
                to='/'
                replace
            />
        );
    } else {
        return children;
    }
};

export default PrivateRoute;
