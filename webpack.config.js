//webpack.config.js
var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/client/app/index",
  output: {
    path: path.join(__dirname, "./src/client/bundle/"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
