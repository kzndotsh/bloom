const { getAll, getById, create } = require('./cars-model');
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require('./cars-middleware');

const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const cars = await getAll();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', checkCarId, async (req, res, next) => {
  try {
    const car = await getById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
});

router.post(
  '/',
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res, next) => {
    try {
      const car = await create(req.body);
      res.status(201).json(car);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
