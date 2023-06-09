import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions/movieActions';
import createPoster from '../actions/posterActions';
import styled from 'styled-components';

const Form = (props) => {
    const { getMovie, createPoster } = props; // destructure props

    // local state
    const [tmdbId, setTmdbId] = useState('');

    // form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(tmdbId);
        getMovie(tmdbId);
        createPoster(props.movie);
    };

    // form change handler
    const handleChange = (e) => {
        setTmdbId(e.target.value);
    };

    const Button = styled.button`
        background-color: black;
        color: white;
        font-size: 20px;
        padding: 10px 60px;
        border-radius: 5px;
        margin: 10px 0px;
        cursor: pointer;
        type: submit;
    `;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter TMDB ID'
                    name='tmdbId'
                    value={tmdbId}
                    onChange={handleChange}
                />
                <Button>Submit</Button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movie: state.movie.movie,
    };
};

export default connect(mapStateToProps, { getMovie, createPoster })(Form);
