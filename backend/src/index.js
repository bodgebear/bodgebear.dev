const Octokit = require('@octokit/rest');
const yamlFront = require('yaml-front-matter');

const { promiseAllObjects, getFileFactory, valuesOrNull } = require('./utils');

const { 
  ORG_NAME,
  FILES_ARR,
  GH_TOKEN
} = require('./consts');

const octokit = new Octokit({
  auth: GH_TOKEN,
});

const getFile = getFileFactory(octokit);

(async () => {
  const { data: repos } = await octokit.repos.listForOrg({
    org: ORG_NAME
  });
  
  const projectsArr = repos.map(async ({ name, created_at: createdAt, html_url: htmlUrl }) => {
    const files = FILES_ARR
      .map((filename) => ({
        filename,
        content: getFile(name, filename)
      }));

    return promiseAllObjects({ repoName: name, createdAt, htmlUrl, files });
  });

  const projects = (await Promise.all(
    (await Promise.all(projectsArr))
      .map(async (project) => {
        const { repoName, createdAt, htmlUrl, files: promiseFiles } = project;

        const files = {};
        
        await Promise.all(
          promiseFiles.map(async ({ content, filename }) => {
            files[filename] = (await content) || null
          })
        );

        const website = files['WEBSITE.md'];
        
        if (website) {
          const now = JSON.parse(files['now.json']);
          const readme = files['README.md'];
          const { __content: description, ...websiteConfig } = yamlFront.loadFront(website);

          return {
            ...websiteConfig,
            description: valuesOrNull(description, readme),
            playNowLink: valuesOrNull(websiteConfig.playNowLink, (now && now.alias[0])),
            srcUrl: valuesOrNull(websiteConfig.srcUrl, htmlUrl),
            createdAt: valuesOrNull(websiteConfig.createdAt, createdAt),
            repoName,
          }
        }

        return null
      })
  ))
    .filter(isTruthy => isTruthy)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  console.log(JSON.stringify(projects, null, 2));
})();
