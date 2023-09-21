import React from 'react';

export default function Form(props) {
  const { values, submit, change, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div className='container form'>
      <h2>Start a new order</h2>
      <div className='errors'>
        <div>{errors.name}</div>
        <div>{errors.special}</div>
      </div>
      <div className='form-group'>
        <form id='pizza-form' onSubmit={onSubmit}>
          <label>
            Name
            <input
              value={values.name}
              onChange={onChange}
              name='name'
              type='text'
              id='name-input'
            />
          </label>
          <label>
            Size
            <select name='size' id='size-dropdown'>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
              <option value='extra-large'>Extra Large</option>
            </select>
          </label>
          <label>
            Toppings
            <label>
              Sausage
              <input
                type='checkbox'
                id='sausage'
                name='sausage'
                checked={values.sausage}
                onChange={onChange}
              />
            </label>
            <label>
              Ham
              <input
                type='checkbox'
                id='ham'
                name='ham'
                checked={values.ham}
                onChange={onChange}
              />
            </label>
            <label>
              Anchovies
              <input
                type='checkbox'
                id='anchovies'
                name='anchovies'
                checked={values.anchovies}
                onChange={onChange}
              />
            </label>
            <label>
              Spinach
              <input
                type='checkbox'
                id='spinach'
                name='spinach'
                checked={values.spinach}
                onChange={onChange}
              />
            </label>
          </label>
          <label>
            Special Instructions
            <input
              type='text'
              id='special-text'
              name='special'
              value={values.special}
              onChange={onChange}
            />
          </label>
        </form>
        <button id='order-button'>Add to Order</button>
      </div>
    </div>
  );
}
