import React from 'react';

export default function OrderList(props) {
  const { orders } = props;

  return (
    <div className='container order-list'>
      {orders.map((order, index) => (
        <div key={index}>
          <p>Name: {order.name}</p>
        </div>
      ))}
    </div>
  );
}
