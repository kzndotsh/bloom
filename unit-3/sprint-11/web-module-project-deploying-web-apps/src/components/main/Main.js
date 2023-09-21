import React, { useState, useEffect } from 'react';

import './Main.css';

import Quote from '../quote/Quote';
import { getQuote } from '../../utils';

import Loader from '../loader/Loader';

const Main = () => {
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(false);

    const onButtonClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200);
        const quote = getQuote();
        setQuote(quote);
    };

    return (
        <div className='main'>
            {/* <h2>Explore the history of media!</h2> */}
            <div className='quote-container'>
                {loading ? <Loader /> : null}
                {loading ? null : (
                    <>
                        <Quote quote={quote} />
                    </>
                )}
            </div>
            <button
                className='quote-button'
                onClick={onButtonClick}>
                <span>Generate Quote</span>
            </button>
        </div>
    );
};

export default Main;
