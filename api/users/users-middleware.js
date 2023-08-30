const db = require('../../data/db-config');

const checkId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await db('users').where('id', id).first();
    if (!user) {
      next({ status: 404, message: `user with id ${id} not found` });
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkPayload = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) {
    next({ status: 400, message: 'name and email are required' });
  } else {
    next();
  }
};

const checkEmailUnique = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existing = await db('users').where('email', email).first();
    if (existing) {
      next({ status: 400, message: 'email taken' });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkId,
  checkPayload,
  checkEmailUnique,
};
