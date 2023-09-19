import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App() {
  const [saved, setSaved] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies')
        .then((response) => {
          setMovies(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.error('Server Error', error);
        });
    };
    getMovies();
  }, []);

  //console.log(movies);

  const list = [];

  const addToSavedList = (id) => {
    list.push(id);
  };

  console.log('list', list);
  return (
    <div>
      <SavedList list={list} />

      <Routes>
        <Route
          path='/'
          element={
            <MovieList movies={movies} addToSavedList={addToSavedList} />
          }
        />
        <Route
          path='movies/:id'
          element={<Movie movies={movies} addToSavedList={addToSavedList} />}
        />
      </Routes>
    </div>
  );
}
