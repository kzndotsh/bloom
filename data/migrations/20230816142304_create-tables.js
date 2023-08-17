exports.up = async function (knex) {
  await knex.schema.createTable('projects', (table) => {
    table.increments('project_id');
    table.string('project_name').notNullable();
    table.string('project_description');
    table.boolean('project_completed').defaultTo(false);
    table.timestamps(true, true);
  });

  await knex.schema.createTable('resources', (table) => {
    table.increments('resource_id');
    table.string('resource_name').notNullable().unique();
    table.string('resource_description');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('tasks', (table) => {
    table.increments('task_id');
    table.string('task_description').notNullable();
    table.text('task_notes');
    table.boolean('task_completed').defaultTo(false);
    table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('resources');
  await knex.schema.dropTableIfExists('projects');
};
