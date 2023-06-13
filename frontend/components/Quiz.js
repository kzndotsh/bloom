import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators';

export function Quiz(props) {
    const { fetchQuiz, selectAnswer, postAnswer } = props;

    if (!props.quiz) {
        useEffect(() => {
            props.fetchQuiz();
        }, []);
    }

    // Post answer to server
    function submitAnswer() {
        const answer = {
            quiz_id: props.quiz.quiz_id,
            answer_id: props.selectedAnswer.answer_id,
        };
        postAnswer(answer);
    }

    return (
        <div id='wrapper'>
            {
                // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
                props.quiz ? (
                    <>
                        <h2>{props.quiz.question}</h2>

                        <div id='quizAnswers'>
                            {props.quiz.answers.map((answer) => (
                                <div
                                    key={answer.answer_id}
                                    className={`answer ${
                                        props.selectedAnswer === answer
                                            ? 'selected'
                                            : ''
                                    }`}>
                                    {answer.text}
                                    <button
                                        onClick={() => selectAnswer(answer)}>
                                        {props.selectedAnswer === answer
                                            ? 'SELECTED'
                                            : 'Select'}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            id='submitAnswerBtn'
                            onClick={submitAnswer}
                            // Disable button if no answer selected
                            disabled={!props.selectedAnswer}>
                            Submit answer
                        </button>
                    </>
                ) : (
                    'Loading next quiz...'
                )
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        quiz: state.quiz,
        selectedAnswer: state.selectedAnswer,
    };
};

export default connect(mapStateToProps, {
    fetchQuiz,
    selectAnswer,
    postAnswer,
})(Quiz);
