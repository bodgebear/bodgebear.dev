const routes = require('./routes');

module.exports = {
  "extends": "airbnb",
  "settings": {
    "import/resolver": {
      alias: {
        map: Object.entries(routes)
      },
      env: {
        jest: true,
        browser: true,
      },
    }
  },
};
