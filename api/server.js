const express = require("express")

const server = express()

server.use(express.json());

const carsRouter = require('./cars/cars-router');

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'api is up' });
});

server.use('*', (req, res, next) => {
  next({ status: 404, message: 'not found!' });
});

// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});


module.exports = server
