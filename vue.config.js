module.exports = {
  configureWebpack: config => {
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.126.2.105:8081',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}