const routes = require('./routes');

module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "import/prefer-default-export": 0
  },
  "settings": {
    "import/resolver": {
      alias: {
        map: Object.entries(routes)
      }
    }
  },
};
