const router = require('express').Router();

const bcrypt = require('bcryptjs');
const buildToken = require('../utils/build-token');
const { BCRYPT_ROUNDS } = require('./auth-secrets');

const {
  checkExistingUsername,
  checkUsernameExists,
  validateUsernameAndPassword,
} = require('../middleware/shared');

const Users = require('./auth-model');

router.post(
  '/register',
  validateUsernameAndPassword,
  checkExistingUsername,
  async (req, res, next) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, BCRYPT_ROUNDS);

    try {
      const user = await Users.add({ username, password: hash });
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  '/login',
  validateUsernameAndPassword,
  checkUsernameExists,
  async (req, res, next) => {
    try {
      if (bcrypt.compareSync(req.body.password, req.user.password)) {
        const token = buildToken(req.user);
        res.status(200).json({
          message: `welcome, ${req.user.username}`,
          token,
        });
      } else {
        next({ status: 401, message: 'invalid credentials' });
      }
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;