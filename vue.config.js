const path = require('path')
const webpack = require('webpack')
const { title: name, publicPath } = require('./src/settings.js')

module.exports = {
  publicPath,
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: 9527,
    open: true,
    overlay: {
      errors: true,
      warnings: false
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        changeOrigin: true,
        target: 'http://192.168.0.188',
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  configureWebpack: {
    name,
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        Vue: ['vue', 'default'],
        G: [path.resolve(path.join(__dirname, '/src/plugin/prototype/G')), 'default']
      })
    ]

  },
  chainWebpack(config) {
    config.module.rule('scss').oneOfs.store.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/styles/index.scss']
        })
        .end()
    })
  }
}
