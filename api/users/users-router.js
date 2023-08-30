const express = require('express');
const router = express.Router();

const Users = require('./users-model');

// [GET] get all existing users
router.get('/', (req, res, next) => {});

// [GET] get an existing user by ID
router.get('/:id', (req, res, next) => {});

// [POST] create a new user
router.post('/', (req, res, next) => {});

// [DELETE] delete an existing user by ID
router.delete('/:id', (req, res, next) => {});

// [PUT] update an existing user by ID
router.put('/:id', (req, res, next) => {});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = { router };
