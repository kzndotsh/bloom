const User = require('../users/users-model');

//   - `logger` logs to the console the following information about each request: request method, request url, and a timestamp
//   - this middleware runs on every request made to the API

function logger(req, res, next) {
  const output = {
    method: req.method,
    url: req.url,
    timestamp: Date.now(),
  };
  console.log(output);
  next();
}

//   - this middleware will be used for all user endpoints that include an `id` parameter in the url (ex: `/api/users/:id` and it should check the database to make sure there is a user with that id.
//   - if the `id` parameter is valid, store the user object as `req.user` and allow the request to continue
//   - if the `id` parameter does not match any user id in the database, respond with status `404` and `{ message: "user not found" }`

async function validateUserId(req, res, next) {
  const { id } = req.params;
  User.getById(id)
    .then((user) => {
      if (user) {
        req.user = user;
        next();
      } else {
        next({ status: 404, message: 'user not found' });
      }
    })
    .catch(next);
}

//   - `validateUser` validates the `body` on a request to create or update a user
//   - if the request `body` lacks the required `name` field, respond with status `400` and `{ message: "missing required name field" }`

async function validateUser(req, res, next) {
  const { name } = req.body;

  if (!name || !name.trim()) {
    next({ status: 400, message: 'missing required name field' });
  } else {
    next();
  }
}

//   - `validatePost` validates the `body` on a request to create a new post
//   - if the request `body` lacks the required `text` field, respond with status `400` and `{ message: "missing required text field" }`

async function validatePost(req, res, next) {
  const { text } = req.body;

  if (!text || !text.trim()) {
    next({ status: 400, message: 'missing required text field' });
  } else {
    next();
  }
}

// do not forget to expose these functions to other modules

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
