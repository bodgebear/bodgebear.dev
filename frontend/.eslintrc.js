const routes = require('./routes');

module.exports = {
  "extends": "airbnb",
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
