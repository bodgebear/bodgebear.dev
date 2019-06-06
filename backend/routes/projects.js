const getAllProjects = require('../src/components/projects/getAllProjects');
const stringify = require('../src/utils/stringify');

module.exports = async (req, res) => {
  const projects = await getAllProjects();

  res.end(stringify({ projects }));
}
