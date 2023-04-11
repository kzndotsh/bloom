import React from 'react';

export default function Form(props) {
  const { onInputChange, onFormSubmit, form, editing } = props;

  return (
    <form className='form' onSubmit={onFormSubmit}>
      <label htmlFor='name-input'>
        Name:
        <input
          id='name-input'
          type='text'
          name='name'
          value={form.name}
          onChange={onInputChange}
        />
      </label>
      <label htmlFor='email-input'>
        Email:
        <input
          id='email-input'
          type='email'
          name='email'
          value={form.email}
          onChange={onInputChange}
        />
      </label>
      <label htmlFor='role-input'>
        Role:
        <input
          id='role-input'
          type='text'
          name='role'
          value={form.role}
          onChange={onInputChange}
        />
      </label>
      <button type='submit'>{editing ? 'Edit' : 'Add'}</button>
    </form>
  );
}
