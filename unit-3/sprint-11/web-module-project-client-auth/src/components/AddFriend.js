import React, { useState, useEffect } from 'react';

// utils
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFormValues = {
    name: '',
    email: '',
};

const AddFriend = () => {
    const [friend, setFriend] = useState(initialFormValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', friend)
            .then((res) => {
                console.log('AddFriend.js: handleSubmit: res: ', res);
                setFriend(initialFormValues); // reset form
            })
            .catch((err) => {
                console.log('AddFriend.js: handleSubmit: err: ', err);
            });
    };

    const handleChange = (e) => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h1>Add Friend</h1>
            <div className='add-friend-form'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Friend Name'
                        value={friend.name}
                        onChange={handleChange}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Friend Email'
                        value={friend.email}
                        onChange={handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddFriend;
