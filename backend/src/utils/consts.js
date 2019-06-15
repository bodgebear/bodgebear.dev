require('dotenv').config();

const ORG_NAME = 'bodgingbear';
const FILES = {
  website: 'WEBSITE.md',
  readme: 'README.md',
  now: 'now.json'
};

const GH_TOKEN = process.env.TOKEN;

module.exports = {
  ORG_NAME,
  FILES,
  GH_TOKEN,
}
