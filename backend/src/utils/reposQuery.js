const { ORG_NAME } = require('./consts');

module.exports = `{
  organization(login: "${ORG_NAME}") {
    repositories(first: 100) {
      nodes {
        name
        url
        createdAt
        description
        readme:object(expression: "master:README.md") {
          ... on Blob {
            text
          }
        }
        website:object(expression: "master:WEBSITE.md") {
          ... on Blob {
            text
          }
        }
        now:object(expression: "master:now.json") {
          ... on Blob {
            text
          }
        }
      }
    }
  }
}`;
