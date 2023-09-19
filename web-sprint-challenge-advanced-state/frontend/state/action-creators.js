import axios from 'axios';
import api from '../api';

// Wheel
export const moveClockwise = () => {
    return {
        type: 'MOVE_CLOCKWISE',
    };
};

export const moveCounterClockwise = () => {
    return {
        type: 'MOVE_COUNTERCLOCKWISE',
    };
};

// Quiz

export function selectAnswer(answer) {
    return {
        type: 'SET_SELECTED_ANSWER',
        payload: answer,
    };
}

export function setMessage(message) {
    return {
        type: 'SET_INFO_MESSAGE',
        payload: message,
    };
}

export function setQuiz() {}

export function inputChange(evt) {
    return {
        type: 'INPUT_CHANGE',
        payload: evt.target,
    };
}

export function resetForm() {
    return {
        type: 'RESET_FORM',
    };
}

export function fetchQuiz() {
    return function (dispatch) {
        // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
        dispatch({ type: 'SET_QUIZ_INTO_STATE' });
        // On successful GET:
        // - Dispatch an action to send the obtained quiz to its state
        api.get('/quiz/next').then((response) => {
            dispatch({
                type: 'SET_QUIZ_INTO_STATE',
                payload: response.data,
            });
        });
    };
}

export function postAnswer(answer) {
    return function (dispatch) {
        // On successful POST:
        api.post('/quiz/answer', answer)
            .then((response) => {
                // - Dispatch an action to reset the selected answer state
                dispatch({ type: 'SELECT_ANSWER', payload: '' });
                // - Dispatch an action to set the server message to state
                dispatch({
                    type: 'SET_INFO_MESSAGE',
                    payload: response.data.message,
                });
                // - Dispatch the fetching of the next quiz
                dispatch(fetchQuiz());
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: 'SET_INFO_MESSAGE',
                    payload: error,
                });
            });
    };
}

export function postQuiz(quiz) {
    return function (dispatch) {
        // On successful POST:
        api.post('/quiz/new', quiz)
            .then((response) => {
                // - Dispatch the correct message to the the appropriate state
                dispatch({
                    type: 'SET_INFO_MESSAGE',
                    payload: `Congrats: "${quiz.question_text}" is a great question!`,
                });
                // - Dispatch the resetting of the form
                dispatch({ type: 'RESET_FORM' });
            })
            .catch((error) => {
                dispatch({
                    type: 'SET_INFO_MESSAGE',
                    payload: error,
                });
                console.log(error);
            });
    };
}
