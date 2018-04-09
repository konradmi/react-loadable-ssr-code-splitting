const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['es2015', { modules: false }],
              'react',
            ],
            plugins: [
              'syntax-dynamic-import',
              'transform-class-properties',
              'transform-object-assign',
              "react-loadable/babel"
            ],
          }
        },
      },
      {
       use: ExtractCssChunks.extract({
         use: ['css-loader', 'sass-loader'],
       }),
       test: /\.scss$/,
       exclude: /node_modules/,
     },
    ],
  },
  plugins: [
    new ExtractCssChunks
  ]
}
