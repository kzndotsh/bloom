const db = require('../../data/db-config');

// [GET] get all existing users
async function getAllUsers() {
  const users = await db('users');
  console.log('🚀 ~ file: users-model.js:6 ~ getAllUsers ~ users:', users);
  return users;
}

// [GET] get an existing user by ID
async function getUserById(id) {
  const user = await db('users').where('id', id).first();
  console.log('🚀 ~ file: users-model.js:13 ~ getUserById ~ user:', user);
  return user;
}

// [POST] create a new user
async function createUser(user) {
  const newUser = await db('users').insert(user);
  console.log('🚀 ~ file: users-model.js:20 ~ createUser ~ newUser:', newUser);
  return getUserById(newUser.id);
}

// [DELETE] delete an existing user by ID
async function deleteUserById(id) {
  return await db('users').where('id', id).delete();
}

// [PUT] update an existing user by ID
async function updateUserById(id, user) {
  await db('users').where('id', id).update(user);
  const updatedUser = getUserById(id);
  console.log(
    '🚀 ~ file: users-model.js:33 ~ updateUserById ~ updatedUser:',
    updatedUser
  );
  return updatedUser;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
};
