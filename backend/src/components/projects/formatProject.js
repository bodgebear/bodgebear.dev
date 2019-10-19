const formatProject = ({
  readme,
  playNowUrl,
  ...websiteConfig
}) => ({
  ...websiteConfig,
  readme: readme.replace(/^\n+/, "").replace(/\n+$/, ""),
  playNowUrl: playNowUrl !== null ? `https://${playNowUrl}` : null,
})

module.exports = formatProject;
