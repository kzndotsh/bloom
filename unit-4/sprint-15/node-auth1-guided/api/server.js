const path = require('path')
const express = require('express');

const session = require('express-session');
const Store = require('connect-session-knex')(session);

const usersRouter = require('./users/users-router.js');
const authRouter = require('./auth/auth-router.js');

const server = express();

server.use(express.static(path.join(__dirname, '../client')));
server.use(express.json());
server.use(
  session({
    name: 'monkey', // default value is sid
    secret: 'sssssshhhhh', // used for encryption
    cookie: {
      maxAge: 1000 * 60 * 60, // in milliseconds
      secure: false, // true in production
      httpOnly: false, // true means JS can't touch the cookie
    },
    rolling: true, // reset maxAge on every request
    resave: false, // avoid recreating unchanged sessions
    saveUninitialized: false, // GDPR compliance
    store: new Store({
      knex: require('../database/db-config.js'),
      tablename: 'sessions',
      sidfieldname: 'sid',
      createtable: true,
      clearInterval: 1000 * 60 * 60, // delete expired sessions every hour
    }),
  })
);

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'))
})

server.use('*', (req, res, next) => {
  next({ status: 404, message: 'not found!' })
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server
