const {
  override,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@page': path.resolve(__dirname, './src/pages'),
    '@component': path.resolve(__dirname, './src/components')
  }),
  addDecoratorsLegacy()
);
