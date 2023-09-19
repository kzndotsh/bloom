import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = (props) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        axiosWithAuth()
            .post('/logout', token)
            .then((res) => {
                console.log('Logout.js: useEffect: res: ', res);
                localStorage.removeItem('token');
                navigate('/login');
                props.setIsLoggedIn(false);
            })
            .catch((err) => {
                console.log('Logout.js: useEffect: err: ', err);
            });
    }, []);

    return <div></div>;
};

export default Logout;
