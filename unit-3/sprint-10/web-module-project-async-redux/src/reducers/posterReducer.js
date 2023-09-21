import { CREATE_POSTER } from '../actions/posterActions';

const initialState = {
    poster: '',
};

// Use the initialState as a default value
const posterReducer = (state = initialState, action) => {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case CREATE_POSTER:
            return {
                ...state,
                poster: action.payload,
            };
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
};

export default posterReducer;
