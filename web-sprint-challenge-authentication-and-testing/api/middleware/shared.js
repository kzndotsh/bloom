const Users = require('../auth/auth-model');

const checkExistingUsername = async (req, res, next) => {
  try {
    const user = await Users.findBy({ username: req.body.username });
    if (user) {
      next({ status: 401, message: 'username taken' });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkUsernameExists = async (req, res, next) => {
  try {
    const user = await Users.findBy({ username: req.body.username });
    if (user) {
      req.user = user;
      next();
    } else {
      next({ status: 401, message: 'invalid credentials' });
    }
  } catch (err) {
    next(err);
  }
};

const validateUsernameAndPassword = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next({ status: 401, message: 'username and password required' });
  } else {
    next();
  }
};

module.exports = {
  checkExistingUsername,
  checkUsernameExists,
  validateUsernameAndPassword,
};
