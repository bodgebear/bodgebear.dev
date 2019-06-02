const withFonts = require('next-fonts');
const withImages = require('next-images');
const compose = require('next-compose')

module.exports = compose([
  [withImages],
  [withFonts],
  {
    webpack: (config) => {
      /**some special code */
      return config
    }
  }
]);