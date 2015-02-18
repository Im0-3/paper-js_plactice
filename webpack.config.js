var path = require('path');
var paths = {
  srcDir: './src',
  dstDir: './prod'
};

module.exports = {
  entry:  path.join(paths.srcDir, "coffee/entry.coffee"),
  output: {
    path: path.join(paths.srcDir, "/js"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.js$/, loader: 'es6-loader' },
      { test: /\.jquery.js$/, loader: 'espose?jQuery' },
    ]
  }
};