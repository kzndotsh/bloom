exports.up = async function (knex) {
  await knex.schema.createTable('recipes', (tbl) => {
    tbl.increments('recipe_id');
    tbl.string('recipe_name', 128).notNullable().unique();
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('steps', (tbl) => {
    tbl.increments('step_id');
    tbl.integer('step_number').notNullable();
    tbl.string('step_instructions', 128).notNullable();
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });

  await knex.schema.createTable('ingredients', (tbl) => {
    tbl.increments('ingredient_id');
    tbl.string('ingredient_name', 128).notNullable().unique();
  });

  await knex.schema.createTable('step_ingredients', (tbl) => {
    tbl.increments('step_ingredient_id');
    tbl.float('quantity').notNullable();
    tbl
      .integer('step_id')
      .unsigned()
      .notNullable()
      .references('step_id')
      .inTable('steps')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('ingredient_id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('step_ingredients');
  await knex.schema.dropTableIfExists('ingredients');
  await knex.schema.dropTableIfExists('steps');
  await knex.schema.dropTableIfExists('recipes');
};
