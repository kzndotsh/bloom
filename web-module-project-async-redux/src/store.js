import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancer);

export default store;
