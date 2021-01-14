// db access functions here
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

function getById(id) {
  return Promise.resolve('getById wired')
}

function create(post) {
  return Promise.resolve('create wired')
}

function update(id, post) {
  return Promise.resolve('update wired')
}

function remove(id) {
  return Promise.resolve('delete wired')
}
