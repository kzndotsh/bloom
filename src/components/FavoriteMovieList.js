import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';

const FavoriteMovieList = (props) => {
  const { favorites } = props;

  return (
    <div className='col-xs savedContainer'>
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className='btn btn-light savedButton'
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span className='removeFavorite'>
                  <input
                    type='button'
                    className='material-icons'
                    value='&#xe872;'
                    onClick={() => props.removeFavorite(movie.id)}
                  />
                </span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { favorites: state.favoritesReducer.favorites };
};

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);
