const express = require('express');

const {
  actionsLogger,
  validateActionId,
  validateAction,
} = require('./actions-middleware.js');

const Actions = require('./actions-model.js');

const router = express.Router();

router.use(actionsLogger);

// GET /api/actions
router.get('/', async (req, res, next) => {
  try {
    const actions = await Actions.get();
    res.status(200).json(actions);
  } catch (err) {
    next(err);
  }
});

// GET /api/actions/:id
router.get('/:id', validateActionId, async (req, res) => {
  res.status(200).json(req.action);
});

// POST /api/actions
router.post('/', [validateActionId, validateAction], async (req, res, next) => {
  try {
    const newAction = await Actions.insert(req.body);
    res.status(201).json(newAction);
  } catch (err) {
    next(err);
  }
});

// PUT /api/actions/:id
router.put(
  '/:id',
  [validateActionId, validateAction],
  async (req, res, next) => {
    try {
      const updatedAction = await Actions.update(req.params.id, req.body);
      res.status(200).json(updatedAction);
    } catch (err) {
      next(err);
    }
  }
);

// DELETE /api/actions/:id
router.delete('/:id', validateActionId, (req, res, next) => {
  Actions.remove(req.params.id)
    .then(() => {
      res.status(200).json();
    })
    .catch(next);
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage: 'Something tragic inside actions router happened',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
