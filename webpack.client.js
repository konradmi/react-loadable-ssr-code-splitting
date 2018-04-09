const path = require('path')
const merge = require('webpack-merge')
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const webpack = require('webpack')

const baseConfig = require('./webpack.base.js')

const config = {
  entry: './client.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].js',
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new ReactLoadablePlugin({
      filename:  path.resolve(__dirname, 'dist', 'react-loadable.json'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ]
}

module.exports = merge(baseConfig, config)
