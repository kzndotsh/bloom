module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

function get() {
  return Promise.resolve('get wired')
}

function getById() {
  return Promise.resolve('getById wired')
}

function create() {
  return Promise.resolve('create wired')
}

function update() {
  return Promise.resolve('update wired')
}

function remove() {
  return Promise.resolve('delete wired')
}
