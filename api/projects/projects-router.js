const express = require('express');

const {
  projectsLogger,
  validateProjectId,
  validateProject,
} = require('./projects-middleware.js');

const Projects = require('./projects-model.js');

const router = express.Router();

router.use(projectsLogger);

// GET /api/projects
router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

// GET /api/projects/:id
router.get('/:id', validateProjectId, async (req, res) => {
  res.status(200).json(req.project);
});

// POST /api/projects
router.post('/', validateProject, async (req, res, next) => {
  try {
    const newProject = await Projects.insert(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

// PUT /api/projects/:id
router.put(
  '/:id',
  [validateProjectId, validateProject],
  async (req, res, next) => {
    try {
      const updatedProject = await Projects.update(req.params.id, req.body);
      res.status(200).json(updatedProject);
    } catch (err) {
      next(err);
    }
  }
);

// DELETE /api/projects/:id
router.delete('/:id', validateProjectId, (req, res, next) => {
  Projects.remove(req.params.id)
    .then(() => {
      res.status(200).json();
    })
    .catch(next);
});

// GET /api/projects/:id/actions
router.get('/:id/actions', validateProjectId, async (req, res, next) => {
  try {
    const actions = await Projects.getProjectActions(req.params.id);
    res.status(200).json(actions);
  } catch (err) {
    next(err);
  }
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage: 'Something tragic inside projects router happened',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
