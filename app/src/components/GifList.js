import React from 'react';
import GifCard from './GifCard';

const GifList = (props) => {
    const { gifs } = props;

    return(<div className="gifList">
        {
            gifs.map(gif => { return(<GifCard gif={gif}/>)})
        }
    </div>);
}

export default GifList;