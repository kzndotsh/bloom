import React from 'react';

import Form from './components/Form';
import Movie from './components/Movie';
import Poster from './components/Poster';

import { connect } from 'react-redux';

const App = (props) => {
    return (
        <div className='App'>
            <nav className='navbar navbar-dark bg-dark'>
                <span className='navbar-brand'>
                    Movie of the Week - Poster Generator
                </span>
            </nav>
            <div className='container'>
                <h4>Enter a TMDB ID:</h4>
                <div className='form-container'>
                    <Form />
                </div>
                {Object.keys(props.movie).length > 0 ? <Movie /> : null}
                {props.poster ? <Poster /> : null}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movie: state.movie.movie,
        poster: state.poster.poster,
    };
};

export default connect(mapStateToProps, {})(App);
