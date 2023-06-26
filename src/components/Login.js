import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';

const initialFormValues = {
    username: '',
    password: '',
};

const Login = () => {
    const [credentials, setCredentials] = useState(initialFormValues);
    const [isLoading, setIsLoading] = useState(false); // New loading state
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true
        axiosWithAuth()
            .post('/login', credentials)
            .then((res) => {
                console.log('Login.js: handleSubmit: res: ', res);
                localStorage.setItem('token', res.data.token);
                setIsLoading(false); // Set loading state to false
                navigate('/friends');
            })
            .catch((err) => {
                console.log('Login.js: handleSubmit: err: ', err);
                setIsLoading(false); // Set loading state to false in case of error
            });
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <div className='login-form'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={credentials.username}
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    <button
                        type='submit'
                        disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
