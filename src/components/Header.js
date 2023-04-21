import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className='container header'>
      <h1>Header</h1>
      <nav>
        <Link to='/' id='home'>
          Home
        </Link>
        <Link to='pizza' id='order-pizza'>
          Menu
        </Link>
        <Link to='orders' id='orders'>
          Orders
        </Link>
      </nav>
    </div>
  );
}
