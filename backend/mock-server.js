const { setupServer } = require('msw/node');
const { rest } = require('msw');

const { getNextQuiz, postQuiz, postAnswer, resetIdx } = require('./helpers');

async function nextHandler(req, res, ctx) {
    const [status, payload] = await getNextQuiz();
    return res(ctx.status(status), ctx.json(payload));
}

async function answerHandler(req, res, ctx) {
    const [status, payload] = await postAnswer(req.body);
    return res(ctx.status(status), ctx.json(payload));
}

async function newHandler(req, res, ctx) {
    const [status, payload] = await postQuiz(req.body);
    return res(ctx.status(status), ctx.json(payload));
}

function catchAll(req, res, ctx) {
    const message = `Endpoint [${req.method}] /${req.params['0']} does not exist`;
    return res(ctx.status(404), ctx.json({ message }));
}

const getHandlers = () => {
    resetIdx();
    return [
        rest.get('http://localhost:9000/api/quiz/next', nextHandler),
        rest.post('http://localhost:9000/api/quiz/answer', answerHandler),
        rest.post('http://localhost:9000/api/quiz/new', newHandler),
        rest.all('http://localhost:9000/*', catchAll),
    ];
};

module.exports = {
    setupServer,
    getHandlers,
};
