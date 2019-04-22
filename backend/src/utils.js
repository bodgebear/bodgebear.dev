const { 
  ORG_NAME,
} = require('./consts');

const atob = (base64, encoding = 'utf8') => Buffer.from(base64, 'base64').toString(encoding);
const promiseAllObjects = async (object) => {
  const [keys, promiseValues] = Object.entries(object)
    .reduce(
      (acc, [key, value]) => [
        [...acc[0], key],
        [...acc[1], value],
      ],
      [[], []]
    );

  const values = await Promise.all(promiseValues);

  const obj = {};

  keys.forEach(async (key, i) => {
    obj[key] = await values[i];
  });

  return obj;
};

const getFileFactory = octokit => async (reponame, filename) => {
  try {
    const file = await octokit.repos.getContents({
      owner: ORG_NAME,
      repo: reponame,
      path: filename
    }); 

    const contents = atob(file.data.content);

    return contents;
  } catch (error) {
    if (error.name !== 'HttpError' && error.status !== 404) {
      throw error;
    } else {
      // console.log(`${name} doesn't have config file`);
    }
  }
};

const valuesOrNull = (...values) => values.reduce((prev, curr) => {
  if (prev === null || curr === null) {
    return null;
  }

  return curr;
})

module.exports = {
  atob,
  promiseAllObjects,
  getFileFactory,
  valuesOrNull,
}
