const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');

module.exports = merge(commonConfig, {
  devServer: {
    contentBase: './example',
    compress: true,
    port: 9000
  }
});
