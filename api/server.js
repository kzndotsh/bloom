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

// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(404).json({
    message: '404 not found',
  });
});

module.exports = server;
