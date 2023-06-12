import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './css/global.css';
import './css/Navigation.css';
import './css/Product.css';
import './css/Products.css';
import './css/ShoppingCart.css';

import App from './App';

const AppWithRouter = withRouter(App);

ReactDOM.render(
    <Router>
        <AppWithRouter />
    </Router>,
    document.getElementById('root')
);
