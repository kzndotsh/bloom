const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../auth/auth-secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({ status: 401, message: 'token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return next({ status: 401, message: 'token invalid' });
    }

    req.decodedToken = decodedToken;
    next();
  });
};
