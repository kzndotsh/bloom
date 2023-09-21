// import { SET_MOVIE_ID } from '../actions/movieActions';
import { GET_MOVIE } from '../actions/movieActions';
import { SET_IS_LOADING } from '../actions/movieActions';

const initialState = {
    tmdbId: '',
    movie: {},
    setIsLoading: false,
};

// Use the initialState as a default value
const movieReducer = (state = initialState, action) => {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        // case SET_MOVIE_ID:
        //     return {
        //         ...state,
        //         tmdbId: action.payload,
        //     };
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload,
            };
        case SET_IS_LOADING:
            return {
                ...state,
                setIsLoading: action.payload,
            };
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
};

export default movieReducer;
