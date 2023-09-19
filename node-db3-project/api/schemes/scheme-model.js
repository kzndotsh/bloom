const db = require('../../data/db-config.js');

async function find() {
  const schemes = await db('schemes as sc')
    .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
    .select('sc.*')
    .count('st.step_id as number_of_steps')
    .groupBy('sc.scheme_id')
    .orderBy('sc.scheme_id');

  return schemes;
}

async function findById(scheme_id) {
  const rows = await db('schemes as sc')
    .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
    .where('sc.scheme_id', scheme_id)
    .select('sc.scheme_name', 'st.*')
    .orderBy('st.step_number');

  const result = {
    scheme_id: rows[0].scheme_id,
    scheme_name: rows[0].scheme_name,
    steps: [],
  };

  rows.forEach((row) => {
    if (row.step_id) {
      result.steps.push({
        step_id: row.step_id,
        step_number: row.step_number,
        instructions: row.instructions,
      });
    }
  });

  return result;
}

async function findSteps(scheme_id) {
  const rows = await db('schemes as sc')
    .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
    .where('sc.scheme_id', scheme_id)
    .select('st.*', 'sc.scheme_name')
    .orderBy('st.step_number');

  const result = [];

  rows.forEach((row) => {
    if (row.step_id) {
      result.push({
        step_id: row.step_id,
        step_number: row.step_number,
        instructions: row.instructions,
        scheme_name: row.scheme_name,
      });
    }
  });

  return result;
}

async function add(scheme) {
  const newSchemeId = await db('schemes').insert(scheme);

  const newScheme = await db('schemes').where('scheme_id', newSchemeId).first();

  return newScheme;
}

async function addStep(scheme_id, step) {
  // EXERCISE E
  /*
    1E- This function adds a step to the scheme with the given `scheme_id`
    and resolves to _all the steps_ belonging to the given `scheme_id`,
    including the newly created one.
  */
  const newStep = {
    scheme_id: scheme_id,
    step_number: step.step_number,
    instructions: step.instructions,
  };
  await db('steps').insert(newStep);

  let newSteps = await db('steps')
    .where('scheme_id', scheme_id)
    .orderBy('step_number', 'ASC');

  return newSteps;
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
};
