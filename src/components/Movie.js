import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { getMovieById, deleteMovie } from '../actions/actions';

const Movie = (props) => {
    const { addToFavorites, setMovies } = props;
    const [movie, setMovie] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        getMovieById(id).then((res) => {
            setMovie(res.data);
        });
    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteMovie(id)
            .then((res) => {
                setMovie(res.data);
                navigate('/');
            })
            .finally(() => {
                setMovies((prevMovies) => {
                    return prevMovies.filter((movie) => movie.id !== id);
                });
            });
    };

    const handleAddToFavorites = (e) => {
        e.preventDefault();
        addToFavorites(movie);
    };

    return (
        <div className='modal-page col'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4 className='modal-title'>{movie.title} Details</h4>
                    </div>
                    <div className='modal-body'>
                        <div className='flexContainer'>
                            <section className='movie-details'>
                                <div>
                                    <label>
                                        Title: <strong>{movie.title}</strong>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Director:{' '}
                                        <strong>{movie.director}</strong>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Genre: <strong>{movie.genre}</strong>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Metascore:{' '}
                                        <strong>{movie.metascore}</strong>
                                    </label>
                                </div>
                                <div>
                                    <label>Description:</label>
                                    <p>
                                        <strong>{movie.description}</strong>
                                    </p>
                                </div>
                            </section>

                            <section>
                                <span className='m-2 btn btn-dark'>
                                    <input
                                        type='button'
                                        value='Add to Favorites'
                                        onClick={handleAddToFavorites}
                                    />
                                </span>
                                <Link
                                    to={`/movies/edit/${movie.id}`}
                                    className='m-2 btn btn-success'>
                                    Edit
                                </Link>
                                <span className='delete'>
                                    <input
                                        type='button'
                                        className='m-2 btn btn-danger'
                                        value='Delete'
                                        onClick={handleDelete}
                                    />
                                </span>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;
