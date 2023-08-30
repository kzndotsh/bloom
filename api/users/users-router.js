const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
} = require('./users-model');

// [GET] get all existing users
router.get('/', async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// [GET] get an existing user by ID
router.get('/:id', async (req, res, next) => {
  const { id } = req.params.id;
  try {
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// [POST] create a new user
router.post('/', async (req, res, next) => {
  const userInfo = req.params.body;
  try {
    const newUser = await createUser(userInfo);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

// [DELETE] delete an existing user by ID
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params.id;
  try {
    const deletedUser = await deleteUserById(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
});

// [PUT] update an existing user by ID
router.put('/:id', async (req, res, next) => {
  const { id } = req.params.id;
  const updates = req.body;
  try {
    const updatedUser = await updateUserById(id, updates);
    return updatedUser;
  } catch (error) {
    next(error);
  }
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
