import { combineReducers } from 'redux';

import {
    INPUT_CHANGE,
    MOVE_CLOCKWISE,
    MOVE_COUNTERCLOCKWISE,
    RESET_FORM,
    SET_INFO_MESSAGE,
    SET_QUIZ_INTO_STATE,
    SET_SELECTED_ANSWER,
} from './action-types';

// Wheel
const initialWheelState = {
    activeCogIndex: 0,
    cogCharacters: ['B', '', '', '', '', ''],
};

function wheel(state = initialWheelState, action) {
    switch (action.type) {
        case MOVE_CLOCKWISE: {
            const nextIndex = (state.activeCogIndex + 1) % 6;
            const cogCharacters = [...state.cogCharacters];
            cogCharacters[state.activeCogIndex] = '';
            cogCharacters[nextIndex] = 'B';

            return {
                activeCogIndex: nextIndex,
                cogCharacters,
            };
        }
        case MOVE_COUNTERCLOCKWISE: {
            const nextIndex = (state.activeCogIndex + 5) % 6;
            const cogCharacters = [...state.cogCharacters];
            cogCharacters[state.activeCogIndex] = '';
            cogCharacters[nextIndex] = 'B';

            return {
                activeCogIndex: nextIndex,
                cogCharacters,
            };
        }
        default:
            return state;
    }
}

// Quiz
const initialQuizState = null;
function quiz(state = initialQuizState, action) {
    switch (action.type) {
        case SET_QUIZ_INTO_STATE: {
            if (action.payload) {
                return action.payload;
            }
            return null;
        }
        default:
            return state;
    }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
    switch (action.type) {
        case SET_SELECTED_ANSWER: {
            return action.payload;
        }
        default:
            return state;
    }
}

const initialMessageState = '';
function infoMessage(state = initialMessageState, action) {
    switch (action.type) {
        case SET_INFO_MESSAGE: {
            if (action.payload) {
                return action.payload;
            }
            return '';
        }
        default:
            return state;
    }
}

const initialFormState = {
    newQuestion: '',
    newTrueAnswer: '',
    newFalseAnswer: '',
};

function form(state = initialFormState, action) {
    switch (action.type) {
        case INPUT_CHANGE: {
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        }
        case RESET_FORM: {
            return initialFormState;
        }
        default:
            return state;
    }
}

export default combineReducers({
    wheel,
    quiz,
    selectedAnswer,
    infoMessage,
    form,
});
