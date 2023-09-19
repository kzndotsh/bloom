import React from 'react';

import './Quote.css';

const Quote = (props) => {
    const { quote } = props;
    return (
        <div className='quote'>
            <h2 className='quote-text'>{quote.quote}</h2>
            <h3 className='quote-subtext'>
                {quote.author ? quote.author : null}
                {quote.author && quote.source ? ', ' : null}
                {quote.source ? quote.source : null}
            </h3>
        </div>
    );
};

export default Quote;
