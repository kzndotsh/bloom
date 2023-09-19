const { JWT_SECRET } = require('../secrets'); // use this secret!
const jwt = require('jsonwebtoken');
const User = require('../users/users-model');

const restricted = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    next({ status: 400, message: 'Token required' });
  } else {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        next({ status: 400, message: 'Token invalid' });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  }
};

const only = (role_name) => async (req, res, next) => {
  if (role_name === req.decodedToken.role_name) {
    next();
  } else {
    next({ status: 403, message: 'This is not for you' });
  }
};

const checkUsernameExists = async (req, res, next) => {
  try {
    const [user] = await User.findBy({ username: req.body.username });
    if (!user) {
      next({ status: 401, message: 'Invalid credentials' });
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const validateRoleName = async (req, res, next) => {
  const { role_name } = req.body;
  if (!role_name || !role_name.trim()) {
    req.role_name = 'student';
    next();
  } else if (role_name.trim() === 'admin') {
    next({ status: 422, message: 'Role name can not be admin' });
  } else if (role_name.trim().length > 32) {
    next({ status: 422, message: 'Role name can not be longer than 32 chars' });
  } else {
    req.role_name = role_name.trim();
    next();
  }
};

module.exports = {
  restricted,
  checkUsernameExists,
  validateRoleName,
  only,
};
