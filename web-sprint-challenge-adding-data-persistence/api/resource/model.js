const db = require('../../data/dbConfig');

async function getResources() {
  return await db('resources');
}

async function getResourceById(id) {
  return await db('resources').where('resource_id', id).first();
}

async function addResource(resource) {
  const [id] = await db('resources').insert(resource);
  return await db('resources').where('resource_id', id).first();
}

module.exports = {
  getResources,
  getResourceById,
  addResource,
};
