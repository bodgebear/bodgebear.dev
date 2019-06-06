const formatProject = ({
  description,
  playNowLink,
  ...websiteConfig
}) => ({
  ...websiteConfig,
  description: description.replace(/^\n+/, "").replace(/\n+$/, ""),
  playNowLink: `https://${playNowLink}`,
})

module.exports = formatProject;
