import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PT from 'prop-types';

export default function Articles(props) {
    const {
        articles,
        getArticles,
        deleteArticle,
        setCurrentArticleId,
        currentArticleId,
    } = props;

    useEffect(() => {
        // console.log('Articles.js useEffect -> getArticles triggered');
        getArticles();
    }, []);

    const returnToLogin = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return (
                <Navigate
                    to='/login'
                    replace
                />
            );
        }
    };

    useEffect(() => {
        // console.log('Articles.js useEffect -> returnToLogin triggered');
        returnToLogin();
    }, []);

    const handleEdit = (article_id) => {
        // console.log('Articles.js handleEdit triggered for ID: ' + article_id);
        setCurrentArticleId(article_id);
    };

    const isDisabled = (article_id) => {
        // if a current article is being edited, disable the edit and delete buttons for the other articles
        return currentArticleId && currentArticleId !== article_id;
    };

    const handleDelete = (article_id) => {
        // console.log('Articles.js handleDelete triggered for ID: ' + article_id);
        deleteArticle(article_id);
    };

    return (
        <div className='articles'>
            <h2>Articles</h2>
            {!articles.length
                ? 'No articles yet'
                : articles.map((art) => {
                      return (
                          <div
                              className='article'
                              key={art.article_id}>
                              <div>
                                  <h3>{art.title}</h3>
                                  <p>{art.text}</p>
                                  <p>Topic: {art.topic}</p>
                              </div>
                              <div>
                                  <button
                                      disabled={isDisabled(art.article_id)}
                                      onClick={() =>
                                          handleEdit(art.article_id)
                                      }>
                                      Edit
                                  </button>
                                  <button
                                      disabled={isDisabled(art.article_id)}
                                      onClick={() =>
                                          handleDelete(art.article_id)
                                      }>
                                      Delete
                                  </button>
                              </div>
                          </div>
                      );
                  })}
        </div>
    );
}

// 🔥 No touchy: Articles expects the following props exactly:
Articles.propTypes = {
    articles: PT.arrayOf(
        PT.shape({
            // the array can be empty
            article_id: PT.number.isRequired,
            title: PT.string.isRequired,
            text: PT.string.isRequired,
            topic: PT.string.isRequired,
        })
    ).isRequired,
    getArticles: PT.func.isRequired,
    deleteArticle: PT.func.isRequired,
    setCurrentArticleId: PT.func.isRequired,
    currentArticleId: PT.number, // can be undefined or null
};
