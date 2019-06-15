const formatProject = ({
  description,
  playNowUrl,
  ...websiteConfig
}) => ({
  ...websiteConfig,
  description: description.replace(/^\n+/, "").replace(/\n+$/, ""),
  playNowUrl: `https://${playNowUrl}`,
})

module.exports = formatProject;
