const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
} = require('./users-model');

const {
  checkId,
  checkPayload,
  checkEmailUnique,
} = require('./users-middleware');

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
router.get('/:id', checkId, async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// [POST] create a new user
router.post('/', checkPayload, checkEmailUnique, async (req, res, next) => {
  const userInfo = req.body;

  try {
    const newUser = await createUser(userInfo);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

// [DELETE] delete an existing user by ID
router.delete('/:id', checkId, async (req, res, next) => {
  const { id } = req.params;
  const deletedUser = await getUserById(id);
  try {
    await deleteUserById(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
});

// [PUT] update an existing user by ID
router.put(
  '/:id',
  checkId,
  checkPayload,
  checkEmailUnique,
  async (req, res, next) => {
    const { id } = req.params;
    const updates = req.body;
    try {
      await updateUserById(id, updates);
      const updatedUser = await getUserById(id);
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
