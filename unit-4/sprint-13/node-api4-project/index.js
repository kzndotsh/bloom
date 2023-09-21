require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 9000;

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));

const routes = require('./routes');

server.use('/api', routes);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = server;
