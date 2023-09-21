const express = require('express');
const server = express();
server.use(express.json());

const { projectsLogger } = require('./projects/projects-middleware.js');
const { actionsLogger } = require('./actions/actions-middleware.js');

server.use(projectsLogger);
server.use(actionsLogger);

const actionsRouter = require('./actions/actions-router.js');
const projectsRouter = require('./projects/projects-router.js');

server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
  res.send('Hello World!'); // sanity check
});

module.exports = server;
