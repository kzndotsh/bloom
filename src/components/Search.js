import React from 'react';

const Search = (props) => {
  const changeHandler = (event) => {
    props.setSearchTerm(event.target.value);
  };

  return (
    <div className='search-container'>
      <input
        className='search-bar'
        onChange={changeHandler}
        placeholder='Search by name here'
      />
    </div>
  );
};

export default Search;
