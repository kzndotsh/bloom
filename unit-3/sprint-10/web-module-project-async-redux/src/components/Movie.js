import React from 'react';
import { connect } from 'react-redux';

const Movie = (props) => {
    return (
        <div>
            <h3>The movie you picked:</h3>
            <h4>{props.movie.title}</h4>
            <p>{props.movie.overview}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movie: state.movie.movie,
    };
};

export default connect(mapStateToProps, {})(Movie);
