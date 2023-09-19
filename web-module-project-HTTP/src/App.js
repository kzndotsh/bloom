import React, { useEffect, useState } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import MovieList from './components/MovieList';
import Movie from './components/Movie';
import MovieHeader from './components/MovieHeader';
import FavoriteMovieList from './components/FavoriteMovieList';
import EditMovieForm from './components/EditMovieForm';
import AddMovieForm from './components/AddMovieForm';

import { getMovies, postMovie, putMovie, deleteMovie } from './actions/actions';

const App = (props) => {
    const [movies, setMovies] = useState([]);
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        getMovies().then((res) => {
            setMovies(res.data);
        });
    };

    const deleteMovie = (id) => {
        deleteMovie(id).then((res) => {
            setMovies(res.data);
        });
    };

    const addToFavorites = (movie) => {
        setFavoriteMovies([...favoriteMovies, movie]);
    };

    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <span className='navbar-brand'>
                    {' '}
                    HTTP / CRUD Module Project
                </span>
            </nav>

            <div className='container'>
                <MovieHeader />
                <div className='row '>
                    <FavoriteMovieList favoriteMovies={favoriteMovies} />

                    <Routes>
                        <Route
                            path='movies/edit/:id'
                            element={<EditMovieForm setMovies={setMovies} />}
                        />

                        <Route
                            path='movies/:id'
                            element={
                                <Movie
                                    movies={movies}
                                    setMovies={setMovies}
                                    addToFavorites={addToFavorites}
                                />
                            }
                        />

                        <Route
                            path='movies/add'
                            element={<AddMovieForm setMovies={setMovies} />}
                        />

                        <Route
                            path='movies'
                            element={
                                <MovieList
                                    movies={movies}
                                    setFavoriteMovies={setFavoriteMovies}
                                />
                            }
                        />

                        <Route
                            path='/'
                            element={<Navigate to='/movies' />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;
