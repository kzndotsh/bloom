import { GET_PERSON } from '../actions';
import { GET_PERSON_SUCCESS } from '../actions';
import { GET_PERSON_ERROR } from '../actions';
import { SET_IS_FETCHING } from '../actions';

const initialState = {
  person: {
    name: {
      title: 'Mr',
      first: 'Silas',
      last: 'Petersen',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/70.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/70.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/70.jpg',
    },
  },
  isFetching: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case GET_PERSON_SUCCESS:
      return { ...state, isFetching: false, person: action.payload };
    case GET_PERSON_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
