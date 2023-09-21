import React, { useEffect, useState } from 'react';
import PT from 'prop-types';

const initialFormValues = { title: '', text: '', topic: '' };

export default function ArticleForm(props) {
    const [values, setValues] = useState(initialFormValues);

    const { postArticle, updateArticle, setCurrentArticleId, currentArticle } =
        props;

    useEffect(() => {
        if (currentArticle) {
            // console.log(
            //     'ArticleForm.js useEffect -> currentArticle is ' +
            //         currentArticle.article_id
            // );
            setValues(currentArticle);
        } else {
            // console.log('ArticleForm.js useEffect -> currentArticle is null');
            setValues(initialFormValues);
        }
    }, [currentArticle]);

    const onChange = (evt) => {
        const { id, value } = evt.target;
        setValues({ ...values, [id]: value });
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        if (currentArticle) {
            // console.log('ArticleForm.js onSubmit -> updating current article');
            updateArticle(currentArticle.article_id, values);
            setCurrentArticleId(null);
            setValues(initialFormValues);
        } else {
            // console.log('ArticleForm.js onSubmit -> creating new article');
            postArticle(values);
            setCurrentArticleId(null);
            setValues(initialFormValues);
        }
    };

    const isDisabled = () => {
        return (
            values.title.trim().length < 1 ||
            values.text.trim().length < 1 ||
            values.topic.trim().length < 1
        );
    };

    const cancelEdit = () => {
        // console.log('ArticleForm.js cancelEdit triggered');
        setCurrentArticleId(null);
        setValues(initialFormValues);
    };

    return (
        <form id='form'>
            {currentArticle ? <h2>Edit</h2> : <h2>Create</h2>}
            <input
                maxLength={50}
                onChange={onChange}
                value={values.title}
                placeholder='Enter title'
                id='title'
            />
            <textarea
                maxLength={200}
                onChange={onChange}
                value={values.text}
                placeholder='Enter text'
                id='text'
            />
            <select
                onChange={onChange}
                id='topic'
                value={values.topic}>
                <option value=''>-- Select topic --</option>
                <option value='JavaScript'>JavaScript</option>
                <option value='React'>React</option>
                <option value='Node'>Node</option>
            </select>
            <div className='button-group'>
                <button
                    disabled={isDisabled()}
                    onClick={onSubmit}
                    id='submitArticle'>
                    Submit
                </button>
                <button
                    disabled={isDisabled()}
                    onClick={cancelEdit}>
                    Cancel edit
                </button>
            </div>
        </form>
    );
}

// 🔥 No touchy: LoginForm expects the following props exactly:
ArticleForm.propTypes = {
    postArticle: PT.func.isRequired,
    updateArticle: PT.func.isRequired,
    setCurrentArticleId: PT.func.isRequired,
    currentArticle: PT.shape({
        // can be null or undefined, meaning "create" mode (as opposed to "update")
        article_id: PT.number.isRequired,
        title: PT.string.isRequired,
        text: PT.string.isRequired,
        topic: PT.string.isRequired,
    }),
};
