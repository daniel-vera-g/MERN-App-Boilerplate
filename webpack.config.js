// webpack.config.js
const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: './src/client/app/index.jsx',
  output: {
    path: path.join(__dirname, './src/client/public/bundle/'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
};
