const db = require('../../data/db-config');

const checkCarId = async (req, res, next) => {
  try {
    const car = await db('cars').where('id', req.params.id).first();
    if (!car) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`,
      });
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = async (req, res, next) => {
  const { vin, make, model, mileage } = req.body;
  if (!vin) {
    next({ status: 400, message: 'vin is missing' });
  } else if (!make) {
    next({ status: 400, message: 'make is missing' });
  } else if (!model) {
    next({ status: 400, message: 'model is missing' });
  } else if (!mileage) {
    next({ status: 400, message: 'mileage is missing' });
  } else {
    next();
  }
};

const checkVinNumberValid = async (req, res, next) => {
  const { vin } = req.body;
  if (!vin) {
    next({ status: 400, message: 'vin is missing' });
  } else if (vin.length !== 17) {
    next({ status: 400, message: `vin ${vin} is invalid` });
  } else {
    next();
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  const { vin } = req.body;
  const existing = await db('cars').where('vin', vin).first();
  if (existing) {
    next({ status: 400, message: `vin ${vin} already exists` });
  } else {
    next();
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
