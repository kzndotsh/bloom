import {
  UPDATE_TITLE,
  TOGGLE_EDITING,
  UPDATE_NEW_TITLE,
} from './../actions/titleActions';

export const initialState = {
  newTitle: '',
  title: 'Dragon Member List 🐲',
  editing: false,
};

const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_TITLE:
      return {
        ...state,
        newTitle: action.payload,
      };
    case UPDATE_TITLE:
      return {
        ...state,
        newTitle: '',
        title: action.payload,
        editing: false,
      };
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing,
      };
    default:
      return state;
  }
};

export default titleReducer;
