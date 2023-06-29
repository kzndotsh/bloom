import React, { useState, useEffect } from 'react';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';

import Articles from './Articles';
import LoginForm from './LoginForm';
import Message from './Message';
import ArticleForm from './ArticleForm';
import Spinner from './Spinner';

import PrivateRoute from './PrivateRoute';

import {
    axiosPostLogin,
    axiosGetArticles,
    axiosPostArticle,
    axiosUpdateArticle,
    axiosDeleteArticle,
} from '../axios';

export default function App() {
    const [message, setMessage] = useState('');
    const [spinnerOn, setSpinnerOn] = useState(false);

    const [articles, setArticles] = useState([]);
    const [currentArticleId, setCurrentArticleId] = useState();

    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('token') !== null
    );

    const navigate = useNavigate();

    const redirectToLogin = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    };

    const redirectToArticles = () => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/articles');
        }
    };

    useEffect(() => {
        // console.log('App.js useEffect -> redirectToLogin triggered');
        redirectToArticles();
    }, [isLoggedIn]);

    const logout = () => {
        const token = localStorage.getItem('token');
        localStorage.removeItem('token');
        setMessage('Goodbye!');
        redirectToLogin();
    };

    const login = (credentials) => {
        setMessage('');
        setSpinnerOn(true);
        axiosPostLogin(credentials)
            .then((res) => {
                // console.log('App.js login response', res);
                setMessage(res.message);
                localStorage.setItem('token', res.token);
            })
            .catch((err) => {
                // console.log('App.js login error', err);
                setMessage(err.message);
            })
            .finally(() => {
                setSpinnerOn(false);
            });
    };

    const getArticles = () => {
        setMessage('');
        setSpinnerOn(true);
        axiosGetArticles()
            .then((res) => {
                // console.log('App.js getArticles response', res);
                setMessage(res.message);
                setArticles(res.articles);
            })
            .catch((err) => {
                // console.log('App.js getArticles', err);
                setMessage(err.message);
            })
            .finally(() => {
                setSpinnerOn(false);
            });
    };

    const postArticle = (article) => {
        setMessage('');
        setSpinnerOn(true);
        axiosPostArticle(article)
            .then((res) => {
                // console.log('App.js postArticle response', res);
                setMessage(res.message);
                setArticles([...articles, res.article]);
            })
            .catch((err) => {
                // console.log('App.js postArticle', err);
                setMessage(err.message);
            })
            .finally(() => {
                setSpinnerOn(false);
            });
    };

    const updateArticle = (id, article) => {
        setMessage('');
        setSpinnerOn(true);
        axiosUpdateArticle(id, article)
            .then((res) => {
                // console.log('App.js updateArticle response', res);
                setMessage(res.message);
                setArticles(
                    articles.map((article) =>
                        article.article_id === id ? res.article : article
                    )
                );
            })
            .catch((err) => {
                // console.log('App.js updateArticle', err);
                setMessage(err.message);
            })
            .finally(() => {
                setSpinnerOn(false);
            });
    };

    const deleteArticle = (article_id) => {
        setMessage('');
        setSpinnerOn(true);
        axiosDeleteArticle(article_id)
            .then((res) => {
                // console.log('App.js deleteArticle response', res);
                setMessage(res.message);
                setArticles(
                    articles.filter(
                        (article) => article.article_id !== article_id
                    )
                );
            })
            .catch((err) => {
                // console.log('App.js deleteArticle', err);
                setMessage(err.message);
            })
            .finally(() => {
                setSpinnerOn(false);
            });
    };

    return (
        <>
            {spinnerOn ? <Spinner on={true} /> : null}
            <Message message={message} />
            <button
                id='logout'
                onClick={logout}>
                Logout from app
            </button>
            <div
                id='wrapper'
                style={{ opacity: spinnerOn ? '0.25' : '1' }}>
                {' '}
                {/* <-- do not change this line */}
                <h1>Advanced Web Applications</h1>
                <nav>
                    <NavLink
                        id='loginScreen'
                        to='/'>
                        Login
                    </NavLink>
                    <NavLink
                        id='articlesScreen'
                        to='/articles'>
                        Articles
                    </NavLink>
                </nav>
                <Routes>
                    <Route
                        path='/'
                        element={<LoginForm login={login} />}
                    />

                    <Route
                        path='articles/*'
                        element={
                            <>
                                <PrivateRoute isLoggedIn={isLoggedIn}>
                                    <ArticleForm
                                        postArticle={postArticle}
                                        updateArticle={updateArticle}
                                        currentArticle={articles.find(
                                            (article) =>
                                                article.article_id ===
                                                currentArticleId
                                        )}
                                        setCurrentArticleId={
                                            setCurrentArticleId
                                        }
                                    />
                                </PrivateRoute>
                                <PrivateRoute isLoggedIn={isLoggedIn}>
                                    <Articles
                                        articles={articles}
                                        getArticles={getArticles}
                                        setCurrentArticleId={
                                            setCurrentArticleId
                                        }
                                        currentArticleId={currentArticleId}
                                        postArticle={postArticle}
                                        deleteArticle={deleteArticle}
                                    />
                                </PrivateRoute>
                            </>
                        }
                    />
                </Routes>
                <footer>Bloom Institute of Technology 2022</footer>
            </div>
        </>
    );
}
