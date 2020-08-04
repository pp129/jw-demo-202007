const moment = require('moment')
process.env.VUE_APP_TIME = moment().format('YYYY.MM.DD hh:mm:ss')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const compress = new CompressionWebpackPlugin({
  filename: info => {
    return `${info.path}.gz${info.query}`
  },
  algorithm: 'gzip',
  threshold: 10240,
  test: new RegExp(
    '\\.(' + ['js'].join('|') +
    ')$'
  ),
  minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
  deleteOriginalAssets: false // 删除原文件
})
module.exports = {
  publicPath: '',
  // 输出文件目录
  outputDir: '智慧警务',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    hotOnly: false,
    open: true,
    // 在本地服务器开启gzip，线上服务器都支持gzip不需要设置
    before (app) {
      app.get(/.*.(js)$/, (req, res, next) => {
        req.url = req.url + '.gz'
        res.set('Content-Encoding', 'gzip')
        next()
      })
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [compress]
  },
  chainWebpack: config => {
    // 最小化代码
    config.optimization.minimize(true)
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })
    // //压缩图片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
    config.plugin('html')
      .tap(args => {
        if (process.env.NODE_ENV === 'production') {
          args[0].minify.removeComments = false
        }
        return args
      })
  },
  css: {
    loaderOptions: {
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        prependData: '@import "~@/style/var.scss";'
      },
      scss: {
        prependData: '@import "~@/style/var.scss";'
      }
    }
  }
}
