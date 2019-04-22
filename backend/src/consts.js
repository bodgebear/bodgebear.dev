require('dotenv').config();

const ORG_NAME = 'bodgingbear';
const FILES_ARR = ['WEBSITE.md', 'README.md', 'now.json'];
const GH_TOKEN = process.env.TOKEN;

module.exports = {
  ORG_NAME,
  FILES_ARR,
  GH_TOKEN,
}
