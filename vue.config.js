module.exports = {
  publicPath: '',
  // 输出文件目录
  outputDir: '智慧警务',
  devServer: {
    hotOnly: false,
    open: true
  },
  configureWebpack: {
    devtool: 'source-map'
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
