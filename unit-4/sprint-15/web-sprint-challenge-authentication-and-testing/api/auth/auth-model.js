const db = require('../../data/dbConfig');

const findBy = async (filter) => {
  return await db('users').where(filter).first();
};

const add = async (user) => {
  const [id] = await db('users').insert(user);
  return findBy({ id });
};

module.exports = {
  findBy,
  add,
};
