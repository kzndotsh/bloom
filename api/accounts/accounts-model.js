const db = require('../../data/db-config');

async function getAll() {
  // select * from accounts;
  const result = await db('accounts');
  return result;
}

async function getById(id) {
  // select * from accounts where id = 1;
  const result = await db('accounts').where('id', id).first();
  return result;
}

async function create(account) {
  // insert into accounts (name, budget) values ('foo', 1000);
  const [id] = await db('accounts').insert(account);
  return getById(id);
}

async function updateById(id, account) {
  // update accounts set name = 'foo', budget = 1000 where id = 1;
  await db('accounts').where('id', id).update(account);
  return getById(id);
}

async function deleteById(id) {
  // delete from accounts where id = 1;
  await db('accounts').where('id', id).del();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
