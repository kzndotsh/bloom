import React from 'react';
import { connect } from 'react-redux';

const Poster = (props) => {
    return (
        <div>
            <h2>Here is your movie poster!</h2>
            <img
                src={props.poster.imageUrl}
                alt='Movie Poster'
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        poster: state.poster.poster,
    };
};

export default connect(mapStateToProps, {})(Poster);
