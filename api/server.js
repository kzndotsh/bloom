const express = require('express');

const server = express();

server.use(express.json());

server.get('/api/status', (req, res) => {
  res.status(200).json({ api: 'up' });
});

const usersRouter = require('./users/users-router.js');
server.use('/api/users', usersRouter);

server.use('*', (err, req, res, next) => {
  next({ status: 404, message: 'not found!' });
});

// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
