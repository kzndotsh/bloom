import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import posterReducer from './posterReducer';

const rootReducer = combineReducers({
    movie: movieReducer,
    poster: posterReducer,
});

export default rootReducer;
