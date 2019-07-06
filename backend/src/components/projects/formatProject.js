const formatProject = ({
  readme,
  playNowUrl,
  ...websiteConfig
}) => ({
  ...websiteConfig,
  readme: readme.replace(/^\n+/, "").replace(/\n+$/, ""),
  playNowUrl: `https://${playNowUrl}`,
})

module.exports = formatProject;
