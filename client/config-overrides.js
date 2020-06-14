const { useBabelRc, override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    '@root': path.resolve(__dirname, './src/')
  })
);
