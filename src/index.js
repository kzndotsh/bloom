import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// You'll need to wrap <App /> for routing to work
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
