const axios = require('axios');
const yamlFront = require('yaml-front-matter');
const get = require('lodash.get');

const { GH_TOKEN } = require('../../utils/consts');
const formatProject = require('./formatProject');
const reposQuery = require('../../utils/reposQuery.js');

module.exports = async () => {
  const { data: { data } } = await axios.post(
    'https://api.github.com/graphql',
    {
      query: reposQuery
    },
    {
      headers: {
        Authorization: `bearer ${GH_TOKEN}`
      },
    }
  );

  const repositories = get(data, "organization.repositories.nodes");

  if (!repositories) {
    return [];
  }

  const websiteProjects = repositories.filter(({ website }) => website !== null);

  return websiteProjects.map(({
    name,
    url,
    createdAt,
    website: {
      text: website
    },
    readme: readmeFile,
    now: nowFile
  }) => {
    const { __content: readmeForWebsite, description, ...websiteConfig } = yamlFront.loadFront(website);

    const readmeFileContent = readmeFile && readmeFile.text;
    const nowConfigFileContent = nowFile && JSON.parse(nowFile.text);

    return formatProject({
      id: name,
      description: description,
      readme: readmeForWebsite || readmeFileContent || null,
      playNowUrl:
        websiteConfig.playNowUrl
        || (nowConfigFileContent && nowConfigFileContent.alias[0])
        || null,
      srcUrl: websiteConfig.srcUrl || url || null,
      createdAt: websiteConfig.createdAt || createdAt || null,
      ...websiteConfig,
    });
  });
}
