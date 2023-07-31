const Actions = require('./actions-model.js');

function actionsLogger(req, res, next) {
  const output = {
    method: req.method,
    url: req.url,
    timestamp: Date.now(),
  };
  console.log(output);
  next();
}

// validateActionId() validates the action id on every request that expects a action id parameter
async function validateActionId(req, res, next) {
  const { id } = req.params || req.body.project_id;
  Actions.get(id)
    .then((action) => {
      if (action) {
        req.action = action;
        next();
      } else {
        res.status(404).json({
          message: 'action not found',
        });
      }
    })
    .catch(next);
}

// validateAction() validates the body on a request to create a new action
async function validateAction(req, res, next) {
  const { project_id, description, notes } = req.body;
  if (!project_id || !description || !notes) {
    res.status(400).json({
      message: 'missing required field',
    });
  } else {
    next();
  }
}

module.exports = {
  actionsLogger,
  validateActionId,
  validateAction,
};
