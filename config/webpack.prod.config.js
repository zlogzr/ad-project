const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackConfigBase = require('./webpack.base.config')

const webpackProdConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({ // 清除打包历史文件
      protectWebpackAssets: true
    })
  ],
}

module.exports = merge(webpackProdConfig, webpackConfigBase)