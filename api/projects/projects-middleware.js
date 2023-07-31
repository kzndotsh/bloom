const Projects = require('./projects-model.js');

function projectsLogger(req, res, next) {
  const output = {
    method: req.method,
    url: req.url,
    timestamp: Date.now(),
  };
  console.log(output);
  next();
}

async function validateProjectId(req, res, next) {
  try {
    const project = await Projects.get(req.params.id);
    if (project) {
      req.project = project;
      next();
    } else {
      res.status(404).json({
        message: 'project not found',
      });
    }
  } catch (err) {
    next(err);
  }
}

async function validateProject(req, res, next) {
  const { name, description, completed } = req.body;

  if (
    typeof name === 'string' &&
    name.trim() !== '' &&
    typeof description === 'string' &&
    description.trim() !== '' &&
    completed !== undefined
  ) {
    next();
  } else {
    res.status(400).json({
      message: 'Project needs a name and description.',
    });
  }
}

module.exports = {
  projectsLogger,
  validateProjectId,
  validateProject,
};
