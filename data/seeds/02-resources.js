exports.seed = function (knex) {
  return knex('resources').insert([
    {
      resource_name: 'Resource 1',
      resource_description: 'Resource 1 description',
    },
  ]);
};
