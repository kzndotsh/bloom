import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='loader-container'>
            <FidgetSpinner />
        </div>
    );
};

export default Loader;
