/* eslint-disable no-param-reassign */
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const routes = require('./routes');

module.exports = withPlugins(
  [
    withFonts,
  ],
  {
    webpack(config, options) {
      const { isServer } = options;
      const assetPrefix = '';

      config.module.rules.push({
        test: /\.(jpe?g|png|svg|gif|ico|webp)$/,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: false,
              fallback: require.resolve('file-loader'),
              publicPath: `${assetPrefix}/_next/static/images/`,
              outputPath: `${isServer ? '../' : ''}static/images/`,
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      });

      config.resolve.alias = { ...config.resolve.alias, ...routes };

      return config;
    },
    target: 'serverless',
  },
);
