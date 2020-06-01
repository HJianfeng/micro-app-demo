const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  lintOnSave: true,
  devServer: {
    port: 9999,
    open: true,
    disableHostCheck: true
  }
};
