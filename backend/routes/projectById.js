const { parse } = require("url");

const jsonRequest = require('../src/utils/jsonRequest');
const { missingProperty, invalidProperty } = require('../src/utils/errors');
const getAllProjects = require('../src/components/projects/getAllProjects');

module.exports = async (req, res) => {
  const { query: { project: projectId } } = parse(req.url, true);

  if (!projectId) {
    return jsonRequest(res, {
      errors: [
        missingProperty("project", "/get/project")
      ]
    }, 422);
  }

  const allProjects = await getAllProjects();
  const project = allProjects.find(({ id }) => id === projectId);

  if (!project) {
    return jsonRequest(res, {
      errors: [
        invalidProperty("/get/project", "Value not found", `Project with name ${projectId} was not found`)
      ]
    }, 404)
  }

  return jsonRequest(res, { project });
}
