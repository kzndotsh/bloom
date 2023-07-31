const express = require('express');

const router = express.Router();

const data = require('./data');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/users', (req, res) => {
  res.status(200).json(data);
});

router.post('/register', (req, res) => {
  const { name, username, password } = req.body;
  if (!name || !username || !password) {
    res.status(400).json({
      message: 'Please provide name, username, and password for the user.',
    });
  } else {
    data.push(req.body);
    res.status(201).json(data);
  }
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res
      .status(400)
      .json({ message: 'Please provide username and password for the user.' });
  } else {
    const user = data.find((u) => u.username === username);
    if (user) {
      if (user.password === password) {
        res.status(200).json({ message: `Welcome ${user.name}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    } else {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
  }
});

module.exports = router;
