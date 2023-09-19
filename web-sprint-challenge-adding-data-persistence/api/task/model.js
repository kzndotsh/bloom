const db = require('../../data/dbConfig');

async function getTasks() {
  const tasks = await db('tasks as t')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    )
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .groupBy('t.task_id')
    .orderBy('t.task_id', 'asc');
  return tasks.map((task) => {
    return {
      ...task,
      task_completed: !!task.task_completed,
    };
  });
}

async function addTask(task) {
  const newTask = await db('tasks').insert(task).returning('*');
  return {
    ...newTask[0],
    task_completed: !!newTask[0].task_completed,
  };
}

module.exports = {
  getTasks,
  addTask,
};
