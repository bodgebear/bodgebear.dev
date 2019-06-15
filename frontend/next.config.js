const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');

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

      return config;
    },
    target: 'serverless',
  },
);
