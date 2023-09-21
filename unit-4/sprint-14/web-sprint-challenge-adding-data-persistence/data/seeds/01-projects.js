exports.seed = function (knex) {
  return knex('projects').insert([
    {
      project_name: 'Project 1',
      project_description: 'Project 1 description',
      project_completed: false,
    },
  ]);
};
