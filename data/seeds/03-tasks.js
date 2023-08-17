exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      task_description: 'Do the dishes',
      task_notes: 'Use the dishwasher',
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: 'Dsdasds',
      task_notes: 'Usdasdsagdfgr',
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: 'Do dasdasdsadishes',
      task_notes: 'Use tdasdasdher',
      task_completed: false,
      project_id: 1,
    },
  ]);
};
