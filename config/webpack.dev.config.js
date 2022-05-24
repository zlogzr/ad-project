const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const OpenBrowserPlugin = require('open-browser-webpack4-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.config')
const mockMiddleware = require('./mock.config')

const smp = new SpeedMeasurePlugin()

const PORT = 8080
const webpackDevConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}`
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    historyApiFallback: false,
    hot: false,
    host: '0.0.0.0',
    port: PORT,
    before(app) {
      const projectDir = path.resolve()
      const mockDir = './mock'
      app.use(mockMiddleware({ projectDir, mockDir }))
    }
  }
}

module.exports = smp.wrap(merge(webpackBaseConfig, webpackDevConfig))
