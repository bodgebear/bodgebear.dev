export const getRepoQuery = (orgName: string, repoName: string) => `{
  organization(login: "${orgName}") {
    repository(name: "${repoName}") {
      readme:object(expression: "master:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
}`;
