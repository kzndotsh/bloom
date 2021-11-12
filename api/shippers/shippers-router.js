const express = require('express')
const Shipper = require('./shippers-model')

const router = express.Router()

function checkId(req, res, next) {
  next()
}

function checkPayload(req, res, next) {
  next()
}

router.get('/', async (req, res, next) => {
  try {
    const data = await Shipper.get()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkId, async (req, res, next) => {
  try {
    const data = await Shipper.getById(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/', checkPayload, async (req, res, next) => {
  try {
    const data = await Shipper.create(req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', checkPayload, checkId, async (req, res, next) => {
  try {
    const data = await Shipper.update(req.params.id, req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', checkId, async (req, res, next) => {
  try {
    const data = await Shipper.remove(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router
