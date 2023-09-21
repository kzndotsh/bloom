import React from 'react';
import { render, useState } from 'react-dom';
import './styles.scss';
import data from './data';
import App from './App';

render(
    <App/>,
    document.querySelector('#root')
);