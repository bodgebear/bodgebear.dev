const withImages = require('next-images')
require('dotenv').config()

const nextAppEnv = Object.entries(process.env)
  .reduce(
    (acc, [key, value]) => {
      if (key.startsWith('NEXT_APP')) {
        return {
          ...acc,
          [key]: value,
        };
      }

      return value;
    },
    {}
  )

module.exports = withImages({
  esModule: true,
  env: nextAppEnv,
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  }
})
