export const SET_IS_LOADING = 'SET_IS_LOADING';
export const GET_MOVIE = 'GET_MOVIE';

import tmdb from '../api/tmdb';

export const setIsLoading = (bool) => {
    return {
        type: SET_IS_LOADING,
        payload: bool,
    };
};

export const getMovie = (tmdbId) => (dispatch) => {
    dispatch(setIsLoading(true));
    tmdb.get(`/movie/${tmdbId}`)
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: GET_MOVIE,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            dispatch(setIsLoading(false));
        });
};
