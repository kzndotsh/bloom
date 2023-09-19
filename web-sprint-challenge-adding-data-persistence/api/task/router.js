const express = require('express');

const { getTasks, addTask } = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const tasks = await getTasks();
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const task = await addTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
