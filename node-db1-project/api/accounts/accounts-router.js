const express = require('express');
const Accounts = require('./accounts-model');
const {
  checkAccountId,
  checkAccountPayload,
  checkAccountNameUnique,
} = require('./accounts-middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Accounts.getAll();
    res.status(200).json(accounts);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', checkAccountId, async (req, res, next) => {
  try {
    const account = await Accounts.getById(req.params.id);
    res.status(200).json(account);
  } catch (err) {
    next(err);
  }
});

router.post(
  '/',
  [checkAccountPayload, checkAccountNameUnique],
  async (req, res, next) => {
    try {
      const newAccount = await Accounts.create({
        name: req.body.name.trim(),
        budget: req.body.budget,
      });
      res.status(201).json(newAccount);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  '/:id',
  [checkAccountId, checkAccountPayload],
  async (req, res, next) => {
    try {
      const updated = await Accounts.updateById(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (err) {
      next(err);
    }
  }
);

router.delete('/:id', checkAccountId, async (req, res, next) => {
  Accounts.deleteById(req.params.id)
    .then(() => {
      res.status(200).json(req.account);
    })
    .catch(next);
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
