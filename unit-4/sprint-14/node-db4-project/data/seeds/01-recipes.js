exports.seed = async function (knex) {
  await knex('recipes').truncate();
  await knex('recipes').insert([
    { recipe_name: 'Spaghetti Bolognese' },
    { recipe_name: 'Breakfast Bacon' },
  ]);
};
