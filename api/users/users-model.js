const db = require('../../data/db-config');

// [GET] get all existing users
async function getAllUsers() {
  const users = await db('users');
  return users;
}

// [GET] get an existing user by ID
async function getUserById(id) {
  const user = await db('users').where('id', id).first();
  return user;
}

// [POST] create a new user
async function createUser(user) {
  const newUser = await db('users').insert(user);
  return getUserById(newUser[0]);
}

// [DELETE] delete an existing user by ID
async function deleteUserById(id) {
  await db('users').where('id', id).del();
}

// [PUT] update an existing user by ID
async function updateUserById(id, user) {
  await db('users').where('id', id).update(user);
  const updatedUser = getUserById(id);
  return updatedUser;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
};
