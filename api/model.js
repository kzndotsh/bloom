const db = require('../data/db-config');

const getRecipeById = async (recipe_id) => {
  const recipe = await db('recipes').where('recipe_id', recipe_id).first();
  const steps = await db('steps').where('recipe_id', recipe_id);

  const formattedSteps = [];

  for (const step of steps) {
    const stepIngredients = await db('step_ingredients')
      .where('step_id', step.step_id)
      .leftJoin(
        'ingredients',
        'step_ingredients.ingredient_id',
        'ingredients.ingredient_id'
      );

    const formattedIngredients = stepIngredients.map((ingredient) => ({
      ingredient_id: ingredient.ingredient_id,
      ingredient_name: ingredient.ingredient_name,
      quantity: ingredient.quantity,
    }));

    formattedSteps.push({
      step_id: step.step_id,
      step_number: step.step_number,
      step_instructions: step.step_instructions,
      ingredients: formattedIngredients,
    });
  }

  return {
    recipe_id: recipe.recipe_id,
    recipe_name: recipe.recipe_name,
    created_at: recipe.created_at,
    steps: formattedSteps,
  };
};

module.exports = {
  getRecipeById,
};
