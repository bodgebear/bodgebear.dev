const axios = require('axios');
const yamlFront = require('yaml-front-matter');
const get = require('lodash.get');

const { GH_TOKEN } = require('../../utils/consts');
const valuesOrNull = require('../../utils/valuesOrNull');
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
    const { __content: description, ...websiteConfig } = yamlFront.loadFront(website);

    const readme = readmeFile && readmeFile.text;
    const now = nowFile && JSON.parse(nowFile.text);

    return formatProject({
      id: name,
      description: valuesOrNull(description, readme),
      playNowLink: valuesOrNull(websiteConfig.playNowLink, now && now.alias[0]),
      srcUrl: valuesOrNull(websiteConfig.srcUrl, url),
      createdAt: valuesOrNull(websiteConfig.createdAt, createdAt),
      ...websiteConfig,
    });
  });
}
