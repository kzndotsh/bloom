exports.seed = async function (knex) {
  await knex('ingredients').truncate();
  await knex('ingredients').insert([
    { ingredient_name: 'olive oil' },
    { ingredient_name: 'eggs' },
    { ingredient_name: 'ham' },
  ]);
};
