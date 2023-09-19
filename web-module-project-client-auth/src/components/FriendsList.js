import React, { useEffect, useState } from 'react';

// utils
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then((res) => {
                console.log('FriendsList.js: useEffect: res: ', res);
                setFriends(res.data);
            })
            .catch((err) => {
                console.log('FriendsList.js: useEffect: err: ', err);
            });
    }, []);

    return (
        <div>
            <h1>Friends List</h1>
            <div className='friends-list'>
                {friends.map((friend) => (
                    <div
                        className='friend-card'
                        key={friend.id}>
                        <h3>{friend.name}</h3>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriendsList;
