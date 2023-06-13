// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Wheel from './Wheel';
import Quiz from './Quiz';
import Message from './Message';
import Form from './Form';

// REDUX IMPORTS
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../state/reducer';

// REDUX STORE
let store;
export const resetStore = () => {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
};
resetStore();

console.log(store.getState());
export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Message />
                <h1>Advanced State</h1>
                <nav>
                    <NavLink
                        id='wheelLink'
                        to='/'>
                        Wheel
                    </NavLink>
                    <NavLink
                        id='quizLink'
                        to='/quiz'>
                        Quiz
                    </NavLink>
                    <NavLink
                        id='formLink'
                        to='/quiz-new'>
                        Form
                    </NavLink>
                </nav>
                <Routes>
                    <Route
                        path='/'
                        element={<Wheel />}
                    />
                    <Route
                        path='quiz'
                        element={<Quiz />}
                    />
                    <Route
                        path='quiz-new'
                        element={<Form />}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
