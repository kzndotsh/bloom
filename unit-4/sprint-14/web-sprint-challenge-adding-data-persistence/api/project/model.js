const db = require('../../data/dbConfig');

async function getProjects() {
  const projects = await db('projects');

  return projects.map((project) => {
    return {
      project_id: project.project_id,
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: !!project.project_completed,
    };
  });
}

async function getProjectById(project_id) {
  const project = await db('projects').where('project_id', project_id).first();

  return project;
}

async function addProject(project) {
  const projectId = await db('projects').insert(project);

  const createdProject = await getProjectById(projectId);

  return {
    ...createdProject,
    project_completed: !!project.project_completed,
  };
}

module.exports = {
  getProjects,
  getProjectById,
  addProject,
};
