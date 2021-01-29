import React from 'react';

const GifCard = (props) => {
    const { gif } = props;
    
    return(<div id={gif.id} className="gif">
        <img src={gif.images.original.url}/>
        <a href={gif.bitly_url}><h2>{gif.title}</h2></a>
        <h3>Uploaded by {gif.username ? gif.username : "anyonmous"}</h3>
    </div>);
}

export default GifCard;