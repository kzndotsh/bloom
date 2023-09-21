const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../auth/auth-secrets');

function buildToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
  };
  const config = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, JWT_SECRET, config);
}

module.exports = buildToken;
