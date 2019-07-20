import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSaveList] = useState([]);
  
  addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  render() {
    return (
      <div>
        <SavedList list={savedList} />
        <div>Replace this Div with your Routes</div>
      </div>
    );
  }
}

export default App;
