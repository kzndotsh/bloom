const yup = require('yup');

const getId = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += chars[Math.floor(Math.random() * 26)];
    }
    return result;
};

const answerSchema = yup.object().shape({
    quiz_id: yup
        .string()
        .trim()
        .required('quiz_id is required')
        .min(5, 'quiz_id must be five characters long')
        .max(5, 'quiz_id must be five characters long'),
    answer_id: yup
        .string()
        .trim()
        .required('answer_id is required')
        .min(5, 'answer_id must be five characters long')
        .max(5, 'answer_id must be five characters long'),
});

const quizSchema = yup.object().shape({
    question_text: yup
        .string()
        .trim()
        .required('question_text is required')
        .min(1, 'question_text must be at least 1 character')
        .max(50, 'question_text cannot exceed 50 characters'),
    true_answer_text: yup
        .string()
        .trim()
        .required('true_answer_text is required')
        .min(1, 'true_answer_text must be at least 1 character')
        .max(50, 'true_answer_text cannot exceed 50 characters'),
    false_answer_text: yup
        .string()
        .trim()
        .required('false_answer_text is required')
        .min(1, 'false_answer_text must be at least 1 character')
        .max(50, 'false_answer_text cannot exceed 50 characters'),
});

const quizzes = [
    {
        quiz_id: getId(),
        question: 'What is a closure?',
        answers: [
            {
                answer_id: getId(),
                text: 'A function plus its bindings',
                correct: true,
            },
            {
                answer_id: getId(),
                text: 'Clearly some kind of elephant',
                correct: false,
            },
        ],
    },
    {
        quiz_id: getId(),
        question: 'What is a promise?',
        answers: [
            {
                answer_id: getId(),
                text: 'A value representing a future result',
                correct: true,
            },
            {
                answer_id: getId(),
                text: 'Something like a blue teapot',
                correct: false,
            },
        ],
    },
    {
        quiz_id: getId(),
        question: 'An ES6 module is a...',
        answers: [
            { answer_id: getId(), text: 'JS file', correct: true },
            { answer_id: getId(), text: 'Fruit fly', correct: false },
        ],
    },
];

const quizzesForClient = () =>
    quizzes.map((q) => {
        return {
            ...q,
            answers: q.answers.map((a) => ({
                answer_id: a.answer_id,
                text: a.text,
            })),
        };
    });

let idx;
const resetIdx = () => {
    idx = -1;
};
resetIdx();
const getNextIdx = () => {
    if (idx + 1 < quizzes.length) {
        return ++idx;
    }
    idx = 0;
    return idx;
};

async function getNextQuiz() {
    const payload = quizzesForClient()[getNextIdx()];
    return [200, payload];
}

async function postAnswer(payload) {
    try {
        const { quiz_id, answer_id } = await answerSchema.validate(payload);
        const question = quizzes.find((q) => q.quiz_id === quiz_id);
        const answer = question?.answers.find(
            (an) => an.answer_id === answer_id
        );
        if (!question)
            return [
                404,
                { message: `We could not find a quiz with quiz_id ${quiz_id}` },
            ];
        if (!answer)
            return [
                404,
                {
                    message: `We could not find an answer with answer_id ${answer_id}`,
                },
            ];
        if (answer.correct)
            return [200, { message: 'Nice job! That was the correct answer' }];
        return [
            200,
            { message: 'What a shame! That was the incorrect answer' },
        ];
    } catch (err) {
        return [422, { message: `Ouch: ${err.message}` }];
    }
}

async function postQuiz(payload) {
    try {
        const { question_text, true_answer_text, false_answer_text } =
            await quizSchema.validate(payload);
        const newQuestion = {
            quiz_id: getId(),
            question: question_text,
            answers: [
                { answer_id: getId(), text: true_answer_text, correct: true },
                { answer_id: getId(), text: false_answer_text, correct: false },
            ],
        };
        quizzes.push(newQuestion);
        return [201, newQuestion];
    } catch (err) {
        return [422, { message: `Ouch: ${err.message}` }];
    }
}

module.exports = {
    getNextQuiz,
    postQuiz,
    postAnswer,
    resetIdx,
};
