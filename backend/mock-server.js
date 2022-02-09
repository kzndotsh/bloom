const { setupServer } = require('msw/node')
const { rest } = require('msw')
const Todo = require('./helpers')

async function getAll(req, res, ctx) {
  const [status, payload] = await Todo.getAll(req.body)
  return res(
    ctx.status(status),
    ctx.json(payload),
  )
}

async function getById(req, res, ctx) {
  const [status, payload] = await Todo.getById(req.params.id)
  return res(
    ctx.status(status),
    ctx.json(payload),
  )
}

async function create(req, res, ctx) {
  const [status, payload] = await Todo.create(req.body)
  return res(
    ctx.status(status),
    ctx.json(payload),
  )
}

async function toggleDone(req, res, ctx) {
  const [status, payload] = await Todo.toggleDone(req.params.id)
  return res(
    ctx.status(status),
    ctx.json(payload),
  )
}

function catchAll(req, res, ctx) {
  const message = `Endpoint [${req.method}] /${req.params['0']} does not exist`
  return res(
    ctx.status(404),
    ctx.json({ message }),
  )
}

const handlers = [
  rest.get('http://localhost:9000/api/todos', getAll),
  rest.get('http://localhost:9000/api/todos/:id', getById),
  rest.post('http://localhost:9000/api/todos', create),
  rest.patch('http://localhost:9000/api/todos/:id', toggleDone),
  rest.all('http://localhost:9000/*', catchAll),
]

module.exports = setupServer(...handlers)
