const Accounts = require('./accounts-model');
const db = require('../../data/db-config');

// - `checkAccountPayload` returns a status 400 with if `req.body` is invalid:

//   - If either name or budget are undefined, return `{ message: "name and budget are required" }`
//   - If the _trimmed_ name is shorter than 3 or longer than 100, return `{ message: "name of account must be between 3 and 100" }`
//   - If budget is not able to be converted into a number, return `{ message: "budget of account must be a number" }`
//   - If budget is a negative number or over one million, return  `{ message: "budget of account is too large or too small" }`
// 61 |     test('[8] trims the leading and trailing whitespace in the name of the new account

exports.checkAccountPayload = (req, res, next) => {
  const error = { status: 400 };
  const { name, budget } = req.body;
  if (name === undefined || budget === undefined) {
    error.message = 'name and budget are required';
  } else if (typeof name !== 'string') {
    error.message = 'name of account must be a string';
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    error.message = 'name of account must be between 3 and 100';
  } else if (budget < 0 || budget > 1000000) {
    error.message = 'budget of account is too large or too small';
  } else if (typeof budget !== 'number' || isNaN(budget)) {
    error.message = 'budget of account must be a number';
  }
  if (error.message) {
    next(error);
  } else {
    next();
  }
};

// - `checkAccountId` returns a status 404 with a `{ message: "account not found" }` if `req.params.id` does not exist in the database
exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    const existing = await db('accounts')
      .where('name', req.body.name.trim())
      .first();
    if (existing) {
      next({ status: 400, message: 'that name is taken' });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

// - `checkAccountNameUnique` returns a status 400 with a `{ message: "that name is taken" }` if the _trimmed_ `req.body.name` already exists in the database
exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Accounts.getById(req.params.id);
    if (!account) {
      next({ status: 404, message: 'account not found' });
    } else {
      req.account = account;
      next();
    }
  } catch (err) {
    next(err);
  }
};
