import React from 'react';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {this.props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">Home</div>
  </div>
);

export default SavedList;
