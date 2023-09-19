import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    Switch,
} from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            console.log(
                'App.js: useEffect: localStorage.getItem(token): ',
                localStorage.getItem('token')
            );
            setIsLoggedIn(true);
        } else {
            console.log(
                'App.js: useEffect: localStorage.getItem(token): ',
                localStorage.getItem('token')
            );
            setIsLoggedIn(false);
        }
    }, []);

    return (
        <div className='App'>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    {isLoggedIn ? (
                        <li>
                            <Link to='/logout'>Logout</Link>
                        </li>
                    ) : (
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    )}
                    <li>
                        <Link to='/friends'>Friends List</Link>
                    </li>
                    <li>
                        <Link to='/friends/add'>Add Friend</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route
                    path='/'
                    element={<h1>Home</h1>}
                />
                <Route
                    path='/login'
                    element={<Login />}
                />
                <Route
                    path='/logout'
                    element={
                        <Logout
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    }
                />
                <Route
                    path='/friends'
                    element={
                        <PrivateRoute isLoggedIn={isLoggedIn}>
                            <FriendsList />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/friends/add'
                    element={
                        <PrivateRoute isLoggedIn={isLoggedIn}>
                            <AddFriend />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
