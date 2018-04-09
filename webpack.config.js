const path = require('path');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './client',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
    ],
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
};
