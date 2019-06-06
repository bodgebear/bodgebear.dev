const axios = require('axios');
const { GH_TOKEN } = require('./consts');
const get = require('lodash.get');
const { valuesOrNull } = require('./utils');
const reposQuery = require('./reposQuery.js');
const yamlFront = require('yaml-front-matter');

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

    return {
      ...websiteConfig,
      description: valuesOrNull(description, readme),
      playNowLink: valuesOrNull(websiteConfig.playNowLink, (now && now.alias[0])),
      srcUrl: valuesOrNull(websiteConfig.srcUrl, url),
      createdAt: valuesOrNull(websiteConfig.createdAt, createdAt),
      repoName: name
    }
  });
}
