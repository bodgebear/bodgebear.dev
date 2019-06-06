const { parse } = require("url");

const { missingProperty, invalidProperty } = require('../src/utils/errors');
const stringify = require('../src/utils/stringify');
const getAllProjects = require('../src/components/projects/getAllProjects');

module.exports = async (req, res) => {
  const { query: { project: projectParam } } = parse(req.url, true);

  if (!projectParam) {
    res.statusCode = 422;
    res.end(stringify({
      code: 422,
      errors: [
        missingProperty("project", "/get/project")
      ]
    }));
  }

  const allProjects = await getAllProjects();
  const project = allProjects.find(({ id }) => id === projectParam);

  if (!project) {
    res.statusCode = 404;
    res.end(stringify({
      code: 404,
      errors: [
        invalidProperty("/get/project", "Value not found", `Project with name ${projectParam} was not found`)
      ]
    }));
  }

  res.end(stringify({ project }));
}
