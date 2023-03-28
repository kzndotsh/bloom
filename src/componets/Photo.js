import React from 'react';

const Photo = (props) => {
  return (
    <div className='photo-wrapper'>
      <h2 className='title'>{props.photo.title}</h2>
      <img className='photo' src={props.photo.hdurl} alt='' />
      <p className='explanation'>{props.photo.explanation}</p>
    </div>
  );
};

export default Photo;
