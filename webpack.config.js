const path = require('path');
const webpack = require('webpack');

const assetsPath = path.join(__dirname, './public/build');
const entryPath = path.join(__dirname, 'app/main.js');

module.exports = {
  entry: [ entryPath, 'webpack/hot/dev-server' ],
  devtool: 'eval-source-map',
  output: {
    path: assetsPath,
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'app'),
      query: {
        presets: [ 'es2015', 'react', 'react-hmre'  ]
      }
    }]
  },
  devServer: {
    inline: true,
    contentBase: "public"
  }
};

