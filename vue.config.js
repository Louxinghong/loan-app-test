const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 输出目录
  outputDir: 'dist',
  lintOnSave: true,
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // alias 配置
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons/svg'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .end()
  },
  devServer: {
    // 本机的ip和端口
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    // 配置跨域
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
