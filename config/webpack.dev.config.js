const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const OpenBrowserPlugin = require('open-browser-webpack4-plugin')
const webpackConfigBase = require('./webpack.base.config')

const PORT = 8080
const webpackDevConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/`
    })
  ],
  devtool: 'eval-source-map'
}

module.exports = merge(webpackDevConfig, webpackConfigBase)