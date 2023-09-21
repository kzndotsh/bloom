const express = require('express');

const server = express();

server.use(express.json());

const postsRouter = require('./posts/posts-router');

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.send(`
        <h2>Posts API</h2>
        <p>Welcome to the Posts API</p>
    `);
});

module.exports = server;
