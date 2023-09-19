exports.seed = async function (knex) {
  await knex('step_ingredients').truncate();
  await knex('step_ingredients').insert([
    { step_id: 1, ingredient_id: 1, quantity: 1.0 },
    { step_id: 2, ingredient_id: 1, quantity: 1.0 },
    { step_id: 3, ingredient_id: 2, quantity: 2.0 },
    { step_id: 3, ingredient_id: 3, quantity: 0.1 },
  ]);
};
