const express = require('express');

const { getProjects, addProject } = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const project = await addProject(req.body);
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
