const express = require('express');
const helpers = require('./model');
const router = express.Router();

router.get('/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await helpers.getRecipeById(id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving recipe.', error });
  }
});

module.exports = router;
