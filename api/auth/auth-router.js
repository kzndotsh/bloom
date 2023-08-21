const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../users/users-model.js');

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8); // 2 ^ 8

    const newUser = { username, password: hash };
    const result = await User.add(newUser);

    res.status(201).json({
      message: `Nice to have you, ${result.username}!`,
    });
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findBy({ username }).first();

    if (user && bcrypt.compareSync(password, user.password)) {
      // start a session
      req.session.user = user;
      res.status(200).json({
        message: `Welcome back, ${user.username}!`,
      });
    } else {
      next({ status: 401, message: 'Invalid Credentials' });
    }
  } catch (err) {
    next(err);
  }
});

router.get('/logout', async (req, res, next) => {
  if (req.session.user) {
    const { username } = req.session.user;
    req.session.destroy((err) => {
      if (err) {
        next(err);
      } else {
        // clear the cookie
        res.clearCookie('monkey'); // this is the name of the cookie to destroy
        res.status(200).json({
          message: `See you later, ${username}!`,
        });
      }
    });
  } else {
    res.status(200).json({
      message: 'no session',
    });
  }
});

module.exports = router;
