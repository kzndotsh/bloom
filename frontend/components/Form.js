import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

// yup to handle form validation requirements
import * as yup from 'yup';

// yup schema for form validation
const formSchema = yup.object().shape({
    newQuestion: yup.string().min(2).trim().required('Question is required'),
    newTrueAnswer: yup
        .string()
        .min(2)
        .trim()
        .required('True answer is required'),
    newFalseAnswer: yup
        .string()
        .min(2)
        .trim()
        .required('False answer is required'),
});

export function Form(props) {
    const { resetForm, inputChange, postQuiz } = props;

    const [buttonDisabled, setButtonDisabled] = useState(true);

    // check if all form requirements are met
    const [errors, setErrors] = useState({
        newQuestion: '',
        newTrueAnswer: '',
        newFalseAnswer: '',
    });

    // validate the form
    const validateChange = (evt) => {
        yup.reach(formSchema, evt.target.name)
            .validate(evt.target.value)
            .then(() => {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [evt.target.name]: '',
                }));
            })
            .catch((err) => {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [evt.target.name]: err.errors[0],
                }));
            });
    };

    // handle form input changes
    const onChange = (evt) => {
        inputChange(evt);
        validateChange(evt);
    };

    // check if all form requirements are met
    const formRequirementsMet = () => {
        if (
            props.form.newQuestion.trim().length > 1 &&
            props.form.newTrueAnswer.trim().length > 1 &&
            props.form.newFalseAnswer.trim().length > 1
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    };

    useEffect(() => {
        formRequirementsMet();
    }, [
        props.form.newQuestion,
        props.form.newTrueAnswer,
        props.form.newFalseAnswer,
    ]); // Call formRequirementsMet when the form inputs change

    // On form submit, post the new quiz to the server and reset the form
    const onSubmit = (evt) => {
        evt.preventDefault();
        resetForm();
        const newQuiz = {
            question_text: props.form.newQuestion,
            true_answer_text: props.form.newTrueAnswer,
            false_answer_text: props.form.newFalseAnswer,
        };
        postQuiz(newQuiz);
    };

    return (
        <form
            id='form'
            onSubmit={onSubmit}>
            <h2>Create New Quiz</h2>
            <input
                maxLength={50}
                onChange={onChange}
                name='newQuestion'
                value={props.form.newQuestion}
                id='newQuestion'
                placeholder='Enter question'
            />
            {errors.newQuestion && <p>{errors.newQuestion}</p>}
            <input
                maxLength={50}
                onChange={onChange}
                name='newTrueAnswer'
                value={props.form.newTrueAnswer}
                id='newTrueAnswer'
                placeholder='Enter true answer'
            />
            {errors.newTrueAnswer && <p>{errors.newTrueAnswer}</p>}
            <input
                maxLength={50}
                onChange={onChange}
                name='newFalseAnswer'
                value={props.form.newFalseAnswer}
                id='newFalseAnswer'
                placeholder='Enter false answer'
            />
            {errors.newFalseAnswer && <p>{errors.newFalseAnswer}</p>}
            <button
                id='submitNewQuizBtn'
                disabled={buttonDisabled}>
                Submit new quiz
            </button>
        </form>
    );
}

export default connect((state) => state, actionCreators)(Form);
