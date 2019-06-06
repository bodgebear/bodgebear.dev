const getAllProjects = require('../src/getAllProjects');

module.exports = async (req, res) => {
  const projects = await getAllProjects();

  const websiteProjects = projects

  res.end(JSON.stringify(projects, null, 2));
}
