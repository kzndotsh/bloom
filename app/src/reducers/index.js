import { FETCH_SUCCESS, FETCH_START, FETCH_FAIL } from './../actions';

export const initialState = {
    gifs:[
    ],
    isLoading: false,
    err: ''
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case(FETCH_START):
            return({
                ...state,
                isLoading: true,
                err:''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                isLoading: false,
                gifs: action.payload
            })
        case(FETCH_FAIL):
            return({
                ...state,
                isLoading: false,
                err: action.payload
            })
        default:
            return state
    }
}

export default reducer;