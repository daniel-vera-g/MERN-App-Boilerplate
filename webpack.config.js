// webpack.config.js
const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: './src/client/app/index.js',
  output: {
    path: path.join(__dirname, './src/client/public/bundle/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { 
        test: /.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
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
