// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'))
