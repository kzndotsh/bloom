import React from 'react';

export default function Header(props) {
  return (
    <div className='header'>
      <h1>Astronomy Picture of the Day</h1>
      <p className='powered-by'>Powered by NASA</p>
      <span className='photo-date'>Today's date is: {props.photo.date} </span>
    </div>
  );
}
