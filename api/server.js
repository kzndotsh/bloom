const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

const usersRouter = require('./users-router.js');
server.use('/api/users', usersRouter);

// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.use('*', (req, res, next) => {
  next({ status: 404, message: 'not found!' });
});

module.exports = server;
