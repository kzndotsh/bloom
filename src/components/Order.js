import React from 'react';

export default function Order({ details }) {
  if (!details) {
    return <h3>Working fetching your order details...</h3>;
  }

  return (
    <div className='container order'>
      <p>Name: {details}</p>

      {!!details.toppings && !!details.toppings.length && (
        <div>
          Toppings:
          <ul>
            {details.toppings.map((topping, idx) => (
              <li key={idx}>{topping}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
