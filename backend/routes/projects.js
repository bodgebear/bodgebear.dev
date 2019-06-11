const getAllProjects = require('../src/components/projects/getAllProjects');
const jsonRequest = require('../src/utils/jsonRequest');

module.exports = async (req, res) => {
  const projects = await getAllProjects();

  return jsonRequest(res, { projects })
}
